import {v4 as uuidv4} from 'uuid'
import { useState } from "react";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import React from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './Components/AboutIconLink';

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id=uuidv4()
    // add new object data  
setFeedback([newFeedback,...feedback])

  }
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <Router>
    
      <Header title="Feedback App" />
    
      <div className="container">
        <Routes>
      <Route path='/' element={<>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
     
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      
      </>}>
         </Route>
      
     <Route path='/about' element={<AboutPage/>}/>
     </Routes>
     
      </div>
      <AboutIconLink/>
    </Router>
   
  );
}
