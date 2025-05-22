
import { Navbar } from '@/components/dashboard/Navbar';
import { AgentTabs } from '@/components/dashboard/AgentTabs';
import { useState, useMemo } from 'react';
import { 
  businessUnits, 
  businessFunctions,
  agentSources, 
  agents, 
  mapAgentToFunction
} from '@/data/mockData';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const AgentLibrary = () => {
  const [selectedBusinessUnits, setSelectedBusinessUnits] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

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
            <h1 className="text-3xl font-bold">AI Agents Library</h1>
            <p className="text-muted-foreground">Discover and explore AI agents across the organization</p>
          </div>
        </div>
        
        <AgentTabs 
          businessFunctions={businessFunctions}
          businessUnits={businessUnits}
          agentsByFunction={agentsByBusinessFunction}
          agentsByBusinessUnit={agentsByBusinessUnit}
          sources={agentSources}
          selectedBusinessUnits={selectedBusinessUnits}
          selectedSources={selectedSources}
          selectedStatuses={selectedStatuses}
          selectedFunctions={selectedFunctions}
          searchQuery={searchQuery}
          onFilterChange={handleFilterChange}
          onSearchChange={setSearchQuery}
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
};

export default AgentLibrary;
