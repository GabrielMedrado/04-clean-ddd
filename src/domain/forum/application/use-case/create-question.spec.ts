import { InMemoryQuestionsRepository } from 'test/repositories/in-memorry-questions-repository'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })
  it('should be able to create a question', async () => {
    const { question } = await sut.execute({
      authorId: 'author-1',
      title: 'Question title',
      content: 'This is a question',
    })

    expect(question.id).toBeTruthy()
    expect(inMemoryQuestionsRepository.items[0]?.id).toEqual(question.id)
  })
})
