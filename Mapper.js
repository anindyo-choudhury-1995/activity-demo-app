import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mapper.css";

class Mapper extends Component {
  state = {
    region: ["APAC", "EMEA", "LAD", "ANTARCTICA", "NAS", "JAPAN"]
  };
  refreshPage = event => {
    window.location.reload();
  };
  render() {
    return (
      <div className="MapperContainer">
        <div className="TopActionBar">
          <div className="Create">Map Activity to Service Request</div>
          <div>
            <Link to="/mapper">
              <button onClick={this.refreshPage}>Save and Continue</button>
            </Link>
            <Link to="/">
              <button>Save and Close</button>
            </Link>
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </div>
        </div>
        <div className="TwoDivs MarginTop-48">
          <div className="FirstDiv">
          <div className="Items">
            <div className="ItemsFirst">Service Request</div>
            <div>
            <select
              className="ItemsSecondInput  Margin-8-08"
              name="cars"
              id="cars">
              <option value="">Select Service Request</option>
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
              id="cars">
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
            <input type="checkbox" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Day1 onboarding</label>
            <br />
            <input type="checkbox" name="vehicle2" value="Car" />
            <label for="vehicle2"> Technical Support</label>
            <br />
            <input type="checkbox" name="vehicle3" value="Boat" />
            <label for="vehicle3"> Cloud Coaching</label>
            <br />
            <input type="checkbox" name="vehicle4" value="Boat" />
            <label for="vehicle4"> Opty Pursuit Activity</label>
            <br />
            <input type="checkbox" name="vehicle5" value="Boat" />
            <label for="vehicle5"> Sales Play Workshop and Discovery</label>
            <br />
            <input type="checkbox" name="vehicle6" value="Boat" />
            <label for="vehicle6"> Innovation Day</label>
            <br />
            <input type="checkbox" name="vehicle7" value="Boat" />
            <label for="vehicle7"> Demonstration</label>
            <br />
            <input type="checkbox" name="vehicle8" value="Boat" />
            <label for="vehicle8"> Proof of Concept</label>
            <br />
            <input type="checkbox" name="vehicle9" value="Boat" />
            <label for="vehicle9"> Solution Proposal</label>
            <br />
            <br />
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr rowSpan="3">
                <th>Sl. No.</th>
                <th>Service Request</th>
                <th>Division</th>
                <th>Activity(ies)</th>
              </tr>
            </thead>
            <tbody>
              <tr rowSpan="3">
                <td>1</td>
                <td>Consumption Service</td>
                <td>Global</td>
                <td>Day1 onboarding</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Technical Support</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Cloud Coaching</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Opportunity Pursuit</td>
                <td>Global</td>
                <td>Opty Pursuit Activity</td>
              </tr>
              <tr rowSpan="5">
                <td>3</td>
                <td>Expansion/Renewal Services</td>
                <td>Global</td>
                <td>Sales Play Workshop and Discovery</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Innovation Day</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Demonstration</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Proof of Concept</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Solution Proposal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Mapper;
