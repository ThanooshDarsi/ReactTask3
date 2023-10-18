import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker'; // Import the ColorPicker component

function App() {
  const colors = [
    'red', 'blue', 'green', 'yellow', 'orange', 
    'purple', 'pink', 'cyan', 'magenta', 'brown', 
    'gray', 'lightblue', 'lightgreen', 'lavender', 'teal', 
    'violet', 'gold', 'turquoise', 'indigo', 'lime'
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* Other content */}
        <ColorPicker colors={colors} /> {/* Pass the colors array as a prop */}
      </header>
    </div>
  );
}

export default App;
