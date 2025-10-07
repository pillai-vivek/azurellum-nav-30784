import { motion } from "framer-motion";
import { DollarSign, Server, Database, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { dailySpendData, costBreakdown, resourcesByType } from "@/data/dummyData";

export default function Overview() {
  const totalSpend = dailySpendData[dailySpendData.length - 1].aws + 
                     dailySpendData[dailySpendData.length - 1].azure + 
                     dailySpendData[dailySpendData.length - 1].gcp;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">Monitor your multi-cloud infrastructure</p>
        </div>
        <div className="flex gap-3">
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
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Monthly Spend"
          value={`$${totalSpend.toLocaleString()}`}
          icon={DollarSign}
          trend={{ value: 12.3, isPositive: false }}
          delay={0}
        />
        <StatCard
          title="Active Resources"
          value="158"
          icon={Server}
          trend={{ value: 8.7, isPositive: true }}
          delay={0.1}
        />
        <StatCard
          title="Databases"
          value="12"
          icon={Database}
          trend={{ value: 3.2, isPositive: true }}
          delay={0.2}
        />
        <StatCard
          title="Cost Optimization"
          value="$1,234"
          icon={TrendingUp}
          trend={{ value: 24.1, isPositive: true }}
          delay={0.3}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Daily Spend Trend</CardTitle>
              <CardDescription>Cloud spending across all providers</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  aws: { label: "AWS", color: "#FF9900" },
                  azure: { label: "Azure", color: "#0078D4" },
                  gcp: { label: "GCP", color: "#4285F4" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dailySpendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line type="monotone" dataKey="aws" stroke="#FF9900" strokeWidth={2} />
                    <Line type="monotone" dataKey="azure" stroke="#0078D4" strokeWidth={2} />
                    <Line type="monotone" dataKey="gcp" stroke="#4285F4" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Cost Breakdown</CardTitle>
              <CardDescription>Distribution by service type</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  compute: { label: "Compute" },
                  storage: { label: "Storage" },
                  network: { label: "Network" },
                  database: { label: "Database" },
                  other: { label: "Other" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={costBreakdown}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {costBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Resources Overview</CardTitle>
            <CardDescription>Resource count and cost by type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resourcesByType.map((resource, index) => (
                <div key={resource.name} className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{resource.name}</p>
                    <p className="text-sm text-muted-foreground">{resource.count} resources</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">${resource.cost}</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
