import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'MDS Suitable', value: 143041, color: 'hsl(187, 100%, 50%)' },
  { name: 'DFS Hosting', value: 91324, color: 'hsl(187, 100%, 45%)' },
  { name: 'CFS VMware', value: 76440, color: 'hsl(187, 100%, 40%)' },
  { name: 'MDS Database', value: 63033, color: 'hsl(32, 100%, 55%)' },
  { name: 'DFS Colocation', value: 16509, color: 'hsl(32, 100%, 50%)' },
  { name: 'TFS Internet', value: 16332, color: 'hsl(32, 100%, 45%)' },
  { name: 'PSS Payments', value: 9995, color: 'hsl(142, 76%, 45%)' },
  { name: 'CFS Virtustream', value: 7336, color: 'hsl(142, 76%, 40%)' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-primary/30">
        <p className="text-foreground font-medium">{label}</p>
        <p className="text-primary font-semibold">
          R$ {payload[0].value.toLocaleString('pt-BR')}
        </p>
      </div>
    );
  }
  return null;
};

export const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart 
        data={data} 
        layout="vertical"
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(187, 100%, 40%)" />
            <stop offset="100%" stopColor="hsl(187, 100%, 55%)" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" horizontal={false} />
        <XAxis 
          type="number" 
          axisLine={false} 
          tickLine={false}
          tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 11 }}
          tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
        />
        <YAxis 
          type="category" 
          dataKey="name" 
          axisLine={false} 
          tickLine={false}
          tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 11 }}
          width={100}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar 
          dataKey="value" 
          radius={[0, 6, 6, 0]}
          barSize={20}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
