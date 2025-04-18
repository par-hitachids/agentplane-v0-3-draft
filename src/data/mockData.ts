
// Helper function to get business function by id
export const getBusinessFunctionById = (id: string): BusinessFunction | undefined => {
  return businessFunctions.find(func => func.id === id);
};

// Map agents to business functions
export const mapAgentToFunction = (agent: Agent): string => {
  if (agent.businessUnitId === 'bu5') {
    return 'func1'; // Agentic AI Demos -> Applied AI
  } else if (agent.businessUnitId === 'bu2') {
    return 'func2'; // Manufacturing -> Industrial AI
  } else {
    return 'func3'; // Everything else -> Enterprise AI
  }
};
