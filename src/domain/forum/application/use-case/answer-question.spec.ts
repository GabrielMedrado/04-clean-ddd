import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'

const fakeAnswersRepository: AnswersRepository = {
  create: async function () {},
}
test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    instructorId: 'instructor-1',
    questionId: 'question-1',
    content: 'This is an answer',
  })

  expect(answer.content).toEqual('This is an answer')
})
