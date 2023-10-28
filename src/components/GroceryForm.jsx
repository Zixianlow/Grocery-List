import { useState } from 'react'

function GroceryForm({addItem}) {
    const [newItem, setNewItem] = useState('')
    const [newQuantity, setNewQuantity] = useState(0)
    
    function itemSubmit(e){
        e.preventDefault()
        if (!newItem || !newQuantity)
            return ;
        if (newQuantity <= 0)
            return ;
        addItem(newItem, newQuantity)
    }

  return (
    <form className='grocery-item' onSubmit={itemSubmit}>
        <h1 className='grocery-item-header'>ADD YOUR GROCERIES HERE</h1>
        <div className='form-element'>
            <div className='form-item'>
                <label>Groceries to buy: </label>
                <input 
                    placeholder='Enter your item here...' 
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type='text' 
                    id='item'>
                </input>
            </div>
            <div className='form-quantity'>
                <label>Quantity: </label>
                <input 
                    placeholder='Enter quantity here...'
                    value={newQuantity}
                    onChange={e => setNewQuantity(e.target.value)}
                    type='number'
                    id='quantity'>
                </input>
            </div>
            <button className='add-button'>Add Item</button>
        </div>
    </form>
  )
}

export default GroceryForm
