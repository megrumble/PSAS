import React, { Component } from 'react';
import {Link} from "react-router-dom";

import "./team.css";

class Team extends Component {
    render() {
        return(
        <div>
            <section className="hero">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-8 mx-auto">
                  <div className="card border-none">
                    <div className="card-body">
                      <div className="mt-2 text-center">
                        <h2>Meet the Team</h2>
                      </div>
                      <p className="mt-4 text-white lead text-center">
                        Hi there - take a second to meet the team who created this awesome app!
                      </p>
        
                      <div className="card-deck">
                        
                      
                      </div>
        
                      <br/>
                      <br/>
                      <div className="card-deck">
                        <div className="card">
                          <img className="card-img-top" src="img/m.jimmy.png" alt="Card cap"/>
                          <div className="card-body">
                            <h5 className="card-title"><span style={{color:"#FCC526"}}>Michelle Jimmy</span></h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                              is a little bit longer.</p>
                            <p className="card-text">
                              <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                          </div>
                        </div>
                        <div className="card">
                          <img className="card-img-top" src="img/s-crawford.png" alt="Card cap"/>
                          <div className="card-body">
                              <h5 className="card-title"><span style={{color:"#FCC526"}}>Salaina Crawford</span></h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text">
                              <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                          </div>
                        </div>
                        <div className="card">
                          <img className="card-img-top" src="img/g-porter.png" alt="Card cap"/>
                          <div className="card-body">
                              <h5 className="card-title"><span style={{color:"#FCC526"}}>Gerald Porter</span></h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card
                              has even longer content than the first to show that equal height action.</p>
                            <p className="card-text">
                              <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                          </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="img/m.rumble.png" alt="Card cap"/>
                            <div className="card-body">
                                <h5 className="card-title"><span style={{color:"#FCC526"}}>Meg Rumble</span></h5>
                              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                                is a little bit longer.</p>
                              <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                              </p>
                            </div>
                          </div>
                          <div className="card">
                              <img className="card-img-top" src="img/a-bennett.png" alt="Card cap"/>
                              <div className="card-body">
                                  <h5 className="card-title"><span style={{color:"#FCC526"}}>Adrienne Bennett</span></h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content
                                  is a little bit longer.</p>
                                <p className="card-text">
                                  <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                              </div>
                            </div>
                      </div>
        
        
        
        
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-sm-12 mt-5 footer">
                  <p className="text-white small text-center">
                    &copy; 2018 Prep Shop & Save &nbsp &nbsp | &nbsp &nbsp
                    <Link to="/login"> Back to Login Page </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
          </div> 
        )
    }
}


export default Team;