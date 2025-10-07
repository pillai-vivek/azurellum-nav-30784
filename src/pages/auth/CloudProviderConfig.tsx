import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cloudProviders } from "@/data/dummyData";

export default function CloudProviderConfig() {
  const navigate = useNavigate();
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [adminAccess, setAdminAccess] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setSelectedProvider(null);
      toast.success("Cloud provider connected successfully!");
      setTimeout(() => navigate("/dashboard"), 1000);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted via-background to-muted p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4">
            <span className="text-4xl">☁️</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Connect Your Cloud Provider</h1>
          <p className="text-muted-foreground mt-2">
            Select a cloud provider to get started
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {cloudProviders.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <Card
                className="h-full border-border hover:border-primary cursor-pointer hover:shadow-xl transition-all"
                onClick={() => setSelectedProvider(provider.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{provider.logo}</div>
                  <h3 className="font-semibold text-sm">{provider.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <Card className="border-2 border-dashed border-border hover:border-primary cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-8 text-center">
              <Plus className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-semibold mb-2">Create New Account</h3>
              <p className="text-sm text-muted-foreground">
                Don't have a cloud provider? Create one
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <Dialog open={selectedProvider !== null} onOpenChange={() => setSelectedProvider(null)}>
          <DialogContent className="bg-popover">
            <DialogHeader>
              <DialogTitle>
                Connect to{" "}
                {cloudProviders.find((p) => p.id === selectedProvider)?.name}
              </DialogTitle>
              <DialogDescription>
                Enter your credentials to connect your cloud account
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="accessKey">Access Key / Client ID</Label>
                <Input
                  id="accessKey"
                  placeholder="Enter your access key"
                  value={accessKey}
                  onChange={(e) => setAccessKey(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secretKey">Secret Key / Client Secret</Label>
                <Input
                  id="secretKey"
                  type="password"
                  placeholder="Enter your secret key"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="adminAccess">Grant Admin Access</Label>
                <Switch
                  id="adminAccess"
                  checked={adminAccess}
                  onCheckedChange={setAdminAccess}
                />
              </div>
              <Button onClick={handleConnect} disabled={isConnecting} className="w-full">
                {isConnecting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  "Connect"
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
}
