import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'MDS Suitable Services', value: 15 },
  { name: 'MDS Database Manage', value: 13 },
  { name: 'DFS Hosting', value: 11 },
  { name: 'PSS Payments', value: 5 },
  { name: 'CFS Multicloud', value: 4 },
  { name: 'CFS VMware', value: 4 },
  { name: 'DFS Internet Pro', value: 4 },
  { name: 'PSS Payments EDI', value: 3 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-primary/30">
        <p className="text-foreground font-medium text-sm">{label}</p>
        <p className="text-accent font-semibold">{payload[0].value} guardiões</p>
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
            <stop offset="0%" stopColor="hsl(32, 100%, 45%)" />
            <stop offset="100%" stopColor="hsl(32, 100%, 60%)" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" horizontal={false} />
        <XAxis 
          type="number" 
          axisLine={false} 
          tickLine={false}
          tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 11 }}
        />
        <YAxis 
          type="category" 
          dataKey="name" 
          axisLine={false} 
          tickLine={false}
          tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 10 }}
          width={120}
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
