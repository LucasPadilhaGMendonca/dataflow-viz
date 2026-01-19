import { motion } from "framer-motion";
import { Calendar, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FilterBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-xl p-4 flex flex-wrap items-center gap-4"
    >
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors cursor-pointer">
        <Calendar className="w-4 h-4 text-primary" />
        <span className="text-sm text-foreground">01/01/2025</span>
        <span className="text-muted-foreground">—</span>
        <span className="text-sm text-foreground">06/01/2026</span>
      </div>
      
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors cursor-pointer">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-foreground">Produto</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </div>
      
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors cursor-pointer">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-foreground">Status</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </div>
      
      <div className="ml-auto">
        <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10">
          Aplicar Filtros
        </Button>
      </div>
    </motion.div>
  );
};
