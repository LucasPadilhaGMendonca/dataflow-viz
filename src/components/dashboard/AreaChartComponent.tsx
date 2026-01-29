import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', value: 45 },
  { month: 'Fev', value: 62 },
  { month: 'Mar', value: 78 },
  { month: 'Abr', value: 56 },
  { month: 'Mai', value: 89 },
  { month: 'Jun', value: 95 },
  { month: 'Jul', value: 72 },
  { month: 'Ago', value: 84 },
  { month: 'Set', value: 91 },
  { month: 'Out', value: 108 },
  { month: 'Nov', value: 125 },
  { month: 'Dez', value: 142 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-primary/30">
        <p className="text-primary font-semibold">{label}</p>
        <p className="text-foreground">R$ {payload[0].value}K</p>
      </div>
    );
  }
  return null;
};

export const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(217, 91%, 53%)" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="hsl(217, 91%, 53%)" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 88%)" vertical={false} />
        <XAxis 
          dataKey="month" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: 'hsl(0, 0%, 45%)', fontSize: 12 }}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: 'hsl(0, 0%, 45%)', fontSize: 12 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="hsl(217, 91%, 53%)"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorValue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
