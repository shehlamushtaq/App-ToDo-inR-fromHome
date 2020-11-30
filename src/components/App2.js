import React,{useState} from 'react'
import List2 from './List2';

function App2() {
        const [data, setData] = useState([
                                {
                                date: '1/12/2020',
                                time: '04:20',
                                work: 'sleeping'
                                }
    ]
    )
const [date, setDate] = useState('')
const [time, setTime] = useState('')
const [work, setWork] = useState('')

const AddItem =()=>{

    const newobj = {
        date:date,
        time:time,
        work: work
    }

    setData([...data,newobj])

    setDate('')
    setTime('')
    setWork('')
}

const DeleteItem = (ind) => {


    const tempArr = data.filter( (item, index) => ind !== index);

    setData(tempArr);

}


    return (
        <div>
            <h1>THis this todo By Shahla</h1>
            <div>
                <input type='text' onChange={(e)=>setDate(e.target.value)} value = {date} />
                <input type='text' onChange={(e)=> setTime(e.target.value)} value={time}/>
                <input type='text' onChange={(e)=> setWork(e.target.value)} value={work}/>
                <button onClick={AddItem}>Click here to Add</button>
            </div>
            {/* <List2 data={data}/> */}
            <div>
                <ul>
                {
                data.map((item, index)=><li>{item.date} {item.time} {item.work} <button onClick={() => DeleteItem(index)}>Delete</button></li>)
                }
                </ul> 
            </div>
        </div>
    )
}

export default App2
