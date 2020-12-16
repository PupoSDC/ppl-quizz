import { useState } from "react";
import {
  Questionnaire,
  Question,
  QuestionId,
  AnswerId,
} from "types/questionnaire";
import { useSelector, useDispatch } from "react-redux";

export type CurrentTestData = {
  questions: Question[];
  currentQuestion?: Question & { index: number };
  isCompleted: boolean;
  correctAnswers: number;
  totalAnswers: number;
};

export default (): CurrentTestData => {
  const questions = useSelector((state) => state.currentTest.questions);
  const answeredQuestions = questions.filter((q) => q.selected);
  const totalAnswers = answeredQuestions.length;
  const isCompleted = totalAnswers === questions.length;
  const correctAnswers = answeredQuestions.filter(
    (q) => q.selected === q.correct
  ).length;

  return {
    questions,
    isCompleted,
    correctAnswers,
    totalAnswers,
  };
};