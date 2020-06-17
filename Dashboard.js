import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

class Dashboard extends Component {
  state = {
    questionNum: 0
  };
  showQuestions = (id, event) => {
    console.log(id);
    this.setState({ questionNum: id });
  };
  render() {
    return (
      <div className="DashboardContainer">
        <div className="Heading">Dashboard</div>
        <div className="ActionBar">
        <Link to="/dashboard-listing">
          <button className="CreateButton">Back</button>
        </Link>
        </div>
        <div className="TwoColumns">
          <div className="Columns">
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Title</div>
              <div className="ColumnItemRight">
                Customer Workshop or Cloud Day
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Opportunity</div>
              <div className="ColumnItemRight">B53XL - L'OREAL</div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Account</div>
              <div className="ColumnItemRight">
                LOreal Produits de Luxe International
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Country</div>
              <div className="ColumnItemRight">United States</div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Language Of Delivery</div>
              <div className="ColumnItemRight">English</div>
            </div>
          </div>
          <div className="Columns">
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Customer Deadline*</div>
              <div className="ColumnItemRight">07/17/2020</div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Primary Pillar*</div>
              <div className="ColumnItemRight">
                SaaS - Services Automation - Pillar
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Additional Pillar</div>
              <div className="ColumnItemRight">
                SaaS - Sales Automation - Pillar
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Platform</div>
              <div className="ColumnItemRight">SaaS - Cloud Tech Ops</div>
            </div>
          </div>
        </div>
        <div className="DescriptionBox">
          <div>
            <b>Description*</b>
          </div>
          <div className="DescriptionTextarea">
            A customer workshop or event focused on highlighting compelling and differentiated positioning of Oracle Solution and Capabilities.
          </div>
        </div>
        <div className="ServicesBox margin-top-16">
          <div>
            <b>Internal Services</b>
          </div>
          <div className="ServiceListing">
            {this.state.questionNum == 0 || this.state.questionNum == 1 ? (
              <div
                className="ServiceItem"
                onClick={this.showQuestions.bind(this, 1)}
              >
                <b>Customer Workshop or Cloud Day </b>
                <br /> One or many customer workshop or event focused on
                highlighting compelling and differentiated positioning of Oracle
                Solution and Capabilities. <br />
                <div className="color-green">10 hr(s)</div>
              </div>
            ) : (
              ""
            )}
            {this.state.questionNum == 0 || this.state.questionNum == 2 ? (
              <div
                className="ServiceItem"
                onClick={this.showQuestions.bind(this, 2)}
              >
                <b>Consumption Service </b>
                <br /> Service focused on enhancing the consumption of our
                service offerings. <br />
                <div className="color-green">3 hr(s)</div>
              </div>
            ) : (
              ""
            )}
            {this.state.questionNum == 0 || this.state.questionNum == 3 ? (
              <div
                className="ServiceItem"
                onClick={this.showQuestions.bind(this, 3)}
              >
                <b>Opportunity Pursuit </b>
                <br /> Service which helps in winning the current opportunity.{" "}
                <br />
                <div className="color-green">5 hr(s)</div>
              </div>
            ) : (
              ""
            )}
            {this.state.questionNum == 0 || this.state.questionNum == 4 ? (
              <div
                className="ServiceItem"
                onClick={this.showQuestions.bind(this, 4)}
              >
                <b>Expansion/Renewal Services </b>
                <br /> Service which is focused on Expansion of the services
                provided, or Renewal of our service offerings. <br />
                <div className="color-green">2 hr(s)</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/*{this.state.questionNum == 1 ? (
          <div>
            <div className="ChangeServiceBox">
              <button
                className="CreateButton"
                onClick={this.showQuestions.bind(this, 0)}
              >
                Change Service Selection
              </button>
            </div>
            <div className="QuestoionsBox">
              <div className="BoldText">Internal Services</div>
              <div>
                <div
                  className="ServiceItem"
                >
                  <b>Consumption Service </b>
                  <br /> Service focused on enhancing the consumption of our
                  service offerings. <br />
                  <div className="color-green">3 hr(s)</div>
                </div>
                <div
                  className="ServiceItem"
                >
                  <b>Opportunity Pursuit </b>
                  <br /> Service which helps in winning the current opportunity.{" "}
                  <br />
                  <div className="color-green">5 hr(s)</div>
                </div>
                <div
                  className="ServiceItem"
                >
                  <b>Expansion/Renewal Services </b>
                  <br /> Service which is focused on Expansion of the services
                  provided, or Renewal of our service offerings. <br />
                  <div className="color-green">2 hr(s)</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.questionNum == 2 ? (
          <div>
            <div className="ChangeServiceBox">
              <button
                className="CreateButton"
                onClick={this.showQuestions.bind(this, 0)}
              >
                Change Service Selection
              </button>
            </div>
            <div className="QuestoionsBox">
              <div className="BoldText">Internal Services</div>
              <div>
                <div className="QuestionAnswers">
                  <div className="Question">
                    No Internal SR for the selected Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.questionNum == 3 ? (
          <div>
            <div className="ChangeServiceBox">
              <button
                className="CreateButton"
                onClick={this.showQuestions.bind(this, 0)}
              >
                Change Service Selection
              </button>
            </div>
            <div className="QuestoionsBox">
              <div className="BoldText">Internal Services</div>
              <div>
                <div
                  className="ServiceItem"
                >
                  <b>Consumption Service </b>
                  <br /> Service focused on enhancing the consumption of our
                  service offerings. <br />
                  <div className="color-green">3 hr(s)</div>
                </div>
                <div
                  className="ServiceItem"
                >
                  <b>Expansion/Renewal Services </b>
                  <br /> Service which is focused on Expansion of the services
                  provided, or Renewal of our service offerings. <br />
                  <div className="color-green">2 hr(s)</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.questionNum == 4 ? (
          <div>
            <div className="ChangeServiceBox">
              <button
                className="CreateButton"
                onClick={this.showQuestions.bind(this, 0)}
              >
                Change Service Selection
              </button>
            </div>
            <div className="QuestoionsBox">
              <div className="BoldText">Internal Services</div>
              <div>
                <div className="QuestionAnswers">
                  <div className="Question">
                    No Internal SR for the selected Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}*/}
      </div>
    );
  }
}

export default Dashboard;
