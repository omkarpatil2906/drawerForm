import React, { useState } from 'react';
import templateQuestions from './ApiData';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}
LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};
function QuestionTemp() {
    const [progress, setProgress] = useState([]);

    function handleClick(event) {
        const totalQuestion = templateQuestions[0].questions.length;
        const totalReview = templateQuestions[0].ansPatternScale.length

        const newProgress = (progress + 1) + (10 / (totalQuestion * totalReview));
        setProgress(Math.min(newProgress, 10));
        event.currentTarget.disabled = true;
    }
    return (
        <div className='space-y-5'>
            <div >
                <Box sx={{ width: '100%' }}>
                    <LinearProgressWithLabel value={progress} />
                </Box>
            </div>
            <div>
                <Link to="/home" className='flex items-center py-2 mb-2 gap-2 bg-[#3F2860] w-[16vw] px-3 text-white rounded-lg'>
                    <FaArrowLeft />
                    Back to template selection
                </Link>
            </div>
            {templateQuestions.map((tempData) => (
                <div className='flex flex-col gap-8 shadow-md p-4 border' key={tempData.id}>
                    {tempData.questions.map((item) => (
                        <div className='flex gap-2' key={item.qid}>
                            <p className=''>{item.qid}.</p>
                            <p className='w-[100%] '>{item.question}</p>
                            <div className='flex justify-around items-center w-[100%]'>
                                {tempData.ansPatternScale.map((ansItem, i) => (
                                    <div key={ansItem.value}>
                                        <button onClick={handleClick} className=' border-[#3F2860] rounded-[3px] p-2 text-xs w-28 rounded-tl-2xl rounded-br-2xl text-center' style={{ backgroundColor: ['#6CB2EB', '#68D391', '#9F7AEA', '#F6AD55', '#F6E05E '][i] }}> {ansItem.reviewLabel}</button>
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
