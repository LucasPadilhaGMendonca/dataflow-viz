import { motion } from "framer-motion";
import { Shield, Bell, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass-card border-b border-border px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Edge<span className="text-primary">.uol</span></h1>
              <p className="text-xs text-muted-foreground">Guardião de Clientes</p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-semibold"
          >
            <span className="text-muted-foreground">Dashboard</span>
            <span className="mx-2 text-border">|</span>
            <span className="gradient-text">Downgrade, Cancelamento e Renegociação</span>
          </motion.h2>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-secondary/50">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-secondary/50">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:text-foreground hover:bg-secondary/50">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
