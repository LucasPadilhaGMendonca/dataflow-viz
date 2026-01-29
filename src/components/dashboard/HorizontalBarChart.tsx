import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'iPhone 15 Pro', value: 287 },
  { name: 'MacBook Air M3', value: 156 },
  { name: 'Smart TV 65"', value: 134 },
  { name: 'PlayStation 5', value: 98 },
  { name: 'Notebook Dell', value: 76 },
  { name: 'Air Fryer', value: 245 },
  { name: 'Fones Bluetooth', value: 312 },
  { name: 'Smartwatch', value: 189 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-primary/30">
        <p className="text-foreground font-medium text-sm">{label}</p>
        <p className="text-secondary font-semibold">{payload[0].value} unidades</p>
      </div>
    );
  }
  return null;
};

export const HorizontalBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart 
        data={data} 
        layout="vertical"
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="accentBarGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(263, 70%, 50%)" />
            <stop offset="100%" stopColor="hsl(263, 70%, 65%)" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 88%)" horizontal={false} />
        <XAxis 
          type="number" 
          axisLine={false} 
          tickLine={false}
          tick={{ fill: 'hsl(0, 0%, 45%)', fontSize: 11 }}
        />
        <YAxis 
          type="category" 
          dataKey="name" 
          axisLine={false} 
          tickLine={false}
          tick={{ fill: 'hsl(0, 0%, 45%)', fontSize: 10 }}
          width={110}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar 
          dataKey="value" 
          fill="url(#accentBarGradient)"
          radius={[0, 6, 6, 0]}
          barSize={18}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
