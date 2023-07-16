import { useState } from "react";
import Form from "./Form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";

function setStorage(items) {
  localStorage.setItem("list", JSON.stringify(items));
}

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

function App() {
  const [items, setItems] = useState(defaultList);

  function addNewItem(input) {
    if (input) {
      const newItem = {
        name: input,
        completed: false,
        id: nanoid(),
      };
      setItems([...items, newItem]);
      setStorage([...items, newItem]);
      toast.success("New item added");
      return;
    }
    toast.error("Input cannot be empty!");
  }

  function removeItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setStorage(newItems);
    toast.success("Item deleted");
  }

  function editItem(id) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setStorage(newItems);
  }

  return (
    <main className="container">
      <Form
        items={items}
        addNewItem={addNewItem}
        removeItem={removeItem}
        editItem={editItem}
      />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;
