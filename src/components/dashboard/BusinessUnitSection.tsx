import { AgentCard } from './AgentCard';
import { Agent, BusinessUnit } from '@/types';
import { getSourceById } from '@/data/mockData';
import { ChevronDown, ChevronUp, Users } from 'lucide-react';
import { useState } from 'react';
interface BusinessUnitSectionProps {
  businessUnit: BusinessUnit;
  agents: Agent[];
  showEmpty?: boolean;
}
export function BusinessUnitSection({
  businessUnit,
  agents,
  showEmpty = false
}: BusinessUnitSectionProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  if (agents.length === 0 && !showEmpty) {
    return null;
  }
  return <div className="mb-8 py-[20px]">
      <div className="flex items-center justify-between border-b pb-2 mb-4 cursor-pointer" onClick={toggleCollapse}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{
          backgroundColor: businessUnit.color
        }}></div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            {businessUnit.name}
            <span className="text-sm font-normal text-muted-foreground flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {agents.length} agents
            </span>
          </h2>
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          {isCollapsed ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
        </button>
      </div>
      
      {!isCollapsed && <>
          {agents.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agents.map(agent => {
          const source = getSourceById(agent.sourceId);
          if (!source) return null;
          return <AgentCard key={agent.id} agent={agent} businessUnit={businessUnit} source={source} />;
        })}
            </div> : <div className="text-center py-8 bg-gray-50 rounded-md">
              <p className="text-muted-foreground">No agents available in this business unit</p>
            </div>}
        </>}
    </div>;
}