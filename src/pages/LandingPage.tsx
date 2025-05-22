
import { useState } from 'react';
import { Navbar } from '@/components/dashboard/Navbar';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { getDashboardStats } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FileText, Layers, Send, ChevronRight } from 'lucide-react';
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
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 mb-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-blue-600 mb-2">Welcome to</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
              Your AI Agent Management Platform
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Centralized platform for AI agent management, deployment, and monitoring across your organization
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Link to="/agent-library" className="flex items-center">
                  Explore Agents <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/agent-onboarding" className="flex items-center">
                  Submit New Agent <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <DashboardStats stats={dashboardStats} />
        
        {/* Main Navigation Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-md transition-shadow border-t-4 border-t-blue-500 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardTitle className="flex justify-between items-center">
                AI Agents Library
                <FileText className="h-5 w-5 text-blue-600" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-gray-600">Browse and discover AI agents organized by business functions and organizational units.</p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link to="/agent-library" className="flex justify-between items-center">
                  Explore Agents <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow border-t-4 border-t-indigo-500 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100">
              <CardTitle className="flex justify-between items-center">
                Deployment Hub
                <Layers className="h-5 w-5 text-indigo-600" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-gray-600">Deploy, monitor, and manage AI agents across your organization's infrastructure.</p>
              <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                <Link to="/deployment-hub" className="flex justify-between items-center">
                  Manage Deployments <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow border-t-4 border-t-purple-500 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
              <CardTitle className="flex justify-between items-center">
                New Agent Onboarding
                <Send className="h-5 w-5 text-purple-600" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-gray-600">Submit new AI agents for review and deployment through our standardized process.</p>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                <Link to="/agent-onboarding" className="flex justify-between items-center">
                  Submit New Agent <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Latest News Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Latest News & Updates</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {newsItems.map(item => (
              <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="p-4 bg-gradient-to-r from-gray-50 to-gray-100">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-600">{item.content}</p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-blue-600">
                    Read more <ChevronRight className="h-3 w-3 ml-1 inline" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" size="lg">View All Updates</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
