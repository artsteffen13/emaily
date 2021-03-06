import React from 'react';
import {connect} from 'react-redux';
import formFields from "./formFields";
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';

const SurveyFormReview = (props) => {
    const reviewFields = formFields.map(field => {
       return (
           <div key={field.name}>
               <label>{field.label}</label>
               <div>
                   {props.formValues[field.name]}
               </div>
           </div>
       )
    });


    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
            className="yellow darken-3 white-text btn-flat"
            onClick={props.goBack}
            >
                Back
            </button>
            <button
                className="green white-text btn-flat right"
            onClick={actions.submitSurvey(props.formValues, props.history)}
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
