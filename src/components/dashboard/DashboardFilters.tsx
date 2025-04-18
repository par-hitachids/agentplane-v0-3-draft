
import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BusinessUnit, AgentSource, BusinessFunction } from '@/types';

interface DashboardFiltersProps {
  businessUnits: BusinessUnit[];
  sources: AgentSource[];
  businessFunctions: BusinessFunction[];
  selectedBusinessUnits: string[];
  selectedSources: string[];
  selectedStatuses: string[];
  selectedFunctions: string[];
  onFilterChange: (
    type: 'businessUnit' | 'source' | 'status' | 'function',
    values: string[]
  ) => void;
}

export function DashboardFilters({
  businessUnits,
  sources,
  businessFunctions,
  selectedBusinessUnits,
  selectedSources,
  selectedStatuses,
  selectedFunctions,
  onFilterChange,
}: DashboardFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const statuses = ['active', 'inactive', 'maintenance'];
  
  const handleBusinessUnitChange = (id: string) => {
    let newSelection = selectedBusinessUnits.includes(id)
      ? selectedBusinessUnits.filter(unitId => unitId !== id)
      : [...selectedBusinessUnits, id];
    onFilterChange('businessUnit', newSelection);
  };
  
  const handleSourceChange = (id: string) => {
    let newSelection = selectedSources.includes(id)
      ? selectedSources.filter(sourceId => sourceId !== id)
      : [...selectedSources, id];
    onFilterChange('source', newSelection);
  };
  
  const handleStatusChange = (status: string) => {
    let newSelection = selectedStatuses.includes(status)
      ? selectedStatuses.filter(s => s !== status)
      : [...selectedStatuses, status];
    onFilterChange('status', newSelection);
  };

  const handleFunctionChange = (id: string) => {
    let newSelection = selectedFunctions.includes(id)
      ? selectedFunctions.filter(funcId => funcId !== id)
      : [...selectedFunctions, id];
    onFilterChange('function', newSelection);
  };
  
  const resetAllFilters = () => {
    onFilterChange('businessUnit', []);
    onFilterChange('source', []);
    onFilterChange('status', []);
    onFilterChange('function', []);
  };
  
  const hasActiveFilters = selectedBusinessUnits.length > 0 || 
    selectedSources.length > 0 || 
    selectedStatuses.length > 0 ||
    selectedFunctions.length > 0;
    
  const totalFilterCount = selectedBusinessUnits.length + 
    selectedSources.length + 
    selectedStatuses.length +
    selectedFunctions.length;
    
  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            {totalFilterCount > 0 && (
              <span className="ml-1 rounded-full bg-primary w-5 h-5 text-xs flex items-center justify-center text-primary-foreground">
                {totalFilterCount}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" align="start">
          <DropdownMenuLabel>Filter Agents</DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <div className="p-2">
            <h4 className="mb-2 text-sm font-medium">Business Functions</h4>
            <div className="space-y-2">
              {businessFunctions.map(func => (
                <div key={func.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`func-${func.id}`} 
                    checked={selectedFunctions.includes(func.id)}
                    onCheckedChange={() => handleFunctionChange(func.id)}
                  />
                  <label 
                    htmlFor={`func-${func.id}`}
                    className="text-sm font-normal cursor-pointer flex items-center gap-2"
                  >
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: func.color }}
                    ></div>
                    {func.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <DropdownMenuSeparator />
          
          <div className="p-2">
            <h4 className="mb-2 text-sm font-medium">Business Units</h4>
            <div className="space-y-2">
              {businessUnits.map(unit => (
                <div key={unit.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`bu-${unit.id}`} 
                    checked={selectedBusinessUnits.includes(unit.id)}
                    onCheckedChange={() => handleBusinessUnitChange(unit.id)}
                  />
                  <label 
                    htmlFor={`bu-${unit.id}`}
                    className="text-sm font-normal cursor-pointer flex items-center gap-2"
                  >
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: unit.color }}
                    ></div>
                    {unit.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <DropdownMenuSeparator />
          
          <div className="p-2">
            <h4 className="mb-2 text-sm font-medium">Agent Sources</h4>
            <div className="space-y-2">
              {sources.map(source => (
                <div key={source.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`src-${source.id}`} 
                    checked={selectedSources.includes(source.id)}
                    onCheckedChange={() => handleSourceChange(source.id)}
                  />
                  <label 
                    htmlFor={`src-${source.id}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {source.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <DropdownMenuSeparator />
          
          <div className="p-2">
            <h4 className="mb-2 text-sm font-medium">Status</h4>
            <div className="space-y-2">
              {statuses.map(status => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`status-${status}`} 
                    checked={selectedStatuses.includes(status)}
                    onCheckedChange={() => handleStatusChange(status)}
                  />
                  <label 
                    htmlFor={`status-${status}`}
                    className="text-sm font-normal cursor-pointer capitalize"
                  >
                    {status}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <DropdownMenuSeparator />
          
          <div className="p-2 flex justify-end">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={resetAllFilters}
              disabled={!hasActiveFilters}
            >
              Reset Filters
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {hasActiveFilters && (
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 px-2"
          onClick={resetAllFilters}
        >
          <X className="h-4 w-4 mr-1" />
          Clear filters
        </Button>
      )}
    </div>
  );
}
