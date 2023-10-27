function GroceryItem({id, name, quantity, completed, checkedBox, removeItem}) {
  return (
    <li>
        <label>
            <input
                type='checkbox'
                onChange={e => checkedBox(id, e.target.checked)}
                checked={completed}
            />
            {name}({quantity})
        </label>
        <button
            onClick={() => removeItem(id)}
            className='remove-button'
        >Remove</button>
    </li>
  )
}

export default GroceryItem
