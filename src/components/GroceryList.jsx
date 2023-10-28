import GroceryItem from './GroceryItem'

function GroceryList({newList, checkedBox, removeItem}) {
  return (
    <ol className='list'>
        <div className='list-background'>
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
        </div>
    </ol>
  )
}

export default GroceryList
