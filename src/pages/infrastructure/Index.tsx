import { NavCard } from "@/components/ui/NavCard";
import { Boxes, Rocket, Database, Workflow, Activity } from "lucide-react";

const sections = [
  {
    title: "Service Catalogue",
    description: "Browse and deploy Terraform templates",
    icon: Boxes,
    href: "/infrastructure/service-catalogue",
  },
  {
    title: "Provisioning",
    description: "Deploy new cloud resources",
    icon: Rocket,
    href: "/infrastructure/provisioning",
  },
  {
    title: "Resource Inventory",
    description: "View and manage all resources",
    icon: Database,
    href: "/infrastructure/resource-inventory",
  },
  {
    title: "Automation Workflows",
    description: "Create automated processes",
    icon: Workflow,
    href: "/infrastructure/automation",
  },
  {
    title: "Monitoring & Metrics",
    description: "Real-time resource monitoring",
    icon: Activity,
    href: "/infrastructure/monitoring",
  },
];

export default function InfrastructureIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Infrastructure</h1>
        <p className="text-muted-foreground mt-1">
          Manage, automate, and visualize multi-cloud resources
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <NavCard
            key={section.href}
            title={section.title}
            description={section.description}
            icon={section.icon}
            href={section.href}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}
