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
    id: 'func4',
    name: 'Operations AI',
    description: 'AI solutions for operational efficiency and automation',
    color: '#E91E63'
  },
  {
    id: 'func5',
    name: 'Analytical AI',
    description: 'AI solutions for data analysis and insights',
    color: '#9C27B0'
  },
  {
    id: 'func6',
    name: 'Security AI',
    description: 'AI solutions for security and compliance',
    color: '#607D8B'
  },
  {
    id: 'func7',
    name: 'Cloud AI',
    description: 'AI solutions for cloud infrastructure and services',
    color: '#00BCD4'
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
    name: 'HitachiDS IoT',
    description: 'Agents available through HitachiDS IoT Practice'
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
    businessFunctionId: 'func4', // Changed from func1 to func4 (Operations AI)
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
    demoUrl: 'https://service-now-agent.bluestone-b837dc08.eastus.azurecontainerapps.io'
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
    owner: 'Chandra Ganapathy',
    cost: 0.09,
    demoUrl: 'https://productdocumentcontainerapp01.politesky-4044d8bd.eastus.azurecontainerapps.io'
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
    demoUrl: 'http://44.227.174.242:8000/ai_modal/dash'
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
    description: 'Autonomous agent to parse regulatory bulletins, summarize key changes, and identify regulatory requirements, impacted areas.',
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
  {
    id: 'agent8',
    name: 'Automated Quality Inspection Copilot',
    description: 'An agentic copilot for automated quality inspections that empowers quality inspectors with real-time insights, generates dynamic visualizations (Gen BI), and streamlines inspection tasks.',
    businessFunctionId: 'func2',
    businessUnitId: 'bu3',
    sourceId: 'src5',
    status: 'active',
    createdAt: '2024-10-13',
    lastActive: '2025-04-24',
    performance: {
      successRate: 86,
      responseTime: 4.5,
      completedTasks: 89,
    },
    type: 'Industrial Copilot',
    version: '1.0.0',
    owner: 'IoT Practice',
    cost: 0.05,
    demoUrl: 'https://zealous-sand-07babe10f.5.azurestaticapps.net'
  }, 
  {
    id: 'agent9',
    name: 'GenSei-X Industrial Copilot',
    description: 'GenSei-X is a GenAI-powered assistant for manufacturing teams, helping maintenance, production, and quality roles streamline operations.',
    businessFunctionId: 'func2',
    businessUnitId: 'bu3',
    sourceId: 'src5',
    status: 'active',
    createdAt: '2024-10-10',
    lastActive: '2025-04-20',
    performance: {
      successRate: 88,
      responseTime: 1,
      completedTasks: 50,
    },
    type: 'Regression',
    version: '1.0.0',
    owner: 'IoT Practice',
    cost: 0.05,
    demoUrl: 'https://dsm25ilj5bimz.cloudfront.net/dashboard'
  }, 
  {
    id: 'agent10',
    name: 'Agent Assessment',
    description: 'A diagnostic agent designed to evaluate AI agents across multiple dimensions of capability, including reasoning, autonomy, memory, and interaction. MaturityLens systematically scores agents to help benchmark progress and identify improvement areas in agentic system development.',
    businessFunctionId: 'func1',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-04-20',
    lastActive: '2025-04-24',
    performance: {
      successRate: 91,
      responseTime: 0.8,
      completedTasks: 157,
    },
    type: 'Agent Systems',
    version: '1.0.0',
    owner: 'Sai Subramanian',
    cost: 0.05,
    demoUrl: 'https://agentmaturity.blackriver-de37f9c4.eastus.azurecontainerapps.io'
  }, 
  {
    id: 'agent11',
    name: 'AI Sales Assistant',
    description: 'An intelligent AI Sales Assistant that engages customers, understands their needs, and guides them to the right product through natural, personalized conversations.',
    businessFunctionId: 'func1', // Changed from func3 to func1
    businessUnitId: 'bu3',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-04-28',
    lastActive: '2025-04-28',
    performance: {
      successRate: 91,
      responseTime: 0.8,
      completedTasks: 15,
    },
    type: 'Conversational Voice',
    version: '1.0.0',
    owner: 'Prafulla Vispute',
    cost: 0.05,
    demoUrl: 'https://hitachivantara.sharepoint.com/sites/CAAI/_layouts/15/stream.aspx?CT=1745842119502&OR=OWA%2DNT%2DMail&CID=52b479f8%2D8954%2Ddc95%2D6d5e%2D7607b7081ad0&id=%2Fsites%2FCAAI%2FShared%20Documents%2FCAAI%2DAgentPlane%2FAI%20Sales%20Assistant%2FAI%20SalesAssistant%20Demo4%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eb1ad980c%2D5bdf%2D483f%2D96b9%2Dcf742301aeaf'
  }, 
  {
    id: 'agent12',
    name: 'Agentic CRAG',
    description: 'A self-improving agent which Retrieves from document based on user question, Grades the retrieval, transforms the query if required and retrieves to be more precise',
    businessFunctionId: 'func1',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-04-28',
    lastActive: '2025-04-28',
    performance: {
      successRate: 98,
      responseTime: 1,
      completedTasks: 15,
    },
    type: 'Generation',
    version: '1.0.0',
    owner: 'Neel Bhattacharjee',
    cost: 0.05,
    demoUrl: 'https://www.hitachids.com/service/ai-genai-services/'
  }, 
  {
    id: 'agent13',
    name: 'CSV Analyzer, Plotting and Query Agent',
    description: 'Agent which can do statistical analysis, execute queries, Plot charts and provide analysis and insights on complex trends.',
    businessFunctionId: 'func1',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-04-28',
    lastActive: '2025-04-28',
    performance: {
      successRate: 95,
      responseTime: 1,
      completedTasks: 10,
    },
    type: 'Generation',
    version: '1.0.0',
    owner: 'Neel Bhattacharjee',
    cost: 0.05,
    demoUrl: 'https://www.hitachids.com/service/ai-genai-services/'
  }, 
  {
    id: 'agent14',
    name: 'Python Documentation Generator Agent',
    description: 'Agent which can generate simple documentation on a Python code base. It can extract snippets from the code, take snapshots and explain them before exporting and creating a PDF from it.',
    businessFunctionId: 'func1',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-04-28',
    lastActive: '2025-04-28',
    performance: {
      successRate: 91,
      responseTime: 1,
      completedTasks: 10,
    },
    type: 'Generation',
    version: '1.0.0',
    owner: 'Neel Bhattacharjee',
    cost: 0.05,
    demoUrl: 'https://www.hitachids.com/service/ai-genai-services/'
  }, 
  {
    id: 'agent15',
    name: 'Map Interaction Agent',
    description: 'Agent which can generate open-source map based answers with Natural Language Input.',
    businessFunctionId: 'func1',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-04-28',
    lastActive: '2025-04-28',
    performance: {
      successRate: 90,
      responseTime: 1,
      completedTasks: 10,
    },
    type: 'Generation',
    version: '1.0.0',
    owner: 'Neel Bhattacharjee',
    cost: 0.05,
    demoUrl: 'https://www.hitachids.com/service/ai-genai-services/'
  },
  {
    id: 'agent16',
    name: 'Oddziala Banking Assistant',
    description: 'AI-powered assistant that helps users manage banking tasks like balance checks, investments, and appointments through natural voice or text conversations.',
    businessFunctionId: 'func1',
    businessUnitId: 'bu2',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-06-10',
    lastActive: '2025-06-10',
    performance: {
      successRate: 95,
      responseTime: 2,
      completedTasks: 25,
    },
    type: 'Conversational AI',
    version: '1.0.0',
    owner: 'Prafulla Vispute',
    cost: 0.08,
    demoUrl: 'https://hitachivantara.sharepoint.com/sites/CAAI/_layouts/15/stream.aspx?id=%2fsites%2fCAAI%2fShared+Documents%2fCAAI-AgentPlane%2foddziala_ai_bank_agent%2fOddziała+-+BankAssistant.mp4&referrer=StreamWebApp.Web&referrer=Outlook.Desktop&referrerScenario=AddressBarCopied.view.ca792a04-cc08-471f-85c5-dc5a05313286&referrerScenario=email-linkwithoutembed&xsdata=MDV8MDJ8cGFyYWcuc2hldHllQGhpdGFjaGlkcy5jb218MjczYjNhZGRiYzc0NDBjNWE4ZmEwOGRkYWQ3YTBhNTF8MTg3OTFlMTc2MTU5NGY1MmE4ZDRkZTgxNGNhODI4NGF8MHwwfDYzODg1NzQ2MTk0ODg0OTc3MHxVbmtub3dufFRXRnBiR1pzYjNkOGV5SkZiWEIwZVUxaGNHa2lPblJ5ZFdVc0lsWWlPaUl3TGpBdU1EQXdNQ0lzSWxBaU9pSlhhVzR6TWlJc0lrRk9Jam9pVFdGcGJDSXNJbGRVSWpveWZRPT18MHx8fA%3d%3d&sdata=djFXNzdTNGxMUnlWaTdBa2RxVytYZDF4V0VFNDNlUDBDRTJtbGVGNnRRaz0%3d'
  },
  {
    id: 'agent17',
    name: 'GenBI DataBricks Genie',
    description: 'AI analytics assistant on Databricks that turns natural language questions into instant visual insights, making data exploration easy for business users.',
    businessFunctionId: 'func5',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-06-10',
    lastActive: '2025-06-10',
    performance: {
      successRate: 90,
      responseTime: 4,
      completedTasks: 15,
    },
    type: 'Analytics',
    version: '1.0.0',
    owner: 'Prafulla Vispute',
    cost: 0.08,
    demoUrl: 'https://hitachivantara.sharepoint.com/sites/CAAI/_layouts/15/stream.aspx?id=%2fsites%2fCAAI%2fShared+Documents%2fCAAI-AgentPlane%2fGenBI+Databricks+%26+Genie%2fGenBIDemoV1.mp4&referrer=StreamWebApp.Web&referrer=Outlook.Desktop&referrerScenario=AddressBarCopied.view.c150b739-c9f6-4cf8-ba37-1f930f4b6c47&referrerScenario=email-linkwithoutembed&xsdata=MDV8MDJ8cGFyYWcuc2hldHllQGhpdGFjaGlkcy5jb218MjczYjNhZGRiYzc0NDBjNWE4ZmEwOGRkYWQ3YTBhNTF8MTg3OTFlMTc2MTU5NGY1MmE4ZDRkZTgxNGNhODI4NGF8MHwwfDYzODg1NzQ2MTk0ODg2OTM2OXxVbmtub3dufFRXRnBiR1pzYjNkOGV5SkZiWEIwZVUxaGNHa2lPblJ5ZFdVc0lsWWlPaUl3TGpBdU1EQXdNQ0lzSWxBaU9pSlhhVzR6TWlJc0lrRk9Jam9pVFdGcGJDSXNJbGRVSWpveWZRPT18MHx8fA%3d%3d&sdata=aU5paXMyL0lac3NPeCsxbHhxMU0yOVR4V1JCcmZETHhWK25CQTZibllBOD0%3d'
  },
  {
    id: 'agent18',
    name: 'Contract Assistant',
    description: 'AI assistant that summarizes and answers questions about contracts stored in SharePoint, using Microsoft Copilot while respecting metadata and access controls.',
    businessFunctionId: 'func6',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-06-10',
    lastActive: '2025-06-10',
    performance: {
      successRate: 90,
      responseTime: 6,
      completedTasks: 35,
    },
    type: 'SharePoint & Microsoft Copilot',
    version: '1.0.0',
    owner: 'Prafulla Vispute',
    cost: 0.08,
    demoUrl: 'https://hitachivantara.sharepoint.com/sites/CAAI/_layouts/15/stream.aspx?id=%2fsites%2fCAAI%2fShared+Documents%2fCAAI-AgentPlane%2fCopilot+Agent%2fDemo%2fContract+Assistant+(Sharepoint+%2b+MS+Copilot).mp4&referrer=StreamWebApp.Web&referrer=Outlook.Desktop&referrerScenario=AddressBarCopied.view.982146ce-b8eb-4faf-8296-f333c2d122b0&referrerScenario=email-linkwithoutembed&xsdata=MDV8MDJ8cGFyYWcuc2hldHllQGhpdGFjaGlkcy5jb218MjczYjNhZGRiYzc0NDBjNWE4ZmEwOGRkYWQ3YTBhNTF8MTg3OTFlMTc2MTU5NGY1MmE4ZDRkZTgxNGNhODI4NGF8MHwwfDYzODg1NzQ2MTk0ODg4MDk1NnxVbmtub3dufFRXRnBiR1pzYjNkOGV5SkZiWEIwZVUxaGNHa2lPblJ5ZFdVc0lsWWlPaUl3TGpBdU1EQXdNQ0lzSWxBaU9pSlhhVzR6TWlJc0lrRk9Jam9pVFdGcGJDSXNJbGRVSWpveWZRPT18MHx8fA%3d%3d&sdata=NkQvdXIyZEw5dElSUlhTS2lRbk41UFlBaEJJRG9JUkxiV1BkejV1eFBmaz0%3d'
  },
  {
    id: 'agent19',
    name: 'ShInE (Shannon Intelligence Engine)',
    description: 'Intelligent agent that mines code repositories to infer relationships between files and generates structured chapter-wise explanations of the codebase, aiding onboarding and legacy code comprehension.',
    businessFunctionId: 'func1',
    businessUnitId: 'bu1',
    sourceId: 'src1',
    status: 'active',
    createdAt: '2025-06-18',
    lastActive: '2025-06-18',
    performance: {
      successRate: 90,
      responseTime: 5,
      completedTasks: 15,
    },
    type: 'Generative AI',
    version: '1.0.0',
    owner: 'Sai Subramanian',
    cost: 0.08,
    demoUrl: 'https://code-generator-frontend.bluerock-9517cb0a.eastus.azurecontainerapps.io/'
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
