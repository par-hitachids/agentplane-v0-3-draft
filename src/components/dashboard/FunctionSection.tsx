
import { AgentCard } from './AgentCard';
import { Agent, BusinessFunction } from '@/types';
import { getSourceById } from '@/data/mockData';
import { ChevronDown, ChevronUp, Users } from 'lucide-react';
import { useState } from 'react';

interface FunctionSectionProps {
  businessFunction: BusinessFunction;
  agents: Agent[];
}

export function FunctionSection({ businessFunction, agents }: FunctionSectionProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="mb-8">
      <div 
        className="flex items-center justify-between border-b pb-2 mb-4 cursor-pointer"
        onClick={toggleCollapse}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: businessFunction.color }}
          ></div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            {businessFunction.name}
            <span className="text-sm font-normal text-muted-foreground flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {agents.length} agents
            </span>
          </h2>
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          {isCollapsed ? (
            <ChevronDown className="h-5 w-5" />
          ) : (
            <ChevronUp className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {!isCollapsed && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map(agent => {
            const source = getSourceById(agent.sourceId);
            if (!source) return null;
            
            return (
              <AgentCard 
                key={agent.id} 
                agent={agent} 
                businessFunction={businessFunction}
                source={source}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
