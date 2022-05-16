import React, {useState} from 'react';
import './App.css';
import Radio from "./components/Radio";
import Select from "./components/Select";

function App() {

  const arr = ['yo!', 'wow!', 'cmon!!', 'plzzzzz'];
  let [value, setValue] = useState(arr[0]);



  return (
    <div className="App">
        <Radio
            setValue={setValue}
            value={value}
            arr={arr}
        />
        <Select
            setValue={setValue}
            value={value}
            arr={arr}
        />
    </div>
  );
}

export default App;
