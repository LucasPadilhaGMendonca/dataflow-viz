import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Total (cancela todo contrato)', value: 42, percentage: '63%' },
  { name: 'Não Informado', value: 22, percentage: '33%' },
  { name: 'Downgrade', value: 2, percentage: '3%' },
  { name: 'Outro', value: 1, percentage: '1%' },
];

const COLORS = ['hsl(187, 100%, 50%)', 'hsl(32, 100%, 55%)', 'hsl(142, 76%, 45%)', 'hsl(280, 100%, 65%)'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-primary/30">
        <p className="text-foreground font-medium">{payload[0].name}</p>
        <p className="text-primary font-semibold">{payload[0].value} ({payload[0].payload.percentage})</p>
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
