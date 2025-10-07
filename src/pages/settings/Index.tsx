import { NavCard } from "@/components/ui/NavCard";
import { Puzzle, Key, Palette, Settings2 } from "lucide-react";

const sections = [
  {
    title: "Integrations & Management",
    description: "Connect third-party services",
    icon: Puzzle,
    href: "/settings/integrations",
  },
  {
    title: "API & Access Management",
    description: "Generate and manage API tokens",
    icon: Key,
    href: "/settings/api",
  },
  {
    title: "Theme & Preferences",
    description: "Customize your experience",
    icon: Palette,
    href: "/settings/preferences",
  },
  {
    title: "System Configuration",
    description: "Platform-wide settings",
    icon: Settings2,
    href: "/settings/system",
  },
];

export default function SettingsIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Centralized platform configuration and preferences
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
