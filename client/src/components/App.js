import React, {useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from "./Header";
import Landing from "./Landing";


const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New </h2>;

const App = (props) => {
    useEffect(() => {
        props.fetchUser();
        // eslint-disable-next-line
    }, []);

    return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
    );
};

export default connect(null, actions)(App);