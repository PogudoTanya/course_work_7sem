import "./App.css";
import Header from "./components/Header";
import ParticipantsList from "./screens/participantsList/ParticipantsList";
import Participant from "./screens/participant/Participant";
import SendEmail from "./screens/sendEmail/sendEmail";
import Preview from "./screens/preview/Preview";
import React from "react";

import { Route, Switch, Redirect, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Switch>
          <Route path="/home" component={Preview} />
          <Route path="/participants-list" component={ParticipantsList} />
          <Route path="/add-participant" component={Participant} />
          <Route path="/send-email" component={SendEmail} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
