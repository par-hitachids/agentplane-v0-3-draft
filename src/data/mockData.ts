import { Agent, BusinessUnit, AgentSource, DashboardStats, BusinessFunction } from '@/types';
import RAI_Dashboard from '../lib/RAI_Dashboard.jpeg';

// Business Functions
export const businessFunctions: BusinessFunction[] = [
  {
    id: 'func1',
    name: 'Engineering AI',
    description: 'AI solutions for business applications',
    color: '#4CAF50'
  },
  {
    id: 'func2',
    name: 'Industrial AI',
    description: 'AI solutions for manufacturing and industrial applications',
    color: '#FF9800'
  },
  {
    id: 'func3',
    name: 'Enterprise AI',
    description: 'AI solutions for enterprise-wide applications',
    color: '#2196F3'
  }
];

// Business Units
export const businessUnits: BusinessUnit[] = [
  {
    id: 'bu1',
    name: 'Multi-Domain',
    description: 'Demo agents that can be used across business domains',
    color: '#B30100'
  },
  {
    id: 'bu2',
    name: 'Banking & Financial Services',
    description: 'AI solutions for banking and financial services',
    color: '#3F51B5'
  },
  {
    id: 'bu3',
    name: 'Manufacturing',
    description: 'AI solutions for manufacturing industries',
    color: '#FF9800'
  },
  {
    id: 'bu4',
    name: 'Healthcare',
    description: 'AI solutions for healthcare providers',
    color: '#4CAF50'
  },
  {
    id: 'bu5',
    name: 'Insurance',
    description: 'AI solutions for insurance companies',
    color: '#9C27B0'
  }
];

// Agent Sources
export const agentSources: AgentSource[] = [
  {
    id: 'src1',
    name: 'HitachiDS Development',
    description: 'Agents developed by Hitachi Digital Services'
  },
  {
    id: 'src2',
    name: 'Hitachi R&D Labs',
    description: 'Agents developed by Hitachi R&D Labs'
  },
  {
    id: 'src3',
    name: 'LCNC AI Platform',
    description: 'Agents powered by SaaS AI providers'
  },
  {
    id: 'src4',
    name: 'Partner AI Provider',
    description: 'Agents provided by Hitachi Partners'
  },
  {
    id: 'src5',
    name: 'Hitachi One',
    description: 'Agents available through Hitachi Organization'
  }
];

