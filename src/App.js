import {useState} from "react";

function App() {
  const [value,setValue] = useState('');
  const [validation,setValidation] = useState([]);

  const validate = (currentValue) => {
    console.log(currentValue)
    const validationMessages = [];


    if (isNaN(Number(currentValue))) validationMessages.push('Only numbers')
    if (Number(currentValue) > 10) validationMessages.push('Please, enter numbers less than 10')
    setValidation(validationMessages)
  };

  const onChange = (e) => {
    setValue(e.target.value);
    validate(e.target.value)
  };

  return (
    <div className="App">
<input type="text" value={value} onChange={onChange}/>
      <ul>
        {validation.map(el => <li key={el}>{el}</li>)}
      </ul>
    </div>
  );
}

export default App;
