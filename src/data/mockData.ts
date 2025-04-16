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
    color: '#EC4899', // pink
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
    name: 'Lyzr.AI Agents',
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
    name: 'First-line Support',
    description: 'Handles common customer inquiries',
    businessUnitId: 'bu3',
    sourceId: 'src3',
    status: 'active',
    createdAt: '2022-08-12',
    lastActive: '2023-04-14',
    performance: {
      successRate: 87,
      responseTime: 2.5,
      completedTasks: 23456,
    },
    type: 'Conversational',
    version: '2.5.3',
    owner: 'Thomas Wilson',
  },
  {
    id: 'agent7',
    name: 'Inventory Manager',
    description: 'Optimizes inventory levels across warehouses',
    businessUnitId: 'bu4',
    sourceId: 'src4',
    status: 'inactive',
    createdAt: '2023-03-18',
    lastActive: '2023-03-30',
    performance: {
      successRate: 82,
      responseTime: 6.1,
      completedTasks: 432,
    },
    type: 'Analytical',
    version: '1.0.1',
    owner: 'Emma Rodriguez',
  },
  {
    id: 'agent8',
    name: 'Logistics Optimizer',
    description: 'Plans optimal delivery routes',
    businessUnitId: 'bu4',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2022-10-05',
    lastActive: '2023-04-13',
    performance: {
      successRate: 89,
      responseTime: 4.8,
      completedTasks: 1834,
    },
    type: 'Optimization',
    version: '2.2.0',
    owner: 'David Kim',
  },
  {
    id: 'agent9',
    name: 'Expense Auditor',
    description: 'Reviews expenses for policy compliance',
    businessUnitId: 'bu5',
    sourceId: 'src2',
    status: 'active',
    createdAt: '2023-05-10',
    lastActive: '2023-04-12',
    performance: {
      successRate: 94,
      responseTime: 3.5,
      completedTasks: 7621,
    },
    type: 'Audit',
    version: '1.8.2',
    owner: 'Sophia Martinez',
  },
  {
    id: 'agent10',
    name: 'Financial Forecaster',
    description: 'Predicts financial trends based on historical data',
    businessUnitId: 'bu5',
    sourceId: 'src3',
    status: 'maintenance',
    createdAt: '2022-12-15',
    lastActive: '2023-04-01',
    performance: {
      successRate: 86,
      responseTime: 7.2,
      completedTasks: 245,
    },
    type: 'Predictive',
    version: '1.3.5',
    owner: 'Robert Johnson',
  },
  {
    id: 'agent11',
    name: 'Email Campaign Manager',
    description: 'Optimizes email marketing campaigns',
    businessUnitId: 'bu3',
    sourceId: 'src4',
    status: 'active',
    createdAt: '2023-02-28',
    lastActive: '2023-04-14',
    performance: {
      successRate: 90,
      responseTime: 2.9,
      completedTasks: 3420,
    },
    type: 'Marketing',
    version: '2.0.1',
    owner: 'Lisa Wong',
  },
  {
    id: 'agent12',
    name: 'Code Reviewer',
    description: 'Analyzes code for bugs and style issues',
    businessUnitId: 'bu2',
    sourceId: 'src2',
    status: 'active',
    createdAt: '2023-01-10',
    lastActive: '2023-04-14',
    performance: {
      successRate: 93,
      responseTime: 2.1,
      completedTasks: 5132,
    },
    type: 'Development',
    version: '2.4.0',
    owner: 'Ryan Park',
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
