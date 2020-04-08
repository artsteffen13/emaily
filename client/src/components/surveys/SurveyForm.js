import React from 'react';
import {reduxForm, Field} from "redux-form";
import SurveyField from "./SurveyField";
import {Link} from "react-router-dom";
import validateEmails from '../../utils/validateEmail';
import formFields from './formFields';

const SurveyForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit(props.onSubmit)}>
                <div>
                    {formFields.map(field => {
                        return (
                            <Field
                                key={field.name}
                                label={field.label} type="text"
                                name={field.name}
                                component={SurveyField}/>
                        )
                    })
                    }
                </div>
                <Link to="/surveys" className="red btn-flat white-text" >
                    <i className="material-icons right">cancel</i>
                    Cancel
                </Link>
                <button className="teal btn-flat right white-text" type="submit">
                    Next
                    <i className="material-icons right">done</i>
                </button>
            </form>
        </div>
    );
};

const validate = (values) => {
    const errors={};
    errors.recipients = validateEmails(values.recipients || '');

    formFields.forEach(item => {
       if (!values[item.name]) {
           errors[item.name] = 'Please provide a value'
       }
    });

    return errors
};

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
