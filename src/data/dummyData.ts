export const cloudProviders = [
  { id: "aws", name: "Amazon Web Services", logo: "☁️", color: "#FF9900" },
  { id: "azure", name: "Microsoft Azure", logo: "⛅", color: "#0078D4" },
  { id: "gcp", name: "Google Cloud Platform", logo: "☁️", color: "#4285F4" },
];

export const dailySpendData = [
  { date: "2024-01-01", aws: 245, azure: 178, gcp: 123 },
  { date: "2024-01-02", aws: 267, azure: 189, gcp: 145 },
  { date: "2024-01-03", aws: 289, azure: 201, gcp: 156 },
  { date: "2024-01-04", aws: 312, azure: 223, gcp: 167 },
  { date: "2024-01-05", aws: 298, azure: 215, gcp: 178 },
  { date: "2024-01-06", aws: 334, azure: 234, gcp: 189 },
  { date: "2024-01-07", aws: 356, azure: 256, gcp: 201 },
];

export const resourcesByType = [
  { name: "Virtual Machines", count: 45, cost: 2340 },
  { name: "Databases", count: 12, cost: 1890 },
  { name: "Storage Buckets", count: 78, cost: 567 },
  { name: "Load Balancers", count: 8, cost: 432 },
  { name: "Networks", count: 15, cost: 234 },
];

export const costBreakdown = [
  { name: "Compute", value: 4500, color: "#0078D4" },
  { name: "Storage", value: 2300, color: "#00A4EF" },
  { name: "Network", value: 1200, color: "#50E6FF" },
  { name: "Database", value: 1890, color: "#0063B1" },
  { name: "Other", value: 890, color: "#8C8C8C" },
];

export const resources = [
  {
    id: "vm-001",
    name: "prod-web-server-01",
    type: "Virtual Machine",
    cloud: "AWS",
    region: "us-east-1",
    cost: 145.67,
    state: "Running",
  },
  {
    id: "vm-002",
    name: "dev-api-server",
    type: "Virtual Machine",
    cloud: "Azure",
    region: "eastus",
    cost: 89.34,
    state: "Running",
  },
  {
    id: "db-001",
    name: "postgres-prod",
    type: "Database",
    cloud: "GCP",
    region: "us-central1",
    cost: 234.12,
    state: "Running",
  },
  {
    id: "s3-001",
    name: "app-storage-bucket",
    type: "Storage",
    cloud: "AWS",
    region: "us-west-2",
    cost: 45.89,
    state: "Active",
  },
  {
    id: "lb-001",
    name: "prod-load-balancer",
    type: "Load Balancer",
    cloud: "Azure",
    region: "westus",
    cost: 67.23,
    state: "Running",
  },
];

export const recommendations = [
  {
    id: "rec-001",
    title: "Terminate idle EC2 instance",
    description: "Instance i-0abc123def456 has been idle for 14 days",
    impact: 145.67,
    confidence: 95,
    type: "cost",
  },
  {
    id: "rec-002",
    title: "Resize Azure VM to B2S",
    description: "VM is underutilized, downsize to save costs",
    impact: 89.34,
    confidence: 87,
    type: "cost",
  },
  {
    id: "rec-003",
    title: "Enable S3 lifecycle policy",
    description: "Move infrequently accessed data to Glacier",
    impact: 234.56,
    confidence: 92,
    type: "cost",
  },
  {
    id: "rec-004",
    title: "Use Reserved Instances",
    description: "Save 40% on consistent workloads",
    impact: 567.89,
    confidence: 98,
    type: "cost",
  },
];

export const budgets = [
  {
    id: "budget-001",
    name: "Production Environment",
    limit: 5000,
    spent: 4234,
    status: "warning",
  },
  {
    id: "budget-002",
    name: "Development Environment",
    limit: 2000,
    spent: 1567,
    status: "ok",
  },
  {
    id: "budget-003",
    name: "Testing Environment",
    limit: 1000,
    spent: 1123,
    status: "exceeded",
  },
];

export const policies = [
  {
    id: "pol-001",
    name: "MFA Required for Admin",
    status: "Compliant",
    severity: "high",
    resources: 45,
  },
  {
    id: "pol-002",
    name: "Encryption at Rest",
    status: "Non-Compliant",
    severity: "critical",
    resources: 12,
  },
  {
    id: "pol-003",
    name: "Public Access Disabled",
    status: "Compliant",
    severity: "high",
    resources: 78,
  },
  {
    id: "pol-004",
    name: "Logging Enabled",
    status: "Compliant",
    severity: "medium",
    resources: 234,
  },
];

