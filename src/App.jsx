import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick () {
   alert('button Click')
  }

  function handlerClick2 (){
    ('button 2 click')
  }

  const addToFive = (num) => {
    alert(num + 5) 
  }

  return (
    <>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
    <Counter></Counter>
     <h3>React Core Concepts 2</h3>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={handlerClick2}>Click 2</button>
     <button onClick={() => {alert('third Click')} }>Click3</button>
     <button onClick={() => addToFive(4)}>Four</button>
    </>
  )
}

export default App
