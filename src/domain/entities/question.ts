import { randomUUID } from "crypto";

interface QuestionProps {
  authorId: string;
  title: string;
  content: string;
}

export class Question {
  public id: string;
  public authorId: string;
  public title: string;
  public content: string;

  constructor({
    authorId,
    title,
    content
  }: QuestionProps, id?: string) {
    this.id = id ?? randomUUID();
    this.authorId = authorId;
    this.title = title;
    this.content = content;
  }
}