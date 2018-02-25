import React, { Component } from 'react';

class Account extends Component {

    test = (obj) => {
        // TODO

        this.props.history.push("/newname");
        console.log("Obj: ", obj);
    };
    render() {
        return (
            <div>
              <h1>I am the Account</h1>

              <DisplayContent test = {this.test}  />  
            </div>
        );
    }
}



const DisplayContent = (props) => {
    // props.test
    // props.name
    return(
        <div>
            {meals.map((obj, index) => (
                <div key = {index} onClick = {() => props.test(obj)}>
                    <img src = {obj.image} /> 
                    <h2> {obj.title}  </h2>
                    <p> {obj.description} </p>
                </div>
            ))}
        </div>
    );
};

const meals = [
    {
        image:"",
        title:"Great",
        description:"This is great"
    },

    {
        image:"",
        title:"Sad",
        description:"This is Sad"
    },

    {
        image:"",
        title:"Everyone",
        description:"Everyone is here"
    }
];
export default Account;