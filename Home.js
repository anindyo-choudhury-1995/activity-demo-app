import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="HomeContainer">
        <div className="Greeting">Good Afternoon, User!</div>
        <div className="NavMenu">
          <div className="MenuItem">Sales & Services</div>
        </div>
        <h5 className="Apps">APPS</h5>
        <div className="AppsListing">
          {/*<Link to="/create">
            <div className="ListingItem">
              <div className="ListingItemIcon"><div className="CreateServiceRequest"></div></div>
              <div className="ListingItemText">Create Service Request</div>
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
              <div className="ListingItemText">Lookup Tags</div>
            </div>
          </Link>
          <Link to="/mapper">
            <div className="ListingItem">
              <div className="ListingItemIcon">
                <div className="Mapper" />
              </div>
              <div className="ListingItemText">Map Activity</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
