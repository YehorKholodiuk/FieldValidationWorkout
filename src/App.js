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
<input type="text" value={value} className="form-control"
       onChange={onChange}/>
      <button className='btn btn-primary btn-lg'>Add to List</button>
      <ul>
          <div className="text-5xl font-extrabold ...">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">

          {validation.map(el => <li key={el}>{el}</li>)}
  </span>
          </div>
      </ul>
    </div>
  );
}

export default App;
