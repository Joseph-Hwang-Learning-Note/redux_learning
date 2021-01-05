import React from 'react';
import { connect } from 'react-redux';

function Detail(props) {

    return (
        <>
        <h1>{props.toDo?.text}</h1>
        <h4>Created at: {props.toDo?.id}</h4>
        </>
    );
};

const mapStateToProps=(state,ownProps)=>{
    const {match:{params:{id}}} = ownProps;
    return {toDo:state.find(toDo => toDo.id === parseInt(id))}
};


export default connect(mapStateToProps)(Detail);
