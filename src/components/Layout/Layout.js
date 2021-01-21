import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';

const Layout = (props) => (
    <Auxiliary>
        <div>SideDrower, ToolBar, BackDrop</div>
        <main className={classes.content} >
            {props.children}
        </main>
    </Auxiliary>
);

export default Layout;

