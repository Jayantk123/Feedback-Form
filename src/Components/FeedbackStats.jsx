import React from 'react'
import PropTypes from 'prop-types'
export default function FeedbackStats({feedback}) {
  
    //average reading
    let avg_reading = feedback.reduce((acc,curr)=>{
        return acc+curr.rating
    },0)/feedback.length

    avg_reading=avg_reading.toFixed(1).replace(/[.,]0$/, '')
  
    return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating: {isNaN(avg_reading)?0:avg_reading}</h4>
        </div>
  )
}

FeedbackStats.propTypes={
    feedback:PropTypes.array.isRequired,
}