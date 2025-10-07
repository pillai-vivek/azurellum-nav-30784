import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { terraformTemplates } from "@/data/dummyData";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function ServiceCatalogue() {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeploy = (template: any) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const getProviderColor = (provider: string) => {
    switch (provider) {
      case "AWS": return "bg-orange-100 text-orange-700 border-orange-300";
      case "Azure": return "bg-blue-100 text-blue-700 border-blue-300";
      case "GCP": return "bg-green-100 text-green-700 border-green-300";
      default: return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Service Catalogue</h1>
        <p className="text-muted-foreground mt-1">
          Browse and deploy Terraform templates for cloud resources
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {terraformTemplates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <Badge className={getProviderColor(template.provider)}>
                    {template.provider}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  <Badge variant="outline" className="mb-2">
                    {template.category}
                  </Badge>
                  <p className="mt-2">{template.description}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => handleDeploy(template)}
                  className="w-full"
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Deploy Template
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Deploy {selectedTemplate?.name}</DialogTitle>
            <DialogDescription>
              Configure and deploy your {selectedTemplate?.provider} template
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="template-name">Deployment Name</Label>
                <Input id="template-name" placeholder="my-deployment" />
              </div>
              <div>
                <Label htmlFor="region">Region</Label>
                <Input id="region" placeholder="us-east-1" />
              </div>
              <div>
                <Label htmlFor="instance-type">Instance Type</Label>
                <Input id="instance-type" placeholder="t3.medium" />
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Estimated Monthly Cost</h4>
                <p className="text-2xl font-bold text-primary">$127.50</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Based on standard pricing in us-east-1
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>
                Deploy Now
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
