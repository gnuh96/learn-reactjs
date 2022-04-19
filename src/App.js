import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = 'Tuan Hung NGUYEN';
  const age = 25;
  const isMale = true;
  const student = {
    name : 'Easy Frontend'
  };
  const colorList = ['red', 'green', 'blue'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ReactJs
        </p>
        <p>Bonjour {name} - {age} - {isMale ? 'Male' : 'Female'}</p>
        
        {/* Solution 1 */}
        {isMale ? <p>Male</p> : <p>Female</p>}
       
        {/* Solution 2 */}
        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {/* Render 3 lignes dans un props */}
        {isMale && (
          <div>
            <p>Male 1</p>   
            <p>Male 2</p>   
            <p>Male 3</p>
          </div>   
        )}
        {isMale && (
          <React.Fragment>
            <p>Male 1</p>   
            <p>Male 2</p>   
            <p>Male 3</p>
          </React.Fragment>   
        )}
        {isMale && (
          <>
            <p>Male 1</p>   
            <p>Male 2</p>   
            <p>Male 3</p>
          </>   
        )}

        {/* Render object */}
        <p>{student.name}</p>

        {/* Render list */}
        <ul>
          {colorList.map(color => (
            <li style={{color}}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
