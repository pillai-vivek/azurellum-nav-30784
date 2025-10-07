import { Palette, Moon, Sun, Globe, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ThemePreferences() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = (checked: boolean) => {
    setIsDark(checked);
    document.documentElement.classList.toggle('dark', checked);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Theme & Preferences</h1>
        <p className="text-muted-foreground">Customize your experience</p>
      </div>

      {/* Theme Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Appearance
            </CardTitle>
            <CardDescription>Customize the look and feel of your interface</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode" className="text-base">Dark Mode</Label>
                <div className="text-sm text-muted-foreground">
                  Toggle between light and dark themes
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sun className={`w-5 h-5 transition-colors ${!isDark ? 'text-warning' : 'text-muted-foreground'}`} />
                <Switch
                  id="dark-mode"
                  checked={isDark}
                  onCheckedChange={handleThemeToggle}
                />
                <Moon className={`w-5 h-5 transition-colors ${isDark ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Language Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Language & Region
            </CardTitle>
            <CardDescription>Set your preferred language and regional settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select defaultValue="utc">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="est">Eastern Time (EST)</SelectItem>
                  <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                  <SelectItem value="cet">Central European Time (CET)</SelectItem>
                  <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Default Cloud Preference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="w-5 h-5" />
              Default Cloud Provider
            </CardTitle>
            <CardDescription>Select your preferred cloud provider for new resources</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="aws" className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <RadioGroupItem value="aws" id="aws" />
                <Label htmlFor="aws" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">☁️</span>
                    <div>
                      <div className="font-medium">Amazon Web Services</div>
                      <div className="text-sm text-muted-foreground">AWS Cloud Platform</div>
                    </div>
                  </div>
                </Label>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <RadioGroupItem value="azure" id="azure" />
                <Label htmlFor="azure" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⛅</span>
                    <div>
                      <div className="font-medium">Microsoft Azure</div>
                      <div className="text-sm text-muted-foreground">Azure Cloud Services</div>
                    </div>
                  </div>
                </Label>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <RadioGroupItem value="gcp" id="gcp" />
                <Label htmlFor="gcp" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">☁️</span>
                    <div>
                      <div className="font-medium">Google Cloud Platform</div>
                      <div className="text-sm text-muted-foreground">GCP Services</div>
                    </div>
                  </div>
                </Label>
              </motion.div>
            </RadioGroup>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
