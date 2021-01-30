import React, { Component } from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component {

    shouldComponentUpdate(nextProp, nextState){
        return nextProp.show !== this.props.show || nextProp.children !== this.props.children;
    }

    
    render(){
        return (
            <Auxiliary>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }} >
                    {this.props.children}
                </div>
            </Auxiliary>
        )
    }
} 
export default Modal;