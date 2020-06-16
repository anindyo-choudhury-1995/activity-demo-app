import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./tags.css";
class Tags extends Component {
  state = {
    region: ["APAC", "EMEA", "LAD", "ANTARCTICA", "NAS", "JAPAN"]
  };
  render() {
    return (
      <div className="TagsContainer">
      <div className="TopActionBar">
          <div className="Create">Service Administration: Manage LookUps</div>
          <div>
            <Link to="/create-tag">
            <button>Create</button>
          </Link>
          </div>
        </div>
        <br/>
        <table>
          <thead>
            <tr>
              <th>
                LookUp Type
              </th>
              <th>
                LookUp Code
              </th>
              <th>
                LookUp Meaning
              </th>
              <th>
                Last Update Date
              </th>
              <th>
                Created By
              </th>
              <th>
                Owner
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                ACTIVITY
              </td>
              <td>
                Day1 Onboarding
              </td>
              <td>
                Day1 Onboarding
              </td>
              <td>
                5/15/2020
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
            </tr>
            <tr>
              <td>
                ACTIVITY
              </td>
              <td>
                Technical Support
              </td>
              <td>
                Technical Support
              </td>
              <td>
                5/15/2020
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
            </tr>
            <tr>
              <td>
                ACTIVITY
              </td>
              <td>
                Cloud Coaching
              </td>
              <td>
                Cloud Coaching
              </td>
              <td>
                5/15/2020
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
            </tr>
            <tr>
              <td>
                ACTIVITY
              </td>
              <td>
                Opty Pursuit Activity
              </td>
              <td>
                Opty Pursuit Activity
              </td>
              <td>
                5/15/2020
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
            </tr>
            <tr>
              <td>
                ACTIVITY
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
                5/15/2020
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
            </tr>
            <tr>
              <td>
                ACTIVITY
              </td>
              <td>
                Innovation Day
              </td>
              <td>
                Innovation Day
              </td>
              <td>
                5/15/2020
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
            </tr>
            <tr>
              <td>
                ACTIVITY
              </td>
              <td>
                Demonstration
              </td>
              <td>
                Demonstration
              </td>
              <td>
                5/15/2020
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
            </tr>
            <tr>
              <td>
                ACTIVITY
              </td>
              <td>
                Proof of Concept
              </td>
              <td>
                Proof of Concept
              </td>
              <td>
                5/15/2020
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
            </tr>
            <tr>
              <td>
                ACTIVITY
              </td>
              <td>
                Solution Proposal
              </td>
              <td>
                Solution Proposal
              </td>
              <td>
                5/15/2020
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
              <td>
                fusion-oal-set-intgr_ww@oracle.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tags;
