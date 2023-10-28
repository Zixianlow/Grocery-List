function GroceryItem({id, name, quantity, completed, checkedBox, removeItem}) {
  return (
    <li>
        <div>
            <input
                type='checkbox'
                onChange={e => checkedBox(id, e.target.checked)}
                checked={completed}
                id={`checkbox-${id}`}
            />
            <label htmlFor={`checkbox-${id}`}>{name} ({quantity})</label>
        </div>
        <button
            onClick={() => removeItem(id)}
            className='remove-button'
        >Remove</button>
    </li>
  )
}

export default GroceryItem
