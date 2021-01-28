import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/Navigationitems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const SideDrawer = (props) => {
    let assignedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        assignedClasses= [classes.SideDrawer, classes.Open];
    }
    return(
        <Auxiliary>
            <BackDrop show={props.open}  clicked={props.closed}/>
            <div className={assignedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliary>
    );
}

export default SideDrawer;