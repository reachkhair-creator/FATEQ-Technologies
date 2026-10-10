import React from 'react';

interface RadarChartProps {
  scores: {
    infra: number;
    datamodel: number;
    workflow: number;
    security: number;
    performance: number;
    erp: number;
  };
}

export const MaturityRadarChart: React.FC<RadarChartProps> = ({ scores }) => {
  const size = 260;
  const center = size / 2;
  const radius = 95;

  const pillars = [
    { key: 'infra', label: 'Infrastructure', score: scores.infra },
    { key: 'datamodel', label: 'Data Model', score: scores.datamodel },
    { key: 'workflow', label: 'Workflow', score: scores.workflow },
    { key: 'security', label: 'Security', score: scores.security },
    { key: 'performance', label: 'Performance', score: scores.performance },
    { key: 'erp', label: 'ERP Integration', score: scores.erp },
  ];

  const totalAxes = pillars.length;

  // Calculate coordinates for a given angle and distance
  const getCoordinates = (index: number, value: number) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  // Polygon points for target 100%
  const targetPoints = pillars.map((_, i) => {
    const pt = getCoordinates(i, 100);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  // Polygon points for current scores
  const scorePoints = pillars.map((p, i) => {
    const pt = getCoordinates(i, p.score);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  const gridLevels = [25, 50, 75, 100];

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Concentric Grid Polygons */}
        {gridLevels.map((lvl) => {
          const pts = pillars.map((_, i) => {
            const pt = getCoordinates(i, lvl);
            return `${pt.x},${pt.y}`;
          }).join(' ');
          return (
            <polygon
              key={lvl}
              points={pts}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1"
              strokeDasharray={lvl === 100 ? 'none' : '2,2'}
            />
          );
        })}

        {/* Axis Lines */}
        {pillars.map((_, i) => {
          const pt = getCoordinates(i, 100);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={pt.x}
              y2={pt.y}
              stroke="#CBD5E1"
              strokeWidth="1"
            />
          );
        })}

        {/* Target 100% Reference Line */}
        <polygon
          points={targetPoints}
          fill="none"
          stroke="#16A34A"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          opacity="0.8"
        />

        {/* Current Score Filled Polygon */}
        <polygon
          points={scorePoints}
          fill="#155EEF"
          fillOpacity="0.18"
          stroke="#155EEF"
          strokeWidth="2.5"
        />

        {/* Current Score Points */}
        {pillars.map((p, i) => {
          const pt = getCoordinates(i, p.score);
          return (
            <circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r="4"
              fill="#155EEF"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Labels */}
        {pillars.map((p, i) => {
          const pt = getCoordinates(i, 118);
          return (
            <text
              key={i}
              x={pt.x}
              y={pt.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[9px] font-bold fill-slate-700 font-sans select-none"
            >
              {p.label} ({p.score})
            </text>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-2 text-[10px] text-slate-500 font-medium">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
          <span>Current Score</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 border-t border-dashed border-green-600"></span>
          <span className="text-green-700">Target 100%</span>
        </div>
      </div>
    </div>
  );
};
