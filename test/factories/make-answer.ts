import { faker } from '@faker-js/faker'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Answer, AnswerProps } from '@/domain/forum/enterprise/entities/answer'

export const makeAnswer = (options?: {
  override?: Partial<AnswerProps>
  id?: UniqueEntityID
}) => {
  const { override, id } = options ?? {}

  const answer = Answer.create(
    {
      authorId: new UniqueEntityID(),
      questionId: new UniqueEntityID(),
      content: faker.lorem.text(),
      ...(override ?? {}),
    },
    id,
  )

  return answer
}
