import React from 'react';
import templateQuestions from './ApiData';

function QuestionTemp() {
    return (
        <div>
            {templateQuestions.map((template) => (
                <div  className='flex flex-col gap-8' key={template.id}>
                    {template.questions.map((item) => (
                        <div className='flex shadow-lg border p-4' key={item.qid}>
                            <p className='w-[100%] text-sm'>{item.question}</p>
                            <div className='flex text-sm justify-around items-center w-[100%]'>
                                {template.ansPatternScale.map((scaleItem ,i) => (
                                    <div  key={scaleItem.value}>
                                        <button className='border border-[#3F2860] p-2 w-32 rounded-md text-center' style={{backgroundColor:['#6CB2EB', '#68D391','#9F7AEA' , '#F6AD55','#F6E05E '][i]}}> {scaleItem.reviewLabel}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default QuestionTemp;
