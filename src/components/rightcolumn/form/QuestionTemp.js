import React, { useState } from 'react';
import templateQuestions from './ApiData';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import LinearProgress from '@mui/material/LinearProgress';

function QuestionTemp() {
  const [progress, setProgress] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleButtonClick = (questionId, value) => {
    if (!selectedOptions[questionId]) {
      setSelectedOptions(prevSelectedOptions => ({
        ...prevSelectedOptions,
        [questionId]: value,
      }));

      setProgress(prevProgress => Math.min(prevProgress + 1, 100));

      setDisabledButtons(prevDisabledButtons => [
        ...prevDisabledButtons,
        `${questionId}_${value}`,
      ]);
    }
  };

  const isButtonDisabled = (questionId, value) => {
    return disabledButtons.includes(`${questionId}_${value}`);
  };

  return (
    <div className='space-y-5 p-10'>
      <div>
        <Link
          to='/home'
          className='flex items-center py-2 mb-2 gap-2 bg-[#3F2860] w-[16vw] px-3 text-white rounded-lg'
        >
          <FaArrowLeft />
          Back to template selection
        </Link>
      </div>
      <LinearProgress variant='determinate' value={(progress / templateQuestions[0].questions.length) * 100} />
      <p className='text-center'>
      Question attended : {progress}/{templateQuestions[0].questions.length}
      </p>
      {templateQuestions.map((tempData) => (
        <div className='flex flex-col gap-8 shadow-md p-4 border' key={tempData.id}>
          {tempData.questions.map((item) => (
            <div className='flex gap-2' key={item.qid}>
              <p className=''>{item.qid}.</p>
              <p className='w-[100%] '>{item.question}</p>
              <div className='flex justify-around items-center w-[100%]'>
                {tempData.ansPatternScale.map((ansItem, i) => (
                  <div key={ansItem.value}>
                    <button
                      className={`py-2 w-[7.5vw] text-[13px] rounded-tl-2xl rounded-br-2xl ${selectedOptions[item.qid] === ansItem.value ? 'border-2 border-[#3F2860] text-[#3F2860] font-bold' : ''}`}
                      onClick={() => { handleButtonClick(item.qid, ansItem.value); }}
                      disabled={isButtonDisabled(item.qid, ansItem.value)}
                      style={{ backgroundColor: ['#6CB2EB', '#68D391', '#9F7AEA', '#F6AD55', '#F6E05E '][i] }}
                    >
                      {ansItem.reviewLabel}
                    </button>
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
