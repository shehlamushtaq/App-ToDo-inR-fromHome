import React,{useState} from 'react'
import List3 from './List3'

function App3() {

const [data, setData] = useState([
                        {
                            name:'shehla',
                            age:'42',
                            cast:'Awan',
                            nation:'Pakistani'
                        }
])

const [name, setName] = useState('')
const [age, setAge] = useState('')
const [cast, setCast] = useState('')
const [nation, setNation] = useState('')

const addItem =() => {
    const newObj = {
        name:name,
        age:age,
        cast:cast,
        nation:nation
    }
setData([...data, newObj])

    setName('')
    setAge('')
    setCast('')
    setNation('')
    
}

const deleteItem = (index) => {
    const newData = data.filter((item,ind)=> ind !== index  )  

    setData(newData)
}
    return (
        <>
        <div>
            <input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type='text' onChange={(e)=> setAge(e.target.value)} value={age}/>
            <input type='text' onChange={(e) => setCast(e.target.value)} value={cast}/>
            <input type='text' onChange={(e)=> setNation(e.target.value)} value={nation}/>
            <button onClick={addItem}> Add My Information</button>
        </div>
        <List3 data={data} delete={deleteItem} />

        </>
    )
}

export default App3
