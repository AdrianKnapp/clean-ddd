import { Entity } from "../../core/entities/entity";

interface AnswerProps {
  questionId: string;
  authorId: string;
  content: string;
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content;
  }
}