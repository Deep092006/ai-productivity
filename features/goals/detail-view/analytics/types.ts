export interface AIInsightResponse {
  completionProbability: number;
  estimatedCompletionDate: string;
  riskFactors: string[];
  bottlenecks: string[];
  suggestionImprovements: string[];
  recommendations: Array<{
    id: string;
    type: "optimization" | "risk" | "opportunity" | "automation";
    title: string;
    description: string;
    impact: "high" | "medium" | "low";
    effort: "quick" | "medium" | "complex";
    confidence: number;
    actionable: boolean;
    automatable?: boolean;
    estimatedTimeToImplement: string;
    relatedGoalIds: number[];
    createdAt: string;
  }>;
}

export type AIRecommendation = AIInsightResponse['recommendations'][0];

export interface SmartInsight {
  id: string;
  type: 'achievement' | 'warning' | 'opportunity' | 'trend' | 'prediction';
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: number;
  confidence: number;
  actionable: boolean;
  category: string;
  icon: React.ReactNode;
  color: string;
  data?: any;
  suggestion?: string;
  estimatedTimeToFix?: string;
}
