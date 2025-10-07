import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingDown } from "lucide-react";
import { recommendations } from "@/data/dummyData";
import { toast } from "sonner";

export default function Recommendations() {
  const handleApplyFix = (title: string) => {
    toast.success(`Applied: ${title}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Cost Optimization Recommendations</h1>
        <p className="text-muted-foreground mt-1">AI-powered suggestions to reduce cloud spending</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Potential Savings</p>
                  <p className="text-3xl font-bold text-foreground">$1,037</p>
                  <p className="text-sm text-success">per month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-border bg-gradient-to-br from-success/5 to-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success to-primary flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Recommendations</p>
                  <p className="text-3xl font-bold text-foreground">{recommendations.length}</p>
                  <p className="text-sm text-primary">requiring action</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`border-border hover:shadow-lg transition-all ${rec.impact > 200 ? 'ring-2 ring-warning/50' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{rec.title}</CardTitle>
                    <CardDescription className="mt-2">{rec.description}</CardDescription>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-2xl font-bold text-success">${rec.impact}</p>
                    <p className="text-sm text-muted-foreground">savings/month</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {rec.confidence}% Confidence
                    </Badge>
                    <Badge variant="secondary">
                      {rec.type}
                    </Badge>
                  </div>
                  <Button
                    onClick={() => handleApplyFix(rec.title)}
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  >
                    Apply Fix
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
