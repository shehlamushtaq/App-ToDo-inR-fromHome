import React, { useState } from 'react';
import './App.css';
import ListWorks from './components/ListWorks';
import App3 from './components/App3';
import ChangeClass from './components/ChangeClass';

const App = () => {
const [clr, setClr] = useState("")


//==============================================================================================
  const [data, setData] = useState([
    {
      date: "1/1/2020",
      time: "10:00",
      work: "Meeting with friends"
    }
  ]);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [work, setWork] = useState('');

  const myName = "Asim";

  const AddItem = () => {
    
    const obj = {
      date,
      time,
      work
    };

    setData([...data, obj]);

    setDate('');
    setTime('');
    setWork('');

  }

  return (
    <div className="App">
      <h1>My ToDo Application</h1>
      
      <div>
        <input type="text" onChange={(e) => setDate(e.target.value)} value={date} />
        <input type="text" onChange={(e) => setTime(e.target.value)} value={time}/>
        <input type="text" onChange={(e) => setWork(e.target.value)} value={work}/>
        <button onClick={AddItem}>Add</button>
      </div>
      <ListWorks data={data} title={myName} />
      <App3/>
      <ChangeClass/>

    </div>
  );
}

export default App;
