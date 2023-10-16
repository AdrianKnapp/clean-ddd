import { faker } from '@faker-js/faker'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'

export const makeQuestion = (options?: {
  override?: Partial<QuestionProps>
  id?: UniqueEntityID
}) => {
  const { override, id } = options ?? {}

  const question = Question.create(
    {
      authorId: new UniqueEntityID(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
      ...(override ?? {}),
    },
    id,
  )

  return question
}
