import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TableRow {
  codigo: string;
  cliente: string;
  email: string;
  dataVenda: string;
  vendedor: string;
  produto: string;
  quantidade: number;
  status: string;
  valor: string;
}

const tableData: TableRow[] = [
  {
    codigo: "VND-2025-4872",
    cliente: "Ricardo Oliveira",
    email: "ricardo.oliveira@email.com",
    dataVenda: "28/01/2025",
    vendedor: "Ana Carolina Silva",
    produto: "iPhone 15 Pro 256GB",
    quantidade: 2,
    status: "Entregue",
    valor: "R$ 17.998,00"
  },
  {
    codigo: "VND-2025-4871",
    cliente: "Mariana Costa",
    email: "mariana.costa@empresa.com",
    dataVenda: "28/01/2025",
    vendedor: "Felipe Santos",
    produto: "MacBook Air M3",
    quantidade: 1,
    status: "Enviado",
    valor: "R$ 12.499,00"
  },
  {
    codigo: "VND-2025-4870",
    cliente: "Tech Solutions LTDA",
    email: "compras@techsolutions.com.br",
    dataVenda: "27/01/2025",
    vendedor: "Ana Carolina Silva",
    produto: "Smart TV LG 65\" OLED",
    quantidade: 5,
    status: "Entregue",
    valor: "R$ 64.995,00"
  },
  {
    codigo: "VND-2025-4869",
    cliente: "Lucas Mendes",
    email: "lucas.mendes@gmail.com",
    dataVenda: "27/01/2025",
    vendedor: "João Pedro Alves",
    produto: "PlayStation 5 + 2 Jogos",
    quantidade: 1,
    status: "Processando",
    valor: "R$ 4.299,00"
  },
  {
    codigo: "VND-2025-4868",
    cliente: "Fernanda Lima",
    email: "fernanda.lima@outlook.com",
    dataVenda: "26/01/2025",
    vendedor: "Felipe Santos",
    produto: "AirPods Pro 2ª Geração",
    quantidade: 3,
    status: "Entregue",
    valor: "R$ 5.697,00"
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Entregue":
      return <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100">{status}</Badge>;
    case "Enviado":
      return <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100">{status}</Badge>;
    case "Processando":
      return <Badge className="bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100">{status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export const DataTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Últimas Vendas</h3>
        <p className="text-sm text-muted-foreground mt-1">Pedidos recentes e status de entrega</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Pedido</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Cliente</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Produto</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Vendedor</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {tableData.map((row, index) => (
              <motion.tr
                key={row.codigo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-3 text-sm font-mono text-primary">{row.codigo}</td>
                <td className="px-4 py-3">
                  <div className="text-sm text-foreground">{row.cliente}</div>
                  <div className="text-xs text-muted-foreground">{row.email}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm text-foreground">{row.produto}</div>
                  <div className="text-xs text-muted-foreground">Qtd: {row.quantidade}</div>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{row.vendedor}</td>
                <td className="px-4 py-3">
                  {getStatusBadge(row.status)}
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-secondary text-right">{row.valor}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-border flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Mostrando 5 de 1.247 vendas</span>
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-foreground">Total do período:</span>
          <span className="text-lg font-bold gradient-text">R$ 892.487,00</span>
        </div>
      </div>
    </motion.div>
  );
};
