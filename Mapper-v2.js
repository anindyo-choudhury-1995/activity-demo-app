import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mapper-v2.css";

class Mapper extends Component {
  componentDidMount() {
    console.log(window.location.href);
    let index = window.location.href;
    if (index[index.length - 1] == 1) {
      this.setState({
        activities: ["Day1 Onboarding", "Technical Support", "Cloud Coaching"]
      });
    } else if (index[index.length - 1] == 2) {
      this.setState({ activities: ["Opty Pursuit Activity"] });
    } else if (index[index.length - 1] == 3) {
      this.setState({
        activities: [
          "Sales Play Workshop and Discovery",
          "Innovation Day",
          "Demonstration",
          "Proof of Concept",
          "Solution Proposal"
        ]
      });
    } else {
      this.setState({ activities: [] });
    }
    console.log(this.state);
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
        <div className="Division">
          Division
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
            <div>
              list
            </div>
            <div>
              selected
            </div>
          </div>
          <div  className="inSecondContainer">
            <div>
              list
            </div>
            <div>
              selected
            </div>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default Mapper;
