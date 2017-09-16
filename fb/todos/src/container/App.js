import React from 'react'

import {connect} from "react-redux";
import {addTodo} from "../actions";

import AddList from './AddList'
import MyList from './MyList'

let App = ({dispatch}) => {

    let input;

    return (
        <div>

            <AddList/>
            <MyList/>

        </div>
    );
};

App = connect()(App); //将 app 包装成  容器组件

export default App
