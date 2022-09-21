import "./ItemListContainer.css"
import ItemCount from '../ItemCount/ItemCount';


function ItemListContainer(props) {
  // -----NAVBAR RETURN-----
    return (
      <div>
        <h1>{props.greeting}</h1>
        <ItemCount initial={1} stock={20}/>

      </div>
    );
  }

export default ItemListContainer;