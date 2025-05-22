
import { useState } from 'react';
import { Navbar } from '@/components/dashboard/Navbar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Search, Filter, CloudUpload, GitBranch } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { agents } from '@/data/mockData';

const DeploymentHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [deploymentTab, setDeploymentTab] = useState('active');
  
  // Mock deployment data for demo
  const deploymentsData = agents.map(agent => ({
    id: `dep-${agent.id}`,
    agentId: agent.id,
    agentName: agent.name,
    status: ['running', 'pending', 'stopped', 'failed'][Math.floor(Math.random() * 4)],
    version: agent.version,
    environment: ['production', 'staging', 'development'][Math.floor(Math.random() * 3)],
    deployedAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
    metrics: {
      cpuUsage: Math.floor(Math.random() * 100),
      memoryUsage: Math.floor(Math.random() * 100),
      successRate: Math.floor(Math.random() * 100),
      responseTime: (Math.random() * 2).toFixed(2),
      dailyActiveUsers: Math.floor(Math.random() * 1000),
      costPerTask: (Math.random() * 0.01).toFixed(4),
    }
  }));

  const filteredDeployments = deploymentsData.filter(deployment => {
    // Filter by tab selection
    if (deploymentTab === 'active' && deployment.status !== 'running') {
      return false;
    }
    if (deploymentTab === 'pending' && deployment.status !== 'pending') {
      return false;
    }
    if (deploymentTab === 'stopped' && deployment.status !== 'stopped') {
      return false;
    }
    if (deploymentTab === 'failed' && deployment.status !== 'failed') {
      return false;
    }
    
    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return deployment.agentName.toLowerCase().includes(query) || 
             deployment.environment.toLowerCase().includes(query) ||
             deployment.version.toLowerCase().includes(query);
    }
    
    return true;
  });
  
  const statusColors: Record<string, string> = {
    running: 'bg-green-500',
    pending: 'bg-yellow-500',
    stopped: 'bg-slate-500',
    failed: 'bg-red-500',
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
        <div className="flex justify-between items-center">
          <div>
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/" className="flex items-center">
                <ChevronLeft className="h-4 w-4 mr-1" /> Back to Dashboard
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Deployment Hub</h1>
            <p className="text-muted-foreground">Manage and monitor your agent deployments</p>
          </div>
          <Button className="flex items-center">
            <CloudUpload className="mr-2 h-4 w-4" /> New Deployment
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Running Deployments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {deploymentsData.filter(d => d.status === 'running').length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Daily Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {deploymentsData.reduce((acc, curr) => acc + curr.metrics.dailyActiveUsers, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.floor(deploymentsData.reduce((acc, curr) => acc + curr.metrics.successRate, 0) / deploymentsData.length)}%
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(deploymentsData.reduce((acc, curr) => acc + parseFloat(curr.metrics.responseTime), 0) / deploymentsData.length).toFixed(2)}s
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <Tabs value={deploymentTab} onValueChange={setDeploymentTab} className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="stopped">Stopped</TabsTrigger>
                <TabsTrigger value="failed">Failed</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex w-full sm:w-auto gap-2">
              <div className="relative flex-grow max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search deployments..."
                  className="w-full bg-background pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Agent Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>Environment</TableHead>
                    <TableHead>Deployed At</TableHead>
                    <TableHead>CPU</TableHead>
                    <TableHead>Memory</TableHead>
                    <TableHead>Success Rate</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDeployments.map((deployment) => (
                    <TableRow key={deployment.id}>
                      <TableCell>{deployment.agentName}</TableCell>
                      <TableCell>
                        <Badge className={`${statusColors[deployment.status]} text-white`}>
                          {deployment.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="flex items-center">
                        <GitBranch className="h-3 w-3 mr-1" /> {deployment.version}
                      </TableCell>
                      <TableCell>{deployment.environment}</TableCell>
                      <TableCell>{formatDate(deployment.deployedAt)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress value={deployment.metrics.cpuUsage} className="h-2 w-14" />
                          <span className="text-xs">{deployment.metrics.cpuUsage}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress value={deployment.metrics.memoryUsage} className="h-2 w-14" />
                          <span className="text-xs">{deployment.metrics.memoryUsage}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{deployment.metrics.successRate}%</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          {filteredDeployments.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No deployments found</h3>
              <p className="text-muted-foreground mt-1">
                Try adjusting your filters or search criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeploymentHub;
