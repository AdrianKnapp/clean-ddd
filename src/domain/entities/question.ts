import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";

interface QuestionProps {
  authorId: string;
  title: string;
  slug: Slug;
  content: string;
}

export class Question extends Entity {
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
    super(id);

    this.authorId = authorId;
    this.title = title;
    this.slug = slug;
    this.content = content;
  }
}