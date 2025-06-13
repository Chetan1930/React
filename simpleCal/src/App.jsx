import { useState } from 'react'
import TextboxComponent from './Component/TextboxComponent'


function App() {  

  const [principle, setPrinciple]= useState(0);
  const [rate, setRate]= useState(0);
  const [time, settime]= useState(0);


  function cal(){
    const si=((principle*rate*time)/100 );

    return si;
  }

  return (
    <>
      <h1>Simple Interest Calculator </h1>
      <TextboxComponent handleData={setPrinciple}/>
      <TextboxComponent handleData={setRate}/>
      <TextboxComponent handleData={settime}/>

    <button onClick={cal}>Calculate</button>

    </>
  )
}

export default App
