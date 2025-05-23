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
      title: 'Launch of Center for Architecture & AI (CAAI)',
      content: 'CAAI is a new, cross-practice and cross-geo working group with the mission to embed AI deeply and systematically into modern architectures, setting a new standard for how intelligent business applications are designed, built, and delivered.',
      date: '2025-05-25',
    },
    {
      id: 2,
      title: 'ServiceNow Agent v1.0 Now Available',
      content: 'An intelligent agent designed to retrieve, correlate, and analyze historical incidents, alerts, problems, and service requests from ITSM systems like ServiceNow.',
      date: '2025-05-15',
    },
    {
      id: 3,
      title: 'Launching New Deployment Hub for HARC.Agents',
      content: 'Deployment Hub is a centralized platform to manage, monitor, and streamline HARC.agent deployments across environments.',
      date: '2025-05-25',
    },
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-8 md:p-12 mb-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#e60027] mb-2">Welcome to</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-800">
              Your AI Agent Management Platform
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-6">
              Centralized platform for AI agent management, deployment, and monitoring across your organization
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#e60027] hover:bg-[#c50021] text-white border-none">
                <Link to="/agent-library" className="flex items-center">
                  Explore Agents <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-[#e60027] text-[#e60027] hover:bg-red-50">
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
          <Card className="hover:shadow-md transition-shadow border-t-4 border-t-[#e60027] overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
              <CardTitle className="flex justify-between items-center text-slate-800">
                HARC.Agents
                <FileText className="h-5 w-5 text-[#e60027]" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-slate-600">Browse and discover AI agents organized by business functions and organizational units.</p>
              <Button asChild className="w-full bg-[#e60027] hover:bg-[#c50021] border-none">
                <Link to="/agent-library" className="flex justify-between items-center">
                  Explore Agents <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow border-t-4 border-t-[#e60027] overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
              <CardTitle className="flex justify-between items-center text-slate-800">
                Deployment Hub
                <Layers className="h-5 w-5 text-[#e60027]" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-slate-600">Deploy, monitor, and manage AI agents across your organization's infrastructure.</p>
              <Button asChild className="w-full bg-[#e60027] hover:bg-[#c50021] border-none">
                <Link to="/deployment-hub" className="flex justify-between items-center">
                  Manage Deployments <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow border-t-4 border-t-[#e60027] overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
              <CardTitle className="flex justify-between items-center text-slate-800">
                New Agent Onboarding
                <Send className="h-5 w-5 text-[#e60027]" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-slate-600">Submit new AI agents for review and deployment through our standardized process.</p>
              <Button asChild className="w-full bg-[#e60027] hover:bg-[#c50021] border-none">
                <Link to="/agent-onboarding" className="flex justify-between items-center">
                  Submit New Agent <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Latest News Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b text-slate-800">Latest News & Updates</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {newsItems.map(item => (
              <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow border border-slate-200">
                <CardHeader className="p-4 bg-gradient-to-r from-slate-50 to-slate-100">
                  <CardTitle className="text-lg text-slate-800">{item.title}</CardTitle>
                  <p className="text-sm text-slate-500">{item.date}</p>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-slate-600">{item.content}</p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-[#e60027]">
                    Read more <ChevronRight className="h-3 w-3 ml-1 inline" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" size="lg" className="border-[#e60027] text-[#e60027] hover:bg-red-50">
              View All Updates
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
