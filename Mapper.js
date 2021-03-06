import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mapper.css";

class Mapper extends Component {
  componentDidMount() {
    console.log(window.location.href);
    let index = window.location.href;
    if (index[index.length - 1] == 1) {
      this.setState({ activities: ["Day1 Onboarding", "Technical Support", "Cloud Coaching"] })
    } else if (index[index.length - 1] == 2) {
      this.setState({ activities: ["Opty Pursuit Activity"] })
    } else if (index[index.length - 1] == 3) {
      this.setState({ activities: ["Sales Play Workshop and Discovery","Innovation Day","Demonstration","Proof of Concept","Solution Proposal"] })
    } else {
      this.setState({ activities: [] })
    }
    console.log(this.state)
  }
  state = {
    activities: ["Day1 Onboarding", "Technical Support", "Cloud Coaching"]
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
        <div className="TwoDivs MarginTop-48">
          <div className="FirstDiv">
            <div className="Items">
              <div className="ItemsFirst">Service</div>
              <div>
                {/*this.state.activities.length == 3 ?
                <select
                  className="ItemsSecondInput  Margin-8-08"
                  name="cars"
                  id="cars"
                  defaultValue="consumptionService"
                ><option value="">Select Service</option>
                  <option value="consumptionService">
                    Consumption Service
                  </option>
                  <option value="opportunityPursuit">
                    Opportunity Pursuit
                  </option>
                  <option value="expansionRenewalServices">
                    Expansion/Renewal Services
                  </option>
                </select>
                 :
                  this.state.activities.length == 1 ? 
                  <select
                  className="ItemsSecondInput  Margin-8-08"
                  name="cars"
                  id="cars"
                  defaultValue="opportunityPursuit"
                ><option value="">Select Service</option>
                  <option value="consumptionService">
                    Consumption Service
                  </option>
                  <option value="opportunityPursuit">
                    Opportunity Pursuit
                  </option>
                  <option value="expansionRenewalServices">
                    Expansion/Renewal Services
                  </option>
                </select>
                  :
                    this.state.activities.length == 5
                     ? 
                     <select
                  className="ItemsSecondInput  Margin-8-08"
                  name="cars"
                  id="cars"
                  defaultValue="expansionRenewalServices"
                ><option value="">Select Service</option>
                  <option value="consumptionService">
                    Consumption Service
                  </option>
                  <option value="opportunityPursuit">
                    Opportunity Pursuit
                  </option>
                  <option value="expansionRenewalServices">
                    Expansion/Renewal Services
                  </option>
                </select>
                     :
                      <select
                  className="ItemsSecondInput  Margin-8-08"
                  name="cars"
                  id="cars"
                  defaultValue=""
                ><option value="">Select Service</option>
                  <option value="consumptionService">
                    Consumption Service
                  </option>
                  <option value="opportunityPursuit">
                    Opportunity Pursuit
                  </option>
                  <option value="expansionRenewalServices">
                    Expansion/Renewal Services
                  </option>
                </select>
                */}
                <select
                  className="ItemsSecondInput  Margin-8-08"
                  name="cars"
                  id="cars"
                  defaultValue=""
                ><option value="">Select Service</option>
                  <option value="consumptionService">
                    Consumption Service
                  </option>
                  <option value="opportunityPursuit">
                    Opportunity Pursuit
                  </option>
                  <option value="expansionRenewalServices">
                    Expansion/Renewal Services
                  </option>
                </select>
                  
              </div>
            </div>
            <br />
            <br />
            <div className="Items">
              <div className="ItemsFirst">Division</div>
              <div>
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
                  {/*<option value="ANTARCTICA">ANTARCTICA</option>
              <option value="APAC">APAC</option>
              <option value="NAS">NAS</option>*/}
                </select>
              </div>
            </div>
          </div>
          <div className="SecondDiv">
            <div className="Width-400">
              <div className="ActivityHeading AddActivityHeading">
                <div>Activities </div>
                <input
                  className="ActivityInput"
                  list="browsers"
                  name="browser"
                  id="browser"
                />
                <datalist id="browsers">
                  <option value="">Select Division</option>
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
                  onClick={() =>
                    this.addToActivities(
                      document.getElementById("browser").value
                    )
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
                {/*<div className="chip">
                  Day1 Onboarding
                  <span className="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                </div>
                <div className="chip">
                  Technical Support
                  <span className="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                </div>
                <div className="chip">
                  Cloud Coaching
                  <span className="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                </div>*/}
              </div>
              {/*<div>
                <div className="ActivityItem">
                  <input
                    type="checkbox"
                    name="vehicle1"
                    value="Bike"
                    defaultChecked
                  />
                  <label htmlFor="vehicle1"> Day1 onboarding</label>
                </div>
                <div className="ActivityItem">
                  <input
                    type="checkbox"
                    name="vehicle2"
                    value="Car"
                    defaultChecked
                  />
                  <label htmlFor="vehicle2"> Technical Support</label>
                </div>
                <div className="ActivityItem">
                  <input
                    type="checkbox"
                    name="vehicle3"
                    value="Boat"
                    defaultChecked
                  />
                  <label htmlFor="vehicle3"> Cloud Coaching</label>
                </div>
                <div className="ActivityItem">
                  <input type="checkbox" name="vehicle4" value="Boa" />
                  <label htmlFor="vehicle4"> Opty Pursuit Activity</label>
                </div>
                <div className="ActivityItem">
                  <input type="checkbox" name="vehicle5" value="Bo" />
                  <label htmlFor="vehicle5">
                    {" "}
                    Sales Play Workshop and Discovery
                  </label>
                </div>
                <div className="ActivityItem">
                  <input type="checkbox" name="vehicle6" value="B" />
                  <label htmlFor="vehicle6"> Innovation Day</label>
                </div>
                <div className="ActivityItem">
                  <input type="checkbox" name="vehicle7" value="oat" />
                  <label htmlFor="vehicle7"> Demonstration</label>
                </div>
                <div className="ActivityItem">
                  <input type="checkbox" name="vehicle8" value="at" />
                  <label htmlFor="vehicle8"> Proof of Concept</label>
                </div>
                <div className="ActivityItem">
                  <input type="checkbox" name="vehicle9" value="t" />
                  <label htmlFor="vehicle9"> Solution Proposal</label>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default Mapper;
