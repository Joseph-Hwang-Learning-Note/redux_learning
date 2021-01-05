import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {actionCreators} from '../store';

function ToDo(props){
    return (
        <li>
            <Link to={`/${props.id}`}>
            {props.text} 
            </Link>
            <button onClick={props.onBtnClick}>delete</button>
            
        </li>
    );
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onBtnClick: () =>dispatch(actionCreators.deleteToDo(ownProps.id))
    }
};


export default connect(null,mapDispatchToProps)(ToDo);
