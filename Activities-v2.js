import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./activities-v2.css";
class ActivitiesV2 extends Component {
  state = {
    region: ["APAC", "EMEA", "LAD", "ANTARCTICA", "NAS", "JAPAN"],
        activities: ["Day1 Onboarding", "Technical Support", "Cloud Coaching", "Opty Pursuit Activity", "Sales Play Workshop and Discovery", "Innovation Day", "Demonstration", "Proof of Concept", "Solution Proposal"],
    selectedActivities: [],
    services: ["Consumption Service", "Opportunity Pursuit", "Expansion/Renewal Services"],
    selectedServices: []
  };
  new = window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
};
  render() {
    return (
      <div className="TagsContainer">
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => {
                    
                      document.getElementById("myModal").style.display = "none";
                  }
                  }>&times;</span>
            

        <div className="bold-text">
          Division &nbsp;
          <select
            className="ItemsSecondInput  Margin-8-0"
            name="cars"
            id="cars"
            defaultValue={this.state.division}
          >
            <option value="">Select Division</option>
            <option value="EMEA">EMEA</option>
            <option value="Global">Global</option>
            <option value="JAPAC">JAPAC</option>
            <option value="LAD">LAD</option>
            <option value="MYSQL">MYSQL</option>
            <option value="NAA">NAA</option>
            <option value="NATD">NATD</option>
            <option value="GBU-CEGBU">GBU CEGBU</option>
            <option value="GBU-CGBU">GBU CGBU</option>
            <option value="GBU-FBGBU">GBU FBGBU</option>
            <option value="GBU-FSGBU">GBU FSGBU</option>
            <option value="GBU-HGBU">GBU HGBU</option>
            <option value="GBU-HSGBU">GBU HSGBU</option>
            <option value="GBU-RGBU">GBU RGBU</option>
            <option value="GBU-UGBU">GBU UGBU</option>
            <option value="ODC">ODC</option>
            <option value="NAC">NAC</option>
            <option value="JAPAN">JAPAN</option>
            <option value="OU">OU</option>
            <option value="EMEA JAPAC">EMEA JAPAC</option>
          </select>
        </div>
        <div className="outContainer">
          <div className="inFirstContainer">
            <h3 className="inFirstContainerTop bold-text">Sevices</h3>
            <h3 className="bold-text"> Search <input/> <button className="RedWoodButton">Search</button> <button className="RedWoodButton">Clear</button> </h3>
            <div className="inFirstContainerBottom">
              <div className="inFirstContainerLeft">
                <div  className="bold-text">
                  Available
                </div>
                <div className="border-solid-1-px height-300-px overflow-auto">
                {this.state.services.map((activity, index) => (
                    <div className="item-in-box" key={index}>
                      <div className="item-in-box">{activity}</div>
                    </div>
                  ))}
                  <div className="padding-8-px">
                    <button
                      title="Loads more activities"
                      className="RedWoodButton"
                    >
                      Load More
                    </button>
                  </div>
                </div>
              </div>
              <div className="inFirstContainerCenter">
                <button className="RedWoodButton" title="Select">&gt;</button>
                <button className="RedWoodButton" title="Select All">&gt;&gt;</button>
                <button className="RedWoodButton" title="Deselect">&lt;</button>
                <button className="RedWoodButton" title="Deselect All">&lt;&lt;</button>
              </div>
              <div className="inFirstContainerRight">
                <div  className="bold-text">
                  Selected
                </div>
                <div className="border-solid-1-px height-300-px overflow-auto">
                  {this.state.selectedServices.map((activity, index) => (
                    <div className="items-in-box" key={index}>
                      <div className="items-in-box">{activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="inSecondContainer">
            <h3 className="inSecondContainerTop bold-text">Activities</h3>
            <h3 className="bold-text"> Search <input/> <button className="RedWoodButton">Search</button> <button className="RedWoodButton">Clear</button> </h3>
            <div className="inSecondContainerBottom">
              <div className="inSecondContainerLeft">
                <div className="bold-text">
                  Available
                </div>
                <div className="border-solid-1-px height-300-px overflow-auto">
                  {this.state.activities.map((activity, index) => (
                  <div className="items-in-box" key={index}>
                    <div className="items-in-box">
                      {activity}
                    </div>
                  </div>
                ))}
                <div className="padding-8-px">
                  <button title="Loads more activities" className="RedWoodButton">
                    Load More
                  </button>
                </div>
                </div>
              </div>
              <div className="inSecondContainerCenter">
                <button className="RedWoodButton" title="Select">&gt;</button>
                <button className="RedWoodButton" title="Select All">&gt;&gt;</button>
                <button className="RedWoodButton" title="Deselect">&lt;</button>
                <button className="RedWoodButton" title="Deselect All">&lt;&lt;</button>
              </div>
              <div className="inSecondContainerRight">
                <div  className="bold-text">
                  Selected
                </div>
                <div className="border-solid-1-px height-300-px overflow-auto">
                  {this.state.selectedServices.map((activity, index) => (
                    <div className="item-in-box" key={index}>
                      <div className="item-in-box">{activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>



          </div>
        </div>
        <div className="TopActionBar">
          <div className="Create">Activity Mappings</div>
          <div>
            <button onClick={() => {
                    
                      document.getElementById("myModal").style.display = "block";
                  }
                  }>Create</button>
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
                  <button onClick={() => {
                    
                      document.getElementById("myModal").style.display = "block";
                  }
                  } className="RedWoodButton">Edit</button>
              </td>
            </tr>
            <tr>
              <td>Opportunity Pursuit</td>
              <td>Global</td>
              <td>Opty Pursuit Activity</td>
              <td>
                  <button onClick={() => {
                    
                      document.getElementById("myModal").style.display = "block";
                  }
                  } className="RedWoodButton">Edit</button>
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
                  <button onClick={() => {
                    
                      document.getElementById("myModal").style.display = "block";
                  }
                  } className="RedWoodButton">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ActivitiesV2;
