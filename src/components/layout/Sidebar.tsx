// import { LayoutDashboard, Server, DollarSign, Shield, Settings, ChevronRight } from "lucide-react";
// import { NavLink } from "react-router-dom";
// import { cn } from "@/lib/utils";

// const navigation = [
//   { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
//   { name: "Infrastructure", icon: Server, href: "/infrastructure" },
//   { name: "FinOps", icon: DollarSign, href: "/finops" },
//   { name: "Governance", icon: Shield, href: "/governance" },
//   { name: "Settings", icon: Settings, href: "/settings" },
// ];

// export function Sidebar() {
//   return (
//     <div className="w-64 bg-card border-r border-border flex flex-col h-screen sticky top-0">
//       <div className="p-6 border-b border-border">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
//             <span className="text-2xl">☁️</span>
//           </div>
//           <div>
//             <h1 className="text-lg font-bold text-foreground">CloudOps</h1>
//             <p className="text-xs text-muted-foreground">Management Platform</p>
//           </div>
//         </div>
//       </div>
      
//       <nav className="flex-1 p-4 space-y-1">
//         {navigation.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.href}
//             className={({ isActive }) =>
//               cn(
//                 "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
//                 isActive
//                   ? "bg-primary text-primary-foreground shadow-md"
//                   : "text-muted-foreground hover:bg-muted hover:text-foreground"
//               )
//             }
//           >
//             {({ isActive }) => (
//               <>
//                 <item.icon className="w-5 h-5" />
//                 <span className="flex-1">{item.name}</span>
//                 <ChevronRight
//                   className={cn(
//                     "w-4 h-4 transition-transform",
//                     isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
//                   )}
//                 />
//               </>
//             )}
//           </NavLink>
//         ))}
//       </nav>

//       <div className="p-4 border-t border-border">
//         <div className="px-4 py-3 rounded-xl bg-muted">
//           <p className="text-xs font-medium text-foreground">Need help?</p>
//           <p className="text-xs text-muted-foreground mt-1">Contact support</p>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import {
  LayoutDashboard,
  Server,
  DollarSign,
  Shield,
  Settings,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Infrastructure", icon: Server, href: "/infrastructure" },
  { name: "FinOps", icon: DollarSign, href: "/finops" },
  { name: "Governance", icon: Shield, href: "/governance" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "bg-card border-r border-border flex flex-col h-screen sticky top-0 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-4">
        {/* Always show logo */}
        <div
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center cursor-pointer"
          onClick={() => setCollapsed(false)} // expand when clicked
        >
          <span className="text-2xl">☁️</span>
        </div>

        {/* Show text only when expanded */}
        {!collapsed && (
          <div className="flex-1 ml-3">
            <h1 className="text-lg font-bold text-foreground">CloudOps</h1>
            <p className="text-xs text-muted-foreground">Management Platform</p>
          </div>
        )}

        {/* Collapse button only when expanded */}
        {!collapsed && (
          <button
            onClick={() => setCollapsed(true)}
            className="p-1 text-foreground"
          >
            <ChevronRight className="rotate-180 w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-2 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className="w-5 h-5 shrink-0" />
                {!collapsed && <span className="flex-1">{item.name}</span>}
                {!collapsed && (
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-50"
                    )}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-border">
          <div className="px-4 py-3 rounded-xl bg-muted">
            <p className="text-xs font-medium text-foreground">Need help?</p>
            <p className="text-xs text-muted-foreground mt-1">Contact support</p>
          </div>
        </div>
      )}
    </div>
  );
}