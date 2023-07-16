import SingleItem from "./SingleItem";

export default function ItemList({ items, removeItem, editItem }) {
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} removeItem={removeItem} editItem={editItem} {...item} />;
      })}
    </div>
  );
}
