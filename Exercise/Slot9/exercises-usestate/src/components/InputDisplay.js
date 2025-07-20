import React, { useState } from 'react';

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

export default InputDisplay;