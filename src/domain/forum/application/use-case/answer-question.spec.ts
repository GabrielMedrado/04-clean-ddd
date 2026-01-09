import { InMemoryAnswersRepository } from 'test/repositories/in-memorry-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Create an Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })
  it('should be able to create an answer', async () => {
    const { answer } = await sut.execute({
      questionId: 'question-1',
      instructorId: 'instructor-1',
      content: 'This is an answer',
    })

    expect(answer.id).toBeTruthy()
    expect(inMemoryAnswersRepository.items[0]?.id).toEqual(answer.id)
  })
})
