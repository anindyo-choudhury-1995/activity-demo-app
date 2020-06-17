import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./dashboardListing.css";
class DashboardListing extends Component {
  state = {
    region: ["APAC", "EMEA", "LAD", "ANTARCTICA", "NAS", "JAPAN"]
  };
  render() {
    return (
      <div className="TagsContainer">
        <div className="TopActionBar">
          <div className="Create">My Service Requests - Solution Engineering</div>
          <div>
            <Link to="/create">
              <button>Create Service Request</button>
            </Link>
          </div>
        </div>
        <br />
        
        <table>
          <thead>
            <tr>
              <th>Reported Date</th>
              <th>Title</th>
              <th>Service</th>
              <th>Opportunity</th>
              <th>Account</th>
              <th>Svc Owner</th>
              <th>Svc Health</th>
              <th>Service Status</th>
              <th>Last Updated Date</th>
              <th>Reported Hours</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5/14/2020</td>
              <td>Customer Workshop or Cloud Day</td>
              <td>Customer Workshop or Cloud Day</td>
              <td>L'OREAL</td>
              <td>LOreal Produits de Luxe International</td>
              <td>fusion-oal-set-intgr_ww@oracle.com</td>
              <td>Healthy</td>
              <td>New</td>
              <td>6/17/2020</td>
              <td>10</td>
              <td>
                <Link to="/dashboard">
                  <button className="RedWoodButton">Details</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>5/14/2020</td>
              <td>Consumption Service</td>
              <td>Consumption Service</td>
              <td>L'OREAL</td>
              <td>LOreal Produits de Luxe International</td>
              <td>fusion-oal-set-intgr_ww@oracle.com</td>
              <td>Healthy</td>
              <td>New</td>
              <td>6/17/2020</td>
              <td>3</td>
            </tr>
            <tr>
              <td>5/14/2020</td>
              <td>Opportunity Pursuit</td>
              <td>Opportunity Pursuit</td>
              <td>L'OREAL</td>
              <td>LOreal Produits de Luxe International</td>
              <td>fusion-oal-set-intgr_ww@oracle.com</td>
              <td>Healthy</td>
              <td>New</td>
              <td>6/17/2020</td>
              <td>5</td>
            </tr>
            <tr>
              <td>5/14/2020</td>
              <td>Expansion/Renewal Services</td>
              <td>Expansion/Renewal Services</td>
              <td>L'OREAL</td>
              <td>LOreal Produits de Luxe International</td>
              <td>fusion-oal-set-intgr_ww@oracle.com</td>
              <td>Healthy</td>
              <td>New</td>
              <td>6/17/2020</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DashboardListing;
