import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import CloudProviderConfig from "./pages/auth/CloudProviderConfig";
import Overview from "./pages/dashboard/Overview";
import InfrastructureIndex from "./pages/infrastructure/Index";
import ResourceInventory from "./pages/infrastructure/ResourceInventory";
import ServiceCatalogue from "./pages/infrastructure/ServiceCatalogue";
import Provisioning from "./pages/infrastructure/Provisioning";
import AutomationWorkflows from "./pages/infrastructure/AutomationWorkflows";
import Monitoring from "./pages/infrastructure/Monitoring";
import FinOpsIndex from "./pages/finops/Index";
import Recommendations from "./pages/finops/Recommendations";
import CostExplorer from "./pages/finops/CostExplorer";
import Budgets from "./pages/finops/Budgets";
import Chargeback from "./pages/finops/Chargeback";
import GovernanceIndex from "./pages/governance/Index";
import PolicyManagement from "./pages/governance/PolicyManagement";
import SettingsIndex from "./pages/settings/Index";
import Integrations from "./pages/settings/Integrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cloud-config" element={<CloudProviderConfig />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout><Overview /></DashboardLayout>} />
          
          {/* Infrastructure Routes */}
          <Route path="/infrastructure" element={<DashboardLayout><InfrastructureIndex /></DashboardLayout>} />
          <Route path="/infrastructure/service-catalogue" element={<DashboardLayout><ServiceCatalogue /></DashboardLayout>} />
          <Route path="/infrastructure/provisioning" element={<DashboardLayout><Provisioning /></DashboardLayout>} />
          <Route path="/infrastructure/resource-inventory" element={<DashboardLayout><ResourceInventory /></DashboardLayout>} />
          <Route path="/infrastructure/automation" element={<DashboardLayout><AutomationWorkflows /></DashboardLayout>} />
          <Route path="/infrastructure/monitoring" element={<DashboardLayout><Monitoring /></DashboardLayout>} />
          
          {/* FinOps Routes */}
          <Route path="/finops" element={<DashboardLayout><FinOpsIndex /></DashboardLayout>} />
          <Route path="/finops/cost-explorer" element={<DashboardLayout><CostExplorer /></DashboardLayout>} />
          <Route path="/finops/recommendations" element={<DashboardLayout><Recommendations /></DashboardLayout>} />
          <Route path="/finops/budgets" element={<DashboardLayout><Budgets /></DashboardLayout>} />
          <Route path="/finops/chargeback" element={<DashboardLayout><Chargeback /></DashboardLayout>} />
          
          {/* Governance Routes */}
          <Route path="/governance" element={<DashboardLayout><GovernanceIndex /></DashboardLayout>} />
          <Route path="/governance/policy-management" element={<DashboardLayout><PolicyManagement /></DashboardLayout>} />
          
          {/* Settings Routes */}
          <Route path="/settings" element={<DashboardLayout><SettingsIndex /></DashboardLayout>} />
          <Route path="/settings/integrations" element={<DashboardLayout><Integrations /></DashboardLayout>} />

          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
