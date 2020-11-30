import React from 'react'

function List3(props) {
    return (
        
        <div>
            {props.data.map((item, index)=><li><b> Name =</b> {item.name}<b> Age = </b>{item.age } <b>cast =</b> {item.cast} <b>nationality =</b> {item.nation}  <button onClick={()=>props.delete(index)}> Delete this Item</button></li>)} 

        </div>
    )
}

export default List3
