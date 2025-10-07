import { DollarSign, Plus, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { approvalWorkflows } from "@/data/dummyData";
import { motion } from "framer-motion";

export default function CostManagement() {
  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Cost Management</h1>
          <p className="text-muted-foreground">Manage approval workflows and spending rules</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add New Rule
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Approval Rule</DialogTitle>
              <DialogDescription>
                Set up a new approval workflow for cost management
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="rule-type">Rule Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select rule type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spending">Spending Limit</SelectItem>
                    <SelectItem value="approval">Approval Required</SelectItem>
                    <SelectItem value="termination">Resource Termination</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="threshold">Threshold Amount ($)</Label>
                <Input id="threshold" type="number" placeholder="1000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="approver">Approver</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select approver" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sarah">Sarah Chen</SelectItem>
                    <SelectItem value="michael">Michael Rodriguez</SelectItem>
                    <SelectItem value="emily">Emily Watson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Create Rule</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Approval Workflows Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Approval Workflows</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rule</TableHead>
                  <TableHead>Approver</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Triggered</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {approvalWorkflows.map((workflow, index) => (
                  <motion.tr
                    key={workflow.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <TableCell className="font-medium">{workflow.rule}</TableCell>
                    <TableCell>{workflow.approver}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(workflow.status)}>
                        {workflow.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{workflow.lastTriggered}</TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Approval Flow Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Approval Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between py-8 px-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-medium">Cost Event</span>
              </motion.div>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="flex-1 h-0.5 bg-border mx-4"
              >
                <div className="flex items-center justify-center h-full">
                  <ArrowRight className="text-muted-foreground" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.3 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 rounded-full bg-warning/10 flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-warning" />
                </div>
                <span className="text-sm font-medium">Rule Check</span>
              </motion.div>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="flex-1 h-0.5 bg-border mx-4"
              >
                <div className="flex items-center justify-center h-full">
                  <ArrowRight className="text-muted-foreground" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, duration: 0.3 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <span className="text-sm font-medium">Approved</span>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
