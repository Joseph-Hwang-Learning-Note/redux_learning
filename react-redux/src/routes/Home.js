import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home(props) {
    const [text,setText] = useState("");
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        props.addToDo(text);
        setText("");
    };
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {
                    props.toDos.map(toDo => {
                        return <ToDo 
                        {...toDo}
                        />
                    })
                }
            </ul>
        </>
    );
}

const mapStateToProps = (state) => {return {toDos:state};};

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);