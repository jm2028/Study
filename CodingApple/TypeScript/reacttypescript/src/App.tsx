import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [user, setUser] = useState('kim');

  return (
    <div className="App">
      리액트
      <Profile name="철수"></Profile>
    </div>
  );
}

function Profile(props :{name : string}) :JSX.Element {
  return (
    <div>{props.name}타입스크립트</div>
  )
}

export default App;