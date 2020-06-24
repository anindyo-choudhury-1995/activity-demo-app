import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./activities-v2.css";
class ActivitiesV2 extends Component {
  state = {
    region: ["APAC", "EMEA", "LAD", "ANTARCTICA", "NAS", "JAPAN"],
    activities: [
      "Day1 Onboarding",
      "Technical Support",
      "Cloud Coaching",
      "Opty Pursuit Activity",
      "Sales Play Workshop and Discovery",
      "Innovation Day",
      "Demonstration",
      "Proof of Concept",
      "Solution Proposal"
    ],
    markedActivity: [],
    unmarkedActivity: [],
    selectedActivities: [],
    services: [
      "Consumption Service",
      "Opportunity Pursuit",
      "Expansion/Renewal Services"
    ],
    markedService: [],
    unmarkedService: [],
    selectedServices: []
  };
  markService = value => {
    this.setState({markedService: [value]})
  }
  unmarkService = value => {
    this.setState({unmarkedService: [value]})
  }
  selectService = value => {
    if (value && this.state.services.indexOf(value) != -1 && this.state.selectedServices.indexOf(value) == -1) {
      var newSelectedServices = JSON.parse(JSON.stringify(this.state.selectedServices));
      var newServices = JSON.parse(JSON.stringify(this.state.services));
      newSelectedServices.push(value);
      newServices = newServices.filter(service => service != value);
      this.setState({ selectedServices: newSelectedServices }, () => {
        this.setState({services: newServices})
      });
    }
  };
  unselectService = value => {
    if (value && this.state.services.indexOf(value) == -1 && this.state.selectedServices.indexOf(value) != -1) {
      var newSelectedServices = JSON.parse(JSON.stringify(this.state.selectedServices));
      var newServices = JSON.parse(JSON.stringify(this.state.services));
      newServices.push(value);
      newSelectedServices = newSelectedServices.filter(service => service != value);
      this.setState({services: newServices}, () => {
        this.setState({ selectedServices: newSelectedServices })
      });
    }
  };
  selectAllService = () => {
    this.setState({selectedServices: [
      "Consumption Service",
      "Opportunity Pursuit",
      "Expansion/Renewal Services"
    ]}, ()=> {
      this.setState({services: []})
    })
  }
  unselectAllService = () => {
    this.setState({services: [
      "Consumption Service",
      "Opportunity Pursuit",
      "Expansion/Renewal Services"
    ]}, () => {
      this.setState({selectedServices: []})
    })
  }
  markActivity = value => {
    this.setState({markedActivity: [value]})
  }
  unmarkActivity = value => {
    this.setState({unmarkedActivity: [value]})
  }
  selectActivity = value => {
    if (value && this.state.activities.indexOf(value) != -1 && this.state.selectedActivities.indexOf(value) == -1) {
      var newSelectedActivities = JSON.parse(JSON.stringify(this.state.selectedActivities));
      var newActivities = JSON.parse(JSON.stringify(this.state.activities));
      newSelectedActivities.push(value);
      newActivities = newActivities.filter(activity => activity != value);
      this.setState({ selectedActivities: newSelectedActivities }, () => {
        this.setState({activities: newActivities})
      });
    }
  };
  unselectActivity = value => {
    if (value && this.state.activities.indexOf(value) == -1 && this.state.selectedActivities.indexOf(value) != -1) {
      var newSelectedActivities = JSON.parse(JSON.stringify(this.state.selectedActivities));
      var newActivities = JSON.parse(JSON.stringify(this.state.activities));
      newActivities.push(value);
      newSelectedActivities = newSelectedActivities.filter(activity => activity != value);
      this.setState({activities: newActivities}, () => {
        this.setState({ selectedActivities: newSelectedActivities })
      });
    }
  };
  selectAllActivity = () => {
    this.setState({selectedActivities: [
      "Day1 Onboarding",
      "Technical Support",
      "Cloud Coaching",
      "Opty Pursuit Activity",
      "Sales Play Workshop and Discovery",
      "Innovation Day",
      "Demonstration",
      "Proof of Concept",
      "Solution Proposal"
    ]}, ()=> {
      this.setState({activities: []})
    })
  }
  unselectAllActivity = () => {
    this.setState({activities: [
      "Day1 Onboarding",
      "Technical Support",
      "Cloud Coaching",
      "Opty Pursuit Activity",
      "Sales Play Workshop and Discovery",
      "Innovation Day",
      "Demonstration",
      "Proof of Concept",
      "Solution Proposal"
    ]}, () => {
      this.setState({selectedActivities: []})
    })
  }
  new = (window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  });
  render() {
    return (
      <div className="TagsContainer">
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => {
                document.getElementById("myModal").style.display = "none";
              }}
            >
              &times;
            </span>
            <div className="bolder-text">Service to Activity Mapping</div>
            <br />
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
                <h3 className="bold-text">
                  {" "}
                  Search <input />{" "}
                  <button className="RedWoodButton">Search</button>{" "}
                  <button className="RedWoodButton">Clear</button>{" "}
                </h3>
                <div className="inFirstContainerBottom">
                  <div className="inFirstContainerLeft">
                    <div className="bold-text">Available</div>
                    <div className="border-solid-1-px height-300-px overflow-auto">
                      {this.state.services.map((service, index) => (
                        <div className="items-in-box" key={index}>
                          <button onClick={() => {this.markService(service);}} className="items-in-box">{service}</button>
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
                    <button className="RedWoodButton" onClick={() => {this.selectService(this.state.markedService[0]);}} title="Select">
                      &gt;
                    </button>
                    <button className="RedWoodButton" onClick={() => {this.selectAllService()}} title="Select All">
                      &gt;&gt;
                    </button>
                    <button className="RedWoodButton" onClick={() => {this.unselectService(this.state.unmarkedService[0]);}} title="Deselect">
                      &lt;
                    </button>
                    <button className="RedWoodButton" onClick={() => {this.unselectAllService()}} title="Deselect All">
                      &lt;&lt;
                    </button>
                  </div>
                  <div className="inFirstContainerRight">
                    <div className="bold-text">Selected</div>
                    <div className="border-solid-1-px height-300-px overflow-auto">
                      {this.state.selectedServices.map((service, index) => (
                        <div className="items-in-box" key={index}>
                          <button onClick={() => {this.unmarkService(service);}} className="items-in-box">{service}</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="inSecondContainer">
                <h3 className="inSecondContainerTop bold-text">Activities</h3>
                <h3 className="bold-text">
                  {" "}
                  Search <input />{" "}
                  <button className="RedWoodButton">Search</button>{" "}
                  <button className="RedWoodButton">Clear</button>{" "}
                </h3>
                <div className="inSecondContainerBottom">
                  <div className="inSecondContainerLeft">
                    <div className="bold-text">Available</div>
                    <div className="border-solid-1-px height-300-px overflow-auto">
                      {this.state.activities.map((activity, index) => (
                        <div className="items-in-box" key={index}>
                          <button onClick={() => {this.markActivity(activity);}} className="items-in-box">{activity}</button>
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
                  <div className="inSecondContainerCenter">
                    <button className="RedWoodButton" onClick={() => {this.selectActivity(this.state.markedActivity[0]);}} title="Select">
                      &gt;
                    </button>
                    <button className="RedWoodButton" onClick={() => {this.selectAllActivity()}} title="Select All">
                      &gt;&gt;
                    </button>
                    <button className="RedWoodButton" onClick={() => {this.unselectActivity(this.state.unmarkedActivity[0]);}} title="Deselect">
                      &lt;
                    </button>
                    <button className="RedWoodButton" onClick={() => {this.unselectAllActivity()}} title="Deselect All">
                      &lt;&lt;
                    </button>
                  </div>
                  <div className="inSecondContainerRight">
                    <div className="bold-text">Selected</div>
                    <div className="border-solid-1-px height-300-px overflow-auto">
                      {this.state.selectedActivities.map((activity, index) => (
                        <div className="items-in-box" key={index}>
                          <button onClick={() => {this.unmarkActivity(activity);}} className="items-in-box">{activity}</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-align-end">
              <button className="RedWoodButton" onClick={() => {
                document.getElementById("myModal").style.display = "none";
              }}>Ok</button>
              <button className="RedWoodButton" onClick={() => {
                document.getElementById("myModal").style.display = "none";
              }}>Cancel</button>
            </div>
          </div>
        </div>
        <div className="TopActionBar">
          <div className="Create">Activity Mappings</div>
          <div>
            <button
              onClick={() => {
                document.getElementById("myModal").style.display = "block";
              }}
            >
              Create
            </button>
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
                <button
                  onClick={() => {
                    document.getElementById("myModal").style.display = "block";
                  }}
                  className="RedWoodButton"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>Opportunity Pursuit</td>
              <td>Global</td>
              <td>Opty Pursuit Activity</td>
              <td>
                <button
                  onClick={() => {
                    document.getElementById("myModal").style.display = "block";
                  }}
                  className="RedWoodButton"
                >
                  Edit
                </button>
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
                <button
                  onClick={() => {
                    document.getElementById("myModal").style.display = "block";
                  }}
                  className="RedWoodButton"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ActivitiesV2;
