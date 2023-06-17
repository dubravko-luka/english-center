import { DocsQuestionInterface, PartTestInterface } from "@/types/interfaces";
import { Q_PART_1, Q_PART_2 } from "./questions";
import { TYPE_QUESTION } from "@/types/enum";

const PART_1 = {
  id: 1,
  name: `PART 1: INCOMPLETE SENTENCES- one point for each correct answer`,
  description: `A word or phrase is missing in each of the sentences below. Four answer choices are given below each sentence. Select the best answer to complete the sentence. Then mark the letter (A), (B), (C), or (D) on your answer sheet.`,
  questions: Q_PART_1,
  type: TYPE_QUESTION.SELECT
}

const PART_2 = {
  id: 2,
  name: `PART 2: INCOMPLETE TEXTS- one point for each correct answer`,
  description: `Directions: Read the texts below. A word or phrase is missing in some of the sentences. Four answer choices are given below each of these sentences. Select the best answer to complete the text. Then mark the letter (A), (B), (C), or (D) on your ANSWER SHEET.`,
  questions: Q_PART_2,
  type: TYPE_QUESTION.READ_DOCS_SELECT
}

export const TEST: PartTestInterface[] = [
  PART_1,
  PART_2
]