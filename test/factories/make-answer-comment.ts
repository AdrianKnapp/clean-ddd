import { faker } from '@faker-js/faker'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  AnswerComment,
  AnswerCommentProps,
} from '@/domain/forum/enterprise/entities/answer-comment'

export const makeAnswerComment = (options?: {
  override?: Partial<AnswerCommentProps>
  id?: UniqueEntityID
}) => {
  const { override, id } = options ?? {}

  const answerComment = AnswerComment.create(
    {
      authorId: new UniqueEntityID(),
      answerId: new UniqueEntityID(),
      content: faker.lorem.text(),
      ...(override ?? {}),
    },
    id,
  )

  return answerComment
}
