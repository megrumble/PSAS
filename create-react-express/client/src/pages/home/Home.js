import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./home.css";

class Home extends Component {
    static defaultProps = {


    }

    constructor(props) {
        super(props);
        this.state = {
    
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { proteinChoice } = this.state;

        // axios.post('/api/auth/signup', { proteinChoice })
        //   .then((result) => {
        //       // TODO
        //       // Send to another page
        //       this.props.history.push("/result");
        //       console.log(result);
        //   })
        //   .catch(() => {
        //     // TODO
        //     // Error handling
        //   });
      }





    handleChange(e){
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
        }
          
    render() {
        const { proteinChoice } = this.state;
        return(
           
            <div>
        <nav className="navbar navbar-light bg-danger static-top" style={{height: "110px"}}>
        <div className="container">
            {/* <a href="home.html">
                
            </a> */}
            <Link to="/home"><img src="img/pssLogo.png" height="100px" className="center"/> Home </Link>
            <Link to="/mealPlan"> Meal Plan </Link>
            <Link to="/favorites"> Favorites </Link>
            <Link to="/account"> My Account </Link>
        </div>
    
    </nav>
   
    <div className="container">
        <div className="row">
            <div className="col-8">
    
                <div className="row">
                    <div className="col-12">
    
                        <div className="card" style={{marginTop: "15px"}}>
                            <div className="card-header">
                                Welcome to Prep, Shop & Save!
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Plan delicious meals in no time!</h3>
                                <p className="card-text">What would you like to eat this week?</p>
                                <form className="form-inline">
                                    <input 
                                    className="form-control mr-sm-2" 
                                    name="proteinChoice"
                                    value={proteinChoice} 
                                    style={{width: "90%"}} 
                                    placeholder="Ex: chicken, fish, etc..." 
                                    aria-label="Search"
                                    onChange={this.handleChange}/>
                                    <div className="input-group-addon">
                                        <i className="fa fa-search"></i>
                                    </div>
                                </form>
                                <br/>
                                <p className="card-text">Suggest meals based on my preferences:
                                    <button className="btn btn-warning my-2 my-sm-0" id="searchBtn" type="submit">Search</button>
                                </p>
    
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row">
                    <div className="col-12">
    
                        <div className="card" style={{marginTop: "15px"}}>
    
                            <div className="card-body">
                                <h3 className="card-title">How does it work?</h3>
    
                                <div className="row">
                                    <div className="col-4">
                                        <img src="img/prep-icon.png" alt="prep-icon" height="180px" width="180px"/>
                                    </div>
                                    <div className="col-4">
                                        <img src="img/shop-icon.png" alt="shop-icon" height="180px" width="180px"/>
                                    </div>
                                    <div className="col-4">
                                        <img src="img/save-icon.png" alt="save-icon" height="180px" width="180px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <div className="col-4">
    
                <div className="card" style={{width: "22rem", marginTop: "15px"}}>
                    <img className="card-img-top" src="img/feature.png" alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Fresh Vegetable Pasta Salad</h5>
                        <p className="card-text">
                            This Easy Vegetable Pasta Salad is perfect the perfect go to dish and all the fresh flavors will brighten any meal.
                            <br/>
                            <br/>You can substitute or add any of your favorite fresh vegetables. And you can always make meat on the side to add if you prefer.
                        </p>
                        <Link to="/recipe"> Get Recipe! </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    
    <footer className="footer bg-warning">
        <div className="container">
            <div className="row">
            <Link to="/team"> About the Team </Link>
                {/* <a className="navbar-brand2" href="index.html">Log Out</a>
                <a className="navbar-brand2" href="#">&copy; Prep, Shop & Save 2018. All Rights Reserved.</a> */}
                <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                </div>
            </div>
        </div>
    </footer>
    </div>
            );    }

}

export default Home;







