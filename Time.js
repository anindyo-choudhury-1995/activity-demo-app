import React, { Component } from "react";
import "./time.css";
class Time extends Component {
  state = {
    nums: [1, 2, 3],
    otherNums: [],
    show: {}
  }

  selectValue = (index) => {
    var newShow = JSON.parse(JSON.stringify(this.state.show));
    if(event.target.value) {
      newShow[index] = event.target.value;
      this.setState({show: newShow});
    }
    
  }
  addService = (event) => {
    var newNums = JSON.parse(JSON.stringify(this.state.nums));
    newNums.push(newNums.length+1);
    this.setState({nums: newNums});
  }
  addNonService = (event) => {
    var newOtherNums = JSON.parse(JSON.stringify(this.state.otherNums));
    newOtherNums.push(newOtherNums.length+1);
    this.setState({otherNums: newOtherNums});
  }
  render() {
    return (
      <div className="TimeContainer">
        <div className="BorderDiv">
          <div className="TopBar">
            <div className="Title">Manage Time</div>
            <button className="ShowMyList">Show My List</button>
          </div>
          <hr />
          <div className="DateBar">
            <div>
              <input type="date" />{" "}
              <a className="LastEmptyWeek">Last Empty Week</a>
            </div>
            <div>
              <b>Time Entry Period:</b> 30-MAY-2020 - 05-JUN-2020
            </div>
          </div>
          <div className="HourDisplay">
            <div className="Hour">
              <b>Service Hours:</b> 0
            </div>
            <div className="Hour">
              <b>Non Service Hours:</b> 0
            </div>
            <div className="Hour">
              <b>Time off:</b> 0
            </div>
            <div className="Hour">
              <b>Total Hours:</b> 0
            </div>
          </div>
          <div className="TimeEntryTable">
            <table>
              <thead>
                <tr>
                  <th>Service Request</th>
                  <th>Activity</th>
                  <th>Task Type</th>
                  <th>Delivery Type</th>
                  <th>
                    Sat <br />
                    (30 MAY)
                  </th>
                  <th>
                    Sun <br />
                    (31 MAY)
                  </th>
                  <th>
                    Mon <br />
                    (1 JUN)
                  </th>
                  <th>
                    Tue <br />
                    (2 JUN)
                  </th>
                  <th>
                    Wed <br />
                    (3 JUN)
                  </th>
                  <th>
                    Thu <br />
                    (4 JUN)
                  </th>
                  <th>
                    Fri <br />
                    (5 JUN)
                  </th>
                  <th>Note</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.nums.map((num, index) => (
                  <tr key={index}>
                    <td>
                      <select className="width-300" name="cars" id="cars" onChange={() => this.selectValue(index)}>
                        <option value="">Select Service Request</option>
                        <option value="0">
                          Customer Workshop or Cloud Day-A6K8X-PEN_Test_Account(Belmont, US)
                        </option>
                        <option value="1">
                          Consumption Service-9V8CD-Nationwide Mutual Insurance Company
                        </option>
                        <option value="2">
                          Opportunity Pursuit-106977-IBM
                        </option>
                        <option value="3">
                          Expansion/Renewal Services-95913-Replacement Parts
                        </option>
                      </select>
                    </td>
                    <td>
                    {
                      this.state.show[index] == 1 ? 
                      <select name="cars" id="cars" className="width-100">
                        <option value="">Select Activity</option>
                        <option value="1">Day1 onboarding</option>
                        <option value="2">Technical Support</option>
                        <option value="3">Cloud Coaching</option>
                      </select>
                      : this.state.show[index] == 2 ? 
                      <select name="cars" id="cars" className="width-100">
                        <option value="">Select Activity</option>
                        <option value="4">Opty Pursuit Activity</option>
                      </select>
                      : this.state.show[index] == 3 ? 
                      <select name="cars" id="cars" className="width-100">
                        <option value="">Select Activity</option>
                        <option value="5">Sales Play Workshop and Discovery</option>
                        <option value="6">Innovation Day</option>
                        <option value="7">Demonstration</option>
                        <option value="8">Proof of Concept</option>
                        <option value="9">Solution Proposal</option>
                      </select>
                      : 
                      <select name="cars" id="cars" disabled className="width-100">
                        <option value="">Select Activity</option>
                        <option value="volvo">Day 1 Onboarding</option>
                        <option value="saab">Technical Support</option>
                        <option value="opel">Cloud Coaching</option>
                      </select>
                    }
                      
                    </td>
                    <td>
                      <select name="cars" id="cars" className="width-100">
                        <option value="">Task Type</option>
                        <option value="followUp">Follow-up</option>
                        <option value="preperation">Preperation</option>
                        <option value="delivery">Delivery</option>
                        <option value="travel">Travel</option>
                      </select>
                    </td>
                    <td>
                      <select name="cars" id="cars">
                        <option value="">Delivery Type</option>
                        <option value="remote">Remote</option>
                        <option value="faceToFace">Face to Face</option>
                      </select>
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <button>Note</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
                {this.state.otherNums.map((num, index) => (
                  <tr key={index}>
                    <td>
                      <select name="cars" id="cars" className="width-300">
                        <option value="non-service">Non Service</option>
                      </select>
                    </td>
                    <td>
                      <select name="cars" id="cars" disabled>
                        <option value="">Select Activity</option>
                      </select>
                    </td>
                    <td>
                      <select name="cars" id="cars" className="width-100">
                        <option value="">Task Type</option>
                        <option value="trainingPersonalDevelopment">Training/Personal Development</option>
                        <option value="corporateCitizenship">Corporate Citizenship</option>
                        <option value="contentCration">Content Creation</option>
                        <option value="administration">Administration</option>
                        <option value="partnerActivities">Partner Activities</option>
                        <option value="timeOff">Time Off</option>
                        <option value="trainingDelivery">Training Delivery</option>
                      </select>
                    </td>
                    <td>
                      <select name="cars" id="cars">
                        <option value="">Delivery Type</option>
                        <option value="remote">Remote</option>
                        <option value="faceToFace">Face to Face</option>
                      </select>
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <input className="TimeCell" type="number" />
                    </td>
                    <td>
                      <button>Note</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td colSpan="13">
                    <div className="TimeAction">
                      <button className="TimeActionButtons" onClick={this.addService}>
                        Add Service Row
                      </button>
                      <button className="TimeActionButtons" onClick={this.addNonService} >
                        Add Non Service Row
                      </button>
                      <button className="TimeActionButtons">Save</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="4"><div className="StickyTotal">Total</div></td>
                  <td className="TimeTotal">0</td>
                  <td className="TimeTotal">0</td>
                  <td className="TimeTotal">0</td>
                  <td className="TimeTotal">0</td>
                  <td className="TimeTotal">0</td>
                  <td className="TimeTotal">0</td>
                  <td className="TimeTotal">0</td>
                  <td colSpan="2" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Time;
