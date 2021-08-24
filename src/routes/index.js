import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import StudentRegistration from '../components/Pages/StudentRegistration'
import StudentRecord from '../components/Pages/StudentRecord'
import { Provider } from "react-redux";
import store from '../redux/store'

export default function Routes() {
    return (
        <Provider store={store}>
            <Switch>
                <Route exact path='/' component={StudentRegistration} />
                <Route exact path='/student-registration' component={StudentRegistration} />
                <Route exact path='/student-record' component={StudentRecord} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Provider>
    );
}
