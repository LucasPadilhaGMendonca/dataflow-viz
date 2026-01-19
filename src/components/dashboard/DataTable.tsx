import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TableRow {
  codigo: string;
  cliente: string;
  cnpj: string;
  dataAbertura: string;
  responsavel: string;
  produto: string;
  tipo: string;
  status: string;
  ano: string;
  mes: string;
  valor: string;
}

const tableData: TableRow[] = [
  {
    codigo: "GUARD-25/01525",
    cliente: "CIPLAN CIMENTO PLANALTO S.A",
    cnpj: "00.057.240/0001-22",
    dataAbertura: "14/10/2025",
    responsavel: "Erica Cristina Pastor",
    produto: "MDS SUITABLE SERVICES",
    tipo: "Total (cancelamento)",
    status: "Cancelado",
    ano: "2025",
    mes: "12",
    valor: "R$ 4.624,87"
  },
  {
    codigo: "GUARD-25/01426",
    cliente: "AMERICANAS S.A",
    cnpj: "00.776.574/0006-60",
    dataAbertura: "13/02/2025",
    responsavel: "Gilmar Aparecido De Souza",
    produto: "DFS HOSTING",
    tipo: "Total (cancela contrato)",
    status: "Cancelado",
    ano: "2025",
    mes: "8",
    valor: "R$ 44.553,16"
  },
  {
    codigo: "GUARD-25/01427",
    cliente: "AMERICANAS S.A",
    cnpj: "00.776.574/0006-60",
    dataAbertura: "13/02/2025",
    responsavel: "Gilmar Aparecido De Souza",
    produto: "DFS COLOCATION",
    tipo: "Total (cancela contrato)",
    status: "Cancelado",
    ano: "2025",
    mes: "4",
    valor: "R$ 15.244,35"
  },
  {
    codigo: "GUARD-25/01505",
    cliente: "KAMPAI PERFUMARIA",
    cnpj: "02.485.011/0001-34",
    dataAbertura: "07/08/2025",
    responsavel: "Erica Cristina Pastor",
    produto: "MDS SUITABLE SERVICES",
    tipo: "Total (cancelamento)",
    status: "Cancelado",
    ano: "2025",
    mes: "10",
    valor: "R$ 2.456,40"
  },
  {
    codigo: "GUARD-25/01496",
    cliente: "MEGATELECOM",
    cnpj: "03.170.027/0001-10",
    dataAbertura: "22/07/2025",
    responsavel: "Raquel Panizi",
    produto: "DFS HOSTING",
    tipo: "Total (cancelamento)",
    status: "Cancelado",
    ano: "2025",
    mes: "8",
    valor: "R$ 12.544,38"
  },
];

export const DataTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Detalhamento dos Guardiões</h3>
        <p className="text-sm text-muted-foreground mt-1">Lista completa de cancelamentos e renegociações</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Código</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Cliente</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Produto</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Responsável</th>
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
                  <div className="text-xs text-muted-foreground">{row.cnpj}</div>
                </td>
                <td className="px-4 py-3 text-sm text-foreground">{row.produto}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{row.responsavel}</td>
                <td className="px-4 py-3">
                  <Badge variant="outline" className="border-destructive/50 text-destructive">
                    {row.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-accent text-right">{row.valor}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-border flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Mostrando 5 de 67 resultados</span>
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-foreground">Total:</span>
          <span className="text-lg font-bold gradient-text">R$ 443.763,43</span>
        </div>
      </div>
    </motion.div>
  );
};
