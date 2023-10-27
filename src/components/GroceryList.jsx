import GroceryItem from './GroceryItem'

function GroceryList({newList, checkedBox, removeItem}) {
  return (
    <ul className='list'>
        {newList.map(item => {
            return (
                <GroceryItem 
                    {...item}
                    key={item.id}
                    checkedBox={checkedBox}
                    removeItem={removeItem}
                />
            )
        })}
    </ul>
  )
}

export default GroceryList
