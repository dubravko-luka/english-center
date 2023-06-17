import { TYPE_QUESTION } from "./enum"

export interface DetailAnswerInterface {
  index: number,
  content: string,
  isCorrect: boolean
}

export interface DetailQuestionInterface {
  id: number,
  content?: string,
  answers?: Array<DetailAnswerInterface>
}

export interface DocsQuestionInterface {
  name?: string,
  content: string,
  questions: Array<DetailQuestionInterface>
}

export interface PartTestInterface {
  id: number,
  name: string,
  description: string,
  questions: DetailQuestionInterface[] | DocsQuestionInterface[],
  type: TYPE_QUESTION
}