import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Play } from "lucide-react";
import { policies } from "@/data/dummyData";
import { toast } from "sonner";

export default function PolicyManagement() {
  const handleRunScan = () => {
    toast.success("Policy scan initiated");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Policy Management</h1>
          <p className="text-muted-foreground mt-1">Monitor compliance across all resources</p>
        </div>
        <Button onClick={handleRunScan} className="bg-gradient-to-r from-primary to-accent">
          <Play className="w-4 h-4 mr-2" />
          Run Policy Scan
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Policies</p>
                <p className="text-3xl font-bold text-foreground mt-1">{policies.length}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Compliant</p>
                <p className="text-3xl font-bold text-success mt-1">
                  {policies.filter(p => p.status === "Compliant").length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Non-Compliant</p>
                <p className="text-3xl font-bold text-destructive mt-1">
                  {policies.filter(p => p.status === "Non-Compliant").length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Policies</CardTitle>
          <CardDescription>Security and compliance policies across your infrastructure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-muted hover:bg-muted/80 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    policy.status === "Compliant" ? "bg-success/10" : "bg-destructive/10"
                  }`}>
                    {policy.status === "Compliant" ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{policy.name}</p>
                    <p className="text-sm text-muted-foreground">{policy.resources} resources affected</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={policy.severity === "critical" ? "destructive" : policy.severity === "high" ? "default" : "secondary"}
                      className={
                        policy.severity === "critical" ? "bg-destructive" :
                        policy.severity === "high" ? "bg-warning text-warning-foreground" :
                        "bg-muted-foreground"
                      }
                    >
                      {policy.severity}
                    </Badge>
                    <Badge
                      variant={policy.status === "Compliant" ? "default" : "destructive"}
                      className={policy.status === "Compliant" ? "bg-success text-success-foreground" : ""}
                    >
                      {policy.status}
                    </Badge>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
