import React, { Component } from "react";
import EditAdd from "../sideComponents/EditAdd";
import SeeJobs from "../sideComponents/SeeJobs";
import PeopleAlsoViewed from "../sideComponents/PeopleAlsoViewed";
import PeopleYouMayKnow from "../sideComponents/PeopleYouMayKnow";
import InLearning from "../sideComponents/InLearning";

export default class SideComps extends Component {
  render() {
    return (
      <div>
        <EditAdd />
        <SeeJobs />
        <PeopleAlsoViewed />
        <PeopleYouMayKnow />
        <InLearning />
      </div>
    );
  }
}
