//import Student from "./components/propTypes"
//import UserGreeting from "./components/conditionalRendering"
import List from "./components/renderingLists"


function App() {
  const fruits = 
    [{id: 1, name: "apple", calories: 95},
    {id: 2, name: "banana", calories: 105}, 
    {id: 3, name: "orange", calories: 45}];
  const vegetables = 
      [{id: 4, name: "potato", calories: 110},
      {id: 5, name: "carrot", calories: 25}, 
      {id: 6, name: "corn", calories: 63}];

  return (
    <>
    {/* Props */}
      {/* <Student name="A" age={30}/>
      <Student name="B" age={20}/>
      <Student name="C" age={15}/>
      <Student/> */}

    {/* Conditional Rendering */}
    {/* <UserGreeting isLoggedIn={true} username="username" />
    <UserGreeting/> */}

    {/* Rendering Lists */}
    <List items={fruits} category="Fruits"/>
    <List items={vegetables} category="Vegetables"/>
    </>
  )
}

export default App
