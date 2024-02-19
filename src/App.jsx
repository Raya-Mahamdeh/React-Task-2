import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count , setCount] = useState(0);
const changeCounter =() => {
  setCount(count+1);
  if(count >= 1){
    document.querySelector('span').innerHTML="Times";
  }

}
return(
  <>
  <button onClick={changeCounter}>Raya Clicked {count} <span>Time</span></button>
  </>
);


}

export default App
