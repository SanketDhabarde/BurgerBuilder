import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css'

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail:true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }

    checkValidity(value, rules){
        let isValid= true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, controlName) =>{
       const updatedControls = {
           ...this.state.controls,
           [controlName]: {
               ...this.state.controls[controlName],
               value: event.target.value,
               valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
               touched: true
           }
       }
       this.setState({controls: updatedControls});
    }

    render(){
        const formElements=[];

        for(let key in this.state.controls){
            formElements.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        const form = formElements.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ));

        return (
            <div>
                <form className={classes.Auth}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
            </div>
        );
    };
}

export default Auth;