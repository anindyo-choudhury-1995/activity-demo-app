import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="HomeContainer">
        <div className="Greeting">Good Afternoon, User!</div>
        <div className="NavMenu">
          <div className="MenuItem">Sales & Service</div>
        </div>
        <h5 className="Apps">APPS</h5>
        <div className="AppsListing">
          {/*<Link to="/create">
            <div className="ListingItem">
              <div className="ListingItemIcon"><div className="CreateServiceRequest"></div></div>
              <div className="ListingItemText">Create Service Request</div>
            </div>
          </Link>
          <Link to="/dashboard-listing">
            <div className="ListingItem">
              <div className="ListingItemIcon">
                <div className="CreateServiceRequest" />
              </div>
              <div className="ListingItemText"> Dashboard</div>
            </div>
          </Link>*/}
          <Link to="/time">
            <div className="ListingItem">
              <div className="ListingItemIcon">
                <div className="ManageTime" />
              </div>
              <div className="ListingItemText">Manage Time</div>
            </div>
          </Link>
          <Link to="/tags">
            <div className="ListingItem">
              <div className="ListingItemIcon">
                <div className="CreateTags Mapper" />
              </div>
              <div className="ListingItemText">Service Administration: Manage LookUps</div>
            </div>
          </Link>
          <Link to="/activity">
            <div className="ListingItem">
              <div className="ListingItemIcon">
                <div className="CreateServiceRequest" />
              </div>
              <div className="ListingItemText"> Activity Mappings</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
