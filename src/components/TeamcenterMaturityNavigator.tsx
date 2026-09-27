import React, { useState } from 'react';
import JSZip from 'jszip';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { 
  X, 
  Send, 
  MessageSquare
} from 'lucide-react';
import { MaturityRadarChart } from './MaturityRadarChart';

export interface Finding {
  file: string;
  line: number;
  pattern: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Info';
  pillar: 'infra' | 'datamodel' | 'workflow' | 'security' | 'performance' | 'erp';
  rec: string;
  ref: string;
  source: string;
}

export interface PillarMeta {
  name: string;
  weight: number;
  target: string;
  icon: string;
}

interface TeamcenterMaturityNavigatorProps {
  onSendToContact?: (summary: string) => void;
  onClose?: () => void;
}

export const TeamcenterMaturityNavigator: React.FC<TeamcenterMaturityNavigatorProps> = ({
  onSendToContact,
  onClose
}) => {
  const [ingestedFiles, setIngestedFiles] = useState<Record<string, string>>({});
  const [findings, setFindings] = useState<Finding[]>([]);
  const [selectedFindingIndex, setSelectedFindingIndex] = useState<number | null>(null);
  const [isDropActive, setIsDropActive] = useState<boolean>(false);
  const [hasParsed, setHasParsed] = useState<boolean>(false);

  const [pillarScores, setPillarScores] = useState<Record<string, number>>({
    infra: 100,
    datamodel: 100,
    workflow: 100,
    security: 100,
    performance: 100,
    erp: 100
  });

  const pillarMeta: Record<string, PillarMeta> = {
    infra: { name: '1. Infrastructure', weight: 0.20, target: '4-tier Dispatcher FSC', icon: '🏗️' },
    datamodel: { name: '2. Data Model BMIDE', weight: 0.20, target: 'EBOM-MBOM ME-create-mirror-mbom', icon: '📦' },
    workflow: { name: '3. Workflow Governance', weight: 0.20, target: 'PS-check EPM-set-rule-based-protection', icon: '🔐' },
    security: { name: '4. Security Compliance', weight: 0.15, target: 'TC_audit_manager=ON v2+', icon: '🛡️' },
    performance: { name: '5. Performance Hygiene', weight: 0.15, target: 'TC_TMP_DIR purge TCRS-purge-dataset', icon: '⚡' },
    erp: { name: '6. ERP Integration', weight: 0.10, target: 'PIE-export-to-plmxmlfile SOA <10s', icon: '🔄' }
  };

  const weights = { infra: 0.20, datamodel: 0.20, workflow: 0.20, security: 0.15, performance: 0.15, erp: 0.10 };

  // Calculate overall score (Value not Logic)
  let overall = 0;
  Object.entries(weights).forEach(([k, w]) => {
    overall += (pillarScores[k] || 0) * w;
  });
  const score = Math.round(overall);

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDropActive(true);
  };

  const handleDragLeave = () => {
    setIsDropActive(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDropActive(false);
    const file = e.dataTransfer.files[0];
    if (file) await handleFile(file);
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) await handleFile(file);
  };

  const handleFile = async (file: File) => {
    const newFiles: Record<string, string> = { ...ingestedFiles };
    try {
      if (file.name.endsWith('.zip')) {
        const zip = new JSZip();
        const data = await zip.loadAsync(file);
        for (const fname in data.files) {
          const entry = data.files[fname];
          if (!entry.dir) {
            const content = await entry.async('string');
            newFiles[fname] = content;
          }
        }
      } else {
        const text = await file.text();
        newFiles[file.name] = text;
      }
      setIngestedFiles(newFiles);
    } catch (err) {
      alert('Error reading log file: ' + String(err));
    }
  };

  const clearAll = () => {
    setIngestedFiles({});
    setFindings([]);
    setSelectedFindingIndex(null);
    setHasParsed(false);
    setPillarScores({
      infra: 100,
      datamodel: 100,
      workflow: 100,
      security: 100,
      performance: 100,
      erp: 100
    });
  };

  const loadSample = () => {
    const sample = {
      'tcserver_2024.syslog': 'Time: 5423 ms Duration: 6120 ms POM_find_qualifiers ERROR EPM-assert-targets-checked-in failed FAIL PMA0_ something Full Table Scan Time: 7890 ms ERROR ME-create-mirror-mbom-AH failed Time: 12000 ms',
      'fsc_2024.log': 'FSC cache miss single node',
      'site_preferences.xml': `<preferences><preference name="TC_audit_manager" value="OFF"/></preferences>`,
      'fmsmaster.xml': `<fms><fscgroup><fsc id="single"/></fscgroup></fms>`,
      'BMIDE/dependency.xml': `<type><property legacy="true"/><condition>$ROLE_IN_GROUP == Designer</condition></type>`,
      'Workflow/EPMTaskDefinition.xml': `<task assignee="john.doe"><handler>EPM-set-rule-based-protection missing</handler></task>`,
      'License_Ugslmd.txt': `28 Users 10 AW tc_purge_audit not scheduled`,
      'ERP_UPLOADFORMAT.csv': `Batch CSV manual`
    };
    setIngestedFiles(sample);
    parseAll(sample);
  };

  const parseAll = (filesToParse: Record<string, string> = ingestedFiles) => {
    const newFindings: Finding[] = [];
    const newScores = { infra: 100, datamodel: 100, workflow: 100, security: 100, performance: 100, erp: 100 };
    let slowCount = 0;

    Object.entries(filesToParse).forEach(([fname, content]) => {
      if (fname.includes('syslog') || fname.includes('.log')) {
        const perfRegex = /\b(?:Time|Duration):\s*(\d{3,})\s*ms/g;
        let m;
        while ((m = perfRegex.exec(content)) !== null) {
          const ms = parseInt(m[1], 10);
          if (ms > 5000) {
            slowCount++;
            newFindings.push({
              file: fname,
              line: content.substring(0, m.index).split('\n').length,
              pattern: `Slow SOA/SQL ${ms}ms`,
              severity: 'High',
              pillar: 'performance',
              rec: 'Enable async + index + SOA <10s',
              ref: 'TC_Administration.pdf',
              source: content.substr(Math.max(0, m.index - 40), 120)
            });
          }
        }

        const handlerRegex = /\b(ERROR|FAIL)\b.*?(EPM-|PMA0_|ME-|DOCMGTAPP-)/g;
        while ((m = handlerRegex.exec(content)) !== null) {
          newFindings.push({
            file: fname,
            line: content.substring(0, m.index).split('\n').length,
            pattern: `Handler Failure ${m[0].substring(0, 60)}`,
            severity: 'Critical',
            pillar: 'workflow',
            rec: 'Fix EPM-assert-targets-checked-in + PS-check-assembly-status-progression',
            ref: 'TC_Process and Program.pdf',
            source: content.substr(Math.max(0, m.index - 60), 180)
          });
        }

        const pomRegex = /\b(POM_find_qualifiers|Full Table Scan)\b/g;
        while ((m = pomRegex.exec(content)) !== null) {
          newFindings.push({
            file: fname,
            line: content.substring(0, m.index).split('\n').length,
            pattern: `DB Bottleneck ${m[0]}`,
            severity: 'High',
            pillar: 'datamodel',
            rec: 'Add BMIDE index + GRM relation',
            ref: 'TC_BOM Management.pdf',
            source: content.substr(Math.max(0, m.index - 50), 150)
          });
        }
      }

      if (fname.includes('site_preferences')) {
        if (content.includes('OFF')) {
          newFindings.push({
            file: fname,
            line: 1,
            pattern: 'TC_audit_manager=OFF - Critical Risk',
            severity: 'Critical',
            pillar: 'security',
            rec: 'Set TC_audit_manager=ON v2+ EPM-require-authentication',
            ref: 'TC_Administration.pdf',
            source: '<preference name="TC_audit_manager" value="OFF"/>'
          });
          newScores.security = 0;
        }
        if (!content.includes('purge_datasets')) {
          newFindings.push({
            file: fname,
            line: 2,
            pattern: 'Dataset purge unconfigured',
            severity: 'High',
            pillar: 'performance',
            rec: 'Configure TCRS-purge-dataset + tc_purge_audit daily',
            ref: 'TC_Administration.pdf',
            source: 'purge_datasets not found'
          });
        }
      }

      if (fname.includes('fmsmaster') || fname.includes('fscgroup')) {
        if (content.includes('single')) {
          newFindings.push({
            file: fname,
            line: 1,
            pattern: 'Single FSC node - No distributed caching',
            severity: 'High',
            pillar: 'infra',
            rec: 'Configure fscgroup.xml distributed FSC + Dispatcher pools + 4-tier',
            ref: 'TC_Teamcenter_Deployment.pdf',
            source: content.substring(0, 200)
          });
          newScores.infra = Math.max(0, newScores.infra - 30);
        }
      }

      if (fname.includes('EPMTask') || fname.includes('Workflow')) {
        if (!content.includes('EPM-assert-targets-checked-in')) {
          newFindings.push({
            file: fname,
            line: 1,
            pattern: 'Missing gate EPM-assert-targets-checked-in',
            severity: 'Critical',
            pillar: 'workflow',
            rec: 'Add EPM-assert-targets-checked-in + PS-check-assembly-status-progression',
            ref: 'TC_Process and Program.pdf',
            source: content.substring(0, 300)
          });
          newScores.workflow = Math.max(0, newScores.workflow - 25);
        }

        const hardcodedRegex = /assignee="([a-z0-9_.]+)"/gi;
        let mm;
        while ((mm = hardcodedRegex.exec(content)) !== null) {
          if (!mm[0].includes('$GROUP')) {
            newFindings.push({
              file: fname,
              line: content.substring(0, mm.index).split('\n').length,
              pattern: `Hardcoded user ${mm[0]}`,
              severity: 'Medium',
              pillar: 'workflow',
              rec: 'Replace with allmembers:$GROUP::$ROLE or AMX',
              ref: 'TC_Process and Program.pdf',
              source: content.substr(Math.max(0, mm.index - 30), 120)
            });
          }
        }
      }

      if (fname.includes('dependency') || fname.includes('BMIDE')) {
        if (content.includes('$ROLE_IN_GROUP')) {
          newFindings.push({
            file: fname,
            line: 1,
            pattern: 'Deprecated $ROLE_IN_GROUP',
            severity: 'Medium',
            pillar: 'datamodel',
            rec: 'Replace with allmembers:$GROUP::$ROLE',
            ref: 'TC_Classification.pdf',
            source: '$ROLE_IN_GROUP == Designer'
          });
          newScores.datamodel = Math.max(0, newScores.datamodel - 15);
        }
      }

      if (fname.includes('ERP_UPLOADFORMAT') || fname.includes('.csv')) {
        if (content.includes('Batch') || content.includes('CSV')) {
          newFindings.push({
            file: fname,
            line: 1,
            pattern: 'Manual CSV batch ERP',
            severity: 'High',
            pillar: 'erp',
            rec: 'Implement PIE-export-to-plmxmlfile + SOA <10s',
            ref: 'TC_Customization.pdf',
            source: content.substring(0, 200)
          });
          newScores.erp = Math.max(0, newScores.erp - 40);
        }
      }

      if (fname.includes('License')) {
        if (content.includes('purge') && content.includes('not scheduled')) {
          newFindings.push({
            file: fname,
            line: 1,
            pattern: 'tc_purge_audit not scheduled',
            severity: 'High',
            pillar: 'performance',
            rec: 'Schedule tc_purge_audit daily',
            ref: 'TC_Administration.pdf',
            source: 'tc_purge_audit not scheduled'
          });
        }
      }
    });

    if (slowCount > 3) {
      newScores.performance = Math.max(0, newScores.performance - 15);
    }

    Object.keys(newScores).forEach((k) => {
      newScores[k as keyof typeof newScores] = Math.max(0, Math.min(100, newScores[k as keyof typeof newScores]));
    });

    setPillarScores(newScores);
    setFindings(newFindings);
    if (newFindings.length > 0) {
      setSelectedFindingIndex(0);
    }
    setHasParsed(true);
  };

  // Maturity Level & Colors matching fixed code
  let level = 'AWAITING DATA';
  let levelClass = 'bg-yellow-400 text-slate-900';
  let gaugeBorderColor = '#0A2F5A';

  if (hasParsed) {
    if (score >= 85) {
      level = 'Optimized Smart Factory 85-100%';
      levelClass = 'bg-[#0A2F5A] text-white';
      gaugeBorderColor = '#0A2F5A';
    } else if (score >= 65) {
      level = 'Advanced Standardized 65-84%';
      levelClass = 'bg-green-600 text-white';
      gaugeBorderColor = '#ca8a04';
    } else if (score >= 40) {
      level = 'Managed 40-64%';
      levelClass = 'bg-yellow-500 text-black';
      gaugeBorderColor = '#ea580c';
    } else {
      level = 'Ad-Hoc Legacy 0-39%';
      levelClass = 'bg-red-600 text-white';
      gaugeBorderColor = '#dc2626';
    }
  }

  // Export PDF functionality matching attached code
  const exportPDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const overallDisplay = hasParsed ? score : 0;
    doc.setFillColor(10, 47, 90);
    doc.rect(0, 0, 210, 32, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text('Teamcenter Maturity Navigator V3 Report', 10, 14);
    doc.setFontSize(9);
    doc.text(`Overall: ${overallDisplay}/100 Value Display Fixed | ${new Date().toLocaleString()}`, 10, 20);
    doc.setTextColor(0, 0, 0);

    const y = 38;
    const body = findings.map(f => [
      `${f.file}:${f.line}`,
      f.pattern,
      f.severity,
      f.pillar,
      f.rec.substring(0, 80)
    ]);

    autoTable(doc, {
      startY: y,
      head: [['File:Line', 'Pattern', 'Severity', 'Pillar', 'Recommendation']],
      body: body,
      theme: 'grid',
      headStyles: { fillColor: [10, 47, 90] },
      styles: { fontSize: 6 }
    });

    doc.save(`Navigator_V3_${overallDisplay}_100.pdf`);
  };

  const selectedFinding = selectedFindingIndex !== null ? findings[selectedFindingIndex] : null;

  return (
    <div className="bg-[#f5f5f5] font-sans text-slate-800 rounded-xl overflow-hidden border border-slate-300 shadow-xl">
      
      {/* HEADER: Exactly per attached HTML */}
      <header className="bg-[#0A2F5A] text-white h-[56px] flex items-center px-4 justify-between sticky top-0 z-30 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-[#0A2F5A] font-black text-xs font-mono">
            TC
          </div>
          <div>
            <div className="font-bold text-[14px] leading-tight">
              Teamcenter Maturity Navigator V3 | AWC 2412 | Declarative UI
            </div>
            <div className="text-[10px] opacity-70">
              Enterprise Assessment - Ingest Parse Score Remediate - CONFIDENTIAL
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={loadSample}
            className="bg-white text-[#0A2F5A] hover:bg-slate-100 px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer"
          >
            Load Sample Data
          </button>

          <button
            onClick={exportPDF}
            className="bg-[#4db1ff] hover:bg-[#3aa3f5] text-white px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer shadow-xs"
          >
            Export PDF
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors ml-2 cursor-pointer"
              title="Close Navigator"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      {/* 3-COLUMN WORKSPACE: Exactly matching the max-w-[1800px] p-3 grid grid-cols-12 gap-3 */}
      <div className="max-w-[1800px] mx-auto p-3 grid grid-cols-12 gap-3">
        
        {/* ============================================================== */}
        {/* COLUMN 1: INGESTION ENGINE & MATURITY HEALTH INDEX             */}
        {/* ============================================================== */}
        <div className="col-span-12 lg:col-span-3 space-y-3">
          
          {/* 1. Ingestion Engine */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-[#0A2F5A] text-sm">1. INGESTION ENGINE</h3>
            
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById('maturity-file-input')?.click()}
              className={`mt-3 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                isDropActive ? 'border-[#0A2F5A] bg-[#eff6ff]' : 'border-slate-300 hover:border-slate-400'
              }`}
            >
              <div className="text-3xl">📦</div>
              <div className="font-bold text-xs mt-2">Drop.ZIP Here</div>
              <div className="text-[10px] text-slate-500 mt-1">
                tcserver_*.syslog, fmsmaster.xml, site_preferences.xml, BMIDE, Workflow XML, License_Ugslmd.txt
              </div>
              <input
                id="maturity-file-input"
                type="file"
                accept=".zip,.xml,.syslog,.log,.txt,.csv"
                onChange={handleFileInput}
                className="hidden"
              />
            </div>

            {/* Ingested List */}
            <div className="mt-3 text-[11px] space-y-1 max-h-[160px] overflow-y-auto border-t border-slate-100 pt-2 font-mono">
              {Object.keys(ingestedFiles).length > 0 ? (
                Object.keys(ingestedFiles).map((fn) => (
                  <div key={fn} className="flex justify-between items-center border-b py-1">
                    <span className="truncate max-w-[170px]" title={fn}>{fn}</span>
                    <span className="bg-slate-100 px-1 rounded text-[10px] font-sans">
                      {fn.split('.').pop()}
                    </span>
                  </div>
                ))
              ) : (
                <span className="text-slate-400 text-xs font-sans">No files</span>
              )}
            </div>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => parseAll()}
                disabled={Object.keys(ingestedFiles).length === 0}
                className="flex-1 bg-[#0A2F5A] hover:bg-blue-900 text-white py-2 rounded font-bold text-xs disabled:opacity-30 transition-colors cursor-pointer"
              >
                ▶ Parse &amp; Evaluate
              </button>
              <button
                onClick={clearAll}
                className="px-3 py-2 border rounded text-xs hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Overall Maturity Health Index */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-[#0A2F5A] text-sm">Overall Maturity Health Index</h3>

            {/* Gauge */}
            <div className="flex items-center justify-center mt-3">
              <div className="relative w-[180px] h-[90px] overflow-hidden">
                <div className="absolute w-[180px] h-[180px] rounded-full border-[20px] border-slate-200"></div>
                <div
                  className="absolute w-[180px] h-[180px] rounded-full border-[20px] transition-all duration-700"
                  style={{
                    borderColor: gaugeBorderColor,
                    clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
                    transform: `rotate(${-90 + ((hasParsed ? score : 0) / 100) * 180}deg)`
                  }}
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                  <div className="text-3xl font-black text-[#0A2F5A]">
                    {hasParsed ? score : '--'}
                  </div>
                  <div className={`text-[10px] font-bold px-2 py-0.5 rounded ${levelClass}`}>
                    {level}
                  </div>
                </div>
              </div>
            </div>

            {/* Radar Chart */}
            <div className="mt-3">
              <MaturityRadarChart scores={pillarScores as any} />
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* COLUMN 2: BENTO GRID - 6 PILLARS & DIAGNOSTIC TREE VIEW        */}
        {/* ============================================================== */}
        <div className="col-span-12 lg:col-span-6 space-y-3">
          
          {/* 2. BENTO GRID - 6 Pillars Weighted */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[#0A2F5A] text-sm">2. BENTO GRID - 6 Pillars Weighted</h3>
            </div>

            {/* Bento Grid: 2 columns */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(pillarMeta).map(([key, meta]) => {
                const s = pillarScores[key] ?? 100;
                let color = 'bg-green-500';
                let sev = 'Info';
                let borderHex = '#0A2F5A';

                if (s < 40) {
                  color = 'bg-red-600';
                  sev = 'Critical';
                  borderHex = '#dc2626';
                } else if (s < 65) {
                  color = 'bg-orange-500';
                  sev = 'High';
                  borderHex = '#ea580c';
                } else if (s < 85) {
                  color = 'bg-yellow-500';
                  sev = 'Medium';
                  borderHex = '#ca8a04';
                }

                return (
                  <div
                    key={key}
                    className="bento bg-white border rounded-lg p-3 transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ borderLeft: `4px solid ${borderHex}` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[12px]">{meta.icon}</span>
                      <span className={`text-[10px] ${color} text-white px-2 py-0.5 rounded font-bold`}>
                        {sev} {s}
                      </span>
                    </div>

                    <div className="font-bold text-[12px] mt-1 text-[#0A2F5A]">
                      {meta.name}
                    </div>

                    <div className="text-[10px] text-slate-500 truncate" title={meta.target}>
                      {meta.target}
                    </div>

                    <div className="flex items-end gap-2 mt-2">
                      <div className="text-2xl font-black text-slate-900 leading-none">
                        {s}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        /100 Weight {meta.weight}
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 h-1.5 rounded mt-1 overflow-hidden">
                      <div 
                        className={`h-1.5 rounded ${color} transition-all duration-500`}
                        style={{ width: `${s}%` }}
                      />
                    </div>

                    <div className="text-[9px] mt-1 text-slate-500 font-mono">
                      {s}×{meta.weight} = {(s * meta.weight).toFixed(1)} contribution
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Diagnostic Tree View */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-[#0A2F5A] text-sm pb-2 border-b border-slate-100">
              Diagnostic Tree View
            </h3>

            <div className="mt-3 max-h-[420px] overflow-y-auto text-[11px] border border-slate-200 rounded">
              <table className="w-full">
                <thead className="bg-[#0A2F5A] text-white text-[10px] sticky top-0">
                  <tr>
                    <th className="p-1.5 text-left">File:Line</th>
                    <th className="p-1.5 text-left">Pattern</th>
                    <th className="p-1.5 text-center">Severity</th>
                    <th className="p-1.5 text-left">Pillar</th>
                    <th className="p-1.5 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {findings.length > 0 ? (
                    findings.map((f, i) => {
                      let sevColor = 'bg-blue-100 text-blue-700';
                      if (f.severity === 'Critical') sevColor = 'bg-red-100 text-red-700 font-bold';
                      else if (f.severity === 'High') sevColor = 'bg-orange-100 text-orange-700 font-bold';
                      else if (f.severity === 'Medium') sevColor = 'bg-yellow-100 text-yellow-800';

                      const isSelected = selectedFindingIndex === i;

                      return (
                        <tr
                          key={i}
                          onClick={() => setSelectedFindingIndex(i)}
                          className={`border-b hover:bg-slate-50 cursor-pointer ${
                            isSelected ? 'bg-blue-50/70 font-semibold' : ''
                          }`}
                        >
                          <td className="p-1.5 truncate max-w-[140px] font-mono text-[10px]" title={`${f.file}:${f.line}`}>
                            {f.file}:{f.line}
                          </td>
                          <td className="p-1.5 font-medium text-slate-900 leading-tight">
                            {f.pattern}
                          </td>
                          <td className="p-1.5 text-center">
                            <span className={`${sevColor} px-1.5 py-0.5 rounded text-[10px]`}>
                              {f.severity}
                            </span>
                          </td>
                          <td className="p-1.5 text-slate-600 font-mono text-[10px]">
                            {f.pillar}
                          </td>
                          <td className="p-1.5 text-center">
                            <button className="text-[#0A2F5A] underline text-[10px] font-bold">
                              Inspect
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-slate-400">
                        No findings yet - Drop.ZIP Here and Parse
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* COLUMN 3: AWC DETAIL SPLIT-PANE & REMEDIATION SCRIPTS          */}
        {/* ============================================================== */}
        <div className="col-span-12 lg:col-span-3 space-y-3 sticky top-[68px] h-fit">
          
          {/* 3. AWC Detail Split-Pane */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-[#0A2F5A] text-sm pb-2 border-b border-slate-100">
              3. AWC DETAIL SPLIT-PANE
            </h3>

            <div className="mt-3 p-3 bg-[#f8fafc] rounded border text-[11px] min-h-[200px]">
              {selectedFinding ? (
                <div className="space-y-2">
                  <div>
                    <b>Source:</b> {selectedFinding.file} : line {selectedFinding.line}
                  </div>
                  <div>
                    <b>Severity:</b>{' '}
                    <span className={`px-2 py-0.5 rounded text-white font-bold text-[10px] ${
                      selectedFinding.severity === 'Critical' ? 'bg-red-600' :
                      selectedFinding.severity === 'High' ? 'bg-orange-500' :
                      selectedFinding.severity === 'Medium' ? 'bg-yellow-400 text-slate-900' : 'bg-blue-600'
                    }`}>
                      {selectedFinding.severity}
                    </span>{' '}
                    | Pillar: {pillarMeta[selectedFinding.pillar]?.name || selectedFinding.pillar}
                  </div>
                  <div className="bg-black text-green-400 p-2 rounded font-mono text-[10px] overflow-x-auto whitespace-pre-wrap max-h-[140px]">
                    {selectedFinding.source}
                  </div>
                  <div>
                    <b>Recommendation:</b><br />
                    {selectedFinding.rec}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    <b>Siemens Ref:</b> {selectedFinding.ref}
                  </div>
                </div>
              ) : (
                <span className="text-slate-400 text-xs">Select finding to inspect</span>
              )}
            </div>
          </div>

          {/* Remediation Scripts */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-[#0A2F5A] text-sm pb-2 border-b border-slate-100">
              Remediation Scripts
            </h3>

            <div className="mt-3 space-y-2 text-[10px] max-h-[220px] overflow-y-auto">
              {findings.length > 0 ? (
                findings.map((f, i) => (
                  <div key={i} className="p-2 bg-slate-50 rounded border text-[9px] leading-tight">
                    <b>{f.pattern}</b><br />
                    <span className="text-slate-600">{f.rec}</span>
                  </div>
                ))
              ) : (
                <span className="text-slate-400">No scripts</span>
              )}
            </div>

            {/* Direct FATEQ Consultation Link */}
            {onSendToContact && hasParsed && (
              <div className="mt-3 pt-3 border-t border-slate-200 space-y-2">
                <button
                  onClick={() => {
                    const summary = `[Teamcenter Maturity Navigator V3 Assessment]
Overall Score: ${score}/100 (${level})
Pillars:
- Infra: ${pillarScores.infra}/100 (Weight 0.20)
- Data Model: ${pillarScores.datamodel}/100 (Weight 0.20)
- Workflow: ${pillarScores.workflow}/100 (Weight 0.20)
- Security: ${pillarScores.security}/100 (Weight 0.15)
- Performance: ${pillarScores.performance}/100 (Weight 0.15)
- ERP: ${pillarScores.erp}/100 (Weight 0.10)

Total Defects Found: ${findings.length}
Critical: ${findings.filter(f => f.severity === 'Critical').length}
High: ${findings.filter(f => f.severity === 'High').length}

Top Remediation Steps:
${findings.slice(0, 4).map(f => `• [${f.severity}] ${f.pattern}: ${f.rec}`).join('\n')}`;
                    onSendToContact(summary);
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-[#0A2F5A] hover:bg-blue-900 text-white rounded font-bold text-xs transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Report to Syed Abdul Hairu</span>
                </button>

                <a
                  href={`https://wa.me/971525582129?text=${encodeURIComponent(`Hello Syed, I ran the Teamcenter Maturity Navigator V3. Overall Score: ${score}/100 (${level}). Found ${findings.length} findings (${findings.filter(f => f.severity === 'Critical').length} critical). Would like to discuss remediation.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold text-xs transition-colors text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss on WhatsApp (+971 52 558 2129)</span>
                </a>
              </div>
            )}
          </div>

        </div>

        {/* ============================================================== */}
        {/* SECTION 4: FUTURE ROADMAP — End-to-End Digital Thread          */}
        {/* ============================================================== */}
        <div className="col-span-12 bg-white rounded-lg shadow p-4">
          <h3 className="font-bold text-[#0A2F5A] text-sm">4. FUTURE ROADMAP — End-to-End Digital Thread</h3>
          <div className="text-[10px] text-slate-500 mt-1">
            Planned evolution of this Navigator from point-in-time assessment to a live, closed-loop digital thread across CAD → PLM → ERP → MES → Field.
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="bento border rounded-lg p-3 bg-white hover:-translate-y-0.5 hover:shadow-md transition-all" style={{ borderLeft: '4px solid #0A2F5A' }}>
              <div className="flex justify-between items-center">
                <span className="font-bold text-[12px] text-[#0A2F5A]">Phase 1 · Foundation</span>
                <span className="text-[9px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded">Live</span>
              </div>
              <ul className="text-[10px] mt-2 space-y-1 list-disc list-inside text-slate-600">
                <li>ZIP ingestion of syslogs, FMS, workflow, BMIDE, license files</li>
                <li>6-pillar weighted maturity scoring</li>
                <li>Diagnostic findings + remediation scripts</li>
                <li>PDF export of assessment</li>
              </ul>
            </div>
            
            <div className="bento border rounded-lg p-3 bg-white hover:-translate-y-0.5 hover:shadow-md transition-all" style={{ borderLeft: '4px solid #ca8a04' }}>
              <div className="flex justify-between items-center">
                <span className="font-bold text-[12px] text-[#0A2F5A]">Phase 2 · Deeper Diagnostics</span>
                <span className="text-[9px] bg-yellow-100 text-yellow-700 font-semibold px-2 py-0.5 rounded">Next</span>
              </div>
              <ul className="text-[10px] mt-2 space-y-1 list-disc list-inside text-slate-600">
                <li>Multi-site / multi-instance comparison view</li>
                <li>Historical trend tracking across assessments</li>
                <li>Configurable pillar weights per business unit</li>
                <li>Drill-down from finding to affected BOM/item</li>
              </ul>
            </div>

            <div className="bento border rounded-lg p-3 bg-white hover:-translate-y-0.5 hover:shadow-md transition-all" style={{ borderLeft: '4px solid #ea580c' }}>
              <div className="flex justify-between items-center">
                <span className="font-bold text-[12px] text-[#0A2F5A]">Phase 3 · Live Connectors</span>
                <span className="text-[9px] bg-orange-100 text-orange-700 font-semibold px-2 py-0.5 rounded">Planned</span>
              </div>
              <ul className="text-[10px] mt-2 space-y-1 list-disc list-inside text-slate-600">
                <li>Direct Teamcenter SOA/TcRest pull, no manual export</li>
                <li>Live ERP (SAP) interface health checks</li>
                <li>CAD authoring hooks (NX / Solid Edge) for design-stage checks</li>
                <li>Active Workspace embedded assessment widget</li>
              </ul>
            </div>

            <div className="bento border rounded-lg p-3 bg-white hover:-translate-y-0.5 hover:shadow-md transition-all" style={{ borderLeft: '4px solid #dc2626' }}>
              <div className="flex justify-between items-center">
                <span className="font-bold text-[12px] text-[#0A2F5A]">Phase 4 · Full Digital Thread</span>
                <span className="text-[9px] bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded">Vision</span>
              </div>
              <ul className="text-[10px] mt-2 space-y-1 list-disc list-inside text-slate-600">
                <li>Closed-loop traceability: CAD → EBOM/MBOM → Workflow → ERP → MES → Field/Service</li>
                <li>Automated remediation script execution with approval gate</li>
                <li>Anomaly detection on emerging maturity regressions</li>
                <li>Continuous scoring instead of point-in-time snapshots</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
