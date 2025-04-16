import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Agent, BusinessUnit, AgentSource } from '@/types';
import { Clock, Activity, CheckCircle2, ExternalLink } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
  businessUnit: BusinessUnit;
  source: AgentSource;
}

export function AgentCard({ agent, businessUnit, source }: AgentCardProps) {
  // Status colors
  const statusColors = {
    active: 'bg-green-500',
    inactive: 'bg-gray-500',
    maintenance: 'bg-yellow-500',
  };

  // Format date to readable format
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Generate a demo URL using the agent ID or specific demo URL
  const getDemoUrl = (agent: Agent) => {
    // Use specific demoUrl if provided, otherwise fall back to default
    return agent.demoUrl || `https://demo.hitachivantara.com/agents/${agent.id}`;
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2" style={{ borderTop: `4px solid ${businessUnit.color}` }}>
        <div className="flex justify-between items-start">
          <div>
            <a 
              href={getDemoUrl(agent)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-lg hover:text-primary flex items-center group"
            >
              {agent.name}
              <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-muted-foreground text-sm">{agent.type}</p>
          </div>
          <Badge 
            variant="secondary"
            className={`${statusColors[agent.status]} text-white capitalize`}
          >
            {agent.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Success:</span>
            <span className="font-medium">{agent.performance?.successRate || 0}%</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Resp time:</span>
            <span className="font-medium">{agent.performance?.responseTime || 0}s</span>
          </div>
          
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Tasks:</span>
            <span className="font-medium">{agent.performance?.completedTasks.toLocaleString() || 0}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 bg-muted/20 flex-col items-start">
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs w-full">
          <div>
            <span className="text-muted-foreground">Source:</span>
            <p className="font-medium">{source.name}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Owner:</span>
            <p className="font-medium">{agent.owner}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Version:</span>
            <p className="font-medium">{agent.version}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Created:</span>
            <p className="font-medium">{formatDate(agent.createdAt)}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
