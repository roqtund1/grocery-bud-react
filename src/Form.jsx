import { toast } from "react-toastify";
import ItemList from "./itemList";


export default function Form({ removeItem, addNewItem, items, editItem }) {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const input = formData.get("input");

    addNewItem(input);

    e.currentTarget.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>grocery bud</h4>
        <div className="group">
          <input type="text" name="input" id="input" />
          <button className="btn">add item</button>
        </div>
      </form>
      <ItemList editItem={editItem} removeItem={removeItem} items={items} />
    </>
  );
}
