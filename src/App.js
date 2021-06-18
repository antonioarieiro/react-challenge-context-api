import React from 'react';
import GitProvider from './context/GitProvider';
import PersonInfo from './components/index'
function App() {
  return (
    <div className="App">
      <GitProvider>
        <PersonInfo />
      </GitProvider>
    </div>
  );
}

export default App;
