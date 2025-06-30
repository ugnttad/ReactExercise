import React, { useState } from 'react';

function DragDropList() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Grape']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (event, index) => {
    event.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (index) => {
    if (draggingItem === null) return;
    
    const newItems = [...items];
    const draggedItem = newItems.splice(draggingItem, 1)[0];
    newItems.splice(index, 0, draggedItem);
    
    setItems(newItems);
    setDraggingItem(null);
  };

  return (
    <div>
      <h2>Drag and Drop List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(event) => handleDragOver(event, index)}
            onDrop={() => handleDrop(index)}
            style={{
              padding: '8px',
              margin: '4px',
              backgroundColor: draggingItem === index ? '#e0e0e0' : '#f9f9f9',
              border: '1px solid #ccc',
              cursor: 'move',
              borderRadius: '4px'
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropList;