import { React, useState } from 'react';
import './App.css';
import ViewCEP from './ViewCEP';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const  [events, setEvents] = useState([]);

  const toArray = (obj) => {
    const arr = [obj]
    return arr
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch("http://localhost:3333/?cepFind=" + data.txtFind)
      .then(response => response.json())
      .then(data => {
        const array = toArray(data)
        setEvents(array)
      })
      .catch(error => console.error);
    // console.log(data);
  }

  return (
    <div className="container">
      <h1>Buscar CEP</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" name="txtFind" className="form-control"></input>
        </div>
        <button type="submit" name="btnFind" className="btn btn-primary">Buscar</button>
      </form>
      <ViewCEP events={events}/>
    </div>
  );
}

export default App;
