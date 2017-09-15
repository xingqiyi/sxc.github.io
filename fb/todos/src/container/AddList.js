import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";

let AddTodo111 = ({dispatch}) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addTodo(input.value));
                {/* var li =addTodo(input.value); dispatch(li); */
                }
                input.value = "";
            }}>
                <input ref={node => {
                    input = node;
                }}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

let AddTodo = connect()(AddTodo111);

export default AddTodo;
