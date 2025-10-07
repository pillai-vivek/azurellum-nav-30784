import { NavCard } from "@/components/ui/NavCard";
import { TrendingDown, Lightbulb, Target, PieChart } from "lucide-react";

const sections = [
  {
    title: "Cost Explorer",
    description: "Analyze spending patterns and trends",
    icon: TrendingDown,
    href: "/finops/cost-explorer",
  },
  {
    title: "Recommendations",
    description: "AI-powered cost optimization suggestions",
    icon: Lightbulb,
    href: "/finops/recommendations",
  },
  {
    title: "Budgets & Alerts",
    description: "Set spending limits and get notified",
    icon: Target,
    href: "/finops/budgets",
  },
  {
    title: "Chargeback / Showback",
    description: "Allocate costs to departments",
    icon: PieChart,
    href: "/finops/chargeback",
  },
];

export default function FinOpsIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">FinOps</h1>
        <p className="text-muted-foreground mt-1">
          Gain financial visibility and optimize cloud costs
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
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
