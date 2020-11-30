import React from 'react';

const ListWorks = (props) => {

    return (
        <>
            <h5>{props.title}</h5>
            <ul>
                {
                    props.data.map ( (item, ind) => <li>{item.date} {item.time} {item.work}</li>)
                }
            </ul>
        </>
    );
}

export default ListWorks;