// Sample Agents
export const agents: Agent[] = [
  {
    id: 'agent1',
    name: 'GitHub Agent',
    description: 'A conversational GitHub automation agent built with LangGraph, allowing users to manage repositories, issues, PRs, and workflows through natural language commands.',
    businessFunctionId: 'func1',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-02-15',
    lastActive: '2025-04-15',
    performance: {
      successRate: 92,
      responseTime: 5,
      completedTasks: 40,
    },
    type: 'Conversational AI',
    version: '1.0.0',
    owner: 'Ashwin B.',
    cost: 0.05,
    demoUrl: 'https://tso-ghagent-capp.thankfulflower-bbc92453.centralus.azurecontainerapps.io'
  },
  {
    id: 'agent2',
    name: 'ServiceNow Agent',
    description: 'An intelligent agent designed to retrieve, correlate, and analyze historical incidents, alerts, problems, and service requests from ITSM systems like ServiceNow. It accelerates Root Cause Analysis (RCA), surfaces recurring patterns, and assists operators with actionable insights for faster incident resolution.',
    businessFunctionId: 'func1',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-01-20',
    lastActive: '2025-04-15',
    performance: {
      successRate: 94,
      responseTime: 6,
      completedTasks: 35,
    },
    type: 'Agentic RAG',
    version: '1.0.0',
    owner: 'Sai Subramanian',
    cost: 0.12,
    demoUrl: 'https://service-now-agent.politesky-9f28c895.eastus.azurecontainerapps.io'
  },
  {
    id: 'agent3',
    name: 'Product Documentation Agent',
    description: 'AI agent for intelligent documentation assistance',
    businessFunctionId: 'func1',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-04-20',
    lastActive: '2025-04-22',
    performance: {
      successRate: 92,
      responseTime: 7,
      completedTasks: 28
    },
    type: 'Generative AI',
    version: '1.0.0',
    owner: 'Chandra G.',
    cost: 0.09
  },
  {
    id: 'agent4',
    name: 'RAI Analytics',
    description: 'Dashboard providing analytics based on user interactions with RAI',
    businessFunctionId: 'func1',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2024-09-15',
    lastActive: '2025-03-10',
    performance: {
      successRate: 98,
      responseTime: 2,
      completedTasks: 20
    },
    type: 'Responsible AI',
    version: '1.0.0',
    owner: 'Subbu Venkatesan',
    demoUrl: RAI_Dashboard,
  },
  {
    id: 'agent5',
    name: 'Diagnostic Fault Tree Based Assistant',
    description: 'Provides repair assistance based on diagnostic fault tree learned from repair manuals',
    businessFunctionId: 'func2',
    businessUnitId: 'bu3',
    sourceId: 'src2',
    status: 'active',
    createdAt: '2024-01-01',
    lastActive: '2025-04-23',
    performance: {
      successRate: 95,
      responseTime: 2,
      completedTasks: 100,
    },
    type: 'Large Language Model, Tree Search',
    version: '1.0.0',
    owner: 'Hitachi R&D',
    cost: 0.05,
    demoUrl: 'https://rd.hitachi.com/_tags/AI_%26_Data_science'
  }, 
  {
    id: 'agent6',
    name: 'Vehicle Roadside Failure Triage Assistant',
    description: 'Provides triage assistance to drivers during roadside failure',
    businessFunctionId: 'func2',
    businessUnitId: 'bu3',
    sourceId: 'src2',
    status: 'active',
    createdAt: '2024-10-01',
    lastActive: '2025-04-23',
    performance: {
      successRate: 90,
      responseTime: 3,
      completedTasks: 50,
    },
    type: 'Large Language Model, Classification',
    version: '1.0.0',
    owner: 'Hitachi R&D',
    cost: 0.05,
    demoUrl: 'https://rd.hitachi.com/_tags/AI_%26_Data_science'
  },
  {
    id: 'agent7',
    name: 'Regulatory Intelligence Agent',
    description: 'AI-powered regulatory document analysis',
    businessFunctionId: 'func1',
    businessUnitId: 'bu2',
    sourceId: 'src3',
    status: 'active',
    createdAt: '2025-04-20',
    lastActive: '2025-04-23',
    performance: {
      successRate: 92,
      responseTime: 8,
      completedTasks: 20,
    },
    type: 'Regulatory Compliance',
    version: '1.0.0',
    owner: 'Parag Y Shetye',
    cost: 0.05,
    demoUrl: 'https://regintel-agent.lovable.app'
  }, 
];

// Helper function to get business function by id
export const getBusinessFunctionById = (id: string): BusinessFunction | undefined => {
  return businessFunctions.find(func => func.id === id);
};

// Helper function to get business unit by id
export const getBusinessUnitById = (id: string): BusinessUnit | undefined => {
  return businessUnits.find(unit => unit.id === id);
};

// Helper function to get source by id
export const getSourceById = (id: string): AgentSource | undefined => {
  return agentSources.find(source => source.id === id);
};

// Map agents to business functions
export const mapAgentToFunction = (agent: Agent): string => {
  if (agent.businessFunctionId) {
    return agent.businessFunctionId;
  } else if (agent.businessUnitId === 'bu5') {
    return 'func1'; // Agentic AI Demos -> Engineering AI
  } else if (agent.businessUnitId === 'bu2') {
    return 'func2'; // Manufacturing -> Industrial AI
  } else {
    return 'func1'; // Everything else -> Engineering AI
  }
};

// Get dashboard stats
export const getDashboardStats = (): DashboardStats => {
  return {
    totalAgents: agents.length,
    activeAgents: agents.filter(agent => agent.status === 'active').length,
    businessUnits: businessUnits.length,
    sources: agentSources.length
  };
};
