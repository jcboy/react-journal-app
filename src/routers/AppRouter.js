import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import {AuthRouter} from "./AuthRouter";
import {JournalView} from "../components/journal/JournalView";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={JournalView} />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}