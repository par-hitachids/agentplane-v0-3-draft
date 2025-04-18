
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FunctionSection } from './FunctionSection';
import { BusinessUnitSection } from './BusinessUnitSection';
import { BusinessUnit, BusinessFunction, Agent } from '@/types';

interface AgentTabsProps {
  businessFunctions: BusinessFunction[];
  businessUnits: BusinessUnit[];
  agentsByFunction: Record<string, Agent[]>;
  agentsByBusinessUnit: Record<string, Agent[]>;
}

export function AgentTabs({ 
  businessFunctions, 
  businessUnits, 
  agentsByFunction,
  agentsByBusinessUnit
}: AgentTabsProps) {
  return (
    <Tabs defaultValue="functions" className="mt-4">
      <TabsList className="w-full justify-start mb-6">
        <TabsTrigger value="functions">Agents by Functions</TabsTrigger>
        <TabsTrigger value="businessUnits">Agents by Business Units</TabsTrigger>
      </TabsList>
      
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
