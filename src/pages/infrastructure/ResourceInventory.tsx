import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Eye } from "lucide-react";
import { resources } from "@/data/dummyData";

export default function ResourceInventory() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Resource Inventory</h1>
        <p className="text-muted-foreground mt-1">View and manage all cloud resources</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Cloud Provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Providers</SelectItem>
            <SelectItem value="aws">AWS</SelectItem>
            <SelectItem value="azure">Azure</SelectItem>
            <SelectItem value="gcp">GCP</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Resource Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="vm">Virtual Machine</SelectItem>
            <SelectItem value="db">Database</SelectItem>
            <SelectItem value="storage">Storage</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Resources</CardTitle>
          <CardDescription>All active cloud resources across providers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-muted hover:bg-muted/80 transition-all hover:shadow-md"
              >
                <div className="flex-1 grid grid-cols-5 gap-4">
                  <div>
                    <p className="font-medium text-foreground">{resource.name}</p>
                    <p className="text-sm text-muted-foreground">{resource.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Type</p>
                    <p className="font-medium text-foreground">{resource.type}</p>
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {resource.cloud}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">{resource.region}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Cost/Month</p>
                    <p className="font-semibold text-foreground">${resource.cost}</p>
                  </div>
                  <div>
                    <Badge
                      variant={resource.state === "Running" || resource.state === "Active" ? "default" : "secondary"}
                      className="bg-success text-success-foreground"
                    >
                      {resource.state}
                    </Badge>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Eye className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
