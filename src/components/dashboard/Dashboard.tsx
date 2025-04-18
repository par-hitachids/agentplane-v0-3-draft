import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { DashboardFilters } from './DashboardFilters';
import { AgentTabs } from './AgentTabs';
import { Navbar } from './Navbar';

import { 
  businessUnits, 
  businessFunctions,
  agentSources, 
  agents, 
  getDashboardStats, 
  mapAgentToFunction
} from '@/data/mockData';

export function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBusinessUnits, setSelectedBusinessUnits] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>([]);

  const handleFilterChange = (
    type: 'businessUnit' | 'source' | 'status' | 'function',
    values: string[]
  ) => {
    switch (type) {
      case 'businessUnit':
        setSelectedBusinessUnits(values);
        break;
      case 'source':
        setSelectedSources(values);
        break;
      case 'status':
        setSelectedStatuses(values);
        break;
      case 'function':
        setSelectedFunctions(values);
        break;
    }
  };

  const filteredAgents = useMemo(() => {
    return agents.filter(agent => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !agent.name.toLowerCase().includes(query) &&
          !agent.description.toLowerCase().includes(query)
        ) {
          return false;
        }
      }
      
      if (selectedBusinessUnits.length > 0 && !selectedBusinessUnits.includes(agent.businessUnitId)) {
        return false;
      }
      
      if (selectedSources.length > 0 && !selectedSources.includes(agent.sourceId)) {
        return false;
      }
      
      if (selectedStatuses.length > 0 && !selectedStatuses.includes(agent.status)) {
        return false;
      }

      if (selectedFunctions.length > 0) {
        const functionId = mapAgentToFunction(agent);
        if (!selectedFunctions.includes(functionId)) {
          return false;
        }
      }
      
      return true;
    });
  }, [searchQuery, selectedBusinessUnits, selectedSources, selectedStatuses, selectedFunctions]);

  const agentsByBusinessUnit = useMemo(() => {
    const grouped: Record<string, typeof filteredAgents> = {};
    
    businessUnits.forEach(unit => {
      grouped[unit.id] = filteredAgents.filter(
        agent => agent.businessUnitId === unit.id
      );
    });
    
    return grouped;
  }, [filteredAgents]);

  const agentsByBusinessFunction = useMemo(() => {
    const grouped: Record<string, typeof filteredAgents> = {};
    
    businessFunctions.forEach(func => {
      grouped[func.id] = filteredAgents.filter(agent => {
        const functionId = mapAgentToFunction(agent);
        return functionId === func.id;
      });
    });
    
    return grouped;
  }, [filteredAgents]);

  const dashboardStats = getDashboardStats();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
        <div className="flex justify-end items-center gap-4 mb-2">
          <div className="relative w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search agents..."
              className="w-full bg-background pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <DashboardFilters 
            businessUnits={businessUnits}
            businessFunctions={businessFunctions}
            sources={agentSources}
            selectedBusinessUnits={selectedBusinessUnits}
            selectedSources={selectedSources}
            selectedStatuses={selectedStatuses}
            selectedFunctions={selectedFunctions}
            onFilterChange={handleFilterChange}
          />
        </div>
        
        <AgentTabs 
          businessFunctions={businessFunctions}
          businessUnits={businessUnits}
          agentsByFunction={agentsByBusinessFunction}
          agentsByBusinessUnit={agentsByBusinessUnit}
        />
        
        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No agents found</h3>
            <p className="text-muted-foreground mt-1">
              Try adjusting your filters or search query
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
