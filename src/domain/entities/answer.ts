import { Entity } from "../../core/entities/entity";

interface AnswerProps {
  questionId: string;
  authorId: string;
  content: string;
}

export class Answer extends Entity {
  public questionId: string;
  public authorId: string;
  public content: string;

  constructor({
    authorId,
    questionId,
    content
  }: AnswerProps, id?: string) {
    super(id)

    this.questionId = questionId;
    this.authorId = authorId;
    this.content = content;
  }
}