import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];
const userList = users.map((user) => {
  return <li key={user.id}> {user.name}</li>}
  );
  

 

// comment this out after completion and uncomment code below it to proceed
function Child() {
  return <div>This is children content</div>;
}
/**
  Challenge: Uncomment this code to complete quiz

function Child() {
  return (
    <>
      <div>Child</div>
      <button>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    const [value,setValue]=useState( "I need to be updated from my child")
   
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child />
      </div>
    </>
  );
}
Uncomment this to tackle quiz
**/

// Comment out after completion
function Parent() {
  return (
    <div>
      <h3>Parent Component</h3>
    </div>
  );
}
// Comment above code after completion

function App() {
  const [] = React.useState(true);
  
  const [hideToggle,setHideToggle]=useState(false);

function handleClick() {
  setHideToggle(hideToggle ? null : "Toggle Challenge")
  
}
  return (
    
    <>
    
    <img src={logo} className="App-logo" alt="logo" />
    <h1 style={{color : "blue"}}>JSX is cool!</h1>
      <h3 style={{color : "blue"}}>User names</h3>
      <ul>{userList}</ul>
      <button onClick={handleClick}>Hide Element Below</button>

      <div >Toggle Challenge</div>

     
      
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
