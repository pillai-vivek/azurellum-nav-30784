import { NavCard } from "@/components/ui/NavCard";
import { FileText, Shield, DollarSign, Users, FileCheck } from "lucide-react";

const sections = [
  {
    title: "Policy Management",
    description: "Compliance and security policies",
    icon: FileText,
    href: "/governance/policy-management",
  },
  {
    title: "Security Management",
    description: "IAM and security posture",
    icon: Shield,
    href: "/governance/security-management",
  },
  {
    title: "Cost Management",
    description: "Approval workflows and controls",
    icon: DollarSign,
    href: "/governance/cost-management",
  },
  {
    title: "Users & Organizations",
    description: "Manage access and roles",
    icon: Users,
    href: "/governance/users-organizations",
  },
  {
    title: "Audit & Compliance",
    description: "Activity logs and reports",
    icon: FileCheck,
    href: "/governance/audit-compliance",
  },
];

export default function GovernanceIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Governance</h1>
        <p className="text-muted-foreground mt-1">
          Ensure compliance, security, and controlled access
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
