import React, { useState } from 'react';
import './App.css';
import { marked } from 'marked';


function App() {
  const [text, setText] = useState('# H1\n## H2\n[title](https://www.example.com)\n`code`\n```\n{\n  "firstName": "John",\n  "lastName": "Smith",\n  "age": 25\n}\n```\n- First item\n- Second item\n- Third item\n\n> blockquote\n\n![alt text](image.jpg)\n\n**bold text**');
  
  // Définir les options de marked
  marked.setOptions({
    breaks: true
  });

  return (
    <div className="App">
      <textarea id="editor" onChange={(event) => setText(event.target.value)} value={text}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
    </div>
  );
}

export default App;
