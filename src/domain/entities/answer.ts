import { randomUUID } from "crypto";

interface AnswerProps {
  questionId: string;
  authorId: string;
  content: string;
}

export class Answer {
  public id: string;
  public questionId: string;
  public authorId: string;
  public content: string;

  constructor({
    authorId,
    questionId,
    content
  }: AnswerProps, id?: string) {
    this.id = id ?? randomUUID();
    this.questionId = questionId;
    this.authorId = authorId;
    this.content = content;
  }
}