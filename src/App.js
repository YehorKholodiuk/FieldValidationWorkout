import {useState} from "react";

function App() {
  const [value,setValue] = useState('');
  const [validation,setValidation] = useState([]);
  const validate = (currentValue) => {
    console.log(currentValue)
    if (isNaN(Number(currentValue))) setValidation ([...new Set([...validation,'Only numbers'])])
    else setValidation(validation.filter(el => el !== 'Only numbers'))
  };

  const onChange = (e) => {
    setValue(e.target.value);
    validate(e.target.value)
  };

  return (
    <div className="App">
<input type="text" value={value} onChange={onChange}/>
      <ul>
        {validation.map(el => <li key={el}>Only numbers</li>)}
      </ul>
    </div>
  );
}

export default App;
