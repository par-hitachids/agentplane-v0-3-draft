
import { useState } from 'react';
import { Search, Cog, Activity, Shield, Cloud } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
  const [activeTab, setActiveTab] = useState('functions');

  const handleFunctionFilter = (functionId: string) => {
    const newSelectedFunctions = selectedFunctions.includes(functionId)
      ? selectedFunctions.filter(id => id !== functionId)
      : [...selectedFunctions, functionId];
    onFilterChange('function', newSelectedFunctions);
  };

  const handleBusinessUnitFilter = (unitId: string) => {
    const newSelectedUnits = selectedBusinessUnits.includes(unitId)
      ? selectedBusinessUnits.filter(id => id !== unitId)
      : [...selectedBusinessUnits, unitId];
    onFilterChange('businessUnit', newSelectedUnits);
  };

  // Function to render the appropriate icon based on function name
  const getFunctionIcon = (name: string) => {
    switch (name) {
      case 'Operations AI':
        return <Cog className="mr-1 h-4 w-4" />;
      case 'Analytical AI':
        return <Activity className="mr-1 h-4 w-4" />;
      case 'Security AI':
        return <Shield className="mr-1 h-4 w-4" />;
      case 'Cloud AI':
        return <Cloud className="mr-1 h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Tabs defaultValue="functions" className="mt-4" onValueChange={setActiveTab}>
      <div className="flex flex-col space-y-4">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="functions">Agents by Functions</TabsTrigger>
          <TabsTrigger value="businessUnits">Agents by Business Units</TabsTrigger>
        </TabsList>
        
        <div className="flex flex-col space-y-4 w-full">
          {/* First row: Function/Business Unit buttons spanning the entire width */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 w-full">
            {activeTab === 'functions' && businessFunctions.map(func => (
              <Button
                key={func.id}
                variant={selectedFunctions.includes(func.id) ? "default" : "outline"}
                onClick={() => handleFunctionFilter(func.id)}
                className="flex items-center h-auto py-2 min-h-10"
                style={{
                  backgroundColor: selectedFunctions.includes(func.id) ? func.color : 'transparent',
                  color: selectedFunctions.includes(func.id) ? 'white' : 'inherit',
                  borderColor: func.color
                }}
              >
                {getFunctionIcon(func.name)}
                {func.name}
              </Button>
            ))}
            {activeTab === 'businessUnits' && businessUnits.map(unit => (
              <Button
                key={unit.id}
                variant={selectedBusinessUnits.includes(unit.id) ? "default" : "outline"}
                onClick={() => handleBusinessUnitFilter(unit.id)}
                className="h-auto py-2 min-h-10"
                style={{
                  backgroundColor: selectedBusinessUnits.includes(unit.id) ? unit.color : 'transparent',
                  color: selectedBusinessUnits.includes(unit.id) ? 'white' : 'inherit',
                  borderColor: unit.color
                }}
              >
                {unit.name}
              </Button>
            ))}
          </div>
          
          {/* Second row: Search and filters aligned */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
            <div className="relative flex-grow max-w-md">
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
