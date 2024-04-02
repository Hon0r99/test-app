export interface UserAssessment {
  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
  image_url: string;
}

export interface UserAssessmentGraphData {
  Agreeableness: number;
  Drive: number;
  Luck: number;
  Openess: number;
}

export interface UserAssessmentGraph {
  data: UserAssessmentGraphData;
  type: string;
}
