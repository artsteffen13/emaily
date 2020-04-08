import React, {useState} from 'react';
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import {reduxForm} from "redux-form";

const SurveyNew = () => {
    const [showReview, setShowReview] = useState(false);

    const goToReview = () => {
        setShowReview(true);
    };

    const goBackToForm = () => {
      setShowReview(false)
    };

    const survey = showReview ? <SurveyFormReview goBack={goBackToForm} /> : <SurveyForm onSubmit={goToReview} />;

    return (
        <div>
            {survey}
        </div>
    );
};

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);