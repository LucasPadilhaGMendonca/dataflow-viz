import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'iPhone 15 Pro', value: 185000 },
  { name: 'MacBook Air M3', value: 142000 },
  { name: 'Smart TV 65"', value: 98000 },
  { name: 'PlayStation 5', value: 76000 },
  { name: 'Notebook Dell', value: 54000 },
  { name: 'Air Fryer', value: 32000 },
  { name: 'Fones Bluetooth', value: 28000 },
  { name: 'Smartwatch', value: 18000 },
];

const COLORS = [
  'hsl(217, 91%, 53%)', 
  'hsl(217, 91%, 58%)', 
  'hsl(263, 70%, 58%)', 
  'hsl(263, 70%, 63%)',
  'hsl(239, 84%, 67%)',
  'hsl(239, 84%, 72%)',
  'hsl(280, 68%, 60%)',
  'hsl(280, 68%, 65%)'
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
            <stop offset="0%" stopColor="hsl(217, 91%, 45%)" />
            <stop offset="100%" stopColor="hsl(217, 91%, 60%)" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 88%)" horizontal={false} />
        <XAxis 
          type="number" 
          axisLine={false} 
          tickLine={false}
          tick={{ fill: 'hsl(0, 0%, 45%)', fontSize: 11 }}
          tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
        />
        <YAxis 
          type="category" 
          dataKey="name" 
          axisLine={false} 
          tickLine={false}
          tick={{ fill: 'hsl(0, 0%, 45%)', fontSize: 11 }}
          width={110}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar 
          dataKey="value" 
          radius={[0, 6, 6, 0]}
          barSize={20}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
