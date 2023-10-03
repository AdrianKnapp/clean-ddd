import { Entity } from "../../core/entities/entity";

interface InstructorProps {
  name: string;
}

export class Instructor extends Entity {
  public name: string;

  constructor({ name }: InstructorProps, id?: string) {
    super(id);

    this.name = name;
  }
}