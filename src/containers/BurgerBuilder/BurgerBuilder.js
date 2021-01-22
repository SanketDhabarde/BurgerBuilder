import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 2,
            bacon: 1,
            meat: 2
        }
    }
    render(){
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;