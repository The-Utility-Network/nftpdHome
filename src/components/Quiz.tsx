'use client';

import { useState, useMemo } from 'react';
import { Quiz as QuizType, QuizQuestion } from '@/data/quizzes';

interface QuizProps {
    quiz: QuizType;
    onPass: () => void;
    onRetry: () => void;
}

export default function Quiz({ quiz, onPass, onRetry }: QuizProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
        new Array(quiz.questions.length).fill(null)
    );
    const [showResults, setShowResults] = useState(false);

    // Shuffle questions once on mount
    const shuffledQuestions = useMemo(() => {
        return [...quiz.questions].sort(() => Math.random() - 0.5);
    }, [quiz.questions]);

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1;
    const hasAnswered = selectedAnswers[currentQuestionIndex] !== null;

    const handleSelectAnswer = (optionIndex: number) => {
        if (showResults) return;
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setSelectedAnswers(newAnswers);
    };

    const handleNext = () => {
        if (isLastQuestion) {
            setShowResults(true);
        } else {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    // Calculate score
    const correctCount = shuffledQuestions.reduce((count, question, index) => {
        return selectedAnswers[index] === question.correctAnswer ? count + 1 : count;
    }, 0);
    const scorePercentage = Math.round((correctCount / shuffledQuestions.length) * 100);
    const passed = scorePercentage >= quiz.passingScore;

    if (showResults) {
        return (
            <div className="max-w-2xl mx-auto text-center py-12">
                {/* Result Header */}
                <div className={`mb-12 p-10 border rounded-2xl ${passed
                    ? 'bg-gradient-to-br from-green-600/20 to-transparent border-green-500/30'
                    : 'bg-gradient-to-br from-red-600/20 to-transparent border-red-500/30'
                    }`}>
                    <p className="text-[10px] font-mono tracking-[0.4em] uppercase mb-4 opacity-60">
                        {passed ? 'EXAMINATION COMPLETE' : 'EXAMINATION FAILED'}
                    </p>
                    <h2 className={`text-6xl font-black mb-4 ${passed ? 'text-green-400' : 'text-red-400'}`}>
                        {scorePercentage}%
                    </h2>
                    <p className="text-white/60 font-mono text-sm">
                        {correctCount} of {shuffledQuestions.length} correct
                    </p>
                    <p className="text-white/40 font-mono text-xs mt-2">
                        (Passing: {quiz.passingScore}%)
                    </p>
                </div>

                {/* Result Message */}
                {passed ? (
                    <div className="space-y-6">
                        <p className="text-white/70 text-lg">
                            Congratulations, Cadet. You have demonstrated operational competency.
                        </p>
                        <button
                            onClick={onPass}
                            className="px-12 py-5 bg-blue-600 text-white font-black tracking-[0.2em] uppercase text-sm hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:-translate-y-1"
                        >
                            CLAIM CERTIFICATE →
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <p className="text-white/70 text-lg">
                            Additional study required. Review the course material and try again.
                        </p>
                        <button
                            onClick={onRetry}
                            className="px-12 py-5 bg-zinc-800 border border-white/10 text-white font-black tracking-[0.2em] uppercase text-sm hover:bg-zinc-700 transition-all"
                        >
                            ← RETRY EXAMINATION
                        </button>
                    </div>
                )}

                {/* Review Answers */}
                <div className="mt-16 text-left">
                    <h3 className="text-[10px] font-mono text-blue-400/60 tracking-[0.3em] uppercase mb-6">
                        ANSWER REVIEW
                    </h3>
                    <div className="space-y-4">
                        {shuffledQuestions.map((question, index) => {
                            const userAnswer = selectedAnswers[index];
                            const isCorrect = userAnswer === question.correctAnswer;
                            return (
                                <div key={question.id} className={`p-4 rounded-lg border ${isCorrect ? 'border-green-500/20 bg-green-500/5' : 'border-red-500/20 bg-red-500/5'}`}>
                                    <div className="flex items-start gap-3">
                                        <span className={`text-xs font-mono ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                                            {isCorrect ? '✓' : '✗'}
                                        </span>
                                        <div className="flex-1">
                                            <p className="text-white/80 text-sm mb-2">{question.question}</p>
                                            {!isCorrect && (
                                                <p className="text-green-400/70 text-xs font-mono">
                                                    Correct: {question.options[question.correctAnswer]}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Header */}
            <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono text-blue-400/60 tracking-[0.3em] uppercase">
                        TACTICAL EXAMINATION
                    </span>
                    <span className="text-[10px] font-mono text-white/40">
                        QUESTION {currentQuestionIndex + 1} OF {shuffledQuestions.length}
                    </span>
                </div>
                {/* Progress Bar */}
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-600 transition-all duration-500"
                        style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Question */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-white leading-relaxed">
                    {currentQuestion.question}
                </h2>
            </div>

            {/* Options */}
            <div className="space-y-4 mb-12">
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelectAnswer(index)}
                        className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${selectedAnswers[currentQuestionIndex] === index
                                ? 'bg-blue-600/20 border-blue-500/50 text-white'
                                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-sm flex-shrink-0 transition-all ${selectedAnswers[currentQuestionIndex] === index
                                    ? 'bg-blue-600 border-blue-600 text-white'
                                    : 'border-white/20 text-white/40 group-hover:border-white/40'
                                }`}>
                                {String.fromCharCode(65 + index)}
                            </span>
                            <span className="text-sm leading-relaxed pt-1">{option}</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-white/5">
                <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="px-6 py-3 text-white/50 hover:text-white font-mono text-xs tracking-widest uppercase disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                >
                    ← PREVIOUS
                </button>
                <button
                    onClick={handleNext}
                    disabled={!hasAnswered}
                    className={`px-10 py-4 font-black tracking-widest uppercase text-xs transition-all disabled:opacity-30 disabled:cursor-not-allowed ${isLastQuestion
                            ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg'
                            : 'bg-zinc-800 border border-white/10 text-white hover:bg-zinc-700'
                        }`}
                >
                    {isLastQuestion ? 'SUBMIT EXAMINATION →' : 'NEXT →'}
                </button>
            </div>
        </div>
    );
}
