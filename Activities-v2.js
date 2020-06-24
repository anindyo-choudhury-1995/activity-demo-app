import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./activities-v2.css";
class ActivitiesV2 extends Component {
  state = {
    region: ["APAC", "EMEA", "LAD", "ANTARCTICA", "NAS", "JAPAN"]
  };
  render() {
    return (
      <div className="TagsContainer">
        <div className="TopActionBar">
          <div className="Create">Activity Mappings</div>
          <div>
            <Link>
              <button>Create</button>
            </Link>
          </div>
        </div>
        <br />
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Division</th>
              <th>Activity(ies)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Consumption Service</td>
              <td>Global</td>
              <td>
                Day1 onboarding <br />
                <br />
                Technical Support <br />
                <br />
                Cloud Coaching
              </td>
              <td>
                <Link to="/mapper-v3">
                  <button className="RedWoodButton">Edit</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Opportunity Pursuit</td>
              <td>Global</td>
              <td>Opty Pursuit Activity</td>
              <td>
                <Link to="/mapper-v3">
                  <button className="RedWoodButton">Edit</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Expansion/Renewal Services</td>
              <td>Global</td>
              <td>
                Sales Play Workshop and Discovery
                <br />
                <br />
                Innovation Day
                <br />
                <br />
                Demonstration
                <br />
                <br />
                Proof of Concept
                <br />
                <br />
                Solution Proposal
                <br />
                <br />
              </td>
              <td>
                <Link to="/mapper-v3">
                  <button className="RedWoodButton">Edit</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ActivitiesV2;
