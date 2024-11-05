import { useState } from 'react'
import FoodList from './components/FoodList';

import Search from './components/Search'
import Nav from './components/Nav';
import './App.css'

function App() {
  
const [foodData,setFoodData] = useState([]);


  return (
    <div className='App'>
      <Nav/>
      <Search setFoodData={setFoodData}></Search>
      <FoodList foodData={foodData}></FoodList>
    </div>
  )
}

export default App


