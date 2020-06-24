import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mapper-v2.css";

class Mapper extends Component {
  state = {
    activities: ["Day1 Onboarding", "Technical Support", "Cloud Coaching", "Opty Pursuit Activity", "Sales Play Workshop and Discovery", "Innovation Day", "Demonstration", "Proof of Concept", "Solution Proposal"],
    selectedActivities: [],
    services: ["Consumption Service", "Opportunity Pursuit", "Expansion/Renewal Services"],
    selectedServices: []
    
  };
  removeFromActivities = index => {
    console.log(index);
    var newActivities = JSON.parse(JSON.stringify(this.state.activities));
    newActivities.splice(index, 1);
    console.log(newActivities);
    this.setState({ activities: newActivities });
  };
  addToActivities = value => {
    if (value && this.state.activities.indexOf(value) == -1) {
      var newActivities = JSON.parse(JSON.stringify(this.state.activities));
      newActivities.push(value);
      this.setState({ activities: newActivities });
    }
  };
  refreshPage = event => {
    window.location.reload();
  };
  render() {
    return (
      <div className="MapperContainer">
        <div className="TopActionBar">
          <div className="Create">Map Activity to Service</div>
          <div>
            <Link to="/mapper">
              <button onClick={this.refreshPage}>Save and Continue</button>
            </Link>
            <Link to="/activity">
              <button>Save and Close</button>
            </Link>
            <Link to="/activity">
              <button>Cancel</button>
            </Link>
          </div>
        </div>
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
                      <input
                        type="checkbox"
                        id={index}
                        name={index}
                        value={activity}
                      />
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
                    <div className="item-in-box" key={index}>
                      <input
                        type="checkbox"
                        id={index}
                        name={index}
                        value={activity}
                      />
                      <div className="item-in-box">{activity}</div>
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
                  <div className="item-in-box" key={index}>
                    <input type="checkbox" id={index} name={index} value={activity} />
                    <div className="item-in-box">
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
                      <input
                        type="checkbox"
                        id={index}
                        name={index}
                        value={activity}
                      />
                      <div className="item-in-box">{activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default Mapper;
