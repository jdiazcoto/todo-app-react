import React from 'react'
import {Icon, Button} from 'react-materialize';


function TodoItem(props) {

    return (
        <div className="row">
            <div className="container col m4 offset-m4">
            <Button><Icon>check</Icon></Button>
                <span style={{paddingLeft: "70px", paddingRight: "70px"}}>{props.todo}</span>
            <Button><Icon>clear</Icon></Button>
            </div>
        </div>

    )
}


export default TodoItem
