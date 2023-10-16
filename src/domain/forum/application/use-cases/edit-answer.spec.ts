import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { makeAnswer } from 'test/factories/make-answer'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { EditAnswerUseCase } from './edit-answer'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: EditAnswerUseCase

describe('Edit Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new EditAnswerUseCase(inMemoryAnswersRepository)
  })

  it('should be able to edit a answer', async () => {
    const newAnswer = makeAnswer({
      override: {
        authorId: new UniqueEntityID('author-1'),
      },
      id: new UniqueEntityID('answer-1'),
    })

    await inMemoryAnswersRepository.create(newAnswer)

    await sut.execute({
      authorId: 'author-1',
      answerId: 'answer-1',
      content: 'New Content',
    })

    expect(inMemoryAnswersRepository.items[0]).toMatchObject({
      content: 'New Content',
    })
  })

  it('should not be able to edit a answer from another user', async () => {
    const newAnswer = makeAnswer({
      override: {
        authorId: new UniqueEntityID('author-1'),
      },
      id: new UniqueEntityID('answer-1'),
    })

    await inMemoryAnswersRepository.create(newAnswer)

    await expect(() =>
      sut.execute({
        answerId: 'answer-1',
        authorId: 'author-2',
        content: 'New Content',
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
