
import { useState, useMemo } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { DashboardStats } from './DashboardStats';
import { DashboardFilters } from './DashboardFilters';
import { BusinessUnitSection } from './BusinessUnitSection';
import { Navbar } from './Navbar';

import { 
  businessUnits, 
  agentSources, 
  agents, 
  getDashboardStats, 
  getBusinessUnitById 
} from '@/data/mockData';

export function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBusinessUnits, setSelectedBusinessUnits] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const handleFilterChange = (
    type: 'businessUnit' | 'source' | 'status',
    values: string[]
  ) => {
    if (type === 'businessUnit') {
      setSelectedBusinessUnits(values);
    } else if (type === 'source') {
      setSelectedSources(values);
    } else if (type === 'status') {
      setSelectedStatuses(values);
    }
  };

  const filteredAgents = useMemo(() => {
    return agents.filter(agent => {
      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !agent.name.toLowerCase().includes(query) &&
          !agent.description.toLowerCase().includes(query)
        ) {
          return false;
        }
      }
      
      // Apply business unit filter
      if (selectedBusinessUnits.length > 0 && !selectedBusinessUnits.includes(agent.businessUnitId)) {
        return false;
      }
      
      // Apply source filter
      if (selectedSources.length > 0 && !selectedSources.includes(agent.sourceId)) {
        return false;
      }
      
      // Apply status filter
      if (selectedStatuses.length > 0 && !selectedStatuses.includes(agent.status)) {
        return false;
      }
      
      return true;
    });
  }, [searchQuery, selectedBusinessUnits, selectedSources, selectedStatuses]);

  // Group filtered agents by business unit
  const agentsByBusinessUnit = useMemo(() => {
    const grouped: Record<string, typeof filteredAgents> = {};
    
    businessUnits.forEach(unit => {
      grouped[unit.id] = filteredAgents.filter(
        agent => agent.businessUnitId === unit.id
      );
    });
    
    return grouped;
  }, [filteredAgents]);

  const dashboardStats = getDashboardStats();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
        <DashboardHeader 
          title="Agent Plane Dashboard" 
          onSearchChange={setSearchQuery} 
        />
        
        <DashboardStats stats={dashboardStats} />
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Agents by Business Unit</h2>
          
          <DashboardFilters 
            businessUnits={businessUnits}
            sources={agentSources}
            selectedBusinessUnits={selectedBusinessUnits}
            selectedSources={selectedSources}
            selectedStatuses={selectedStatuses}
            onFilterChange={handleFilterChange}
          />
        </div>
        
        <div className="space-y-6">
          {businessUnits.map(unit => {
            const unitAgents = agentsByBusinessUnit[unit.id] || [];
            return (
              <BusinessUnitSection 
                key={unit.id}
                businessUnit={unit}
                agents={unitAgents}
              />
            );
          })}
          
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
    </div>
  );
}
