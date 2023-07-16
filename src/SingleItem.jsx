import { useState } from "react";

export default function SingleItem({
  removeItem,
  id,
  name,
  completed,
  editItem,
}) {
  return (
    <article className="item">
      <div className="checkbox-group">
        <input
          checked={completed}
          onChange={() => editItem(id)}
          type="checkbox"
          name="item"
          id={id}
        />
        <label
          style={{
            textDecoration: completed && "line-through",
          }}
          htmlFor={id}
        >
          {name}
        </label>
      </div>

      <button onClick={() => removeItem(id)} className="item-btn">
        delete
      </button>
    </article>
  );
}
