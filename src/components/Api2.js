import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Api2() {
    
    const [name, setName] = useState([])

    useEffect(() => {

        console.log("I am in USe Effect 2")
        
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
                console.log(res);


                // const newArr = res.data.slice(0, 10);
                // setName(newArr);


                // console.log("this is new object"+name)
        });

    }, [])

    console.log(name)
    // console.log("this is new object"+ name[0].id)
    
    const myName = name.length > 0 ? (
        <>
        {
            name.map((item) => (
                <>
                <h5>{item.title}</h5>
                <p>{item.body}</p>
                </>
        ))
        }
        </>
    ) : (<p>Loading</p>)


    return (

        <div>
            <h1>{myName}</h1>

        </div>
    )
}

export default Api2