import {FaTimes} from 'react-icons/fa';
import Card from "./shared/Card";
import PropTypes from 'prop-types'
import { useContext } from 'react';
import FeedbackContext from './Context/FeedbackContest';

export default function FeedbackItem({ item }) {

  const {deleteFeedback}=useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>deleteFeedback(item.id)}className="close">
        <FaTimes color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>
     
      </Card>
  );
}

FeedbackItem.protoTypes={
  item:PropTypes.object.isRequired,
}
