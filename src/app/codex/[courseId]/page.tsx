'use client';

import { use, useState } from 'react';
import { COURSES } from '@/data/courses';
import { getQuizForCourse } from '@/data/quizzes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CertificateGenerator from '@/components/CertificateGenerator';
import Quiz from '@/components/Quiz';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type CoursePhase = 'lessons' | 'quiz' | 'certificate';

export default function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
    const { courseId } = use(params);
    const course = COURSES.find(c => c.id === courseId);
    const quiz = getQuizForCourse(courseId);

    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [phase, setPhase] = useState<CoursePhase>('lessons');
    const [userName, setUserName] = useState('');

    if (!course) return <div>Course not found</div>;

    const currentLesson = course.lessons[currentLessonIndex];
    const isLastLesson = currentLessonIndex === course.lessons.length - 1;
    const progressPercentage = ((currentLessonIndex + 1) / course.lessons.length) * 100;

    const handleStartQuiz = () => {
        setPhase('quiz');
    };

    const handleQuizPass = () => {
        setPhase('certificate');
    };

    const handleQuizRetry = () => {
        setPhase('lessons');
        setCurrentLessonIndex(0);
    };

    return (
        <div className="min-h-screen bg-transparent text-white">
            <Navbar />

            {/* Debug Controls - only visible when debug flag is set */}
            {process.env.NEXT_PUBLIC_DEBUG_CERTIFICATE && (
                <div className="fixed top-20 right-4 z-50 bg-red-900/90 border border-red-500/50 rounded-lg p-4 space-y-3 shadow-xl">
                    <p className="text-red-300 font-mono text-[10px] font-bold uppercase tracking-wider">Debug Mode</p>
                    <input
                        type="text"
                        placeholder="Enter name for cert..."
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full bg-black/50 border border-red-500/30 rounded px-2 py-1 text-white text-xs"
                    />
                    <div className="flex gap-2">
                        <button
                            onClick={() => setPhase('quiz')}
                            className="flex-1 bg-yellow-600 hover:bg-yellow-500 text-black text-[10px] font-bold py-1 px-2 rounded"
                        >
                            → Quiz
                        </button>
                        <button
                            onClick={() => setPhase('certificate')}
                            className="flex-1 bg-green-600 hover:bg-green-500 text-black text-[10px] font-bold py-1 px-2 rounded"
                        >
                            → Cert
                        </button>
                    </div>
                </div>
            )}

            <main className="pt-32 pb-24 px-6 relative min-h-screen flex">
                {/* Course Sidebar */}
                <aside className="hidden lg:block w-80 flex-shrink-0 self-start sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-8 border-r border-white/5">
                    <div className="mb-10 p-6 bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/20 rounded-2xl">
                        <span className="text-[10px] font-mono text-blue-400 font-bold tracking-[0.2em] uppercase block mb-2">SYLLABUS // v4.2</span>
                        <h2 className="text-xl font-black text-white leading-tight tracking-tighter uppercase">{course.title}</h2>

                        {/* Progress Bar */}
                        <div className="mt-4">
                            <div className="flex justify-between text-[9px] font-mono text-white/40 mb-2">
                                <span>PROGRESS</span>
                                <span>{Math.round(progressPercentage)}%</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500"
                                    style={{ width: `${progressPercentage}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {course.lessons.map((lesson, index) => {
                            // A lesson is complete if we've passed it, or if we're in quiz/certificate phase
                            const isComplete = index < currentLessonIndex || phase !== 'lessons';
                            const isCurrent = phase === 'lessons' && currentLessonIndex === index;

                            return (
                                <button
                                    key={lesson.id}
                                    onClick={() => {
                                        if (phase === 'lessons') {
                                            setCurrentLessonIndex(index);
                                        }
                                    }}
                                    disabled={phase !== 'lessons'}
                                    className={`w-full text-left p-4 transition-all duration-300 rounded-xl group flex gap-3 items-start ${isCurrent
                                        ? 'bg-blue-600 text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)]'
                                        : isComplete
                                            ? 'text-green-400/70'
                                            : phase !== 'lessons'
                                                ? 'text-gray-600 opacity-50 cursor-not-allowed'
                                                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                        }`}
                                >
                                    <span className={`font-mono text-xs pt-0.5 ${isCurrent
                                        ? 'text-blue-200'
                                        : isComplete
                                            ? 'text-green-400/70'
                                            : 'opacity-40'
                                        }`}>
                                        {isComplete && !isCurrent ? '✓' : `0${index + 1}`}
                                    </span>
                                    <span className="font-medium text-xs tracking-wide leading-snug">{lesson.title}</span>
                                </button>
                            );
                        })}

                        {/* Quiz & Certificate Progress Indicators */}
                        <div className="pt-4 border-t border-white/5 mt-4 space-y-2">
                            <div className={`p-4 rounded-xl flex gap-3 items-center ${phase === 'quiz'
                                ? 'bg-blue-600 text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)]'
                                : phase === 'certificate'
                                    ? 'text-green-400 bg-green-500/10 border border-green-500/20'
                                    : 'text-gray-600 opacity-50'
                                }`}>
                                <span className="font-mono text-xs opacity-60">⚡</span>
                                <span className="font-medium text-xs tracking-wide">
                                    {phase === 'certificate' ? '✓ EXAM PASSED' : 'Final Examination'}
                                </span>
                            </div>
                            <div className={`p-4 rounded-xl flex gap-3 items-center ${phase === 'certificate'
                                ? 'bg-blue-600 text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)]'
                                : 'text-gray-600 opacity-50'
                                }`}>
                                <span className="font-mono text-xs opacity-60">🎖</span>
                                <span className="font-medium text-xs tracking-wide">Certification</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Content Area */}
                <div className="flex-grow lg:pl-16 flex flex-col items-center">
                    {/* LESSONS PHASE */}
                    {phase === 'lessons' && (
                        <div className="max-w-3xl w-full">
                            {/* Lesson Header */}
                            <div className="mb-12 relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-[10px] font-mono text-blue-400 tracking-[0.15em] uppercase font-bold">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                        MODULE {currentLessonIndex + 1} OF {course.lessons.length}
                                    </span>
                                    <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono text-white/50 tracking-widest uppercase">
                                        {course.level}
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">{currentLesson.title}</h1>

                                {/* Estimated Reading Time */}
                                <div className="flex items-center gap-6 text-[10px] font-mono text-white/40 tracking-widest uppercase">
                                    <span>~{Math.ceil(currentLesson.content.split(' ').length / 200)} MIN READ</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span>{course.title}</span>
                                </div>
                            </div>

                            {/* Course Content */}
                            <article className="prose prose-invert max-w-none">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        // Main section headers
                                        h1: ({ children, ...props }) => (
                                            <h2 className="text-2xl md:text-3xl font-black text-white mt-16 mb-8 tracking-tight flex items-center gap-4" {...props}>
                                                <span className="w-1 h-8 bg-blue-600 rounded-full" />
                                                {children}
                                            </h2>
                                        ),
                                        // Subsection headers
                                        h2: ({ children, ...props }) => (
                                            <h3 className="text-xl font-bold text-blue-400 mt-12 mb-6 tracking-tight" {...props}>
                                                {children}
                                            </h3>
                                        ),
                                        // Sub-subsection headers
                                        h3: ({ children, ...props }) => (
                                            <h4 className="text-lg font-semibold text-white/90 mt-8 mb-4" {...props}>
                                                {children}
                                            </h4>
                                        ),
                                        // Paragraphs
                                        p: ({ children, ...props }) => {
                                            const text = String(children);
                                            // Detect special callout blocks
                                            if (text.startsWith('🛠')) {
                                                return (
                                                    <div className="my-8 p-6 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-2xl">
                                                        <p className="text-amber-200 leading-relaxed m-0 text-base" {...props}>{children}</p>
                                                    </div>
                                                );
                                            }
                                            if (text.startsWith('📋')) {
                                                return (
                                                    <div className="my-8 p-6 bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-2xl">
                                                        <p className="text-green-200 leading-relaxed m-0 text-base" {...props}>{children}</p>
                                                    </div>
                                                );
                                            }
                                            return <p className="text-gray-300 leading-relaxed mb-6 text-lg" {...props}>{children}</p>;
                                        },
                                        // Lists
                                        ul: ({ children, ...props }) => (
                                            <ul className="space-y-3 my-6 text-gray-300" {...props}>{children}</ul>
                                        ),
                                        ol: ({ children, ...props }) => (
                                            <ol className="space-y-3 my-6 text-gray-300 list-decimal list-inside" {...props}>{children}</ol>
                                        ),
                                        li: ({ children, ...props }) => {
                                            const text = String(children);
                                            // Detect checkbox items
                                            if (text.startsWith('[ ]') || text.startsWith('[x]') || text.startsWith('[X]')) {
                                                const isChecked = text.startsWith('[x]') || text.startsWith('[X]');
                                                const content = text.slice(4);
                                                return (
                                                    <li className="flex items-start gap-3 pl-0 list-none" {...props}>
                                                        <span className={`w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center flex-shrink-0 ${isChecked
                                                            ? 'bg-green-600 border-green-600 text-white'
                                                            : 'border-white/20'
                                                            }`}>
                                                            {isChecked && <span className="text-xs">✓</span>}
                                                        </span>
                                                        <span className="leading-relaxed text-base">{content}</span>
                                                    </li>
                                                );
                                            }
                                            return (
                                                <li className="flex items-start gap-3 leading-relaxed text-base" {...props}>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                                                    <span>{children}</span>
                                                </li>
                                            );
                                        },
                                        // Inline code
                                        code(props) {
                                            const { children, className, ...rest } = props;
                                            const match = /language-(\w+)/.exec(className || '');
                                            const { node, inline, ...filteredRest } = rest as any;

                                            // Code blocks
                                            if (match) {
                                                return (
                                                    <div className="my-8 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                                                        <div className="bg-zinc-900 px-4 py-3 border-b border-white/5 flex items-center gap-3">
                                                            <div className="flex gap-1.5">
                                                                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                                                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                                                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                                            </div>
                                                            <span className="text-[10px] font-mono text-white/30 tracking-wider uppercase">{match[1]}</span>
                                                        </div>
                                                        <pre className="bg-zinc-950 p-6 overflow-x-auto">
                                                            <code className={`${className} text-sm leading-relaxed`} {...filteredRest}>
                                                                {children}
                                                            </code>
                                                        </pre>
                                                    </div>
                                                );
                                            }
                                            // Inline code
                                            return (
                                                <code className="bg-blue-600/20 text-blue-300 px-2 py-0.5 rounded font-mono text-sm" {...filteredRest}>
                                                    {children}
                                                </code>
                                            );
                                        },
                                        // Blockquotes for key insights
                                        blockquote: ({ children, ...props }) => (
                                            <blockquote className="my-8 pl-6 border-l-4 border-blue-500 bg-blue-500/5 py-4 pr-6 rounded-r-xl" {...props}>
                                                <div className="text-blue-200 italic leading-relaxed">{children}</div>
                                            </blockquote>
                                        ),
                                        // Strong text
                                        strong: ({ children, ...props }) => (
                                            <strong className="font-bold text-white" {...props}>{children}</strong>
                                        ),
                                        // Emphasis
                                        em: ({ children, ...props }) => (
                                            <em className="text-blue-300 not-italic font-medium" {...props}>{children}</em>
                                        ),
                                        // Horizontal rules
                                        hr: () => (
                                            <div className="my-12 flex items-center gap-4">
                                                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                                <span className="text-white/20">◆</span>
                                                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                            </div>
                                        ),
                                    }}
                                >
                                    {currentLesson.content}
                                </ReactMarkdown>
                            </article>

                            {/* Lesson Navigation */}
                            <div className="mt-20 pt-12 border-t border-white/10">
                                {/* Progress Indicator */}
                                <div className="mb-8 flex items-center justify-center gap-2">
                                    {course.lessons.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentLessonIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentLessonIndex
                                                ? 'w-8 bg-blue-600'
                                                : index < currentLessonIndex
                                                    ? 'bg-green-500'
                                                    : 'bg-white/20 hover:bg-white/40'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => setCurrentLessonIndex(prev => Math.max(0, prev - 1))}
                                        disabled={currentLessonIndex === 0}
                                        className="group flex items-center gap-3 px-6 py-4 border border-white/10 text-gray-500 hover:text-white hover:border-white/30 transition-all disabled:opacity-0 rounded-xl"
                                    >
                                        <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
                                        <div className="text-left">
                                            <span className="block text-[9px] font-mono tracking-widest uppercase opacity-50">PREVIOUS</span>
                                            {currentLessonIndex > 0 && (
                                                <span className="block text-xs font-medium truncate max-w-[150px]">
                                                    {course.lessons[currentLessonIndex - 1]?.title}
                                                </span>
                                            )}
                                        </div>
                                    </button>

                                    {isLastLesson ? (
                                        <button
                                            onClick={handleStartQuiz}
                                            className="group flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-black tracking-wide hover:from-blue-500 hover:to-blue-400 transition-all shadow-2xl shadow-blue-600/30 rounded-xl"
                                        >
                                            <div className="text-left">
                                                <span className="block text-[9px] font-mono tracking-widest uppercase opacity-70">ALL LESSONS COMPLETE</span>
                                                <span className="block text-sm">Begin Final Examination</span>
                                            </div>
                                            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => setCurrentLessonIndex(prev => prev + 1)}
                                            className="group flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-white/10 text-white font-medium hover:bg-zinc-800 transition-all rounded-xl"
                                        >
                                            <div className="text-left">
                                                <span className="block text-[9px] font-mono tracking-widest uppercase opacity-50">NEXT LESSON</span>
                                                <span className="block text-xs truncate max-w-[150px]">
                                                    {course.lessons[currentLessonIndex + 1]?.title}
                                                </span>
                                            </div>
                                            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* QUIZ PHASE */}
                    {phase === 'quiz' && quiz && (
                        <div className="max-w-3xl w-full">
                            <div className="mb-12 text-center">
                                <span className="inline-block px-4 py-2 bg-yellow-600/10 border border-yellow-500/20 rounded-full text-[10px] font-mono text-yellow-400 mb-6 tracking-[0.2em] uppercase font-bold">
                                    ⚡ FINAL EXAMINATION
                                </span>
                                <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">{course.title}</h1>
                                <p className="text-white/50 font-mono text-sm">Pass with {quiz.passingScore}% to earn your certificate</p>
                            </div>

                            <Quiz
                                quiz={quiz}
                                onPass={handleQuizPass}
                                onRetry={handleQuizRetry}
                            />
                        </div>
                    )}

                    {/* CERTIFICATE PHASE */}
                    {phase === 'certificate' && (
                        <div className="w-full max-w-6xl text-center">
                            <h2 className="text-4xl font-black mb-4 uppercase">ENROLLEE STATUS: CERTIFIED</h2>
                            <p className="text-gray-500 font-mono text-sm uppercase mb-12">Enter your name for deployment credentials.</p>

                            <input
                                type="text"
                                placeholder="ENTER NAME"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full max-w-xl mx-auto bg-transparent border-b-2 border-white/10 text-center text-3xl font-serif text-white py-4 mb-12 focus:outline-none focus:border-blue-500 transition-colors uppercase block"
                            />

                            <CertificateGenerator
                                name={userName || 'CADET'}
                                course={course.title}
                                date={new Date().toLocaleDateString()}
                            />
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
