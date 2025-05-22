
import { useState } from 'react';
import { Navbar } from '@/components/dashboard/Navbar';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { getDashboardStats } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FileText, Layers, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const dashboardStats = getDashboardStats();
  const [newsItems] = useState([
    {
      id: 1,
      title: 'New Security AI Agent Released',
      content: 'Our new Security AI agent helps detect and prevent cyber threats in real-time.',
      date: '2025-05-20',
    },
    {
      id: 2,
      title: 'Operations AI v2.5 Now Available',
      content: 'Latest update includes improved response times and enhanced decision-making capabilities.',
      date: '2025-05-15',
    },
    {
      id: 3,
      title: 'Analytics AI Integration with Power BI',
      content: 'Connect our Analytics AI directly to Power BI dashboards for enhanced data visualization.',
      date: '2025-05-10',
    },
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <h1 className="text-3xl font-bold mb-2">Welcome to HARC.Agents - AgentPlane</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Your centralized platform for AI agent management, deployment, and monitoring
        </p>

        {/* Stats Overview */}
        <DashboardStats stats={dashboardStats} />
        
        {/* Main Navigation Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                AI Agents Library
                <FileText className="h-5 w-5 text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Browse and discover AI agents organized by business functions and organizational units.</p>
              <Button asChild className="w-full">
                <Link to="/agent-library" className="flex justify-between items-center">
                  Explore Agents <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Deployment Hub
                <Layers className="h-5 w-5 text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Deploy, monitor, and manage AI agents across your organization's infrastructure.</p>
              <Button asChild className="w-full">
                <Link to="/deployment-hub" className="flex justify-between items-center">
                  Manage Deployments <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                New Agent Onboarding
                <Send className="h-5 w-5 text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Submit new AI agents for review and deployment through our standardized process.</p>
              <Button asChild className="w-full">
                <Link to="/agent-onboarding" className="flex justify-between items-center">
                  Submit New Agent <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Latest News Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Latest News & Updates</h2>
          <div className="grid gap-4">
            {newsItems.map(item => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">{item.content}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{item.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline">View All Updates</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
