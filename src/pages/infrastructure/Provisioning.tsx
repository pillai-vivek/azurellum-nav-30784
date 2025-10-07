import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Circle } from "lucide-react";
import { cloudProviders, terraformTemplates } from "@/data/dummyData";

const steps = [
  { id: 1, name: "Cloud Provider" },
  { id: 2, name: "Region" },
  { id: 3, name: "Template" },
  { id: 4, name: "Parameters" },
  { id: 5, name: "Review & Deploy" },
];

export default function Provisioning() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployProgress, setDeployProgress] = useState(0);

  const handleDeploy = () => {
    setIsDeploying(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setDeployProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDeploying(false);
          setDeployProgress(0);
          setCurrentStep(1);
        }, 1000);
      }
    }, 500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Provisioning</h1>
        <p className="text-muted-foreground mt-1">
          Deploy new cloud resources step by step
        </p>
      </div>

      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                  currentStep > step.id
                    ? "bg-primary border-primary"
                    : currentStep === step.id
                    ? "border-primary text-primary"
                    : "border-muted-foreground/30 text-muted-foreground"
                }`}
              >
                {currentStep > step.id ? (
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </div>
              <span className="text-sm mt-2 font-medium">{step.name}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-0.5 w-24 mx-4 transition-all ${
                  currentStep > step.id ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Step {currentStep}: {steps[currentStep - 1].name}</CardTitle>
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {currentStep === 1 && (
                <div className="space-y-4">
                  <Label>Select Cloud Provider</Label>
                  <div className="grid grid-cols-3 gap-4">
                    {cloudProviders.map((provider) => (
                      <Card
                        key={provider.id}
                        className="cursor-pointer hover:border-primary transition-all"
                      >
                        <CardContent className="p-6 text-center">
                          <div className="text-4xl mb-2">{provider.logo}</div>
                          <p className="font-semibold">{provider.name}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="region">Select Region</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
                        <SelectItem value="us-west-2">US West (Oregon)</SelectItem>
                        <SelectItem value="eu-west-1">EU (Ireland)</SelectItem>
                        <SelectItem value="ap-south-1">Asia Pacific (Mumbai)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <Label>Select Template</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {terraformTemplates.map((template) => (
                      <Card
                        key={template.id}
                        className="cursor-pointer hover:border-primary transition-all"
                      >
                        <CardContent className="p-4">
                          <h3 className="font-semibold">{template.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {template.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Resource Name</Label>
                    <Input id="name" placeholder="my-resource" />
                  </div>
                  <div>
                    <Label htmlFor="instance-type">Instance Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select instance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="t3.small">t3.small</SelectItem>
                        <SelectItem value="t3.medium">t3.medium</SelectItem>
                        <SelectItem value="t3.large">t3.large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="storage">Storage (GB)</Label>
                    <Input id="storage" type="number" placeholder="100" />
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-4">
                  <div className="bg-muted p-6 rounded-lg space-y-3">
                    <h3 className="font-semibold text-lg">Deployment Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Provider:</span>
                        <span className="font-medium">AWS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Region:</span>
                        <span className="font-medium">us-east-1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Template:</span>
                        <span className="font-medium">EC2 Web Server</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Instance Type:</span>
                        <span className="font-medium">t3.medium</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 mt-2">
                        <span className="font-semibold">Estimated Cost:</span>
                        <span className="font-bold text-primary">$127.50/month</span>
                      </div>
                    </div>
                  </div>

                  {isDeploying && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Deploying...</span>
                        <span className="text-sm text-muted-foreground">{deployProgress}%</span>
                      </div>
                      <Progress value={deployProgress} className="h-2" />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          ⚙️
                        </motion.div>
                        Terraform is provisioning your resources...
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1 || isDeploying}
                >
                  Previous
                </Button>
                {currentStep < 5 ? (
                  <Button onClick={() => setCurrentStep(currentStep + 1)}>
                    Next
                  </Button>
                ) : (
                  <Button onClick={handleDeploy} disabled={isDeploying}>
                    {isDeploying ? "Deploying..." : "Deploy"}
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}