export const users = [
  {
    id: "user-001",
    name: "Sarah Chen",
    email: "sarah.chen@company.com",
    role: "Admin",
    lastActive: "2024-01-15 14:23",
  },
  {
    id: "user-002",
    name: "Michael Rodriguez",
    email: "m.rodriguez@company.com",
    role: "FinOps",
    lastActive: "2024-01-15 11:45",
  },
  {
    id: "user-003",
    name: "Emily Watson",
    email: "e.watson@company.com",
    role: "Viewer",
    lastActive: "2024-01-14 16:32",
  },
];

export const terraformTemplates = [
  {
    id: "tf-001",
    name: "EC2 Web Server",
    provider: "AWS",
    category: "Compute",
    description: "Deploy a basic web server with auto-scaling",
  },
  {
    id: "tf-002",
    name: "Azure SQL Database",
    provider: "Azure",
    category: "Database",
    description: "Managed SQL database with backup",
  },
  {
    id: "tf-003",
    name: "GCP Kubernetes Cluster",
    provider: "GCP",
    category: "Container",
    description: "Managed Kubernetes cluster with monitoring",
  },
  {
    id: "tf-004",
    name: "S3 Bucket with CDN",
    provider: "AWS",
    category: "Storage",
    description: "S3 bucket with CloudFront distribution",
  },
];

export const integrations = [
  { id: "github", name: "GitHub", connected: true, color: "#333333" },
  { id: "jenkins", name: "Jenkins", connected: false, color: "#D24939" },
  { id: "jira", name: "Jira", connected: true, color: "#0052CC" },
  { id: "slack", name: "Slack", connected: true, color: "#4A154B" },
];

export const auditLogs = [
  {
    id: "log-001",
    timestamp: "2024-01-15 14:23:45",
    user: "Sarah Chen",
    action: "Deployed stack: prod-web-server",
    status: "success",
  },
  {
    id: "log-002",
    timestamp: "2024-01-15 11:45:12",
    user: "Michael Rodriguez",
    action: "Updated budget: Production Environment",
    status: "success",
  },
  {
    id: "log-003",
    timestamp: "2024-01-14 16:32:58",
    user: "Emily Watson",
    action: "Viewed resource: postgres-prod",
    status: "success",
  },
];

export const workflows = [
  {
    id: "wf-001",
    name: "Auto-Scale Production",
    trigger: "CPU > 80%",
    actions: "Scale up instances",
    status: "Active",
    lastRun: "2024-01-15 12:00",
  },
  {
    id: "wf-002",
    name: "Backup Databases",
    trigger: "Daily at 2 AM",
    actions: "Snapshot all RDS instances",
    status: "Active",
    lastRun: "2024-01-15 02:00",
  },
  {
    id: "wf-003",
    name: "Cost Alert",
    trigger: "Daily spend > $500",
    actions: "Send email notification",
    status: "Active",
    lastRun: "2024-01-14 18:30",
  },
];

export const monitoringMetrics = {
  cpuUtilization: [
    { time: "00:00", value: 45 },
    { time: "04:00", value: 38 },
    { time: "08:00", value: 62 },
    { time: "12:00", value: 78 },
    { time: "16:00", value: 85 },
    { time: "20:00", value: 72 },
  ],
  memoryUsage: [
    { time: "00:00", value: 4.2 },
    { time: "04:00", value: 3.8 },
    { time: "08:00", value: 5.6 },
    { time: "12:00", value: 6.8 },
    { time: "16:00", value: 7.2 },
    { time: "20:00", value: 6.1 },
  ],
  uptime: 99.87,
};

export const costExplorerData = [
  { date: "Jan 1", compute: 450, storage: 230, network: 120, database: 189 },
  { date: "Jan 2", compute: 478, storage: 245, network: 135, database: 201 },
  { date: "Jan 3", compute: 512, storage: 256, network: 142, database: 223 },
  { date: "Jan 4", compute: 489, storage: 267, network: 128, database: 234 },
  { date: "Jan 5", compute: 534, storage: 278, network: 156, database: 245 },
  { date: "Jan 6", compute: 567, storage: 289, network: 167, database: 256 },
  { date: "Jan 7", compute: 589, storage: 301, network: 178, database: 267 },
];

