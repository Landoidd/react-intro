/*
Rendering Lists
1. Need to map the objects/items in an array to list items that can be added to an ordered or unordered list
2. Also include id to each list element to account for duplicate fields
*/
import propTypes from 'prop-types';
const List = (props) => {
    const category = props.category;
    const itemList = props.items;
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical sort
    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); //Filter calories less than 100

    const listItems = itemList.map(item => <li key={item.id}> {item.name}{" "}{"calories: " + item.calories}</li>)
    return( <> <h3 className='listName'>{category}</h3>  <ol className='listCategory'>{listItems}</ol></>)
}


export default List;