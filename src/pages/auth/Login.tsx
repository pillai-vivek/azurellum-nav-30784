import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Failed to login. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const createOrLoginTestUser = async () => {
    const testEmail = "test@cloudops.com";
    const testPassword = "Test@123456";
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email: testEmail, password: testPassword });
      if (!signInError) {
        toast.success("Logged in with test account");
        navigate("/dashboard");
        return;
      }
      const { error: signUpError } = await supabase.auth.signUp({
        email: testEmail,
        password: testPassword,
        options: { data: { full_name: "Test User" }, emailRedirectTo: `${window.location.origin}/dashboard` }
      });
      if (signUpError) throw signUpError;
      const { error: signInAfter } = await supabase.auth.signInWithPassword({ email: testEmail, password: testPassword });
      if (signInAfter) throw signInAfter;
      toast.success("Test account ready! Redirecting...");
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Could not use test account");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted via-background to-muted p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4 shadow-lg">
            <span className="text-4xl">☁️</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">CloudOps Platform</h1>
          <p className="text-muted-foreground mt-2">Sign in to your account</p>
          
          <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground mb-1">Test Account:</p>
            <p className="text-sm font-mono"><strong>Email:</strong> test@cloudops.com</p>
            <p className="text-sm font-mono"><strong>Password:</strong> Test@123456</p>
          </div>
        </div>

        <Card className="border-border shadow-xl backdrop-blur-sm bg-card/95">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => navigate("/signup")}
              >
                Create Account
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={createOrLoginTestUser}
                aria-label="Use Test Account"
              >
                Use Test Account
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
