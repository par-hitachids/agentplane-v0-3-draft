import { Agent, BusinessUnit, AgentSource, DashboardStats } from '@/types';

// Business Units mock data
export const businessUnits: BusinessUnit[] = [
  {
    id: 'bu1',
    name: 'Banking and Financial Services',
    description: 'Financial services and banking solutions',
    color: '#3B82F6', // blue
  },
  {
    id: 'bu2',
    name: 'Manufacturing',
    description: 'Industrial production and manufacturing processes',
    color: '#10B981', // emerald
  },
  {
    id: 'bu3',
    name: 'Healthcare',
    description: 'Medical services and healthcare innovations',
    color: '#6366F1', // indigo
  },
  {
    id: 'bu4',
    name: 'Insurance',
    description: 'Insurance products and risk management',
    color: '#F59E0B', // amber
  },
  {
    id: 'bu5',
    name: 'Agentic AI Demos',
    description: 'Agentic AI Solution Demos',
    color: '#B30100', // Hitachi red
  },
];

// Agent Sources mock data
export const agentSources: AgentSource[] = [
  {
    id: 'src1',
    name: 'HitachiDS Development',
    description: 'Built in-house by our AI team',
  },
  {
    id: 'src2',
    name: 'SaaS Agents',
    description: 'Based on OpenAI models and APIs',
  },
  {
    id: 'src3',
    name: 'Partner Agents',
    description: 'Using Claude and other Anthropic models',
  },
  {
    id: 'src4',
    name: 'Hitachi R&D Labs',
    description: 'Third-party vendor products',
  },
];

