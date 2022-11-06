import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./Components/AboutIconLink";
import { FeedbackProvider } from "./Components/Context/FeedbackContest";
export default function App() {


  return (
    <FeedbackProvider>
      <Router>
        <Header title="Feedback App" />

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm
                  //  handleAdd={addFeedback}
                    />
                  <FeedbackStats 
                  // feedback={feedback}
                   />

                  <FeedbackList
                    // feedback={feedback}
                    // handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}
