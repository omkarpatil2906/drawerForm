import React from 'react'

function QuestionTemp() {
    const templateQuestions = [
        {
            id: 11,
            headers: "The purpose of this questionnaire is to ensure that the Cardiology Workbook is as usable as possible.",
            footer: "The purpose of this questionnaire is to ensure that the Cardiology Workbook is as usable as possible",
            questions: [
                { qid: 1, depId: 1, depName: "Cardiology", question: "How satisfied are you with the overall experience during your visit to the Cardiology Department?" },
                { qid: 2, depId: 1, depName: "Cardiology", question: "Did the front desk staff provide clear and helpful information during the check-in process?" },
                { qid: 3, depId: null, depName: null, question: "How would you rate the professionalism and friendliness of the nursing and support staff?" },
                { qid: 4, depId: null, depName: null, question: "Were your concerns and questions addressed by the cardiologist in a clear and understandable manner?" },
                { qid: 5, depId: null, depName: null, question: "On a scale of 1 to 5, how satisfied are you with the cleanliness and comfort of the facilities in the Cardiology Department?" },
                { qid: 6, depId: 1, depName: "Cardiology", question: "Did you experience any delays or extended waiting times beyond what you expected?" },
                { qid: 7, depId: 1, depName: "Cardiology", question: "How well did the Cardiology Department staff communicate with you regarding your treatment plan and next steps?" },
                { qid: 8, depId: null, depName: null, question: "Were the diagnostic procedures and tests thoroughly explained to you before they were performed?" },
            ],
            hasConclusionQuestions: true,
            answerType: "Emoji",
            ansPatternScale: [
                { value: 1, reviewLabel: "Dissatisfied" },
                { value: 2, reviewLabel: "Poor" },
                { value: 3, reviewLabel: "Average" },
                { value: 4, reviewLabel: "Satisfied" },
                { value: 5, reviewLabel: "Highly Satisfied" },
            ],
            templateName: "Template One Consultant",
            conclusionQuestionAns: {
                conclusionAnswers: [
                    { id: "Yes", label: "Yes", value: "Yes" },
                    { id: "No", label: "No", value: "No" },
                    { id: "May Be yes", label: "May Be yes", value: "May Be yes" },
                    { id: "Not At All", label: "Not At All", value: "Not At All" },
                ],
                conclusionQuestion: "How likely are you to recommend our Cardiology Department to friends or family?",
            },
        },
    ];

    return (
        <div>
            {templateQuestions.map((template) => (
                <div key={template.id}>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-around text-sm shadow-lg p-2'>
                            <h2 className='py-2 w-[100%]'>{template.questions[0].question}</h2>
                            <div className='flex w-[100%] gap-2 items-center'>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-blue-300'>{template.ansPatternScale[0].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-green-300'>{template.ansPatternScale[1].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-purple-400'>{template.ansPatternScale[2].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-orange-300'>{template.ansPatternScale[3].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-yellow-300'>{template.ansPatternScale[4].reviewLabel}</h2>
                            </div>
                        </div>

                        <div className='flex justify-around text-sm shadow-lg p-2'>
                            <h2 className='py-2 w-[100%]'>{template.questions[1].question}</h2>
                            <div className='flex w-[100%] gap-2 items-center'>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-blue-300'>{template.ansPatternScale[0].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-green-300'>{template.ansPatternScale[1].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-purple-400'>{template.ansPatternScale[2].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-orange-300'>{template.ansPatternScale[3].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-yellow-300'>{template.ansPatternScale[4].reviewLabel}</h2>
                            </div>
                        </div>

                        <div className='flex justify-around text-sm shadow-lg p-2'>
                            <h2 className='py-2 w-[100%]'>{template.questions[2].question}</h2>
                            <div className='flex w-[100%] gap-2 items-center'>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-blue-300'>{template.ansPatternScale[0].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-green-300'>{template.ansPatternScale[1].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-purple-400'>{template.ansPatternScale[2].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-orange-300'>{template.ansPatternScale[3].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-yellow-300'>{template.ansPatternScale[4].reviewLabel}</h2>
                            </div>
                        </div>

                        <div className='flex justify-around text-sm shadow-lg p-2'>
                            <h2 className='py-2 w-[100%]'>{template.questions[3].question}</h2>
                            <div className='flex w-[100%] gap-2 items-center'>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-blue-300'>{template.ansPatternScale[0].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-green-300'>{template.ansPatternScale[1].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-purple-400'>{template.ansPatternScale[2].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-orange-300'>{template.ansPatternScale[3].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-yellow-300'>{template.ansPatternScale[4].reviewLabel}</h2>
                            </div>
                        </div>

                        <div className='flex justify-around text-sm shadow-lg p-2'>
                            <h2 className='py-2 w-[100%]'>{template.questions[4].question}</h2>
                            <div className='flex w-[100%] gap-2 items-center'>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-blue-300'>{template.ansPatternScale[0].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-green-300'>{template.ansPatternScale[1].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-purple-400'>{template.ansPatternScale[2].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-orange-300'>{template.ansPatternScale[3].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-yellow-300'>{template.ansPatternScale[4].reviewLabel}</h2>
                            </div>
                        </div>

                        <div className='flex justify-around text-sm shadow-lg p-2'>
                            <h2 className='py-2 w-[100%]'>{template.questions[5].question}</h2>
                            <div className='flex w-[100%] gap-2 items-center'>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-blue-300'>{template.ansPatternScale[0].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-green-300'>{template.ansPatternScale[1].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-purple-400'>{template.ansPatternScale[2].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-orange-300'>{template.ansPatternScale[3].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-yellow-300'>{template.ansPatternScale[4].reviewLabel}</h2>
                            </div>
                        </div>

                        <div className='flex justify-around text-sm shadow-lg p-2'>
                            <h2 className='py-2 w-[100%]'>{template.questions[6].question}</h2>
                            <div className='flex w-[100%] gap-2 items-center'>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-blue-300'>{template.ansPatternScale[0].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-green-300'>{template.ansPatternScale[1].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-purple-400'>{template.ansPatternScale[2].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-orange-300'>{template.ansPatternScale[3].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-yellow-300'>{template.ansPatternScale[4].reviewLabel}</h2>
                            </div>
                        </div>
 
                        <div className='flex justify-around text-sm shadow-lg p-2'>
                            <h2 className='py-2 w-[100%]'>{template.questions[7].question}</h2>
                            <div className='flex w-[100%] gap-2 items-center'>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-blue-300'>{template.ansPatternScale[0].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-green-300'>{template.ansPatternScale[1].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-purple-400'>{template.ansPatternScale[2].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-orange-300'>{template.ansPatternScale[3].reviewLabel}</h2>
                                <h2 className='border p-2 w-32 rounded-md text-center bg-yellow-300'>{template.ansPatternScale[4].reviewLabel}</h2>
                            </div>
                        </div>
                    </div>


                </div>
            ))}
        </div>
    );
}


export default QuestionTemp
