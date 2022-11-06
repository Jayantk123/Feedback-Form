import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "./Context/FeedbackContest";
export default function FeedbackForm({handleAdd}) {
  
const {addFeedback}=useContext(FeedbackContext);

  const [text,setText] = useState('')
  const[btnDisabled, setBtndisabled]=useState(true)
  const [rating,setRating] = useState(10)

  const [message,setMessage]=useState('')

  const handleTextChange=(e)=>{
 
if(text==='') {
  setBtndisabled(true)
  setMessage(null)
}
else if(text!=='' && text.trim().length<=10) {
  setBtndisabled(true)
  setMessage('Text must be at least 10 character')
}
else {
  setBtndisabled(false)
  setMessage(null)
}



   setText(e.target.value)

  }

  const handleSubmit=(e)=>{
e.preventDefault();

if(text.trim().length>10) {
  const newFeedback={
    text,
    rating
  }
  addFeedback(newFeedback);
  setText('')
}
  }
    return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would rate your service with us?</h2>
       <RatingSelect select={(rating)=> setRating(rating)}/>
        <div className="input-group">
            <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review" />
            <Button type="submit" children='Send' isDisabled={btnDisabled}/>
           
        </div>
{message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
