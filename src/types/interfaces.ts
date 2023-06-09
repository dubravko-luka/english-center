export interface DetailAnswerInterface {
  index: number,
  content: string,
  isCorrect: boolean
}

export interface DetailQuestionInterface {
  id: number,
  content: string,
  answers: Array<DetailAnswerInterface>
}

export interface PartTestInterface {
  id: number,
  name: string,
  description: string,
  questions: Array<DetailQuestionInterface>
}