import { ShoppingCart, DollarSign, TrendingUp, Users } from "lucide-react";
import { Header } from "@/components/dashboard/Header";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { KPICard } from "@/components/dashboard/KPICard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { AreaChartComponent } from "@/components/dashboard/AreaChartComponent";
import { DonutChartComponent } from "@/components/dashboard/DonutChartComponent";
import { BarChartComponent } from "@/components/dashboard/BarChartComponent";
import { HorizontalBarChart } from "@/components/dashboard/HorizontalBarChart";
import { DataTable } from "@/components/dashboard/DataTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects - Light theme */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-6 space-y-6">
          {/* Filter Bar */}
          <FilterBar />
          
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <KPICard
              title="Total de Vendas"
              value="1.247"
              subtitle="Pedidos realizados no mês"
              icon={ShoppingCart}
              trend={{ value: 18, isPositive: true }}
              delay={0.1}
            />
            <KPICard
              title="Receita Total"
              value="R$ 892.5K"
              subtitle="Faturamento do período"
              icon={DollarSign}
              trend={{ value: 24, isPositive: true }}
              delay={0.2}
            />
            <KPICard
              title="Taxa de Conversão"
              value="8.7%"
              subtitle="Visitantes convertidos"
              icon={TrendingUp}
              trend={{ value: 12, isPositive: true }}
              delay={0.3}
            />
            <KPICard
              title="Novos Clientes"
              value="342"
              subtitle="Cadastros no período"
              icon={Users}
              trend={{ value: 15, isPositive: true }}
              delay={0.4}
            />
          </div>
          
          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ChartCard 
              title="Evolução de Vendas" 
              subtitle="Faturamento mensal em milhares"
              delay={0.3}
              className="lg:col-span-2"
            >
              <AreaChartComponent />
            </ChartCard>
            
            <ChartCard 
              title="Vendas por Categoria" 
              subtitle="Distribuição de receita"
              delay={0.4}
            >
              <DonutChartComponent />
            </ChartCard>
          </div>
          
          {/* Charts Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard 
              title="Receita por Produto" 
              subtitle="Faturamento em milhares (R$)"
              delay={0.5}
            >
              <BarChartComponent />
            </ChartCard>
            
            <ChartCard 
              title="Quantidade Vendida" 
              subtitle="Unidades por produto"
              delay={0.6}
            >
              <HorizontalBarChart />
            </ChartCard>
          </div>
          
          {/* Data Table */}
          <DataTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
