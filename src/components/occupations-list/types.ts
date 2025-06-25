export interface Occupation {
  title: string;
  code: number;
  interest: string | string[];
  description: string; // Optional
  onetsoc_code: string;
  category: string;
}

// Type for the Interest options (RIASEC)
export interface InterestOption {
  value: string;
  label: string;
  description: string;
}
export type AbilitySubsubAbility = {
  id: string;
  name: string;
  description?: string;
  occupationIds: string[];
};

export type AbilitySubAbility = {
  id: string;
  name: string;
  description?: string;
  subsubAbilities: AbilitySubsubAbility[];
};

export type AbilityCategory = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  subAbilities: AbilitySubAbility[];
};
export type SkillSubSkill = {
  id: string;
  name: string;
  description?: string;
  occupationIds: string[];
};
export type SkillsCategory = {
  id: string;
  name: string;
  description: string;
  color:string;
  icon:React.ElementType;
  subSkills: SkillSubSkill[];
};
export type KnowledgeSubKnowledge = {
  id: string;
  name: string;
  description?: string;
  occupationIds: string[];
};
export type KnowledgeCategory = {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: React.ElementType;
  subKnowledges: KnowledgeSubKnowledge[];
};
