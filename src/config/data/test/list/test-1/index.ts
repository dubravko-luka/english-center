import { PartTestInterface } from "@/types/interfaces";
import { Q_PART_1 } from "./questions";

const PART_1 = {
  id: 1,
  name: `PART 1: INCOMPLETE SENTENCES- one point for each correct answer`,
  description: `A word or phrase is missing in each of the sentences below. Four answer choices are given below each sentence. Select the best answer to complete the sentence. Then mark the letter (A), (B), (C), or (D) on your answer sheet.`,
  questions: Q_PART_1
}

export const TEST: PartTestInterface[] = [
  PART_1
]