import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Eletrônicos', value: 35, percentage: '35%' },
  { name: 'Vestuário', value: 28, percentage: '28%' },
  { name: 'Casa & Jardim', value: 22, percentage: '22%' },
  { name: 'Esportes', value: 15, percentage: '15%' },
];

const COLORS = ['hsl(217, 91%, 53%)', 'hsl(263, 70%, 58%)', 'hsl(239, 84%, 67%)', 'hsl(280, 68%, 60%)'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-primary/30">
        <p className="text-foreground font-medium">{payload[0].name}</p>
        <p className="text-primary font-semibold">{payload[0].payload.percentage}</p>
      </div>
    );
  }
  return null;
};

export const DonutChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={4}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          layout="vertical"
          align="right"
          verticalAlign="middle"
          iconType="circle"
          iconSize={10}
          formatter={(value) => (
            <span className="text-sm text-muted-foreground">{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
