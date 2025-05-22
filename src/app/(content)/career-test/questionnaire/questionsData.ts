export interface QuestionType {
  id: number;
  ques: string;
}

export type AnswerChoice = "agree" | "disagree";
export type Category = "Concern" | "Curiosity" | "Confidence" | "Consultation";

export const questions: QuestionType[] = [
  { id: 1, ques: "There is no point in deciding on a job when the future is so uncertain." },
  { id: 2, ques: "I know very little about the requirements of jobs." },
  { id: 3, ques: "I have so many interests that it is hard to choose just one occupation." },
  { id: 4, ques: "Choosing a job is something that you do on your own." },
  { id: 5, ques: "I can’t seem to become very concerned about my future occupation." },
  { id: 6, ques: "I don’t know how to go about getting into the kind of work I want to do." },
  { id: 7, ques: "Everyone seems to tell me something different; as a result I don’t know what kind of work to choose." },
  { id: 8, ques: "If you have doubts about what you want to do, ask your parents or friends for advice." },
  { id: 9, ques: "I seldom think about the job that I want to enter." },
  { id: 10, ques: "I am having difficulty in preparing myself for the work that I want to do." },
  { id: 11, ques: "I keep changing my occupational choice." },
  { id: 12, ques: "When it comes to choosing a career, I will ask other people to help me." },
  { id: 13, ques: "I’m not going to worry about choosing an occupation until I am out of school." },
  { id: 14, ques: "I don’t know what courses I should take in school." },
  { id: 15, ques: "I often daydream about what I want to be, but I really have not chosen an occupation yet." },
  { id: 16, ques: "I will choose my career without paying attention to the feelings of other people." },
  { id: 17, ques: "As far as choosing an occupation is concerned, something will come along sooner or later." },
  { id: 18, ques: "I don’t know whether my occupational plans are realistic." },
  { id: 19, ques: "There are so many things to consider in choosing an occupation, it is hard to make a decision." },
  { id: 20, ques: "It is important to consult close friends and get their ideas before making an occupational choice." },
  { id: 21, ques: "I really can’t find any work that has much appeal to me." },
  { id: 22, ques: "I keep wondering how I can reconcile the kind of person I am with the kind of person I want to be in my occupation." },
  { id: 23, ques: "I can’t understand how some people can be so certain about what they want to do." },
  { id: 24, ques: "In making career choices, one should pay attention to the thoughts and feelings of family members." },
];

export const answerKey: Record<number, AnswerChoice> = {
  1: "disagree", 5: "disagree", 9: "disagree", 13: "disagree", 17: "disagree", 21: "disagree", // Concern
  2: "disagree", 6: "disagree", 10: "disagree", 14: "disagree", 18: "disagree", 22: "disagree", // Curiosity
  3: "disagree", 7: "disagree", 11: "disagree", 15: "disagree", 19: "disagree", 23: "disagree", // Confidence
  4: "disagree", 8: "agree", 12: "agree", 16: "disagree", 20: "agree", 24: "agree" // Consultation
};

export const categoryMap: Record<Category, number[]> = {
  Concern: [1, 5, 9, 13, 17, 21],
  Curiosity: [2, 6, 10, 14, 18, 22],
  Confidence: [3, 7, 11, 15, 19, 23],
  Consultation: [4, 8, 12, 16, 20, 24]
};

export const categoryDescriptions: Record<Category, string> = {
  Concern: `Concern refers to an individual's awareness of the importance of career planning and their orientation toward the future. It reflects how much an individual thinks about, prepares for, and feels responsible for their career development.`,
  Curiosity: `Curiosity refers to how an individual seeks information about themselves and the world of work. It involves exploring career options and reflecting on personal interests and values.`,
  Confidence: `Confidence refers to an individual's belief in their ability to make and implement career decisions successfully. It reflects persistence in planning and executing career plans.`,
  Consultation: `Consultation refers to the willingness to seek and utilize advice from others during the career decision-making process. It reflects openness to external input and collaborative decision-making.`,
};
