import { useState } from 'react'

function GroceryForm({addItem}) {
    const [newItem, setNewItem] = useState('')
    const [newQuantity, setNewQuantity] = useState(0)
    
    function itemSubmit(e){
        e.preventDefault()
        if (!newItem || !newQuantity)
            return ;
        addItem(newItem, newQuantity)
    }

  return (
    <form className='new-item' onSubmit={itemSubmit}>
        <div className='form-row'>
            <label>New Grocery to add: </label>
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
  )
}

export default GroceryForm
