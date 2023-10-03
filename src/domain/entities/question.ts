import { randomUUID } from "crypto";
import { Slug } from "./value-objects/slug";

interface QuestionProps {
  authorId: string;
  title: string;
  slug: Slug;
  content: string;
}

export class Question {
  public id: string;
  public authorId: string;
  public title: string;
  public slug: Slug;
  public content: string;

  constructor({
    authorId,
    title,
    slug,
    content
  }: QuestionProps, id?: string) {
    this.id = id ?? randomUUID();
    this.authorId = authorId;
    this.title = title;
    this.slug = slug;
    this.content = content;
  }
}