import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./createtag.css";
class Createtag extends Component {
  state = {}
  refreshPage = (event) => {
    window.location.reload()
  }
  render() {
    return (
      <div className="CreatetagContainer">
        <div className="TopActionBar">
          <div className="Create">Create</div>
          <div>
            | &nbsp;
            <Link to="/create-tag">
              <button onClick={ this.refreshPage }>Save and Continue</button>
            </Link>
            <Link to="/tags">
              <button>Save and Close</button>
            </Link>
            <Link to="/tags">
              <button>Cancel</button>
            </Link>
          </div>
        </div>
        <br/>
        <div className="TwoDivs">
          <div className="FirstDiv">
            <div className="Items">
              <div className="ItemsFirst"><span className="ColorBlue">*&nbsp;</span> LookUp Type</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst"><span className="ColorBlue">*&nbsp;</span> LookUp Code</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst"><span className="ColorBlue">*&nbsp;</span> LookUp Meaning</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
            <div className="Items">
              <div className="ItemFirst">Active</div>
              <div className="ItemSecondCheckBox">
                <input type="checkbox" defaultChecked/>
              </div>
            </div>
          </div>
          <div className="SecondDiv">
            <div className="Items">
              <div className="ItemsFirst"><span className="ColorBlue">*&nbsp;</span> Region</div>
              <div>
                <select className="ItemsSecondInput" name="cars" id="cars">
              <option value="">Select Region</option>
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
            <div className="Items">
              <div className="ItemsFirst"><span className="ColorBlue">*&nbsp;</span> Owner</div>
              <div>
                <select className="ItemsSecondInput" name="cars" id="cars">
              <option value="EMEA">Kristen Hanson</option>
              <option value="Global">Tamas Buzasi</option>
              <option value="JAPAC">Daniel Green</option>
              <option value="LAD">Mark Cooke</option>
              <option value="MYSQL">Cynthia Wadzinski</option>
              <option value="NAA">Michelle Kuehn</option>
              <option value="NATD">Ana Venancio</option>
              <option value="GBU-CEGBU">Priyesh Yerne</option>
              <option value="GBU-CGBU">Miko Kitagawa</option>
              <option value="GBU-FBGBU">David Watts</option>
              
              <option className="ColorBlue" value="EMEA JAPAC">Search...</option>
              </select>
              </div>
            </div>
            <div className="Items">
              <div className="ItemsFirst"><span className="ColorBlue">*&nbsp;</span> Tags</div>
              <div>
                <input className="ItemsSecondInput" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Createtag;
