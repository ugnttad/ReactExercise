import React, { useState } from 'react';

// Exercise 1: Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Bài tập 1: Counter</h2>
      <p>Số đếm: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '8px 16px' }}>
        Tăng (+1)
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '8px 16px' }}>
        Giảm (-1)
      </button>
      <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '8px 16px' }}>
        Reset
      </button>
    </div>
  );
};

// Exercise 2: Input Display Component
const InputDisplay = () => {
  const [text, setText] = useState('');
  
  return (
    <div>
      <h2>Bài tập 2: Input Display</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập văn bản..."
        style={{ padding: '8px', marginRight: '10px', width: '200px' }}
      />
      <p>Bạn đã nhập: <strong>{text}</strong></p>
      <p>Độ dài: {text.length} ký tự</p>
    </div>
  );
};

// Exercise 3: Toggle Visibility Component
const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <div>
      <h2>Bài tập 3: Toggle Visibility</h2>
      <button onClick={() => setIsVisible(!isVisible)} style={{ padding: '8px 16px', marginBottom: '10px' }}>
        {isVisible ? 'Ẩn' : 'Hiện'} nội dung
      </button>
      {isVisible && (
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#e7f3ff', 
          border: '1px solid #0066cc',
          borderRadius: '4px'
        }}>
          <p>🎉 Đây là nội dung có thể ẩn/hiện!</p>
          <p>Bạn có thể toggle để ẩn hoặc hiện nội dung này.</p>
        </div>
      )}
    </div>
  );
};

// Exercise 4: Todo List Component
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <h2>Bài tập 4: Todo List</h2>
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Thêm công việc mới..."
          style={{ padding: '8px', marginRight: '10px', width: '250px' }}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo} style={{ padding: '8px 16px' }}>
          Thêm
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '8px', 
            marginBottom: '5px',
            backgroundColor: todo.completed ? '#f0f0f0' : 'white',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ 
              flex: 1, 
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : 'black'
            }}>
              {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              style={{ 
                backgroundColor: '#dc3545', 
                color: 'white', 
                border: 'none', 
                padding: '4px 8px',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && (
        <p style={{ fontStyle: 'italic', color: '#666' }}>Chưa có công việc nào. Hãy thêm một công việc!</p>
      )}
    </div>
  );
};

// Exercise 5: Color Switcher Component
const ColorSwitcher = () => {
  const [currentColor, setCurrentColor] = useState('#3498db');
  const colors = [
    { name: 'Xanh dương', value: '#3498db' },
    { name: 'Xanh lá', value: '#2ecc71' },
    { name: 'Đỏ', value: '#e74c3c' },
    { name: 'Cam', value: '#f39c12' },
    { name: 'Tím', value: '#9b59b6' },
    { name: 'Hồng', value: '#e91e63' }
  ];
  
  return (
    <div>
      <h2>Bài tập 5: Color Switcher</h2>
      <div style={{ marginBottom: '15px' }}>
        {colors.map(color => (
          <button
            key={color.value}
            onClick={() => setCurrentColor(color.value)}
            style={{
              margin: '5px',
              padding: '8px 12px',
              backgroundColor: color.value,
              color: 'white',
              border: currentColor === color.value ? '3px solid black' : '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {color.name}
          </button>
        ))}
      </div>
      <div style={{
        width: '200px',
        height: '100px',
        backgroundColor: currentColor,
        border: '2px solid #333',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
      }}>
        Màu hiện tại
      </div>
    </div>
  );
};

// Exercise 6: Search Filter Component
const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const items = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
    'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon',
    'Mango', 'Orange', 'Papaya', 'Quince', 'Raspberry'
  ];
  
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <h2>Bài tập 6: Search Filter</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Tìm kiếm trái cây..."
        style={{ 
          padding: '8px', 
          marginBottom: '15px', 
          width: '250px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
      <p>Tìm thấy {filteredItems.length} kết quả cho "{searchTerm}"</p>
      <ul style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
        gap: '8px',
        listStyle: 'none',
        padding: 0 
      }}>
        {filteredItems.map(item => (
          <li key={item} style={{
            padding: '8px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            {item}
          </li>
        ))}
      </ul>
      {filteredItems.length === 0 && searchTerm && (
        <p style={{ fontStyle: 'italic', color: '#666' }}>
          Không tìm thấy kết quả nào cho "{searchTerm}"
        </p>
      )}
    </div>
  );
};

// Exercise 7: Drag Drop List Component  
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

// Main App Component
function App() {
  const [currentExercise, setCurrentExercise] = useState('counter');

  const exercises = [
    { id: 'counter', name: 'Exercise 1: Counter', component: <Counter /> },
    { id: 'input', name: 'Exercise 2: Input Display', component: <InputDisplay /> },
    { id: 'toggle', name: 'Exercise 3: Toggle Visibility', component: <ToggleVisibility /> },
    { id: 'todo', name: 'Exercise 4: Todo List', component: <TodoList /> },
    { id: 'color', name: 'Exercise 5: Color Switcher', component: <ColorSwitcher /> },
    { id: 'search', name: 'Exercise 6: Search Filter', component: <SearchFilter /> },
    { id: 'drag', name: 'Exercise 7: Drag Drop List', component: <DragDropList /> }
  ];

  const getCurrentComponent = () => {
    const exercise = exercises.find(ex => ex.id === currentExercise);
    return exercise ? exercise.component : <Counter />;
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>
        🚀 React useState Exercises
      </h1>
      
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '15px' }}>Chọn bài tập:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
          {exercises.map(exercise => (
            <button
              key={exercise.id}
              onClick={() => setCurrentExercise(exercise.id)}
              style={{
                padding: '10px 15px',
                backgroundColor: currentExercise === exercise.id ? '#007bff' : '#f8f9fa',
                color: currentExercise === exercise.id ? 'white' : 'black',
                border: '1px solid #ccc',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: currentExercise === exercise.id ? 'bold' : 'normal',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (currentExercise !== exercise.id) {
                  e.target.style.backgroundColor = '#e9ecef';
                }
              }}
              onMouseLeave={(e) => {
                if (currentExercise !== exercise.id) {
                  e.target.style.backgroundColor = '#f8f9fa';
                }
              }}
            >
              {exercise.name}
            </button>
          ))}
        </div>
      </div>

      <div style={{ 
        border: '2px solid #ddd', 
        borderRadius: '12px', 
        padding: '30px',
        minHeight: '400px',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        {getCurrentComponent()}
      </div>
    </div>
  );
}

export default App;