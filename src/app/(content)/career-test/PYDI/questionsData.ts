export interface QuestionType {
  id: number;
  ques: string;
}

export type AnswerChoice = "strongly-disagree" | "disagree" | "agree" | "strongly-agree";
export type Category = "Competence" | "Character" | "Connection" | "Caring" | "Confidence" | "Contribution";

export const questions: QuestionType[] = [
  // COMPETENCE (14 items)
  { id: 1, ques: "I am a good student" },
  { id: 2, ques: "I take part in activities at my school" },
  { id: 3, ques: "I like to learn about new things" },
  { id: 4, ques: "I am a creative person" },
  { id: 5, ques: "I make good decisions" },
  { id: 6, ques: "I make friends easily" },
  { id: 7, ques: "I feel comfortable in social situations" },
  { id: 8, ques: "I can handle problems that come up in my life" },
  { id: 9, ques: "I can manage my emotions" },
  { id: 10, ques: "I can handle being disappointed" },
  { id: 11, ques: "I am aware of other people's needs in social situations" },
  { id: 12, ques: "I have goals for my life" },
  { id: 13, ques: "I know what I want to do for a career" },
  { id: 14, ques: "I am interested in learning about careers I could have" },
  
  // CHARACTER (9 items)
  { id: 15, ques: "It is important for me to do the right thing" },
  { id: 16, ques: "I try to do the right thing, even when I know that no one will know if I do or not." },
  { id: 17, ques: "I think it is important for me to be a role model for others." },
  { id: 18, ques: "It is important for me to do my best." },
  { id: 19, ques: "It is important that others can count on me." },
  { id: 20, ques: "If I promise to do something I can be counted on to do it." },
  { id: 21, ques: "I am able to behave appropriately in most settings." },
  { id: 22, ques: "I am able to stand up to peer pressure when I feel something is not right to do" },
  { id: 23, ques: "I have people in my life whom I look up to and admire" },
  
  // CONNECTION (8 items)
  { id: 24, ques: "I have a wide circle of friends." },
  { id: 25, ques: "I think it is important to be involved with other people." },
  { id: 26, ques: "My friends care about me." },
  { id: 27, ques: "I feel connected to my teachers." },
  { id: 28, ques: "Having friends is important to me." },
  { id: 29, ques: "I feel connected to others in my community." },
  { id: 30, ques: "I have adults in my life who are interested in me." },
  { id: 31, ques: "I feel connected to my parents" },
  
  // CARING (8 items)
  { id: 32, ques: "When there is a need I offer assistance whenever I can." },
  { id: 33, ques: "It is easy for me to consider the feelings of others." },
  { id: 34, ques: "I care about how my decisions affect other people." },
  { id: 35, ques: "I try to encourage others when they are not as good at something as me." },
  { id: 36, ques: "Other people's feelings matter to me." },
  { id: 37, ques: "I can be counted on to help if someone needs me." },
  { id: 38, ques: "I care about the feelings of my friends." },
  { id: 39, ques: "When one of my friends is hurting, I hurt too." },
  
  // CONFIDENCE (9 items)
  { id: 40, ques: "I feel good about my scholastic ability" },
  { id: 41, ques: "I feel I am a good athlete" },
  { id: 42, ques: "I am satisfied with how I look" },
  { id: 43, ques: "I feel accepted by my friends" },
  { id: 44, ques: "In general, I think I am a worthy person" },
  { id: 45, ques: "I know how to behave well in different settings" },
  { id: 46, ques: "I can figure out right from wrong" },
  { id: 47, ques: "I have close friendships" },
  { id: 48, ques: "I can do things that make a difference" },
  
  // CONTRIBUTION (7 items)
  { id: 49, ques: "I take an active role in my community." },
  { id: 50, ques: "I am someone who gives to benefit others." },
  { id: 51, ques: "I like to work with others to solve problems." },
  { id: 52, ques: "I have things I can offer to others." },
  { id: 53, ques: "I believe I can make a difference in the world." },
  { id: 54, ques: "I care about contributing to make the world a better place for everyone." },
  { id: 55, ques: "It is important for me to try and make a difference in the world." },
];

export const categoryMap: Record<Category, number[]> = {
  Competence: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  Character: [15, 16, 17, 18, 19, 20, 21, 22, 23],
  Connection: [24, 25, 26, 27, 28, 29, 30, 31],
  Caring: [32, 33, 34, 35, 36, 37, 38, 39],
  Confidence: [40, 41, 42, 43, 44, 45, 46, 47, 48],
  Contribution: [49, 50, 51, 52, 53, 54, 55]
};

export const categoryDescriptions: Record<Category, string> = {
  Competence: `Competence reflects an individual's positive view of their actions in specific areas including social, academic, cognitive, and vocational domains. It encompasses skills in decision-making, problem-solving, emotional regulation, and career awareness.`,
  Character: `Character represents respect for societal and cultural rules, possession of standards for correct behaviors, a sense of right and wrong (morality), and integrity. It includes being a role model, doing one's best, and standing up to peer pressure.`,
  Connection: `Connection involves positive bonds with people and institutions that are reflected in bidirectional exchanges between the individual and peers, family, school, and community. It emphasizes the importance of relationships and feeling connected to others.`,
  Caring: `Caring represents sympathy and empathy for others. It involves being sensitive to the needs and feelings of others, offering help when needed, and being emotionally invested in the wellbeing of friends and others.`,
  Confidence: `Confidence is an internal sense of overall positive self-worth and self-efficacy. It encompasses feeling good about one's scholastic ability, physical appearance, social acceptance, and the belief that one can make a difference.`,
  Contribution: `Contribution represents the person's engagement in activities that benefit their community and the world. It involves taking an active role, working with others to solve problems, and believing in one's ability to make a positive difference.`,
};