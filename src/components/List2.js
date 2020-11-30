import React from 'react'

function List2(props) {
    return (
        <div>
            <ul>
                {
            props.data.map((item, index)=><li>{item.date} {item.time} {item.work} <button>Delete</button></li>)
                }
        </ul> 
        </div>
    )
}

export default List2
