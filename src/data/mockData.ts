
import { Agent, BusinessUnit, AgentSource, DashboardStats, BusinessFunction } from '@/types';

// Business Functions
export const businessFunctions: BusinessFunction[] = [
  {
    id: 'func1',
    name: 'Applied AI',
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
    name: 'Banking & Financial Services',
    description: 'AI solutions for banking and financial services',
    color: '#3F51B5'
  },
  {
    id: 'bu2',
    name: 'Manufacturing',
    description: 'AI solutions for manufacturing industries',
    color: '#FF9800'
  },
  {
    id: 'bu3',
    name: 'Healthcare',
    description: 'AI solutions for healthcare providers',
    color: '#4CAF50'
  },
  {
    id: 'bu4',
    name: 'Insurance',
    description: 'AI solutions for insurance companies',
    color: '#9C27B0'
  },
  {
    id: 'bu5',
    name: 'Agentic AI Demos',
    description: 'Demo agents for showcasing AI capabilities',
    color: '#F44336'
  }
];

// Agent Sources
export const agentSources: AgentSource[] = [
  {
    id: 'src1',
    name: 'OpenAI',
    description: 'Agents powered by OpenAI models'
  },
  {
    id: 'src2',
    name: 'Azure AI',
    description: 'Agents powered by Microsoft Azure AI services'
  },
  {
    id: 'src3',
    name: 'Google AI',
    description: 'Agents powered by Google AI services'
  },
  {
    id: 'src4',
    name: 'HitachiAI',
    description: 'Proprietary Hitachi AI models'
  },
  {
    id: 'src5',
    name: 'Anthropic',
    description: 'Agents powered by Anthropic Claude models'
  }
];

// Sample Agents
export const agents: Agent[] = [
  {
    id: 'agent1',
    name: 'Financial Advisor',
    description: 'AI assistant for financial planning and investment advice',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2024-09-10T08:00:00Z',
    lastActive: '2024-10-10T14:32:00Z',
    performance: {
      successRate: 98,
      responseTime: 1.2,
      completedTasks: 5430
    },
    type: 'Assistant',
    version: '2.3.1',
    owner: 'Financial Services Team',
    cost: 0.05
  },
  {
    id: 'agent2',
    name: 'Manufacturing Optimizer',
    description: 'Optimizes production schedules and resource allocation',
    businessUnitId: 'bu2',
    sourceId: 'src2',
    status: 'active',
    createdAt: '2024-08-15T09:30:00Z',
    lastActive: '2024-10-09T16:45:00Z',
    performance: {
      successRate: 95,
      responseTime: 2.1,
      completedTasks: 3210
    },
    type: 'Optimizer',
    version: '1.5.0',
    owner: 'Manufacturing Solutions',
    cost: 0.12
  },
  {
    id: 'agent3',
    name: 'Health Analyst',
    description: 'Analyzes patient data to suggest treatment plans',
    businessUnitId: 'bu3',
    sourceId: 'src3',
    status: 'maintenance',
    createdAt: '2024-07-20T11:15:00Z',
    lastActive: '2024-10-05T09:20:00Z',
    performance: {
      successRate: 92,
      responseTime: 1.8,
      completedTasks: 2870
    },
    type: 'Analyst',
    version: '2.0.2',
    owner: 'Healthcare Division',
    cost: 0.09
  },
  {
    id: 'agent4',
    name: 'Claims Processor',
    description: 'Automates insurance claims processing and verification',
    businessUnitId: 'bu4',
    sourceId: 'src4',
    status: 'active',
    createdAt: '2024-09-01T10:00:00Z',
    lastActive: '2024-10-10T11:30:00Z',
    performance: {
      successRate: 97,
      responseTime: 0.9,
      completedTasks: 6540
    },
    type: 'Processor',
    version: '3.1.0',
    owner: 'Insurance Solutions',
    cost: 0.07
  },
  {
    id: 'agent5',
    name: 'Code Generator',
    description: 'Generates code based on natural language descriptions',
    businessUnitId: 'bu5',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2024-08-25T13:45:00Z',
    lastActive: '2024-10-10T15:10:00Z',
    performance: {
      successRate: 91,
      responseTime: 3.2,
      completedTasks: 1890
    },
    type: 'Generator',
    version: '1.2.3',
    owner: 'AI Solutions',
    cost: 0.15
  },
  {
    id: 'agent6',
    name: 'Quality Inspector',
    description: 'Inspects manufacturing quality through image processing',
    businessUnitId: 'bu2',
    sourceId: 'src5',
    status: 'inactive',
    createdAt: '2024-07-10T09:00:00Z',
    lastActive: '2024-09-28T14:00:00Z',
    performance: {
      successRate: 94,
      responseTime: 1.5,
      completedTasks: 4320
    },
    type: 'Inspector',
    version: '2.1.1',
    owner: 'Quality Control',
    cost: 0.10
  },
  {
    id: 'agent7',
    name: 'Customer Support Assistant',
    description: 'Handles customer inquiries and support requests',
    businessUnitId: 'bu1',
    sourceId: 'src2',
    status: 'active',
    createdAt: '2024-09-05T11:30:00Z',
    lastActive: '2024-10-10T13:15:00Z',
    performance: {
      successRate: 96,
      responseTime: 1.0,
      completedTasks: 7890
    },
    type: 'Assistant',
    version: '2.4.0',
    owner: 'Customer Experience',
    cost: 0.06
  },
  {
    id: 'agent8',
    name: 'Medical Record Analyzer',
    description: 'Extracts and organizes data from medical records',
    businessUnitId: 'bu3',
    sourceId: 'src3',
    status: 'active',
    createdAt: '2024-08-10T08:30:00Z',
    lastActive: '2024-10-09T10:45:00Z',
    performance: {
      successRate: 93,
      responseTime: 2.3,
      completedTasks: 3450
    },
    type: 'Analyzer',
    version: '1.7.2',
    owner: 'Medical Informatics',
    cost: 0.11
  },
  {
    id: 'agent9',
    name: 'AI Compass Demo',
    description: 'Demo agent showcasing conversational AI capabilities',
    businessUnitId: 'bu5',
    sourceId: 'src5',
    status: 'active',
    createdAt: '2024-09-15T14:00:00Z',
    lastActive: '2024-10-10T16:30:00Z',
    performance: {
      successRate: 98,
      responseTime: 0.8,
      completedTasks: 2340
    },
    type: 'Demo',
    version: '1.0.0',
    owner: 'AI Showcase Team',
    demoUrl: 'https://hv-rag.us-east-1.elasticbeanstalk.com'
  },
  {
    id: 'agent10',
    name: 'Risk Assessment Bot',
    description: 'Evaluates insurance risk profiles',
    businessUnitId: 'bu4',
    sourceId: 'src4',
    status: 'maintenance',
    createdAt: '2024-08-20T09:45:00Z',
    lastActive: '2024-10-08T11:20:00Z',
    performance: {
      successRate: 95,
      responseTime: 1.7,
      completedTasks: 4120
    },
    type: 'Assessor',
    version: '2.2.0',
    owner: 'Risk Management',
    cost: 0.08
  }
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
  if (agent.businessUnitId === 'bu5') {
    return 'func1'; // Agentic AI Demos -> Applied AI
  } else if (agent.businessUnitId === 'bu2') {
    return 'func2'; // Manufacturing -> Industrial AI
  } else {
    return 'func3'; // Everything else -> Enterprise AI
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
