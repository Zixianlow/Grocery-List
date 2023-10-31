import { useState } from 'react'
import './App.css'
import GroceryForm from './components/GroceryForm';
import GroceryList from './components/GroceryList';

let nextID = 0;

function App() {
    const [newList, setList] = useState([])

    function addItem(newItem, newQuantity) {
        const quantityFloat = parseFloat(newQuantity)
        setList(currentList => {
            nextID++;
            return [
                ...currentList,
                {id: nextID,
                name: newItem,
                quantity: quantityFloat,
                completed: false},
            ]
        })  
    }

    function checkedBox(id, checked) {
        setList(currentList => {
            return currentList.map(item => {
                if (item.id === id) {
                    return { ...item, completed: checked}
                }
                return item
            })
        })
    }

    function removeItem(id) {
        setList(currentList => {
            return currentList.filter(item => item.id !== id)
        })
    }

  return (
    <>
        <GroceryForm addItem={addItem}/>
        <h1 className='grocery-list-header'>Your Grocery List</h1>
        <GroceryList newList={newList} checkedBox={checkedBox} removeItem={removeItem}/>
    </>
  )
}

export default App
