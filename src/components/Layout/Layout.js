import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
    <Auxiliary>
        <Toolbar/>
        <main className={classes.content} >
            {props.children}
        </main>
    </Auxiliary>
);

export default Layout;

