import { InMemoryQuestionsRepository } from 'test/repositories/in-memorry-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Question } from '../../enterprise/entities/question'
import { Slug } from '../../enterprise/entities/value-objects/slug'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })
  it('should be able to get a question by slug', async () => {
    const newQuestion = Question.create({
      authorId: new UniqueEntityId(),
      title: 'question-title',
      slug: Slug.create('question-title'),
      content: 'This is a question',
    })

    inMemoryQuestionsRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug: 'question-title',
    })

    expect(question.id).toBeTruthy()
    expect(inMemoryQuestionsRepository.items[0]?.id).toEqual(question.id)
    expect(question.slug.value).toEqual(newQuestion.title)
  })
})
