import React, {Component} from 'react';

class Recipe extends Component {
    render(){
const {title, ig, instructions} = this.props;
const ingredients = this.props.ingredients.map((ing, index) => (
    <li key={index}>{ing}</li>
));
return (
    <div>
        <div>
        <img src={img} alt={title} />
        </div>
        <div>
        <h3>Recipe {title}</h3>
        <ul>
        {ingredients}
        </ul>
        <p>{instructions}</p>
        </div>
        
        </div>
        );  
    }
}

export default Recipe;