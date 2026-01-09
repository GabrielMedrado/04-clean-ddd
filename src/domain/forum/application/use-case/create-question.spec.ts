import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}
test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)
  const { question } = await createQuestion.execute({
    authorId: 'author-1',
    title: 'Question title',
    content: 'This is a question',
  })

  expect(question.id).toBeTruthy()
})
