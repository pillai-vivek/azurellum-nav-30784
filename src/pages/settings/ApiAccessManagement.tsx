import { Key, Plus, Copy, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { apiTokens } from "@/data/dummyData";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function ApiAccessManagement() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground";
  };

  const handleCopy = (tokenId: string) => {
    navigator.clipboard.writeText(`sk_test_${tokenId}_dummy_token_value`);
    setCopiedId(tokenId);
    toast({
      title: "Copied to clipboard",
      description: "API token has been copied successfully",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">API & Access Management</h1>
          <p className="text-muted-foreground">Manage API tokens and access credentials</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Generate New Token
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Generate API Token</DialogTitle>
              <DialogDescription>
                Create a new API token with specific permissions
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="token-name">Token Name</Label>
                <Input id="token-name" placeholder="My API Token" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="scope">Access Scope</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scope" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Access</SelectItem>
                    <SelectItem value="read">Read Only</SelectItem>
                    <SelectItem value="deploy">Deploy Only</SelectItem>
                    <SelectItem value="limited">Limited Access</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select expiration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Generate Token</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* API Tokens Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>API Tokens</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Scope</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Last Used</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiTokens.map((token, index) => (
                  <motion.tr
                    key={token.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <TableCell className="font-medium">{token.name}</TableCell>
                    <TableCell className="text-muted-foreground">{token.scope}</TableCell>
                    <TableCell>{token.created}</TableCell>
                    <TableCell>{token.lastUsed}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(token.status)}>
                        {token.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(token.id)}
                        className="gap-2"
                      >
                        {copiedId === token.id ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-success" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </Button>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Security Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Card className="border-warning/50 bg-warning/5">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <Key className="w-5 h-5 text-warning flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-2">Security Best Practices</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Never share your API tokens publicly or commit them to version control</li>
                  <li>• Rotate tokens regularly to maintain security</li>
                  <li>• Use the minimum required scope for each token</li>
                  <li>• Monitor token usage and revoke unused tokens</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
