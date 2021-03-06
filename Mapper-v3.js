import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mapper-v3.css";

class MapperV3 extends Component {
  state = {
    activities: [],
    services: []
    
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
  removeFromServices = index => {
    console.log(index);
    var newServices = JSON.parse(JSON.stringify(this.state.services));
    newServices.splice(index, 1);
    console.log(newServices);
    this.setState({ services: newServices });
  };
  addToServices = value => {
    if (value && this.state.services.indexOf(value) == -1) {
      var newServices = JSON.parse(JSON.stringify(this.state.services));
      newServices.push(value);
      this.setState({ services: newServices });
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
          <div className="inFirstContainer-v3">
            <div className="ActivityHeading AddActivityHeading">
                <div>Services </div>
                <input
                  className="ActivityInput"
                  list="services"
                  name="service"
                  id="service"
                />
                <datalist id="services">
                  <option value="">Select Services</option>
                  <option value="Consumption Service">Consumption Service</option>
                  <option value="Opportunity Pursuit">Opportunity Pursuit</option>
                  <option value="Expansion/Renewal Services">Expansion/Renewal Services</option>
                </datalist>
                <button
                  onClick={() => {
                    this.addToServices(
                      document.getElementById("service").value
                    );
                    document.getElementById("service").value = "";
                    }
                  }
                  className="RedWoodButton"
                >
                  Add Service
                </button>
              </div>
              <div className="ChipSet">
                {this.state.services.map((service, index) => (
                  <div className="chip" key={index}>
                    {service}
                    <span
                      className="closebtn"
                      onClick={() => this.removeFromServices(index)}
                    >
                      &times;
                    </span>
                  </div>
                ))}
              </div>

          </div>
          <div className="inSecondContainer-v3">
              <div className="ActivityHeading AddActivityHeading">
                <div>Activities </div>
                <input
                  className="ActivityInput"
                  list="activities"
                  name="activity"
                  id="activity"
                />
                <datalist id="activities">
                  <option value="">Select Activities</option>
                  <option value="Day1 Onboarding">Day1 Onboarding</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Cloud Coaching">Cloud Coaching</option>
                  <option value="Opty Pursuit Activity">
                    Opty Pursuit Activity
                  </option>
                  <option value="Sales Play Workshop and Discovery">
                    Sales Play Workshop and Discovery
                  </option>
                  <option value="Innovation Day">Innovation Day</option>
                  <option value="Demonstration">Demonstration</option>
                  <option value="Proof of Concept">Proof of Concept</option>
                  <option value="Solution Proposal">Solution Proposal</option>
                </datalist>
                <button
                  onClick={() => {
                    this.addToActivities(
                      document.getElementById("activity").value
                    );
                      document.getElementById("activity").value = ""
                  }
                  }
                  className="RedWoodButton"
                >
                  Add Activity
                </button>
              </div>
              <div className="ChipSet">
                {this.state.activities.map((activity, index) => (
                  <div className="chip" key={index}>
                    {activity}
                    <span
                      className="closebtn"
                      onClick={() => this.removeFromActivities(index)}
                    >
                      &times;
                    </span>
                  </div>
                ))}
              </div>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default MapperV3;