export const departmentCosts = [
  { department: "Engineering", cost: 4500, percentage: 45 },
  { department: "Sales", cost: 2300, percentage: 23 },
  { department: "Marketing", cost: 1800, percentage: 18 },
  { department: "Operations", cost: 1400, percentage: 14 },
];

// Security Management Data
export const securityMetrics = {
  totalRoles: 45,
  totalKeys: 23,
  issuesFound: 7,
  securityScore: 87,
};

export const vulnerabilities = [
  { id: "vuln-001", title: "Unencrypted S3 Bucket", severity: "critical", resource: "app-storage-bucket", status: "Open" },
  { id: "vuln-002", title: "Weak IAM Policy", severity: "high", resource: "prod-web-server-01", status: "In Progress" },
  { id: "vuln-003", title: "Outdated SSL Certificate", severity: "medium", resource: "prod-load-balancer", status: "Open" },
  { id: "vuln-004", title: "Missing MFA", severity: "high", resource: "admin-user-group", status: "Resolved" },
];

// Cost Management Data
export const approvalWorkflows = [
  { id: "wf-001", rule: "Spending > $1000", approver: "Sarah Chen", status: "Active", lastTriggered: "2024-01-15" },
  { id: "wf-002", rule: "New Resource Creation", approver: "Michael Rodriguez", status: "Active", lastTriggered: "2024-01-14" },
  { id: "wf-003", rule: "Resource Termination", approver: "Sarah Chen", status: "Active", lastTriggered: "2024-01-13" },
];

// Users & Organizations Data
export const organizationUsers = [
  { id: "user-001", name: "Sarah Chen", email: "sarah.chen@company.com", role: "Admin", department: "Engineering", lastActive: "2024-01-15 14:23" },
  { id: "user-002", name: "Michael Rodriguez", email: "m.rodriguez@company.com", role: "FinOps", department: "Finance", lastActive: "2024-01-15 11:45" },
  { id: "user-003", name: "Emily Watson", email: "e.watson@company.com", role: "Viewer", department: "Operations", lastActive: "2024-01-14 16:32" },
  { id: "user-004", name: "David Kim", email: "d.kim@company.com", role: "Admin", department: "Engineering", lastActive: "2024-01-15 09:15" },
  { id: "user-005", name: "Lisa Anderson", email: "l.anderson@company.com", role: "FinOps", department: "Finance", lastActive: "2024-01-13 13:22" },
];

export const auditTimeline = [
  { id: "audit-001", timestamp: "2024-01-15 14:23:45", user: "Sarah Chen", action: "Deployed stack: prod-web-server", status: "success", details: "Successfully deployed EC2 instance with auto-scaling" },
  { id: "audit-002", timestamp: "2024-01-15 11:45:12", user: "Michael Rodriguez", action: "Updated budget: Production Environment", status: "success", details: "Increased budget limit from $4000 to $5000" },
  { id: "audit-003", timestamp: "2024-01-14 16:32:58", user: "Emily Watson", action: "Viewed resource: postgres-prod", status: "success", details: "Accessed database configuration" },
  { id: "audit-004", timestamp: "2024-01-14 10:15:33", user: "David Kim", action: "Created new IAM role", status: "success", details: "Added read-only role for analytics team" },
  { id: "audit-005", timestamp: "2024-01-13 13:22:11", user: "Lisa Anderson", action: "Terminated idle instance", status: "success", details: "Removed i-0abc123def456 to reduce costs" },
];

// API & Access Management Data
export const apiTokens = [
  { id: "token-001", name: "Production API Key", scope: "Full Access", created: "2024-01-01", lastUsed: "2024-01-15", status: "Active" },
  { id: "token-002", name: "CI/CD Pipeline", scope: "Deploy Only", created: "2023-12-15", lastUsed: "2024-01-15", status: "Active" },
  { id: "token-003", name: "Monitoring Service", scope: "Read Only", created: "2023-11-20", lastUsed: "2024-01-14", status: "Active" },
  { id: "token-004", name: "Legacy Integration", scope: "Limited", created: "2023-08-10", lastUsed: "2023-12-01", status: "Expired" },
];

// System Configuration Data
export const systemConfig = {
  terraformBackend: "https://terraform.example.com/api",
  ansibleBackend: "https://ansible.example.com/api",
  backupEnabled: true,
  logRetention: "90",
  defaultRegion: "us-east-1",
  notificationEmail: "admin@company.com",
};