// Agents mock data
export const agents: Agent[] = [
  {
    id: 'agent1',
    name: 'Regulatory Change Agent',
    description: 'Continuously scans and maps regulatory changes to impacted policies/procedures',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-02-15',
    lastActive: '2025-04-15',
    performance: {
      successRate: 92,
      responseTime: 3.2,
      completedTasks: 5240,
    },
    type: 'Conversational RAG',
    version: '1.0.0',
    owner: 'Parag Y Shetye',
  },
  {
    id: 'agent2',
    name: 'Loan Approval Agent',
    description: 'Evaluates applications, risk factors, and recommends approval/rejection',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'maintenance',
    createdAt: '2025-01-20',
    lastActive: '2025-04-15',
    performance: {
      successRate: 88,
      responseTime: 5.7,
      completedTasks: 942,
    },
    type: 'Analytical',
    version: '1.0.1',
    owner: 'Parag Y Shetye',
  },
  {
    id: 'agent3',
    name: 'RCA Agent',
    description: 'Debug customer issues with contextual understanding, reduces support costs, and improves resolution times.',
    businessUnitId: 'bu1',
    sourceId: 'src3',
    status: 'active',
    createdAt: '2024-11-10',
    lastActive: '2025-04-05',
    performance: {
      successRate: 93,
      responseTime: 4.3,
      completedTasks: 2245,
    },
    type: 'Root Cause Analysis',
    version: '1.1.4',
    owner: 'Krestwolf.ai',
  },
  {
    id: 'agent4',
    name: 'RUL Estimator',
    description: 'Deep learning to predict the RUL of critical assets',
    businessUnitId: 'bu2',
    sourceId: 'src4',
    status: 'active',
    createdAt: '2022-11-05',
    lastActive: '2025-01-14',
    performance: {
      successRate: 95,
      responseTime: 1.2,
      completedTasks: 8721,
    },
    type: 'Analytical',
    version: '3.0.0',
    owner: 'Hitachi R&D',
  },
  {
    id: 'agent5',
    name: 'Demand Forecaster',
    description: 'Provides wide range of demand forecasting algorithms to achieve highly accurate forecasting',
    businessUnitId: 'bu2',
    sourceId: 'src4',
    status: 'active',
    createdAt: '2023-01-20',
    lastActive: '2024-12-07',
    performance: {
      successRate: 91,
      responseTime: 0.8,
      completedTasks: 15732,
    },
    type: 'Regression',
    version: '2.1.0',
    owner: 'Hitachi R&D',
  },
  {
    id: 'agent6',
    name: 'Medical Query Agent',
    description: 'Answers patient queries 24/7 related to symptoms, medications, and appointment scheduling',
    businessUnitId: 'bu3',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2024-10-12',
    lastActive: '2024-12-14',
    performance: {
      successRate: 89,
      responseTime: 2.5,
      completedTasks: 456,
    },
    type: 'Conversational',
    version: '1.0.0',
    owner: 'Mahesh R',
  },
  {
    id: 'agent7',
    name: 'Auto Policy Pilot',
    description: 'Recommends personalized auto insurance plans, explains policy details in simple terms',
    businessUnitId: 'bu4',
    sourceId: 'src4',
    status: 'active',
    createdAt: '2024-09-18',
    lastActive: '2024-10-29',
    performance: {
      successRate: 90,
      responseTime: 6.1,
      completedTasks: 432,
    },
    type: 'Agentic RAG',
    version: '1.0.1',
    owner: 'Parag Y Shetye',
  },
  {
    id: 'agent8',
    name: 'Auto Assist',
    description: 'Helps customers file accident claims, guides them through the process with document uploads, and provides real-time claim status updates',
    businessUnitId: 'bu4',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2024-12-05',
    lastActive: '2025-04-14',
    performance: {
      successRate: 89,
      responseTime: 4.8,
      completedTasks: 1834,
    },
    type: 'Optimization',
    version: '1.2.0',
    owner: 'Mahesh R.',
  },
  {
    id: 'agent9',
    name: 'AI Compass Demo',
    description: 'Responsible AI Agent',
    businessUnitId: 'bu5',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2024-05-10',
    lastActive: '2024-12-15',
    performance: {
      successRate: 94,
      responseTime: 3.5,
      completedTasks: 7621,
    },
    type: 'Responsible AI',
    version: '1.8.2',
    owner: 'Chandra, Pradeep, Ashwin',
    demoUrl: 'https://hv-rag.us-east-1.elasticbeanstalk.com',
  },
  {
    id: 'agent10',
    name: 'Product Documentation Agent',
    description: 'Agent to generate product features into polished documentation',
    businessUnitId: 'bu5',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-01-15',
    lastActive: '2025-04-15',
    performance: {
      successRate: 90,
      responseTime: 4.2,
      completedTasks: 245,
    },
    type: 'Generative',
    version: '1.0.0',
    owner: 'Chandra',
  },
  {
    id: 'agent11',
    name: 'Claim Genie',
    description: 'Automates medical insurance claims processing',
    businessUnitId: 'bu3',
    sourceId: 'src1',
    status: 'maintenance',
    createdAt: '2024-09-28',
    lastActive: '2024-10-14',
    performance: {
      successRate: 75,
      responseTime: 2.9,
      completedTasks: 30,
    },
    type: 'Healthcare',
    version: '1.0.1',
    owner: 'Parag Y Shetye',
  },
  {
    id: 'agent12',
    name: 'Product Documentation Generator',
    description: 'Agent to generate product features into polished documentation',
    businessUnitId: 'bu2',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-01-13',
    lastActive: '2025-04-15',
    performance: {
      successRate: 89,
      responseTime: 2.1,
      completedTasks: 132,
    },
    type: 'Multi-Modal Generation',
    version: '0.0.3',
    owner: 'Ashwin B.',
  },
  {
    id: 'agent13',
    name: 'Hitachi GitHub Agent',
    description: 'Agent to ........',
    businessUnitId: 'bu5',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-02-10',
    lastActive: '2025-04-15',
    performance: {
      successRate: 90,
      responseTime: 6.2,
      completedTasks: 45,
    },
    type: 'Code Generator',
    version: '1.0.0',
    owner: 'Chandra',
    demoUrl: 'https://tso-ghagent-capp.thankfulflower-bbc92453.centralus.azurecontainerapps.io',
  },
  {
    id: 'agent14',
    name: 'Agent Maturity Assessment Framework',
    description: 'Agent Maturity Assessment Framework',
    businessUnitId: 'bu5',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-03-03',
    lastActive: '2025-04-15',
    performance: {
      successRate: 92,
      responseTime: 5.9,
      completedTasks: 29,
    },
    type: 'Framework',
    version: '1.0.0',
    owner: 'TBD',
    demoUrl: 'https://maturity-assessment-app.agreeableisland-ccf7e3c4.eastus.azurecontainerapps.io/',
  },
];

// Dashboard Statistics
export const getDashboardStats = (): DashboardStats => {
  return {
    totalAgents: agents.length,
    activeAgents: agents.filter(agent => agent.status === 'active').length,
    businessUnits: businessUnits.length,
    sources: agentSources.length,
  };
};

// Helper function to get business unit by id
export const getBusinessUnitById = (id: string): BusinessUnit | undefined => {
  return businessUnits.find(unit => unit.id === id);
};

// Helper function to get source by id
export const getSourceById = (id: string): AgentSource | undefined => {
  return agentSources.find(source => source.id === id);
};

// Group agents by business unit
export const getAgentsByBusinessUnit = () => {
  const groupedAgents: Record<string, Agent[]> = {};
  
  businessUnits.forEach(unit => {
    groupedAgents[unit.id] = agents.filter(agent => agent.businessUnitId === unit.id);
  });
  
  return groupedAgents;
};

// Group agents by source
export const getAgentsBySource = () => {
  const groupedAgents: Record<string, Agent[]> = {};
  
  agentSources.forEach(source => {
    groupedAgents[source.id] = agents.filter(agent => agent.sourceId === source.id);
  });
  
  return groupedAgents;
};
