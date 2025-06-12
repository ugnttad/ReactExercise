import React, { useState } from 'react';

const DragDropList = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Học React' },
    { id: 2, text: 'Làm bài tập' },
    { id: 3, text: 'Đi chơi' },
    { id: 4, text: 'Đọc sách' },
    { id: 5, text: 'Xem phim' }
  ]);
  const [draggedItem, setDraggedItem] = useState(null);
  
  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };
  
  const handleDrop = (e, targetItem) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.id === targetItem.id) return;
    
    const draggedIndex = items.findIndex(item => item.id === draggedItem.id);
    const targetIndex = items.findIndex(item => item.id === targetItem.id);
    
    const newItems = [...items];
    newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, draggedItem);
    
    setItems(newItems);
    setDraggedItem(null);
  };
  
  return (
    <div>
      <h2>Bài tập 7: Drag Drop List</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        Kéo và thả để sắp xếp lại danh sách
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, item)}
            style={{
              padding: '12px',
              marginBottom: '8px',
              backgroundColor: draggedItem?.id === item.id ? '#e3f2fd' : '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              cursor: 'move',
              userSelect: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'}
            onMouseLeave={(e) => e.target.style.backgroundColor = draggedItem?.id === item.id ? '#e3f2fd' : '#f8f9fa'}
          >
            <span style={{ marginRight: '10px' }}>⋮⋮</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragDropList;