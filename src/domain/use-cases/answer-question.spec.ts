import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '@/domain/repositories/answers-repository'
import { Answer } from '@/domain/entities/answer'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  }
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'New answer.'
  })

  expect(answer.content).toEqual('New answer.')
})