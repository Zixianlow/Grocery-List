import { useState } from 'react'
import './App.css'

let nextID = 0;

function App() {
    const [newItem, setNewItem] = useState('')
    const [newQuantity, setNewQuantity] = useState(0)
    const [newList, setList] = useState([])

    function itemSubmit(e){
        e.preventDefault()
        if (!newItem || !newQuantity)
            return ;
        setList(currentList => {
            nextID++;
            return [
                ...currentList,
                {id: nextID,
                name: newItem,
                quantity: newQuantity,
                completed: false},
            ]
        })  
    }

    function checkedBox(id, completed) {
        setList(currentList => {
            return currentList.map(item => {
                if (item.id === id) {
                    return { ...item, completed}
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
        <form className='new-item' onSubmit={itemSubmit}>
            <div className='form-row'>
                <label>New Grocery</label>
                <input 
                    placeholder='Enter your item here...' 
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type='text' 
                    id='item'>
                </input>
                <input 
                    placeholder='Enter quantity here...'
                    value={newQuantity}
                    onChange={e => setNewQuantity(e.target.value)}
                    type='number'
                    id='quantity'>
                </input>
            </div>
            <button value='Add'>Add</button>
        </form>
        <h1 className='header'>Grocery List</h1>
        <ul className='list'>
            {newList.map(item => {
                return(
                    <li key={item.id}>
                        <label>
                            <input
                                type='checkbox'
                                onChange={e => checkedBox(item.id, e.target.checked)}
                                checked={item.completed}
                            />
                            {item.name}({item.quantity})
                        </label>
                        <button
                            onClick={() => removeItem(item.id)}
                            className='remove-button'
                        >Remove</button>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default App
