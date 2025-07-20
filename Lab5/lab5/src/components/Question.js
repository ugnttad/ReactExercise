const Question = ({ question, onAnswer, selectedAnswer, questionNumber, totalQuestions }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Question {questionNumber} of {totalQuestions}
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
                    ></div>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-6 text-gray-800">{question.question}</h3>

            <div className="space-y-3">
                {question.options.map((option, index) => (
                    <label
                        key={index}
                        className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-blue-50 ${selectedAnswer === index
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                    >
                        <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={index}
                            checked={selectedAnswer === index}
                            onChange={() => onAnswer(question.id, index)}
                            className="mr-4 w-4 h-4 text-blue-600"
                        />
                        <span className="text-gray-700 font-medium">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};