import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { integrations } from "@/data/dummyData";
import { toast } from "sonner";

export default function Integrations() {
  const handleToggle = (name: string, connected: boolean) => {
    toast.success(`${name} ${connected ? "disconnected" : "connected"}`);
  };

  const handleTestConnection = (name: string) => {
    toast.success(`${name} connection test successful!`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Integrations & Management</h1>
        <p className="text-muted-foreground mt-1">Connect and manage third-party services</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {integrations.map((integration, index) => (
          <motion.div
            key={integration.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className="border-border hover:shadow-lg transition-all"
              style={{
                borderColor: integration.connected ? integration.color + "40" : undefined,
              }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{
                        backgroundColor: integration.color + "20",
                        color: integration.color,
                      }}
                    >
                      {integration.name[0]}
                    </div>
                    <div>
                      <CardTitle>{integration.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {integration.connected ? "Connected" : "Not connected"}
                      </CardDescription>
                    </div>
                  </div>
                  <Switch
                    checked={integration.connected}
                    onCheckedChange={() => handleToggle(integration.name, integration.connected)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge
                    variant={integration.connected ? "default" : "secondary"}
                    className={integration.connected ? "bg-success text-success-foreground" : ""}
                  >
                    {integration.connected ? "Active" : "Inactive"}
                  </Badge>
                  {integration.connected && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleTestConnection(integration.name)}
                    >
                      Test Connection
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
