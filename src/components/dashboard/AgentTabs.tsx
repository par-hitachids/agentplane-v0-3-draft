
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { FunctionSection } from './FunctionSection';
import { BusinessUnitSection } from './BusinessUnitSection';
import { DashboardFilters } from './DashboardFilters';
import { BusinessUnit, BusinessFunction, Agent, AgentSource } from '@/types';

interface AgentTabsProps {
  businessFunctions: BusinessFunction[];
  businessUnits: BusinessUnit[];
  agentsByFunction: Record<string, Agent[]>;
  agentsByBusinessUnit: Record<string, Agent[]>;
  sources: AgentSource[];
  selectedBusinessUnits: string[];
  selectedSources: string[];
  selectedStatuses: string[];
  selectedFunctions: string[];
  searchQuery: string;
  onFilterChange: (
    type: 'businessUnit' | 'source' | 'status' | 'function',
    values: string[]
  ) => void;
  onSearchChange: (value: string) => void;
}

export function AgentTabs({ 
  businessFunctions, 
  businessUnits, 
  agentsByFunction,
  agentsByBusinessUnit,
  sources,
  selectedBusinessUnits,
  selectedSources,
  selectedStatuses,
  selectedFunctions,
  searchQuery,
  onFilterChange,
  onSearchChange
}: AgentTabsProps) {
  return (
    <Tabs defaultValue="functions" className="mt-4">
      <div className="flex flex-col space-y-4">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="functions">Agents by Functions</TabsTrigger>
          <TabsTrigger value="businessUnits">Agents by Business Units</TabsTrigger>
        </TabsList>
        
        <div className="flex justify-end items-center gap-4">
          <div className="relative w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search agents..."
              className="w-full bg-background pl-8"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          
          <DashboardFilters 
            businessUnits={businessUnits}
            businessFunctions={businessFunctions}
            sources={sources}
            selectedBusinessUnits={selectedBusinessUnits}
            selectedSources={selectedSources}
            selectedStatuses={selectedStatuses}
            selectedFunctions={selectedFunctions}
            onFilterChange={onFilterChange}
          />
        </div>
      </div>
      
      <TabsContent value="functions" className="space-y-6">
        {businessFunctions.map(func => (
          <FunctionSection 
            key={func.id}
            businessFunction={func}
            agents={agentsByFunction[func.id] || []}
          />
        ))}
      </TabsContent>
      
      <TabsContent value="businessUnits" className="space-y-6">
        {businessUnits.map(unit => (
          <BusinessUnitSection 
            key={unit.id}
            businessUnit={unit}
            agents={agentsByBusinessUnit[unit.id] || []}
            showEmpty={true}
          />
        ))}
      </TabsContent>
    </Tabs>
  );
}
