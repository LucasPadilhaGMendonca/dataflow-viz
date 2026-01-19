import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', value: 2, year: '2025' },
  { month: 'Fev', value: 6, year: '2025' },
  { month: 'Mar', value: 2, year: '2025' },
  { month: 'Abr', value: 4, year: '2025' },
  { month: 'Mai', value: 12, year: '2025' },
  { month: 'Jun', value: 7, year: '2025' },
  { month: 'Jul', value: 6, year: '2025' },
  { month: 'Ago', value: 4, year: '2025' },
  { month: 'Set', value: 5, year: '2025' },
  { month: 'Out', value: 7, year: '2025' },
  { month: 'Nov', value: 7, year: '2025' },
  { month: 'Dez', value: 5, year: '2025' },
  { month: 'Jan', value: 4, year: '2026' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-primary/30">
        <p className="text-primary font-semibold">{label}</p>
        <p className="text-foreground">{payload[0].value} guardiões</p>
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
            <stop offset="5%" stopColor="hsl(187, 100%, 50%)" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="hsl(187, 100%, 50%)" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" vertical={false} />
        <XAxis 
          dataKey="month" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 12 }}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 12 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="hsl(187, 100%, 50%)"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorValue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
