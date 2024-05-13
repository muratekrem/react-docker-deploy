import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/bilyoner')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App" style={{display:"flex" , justifyContent:"center",  height:"90vh" , alignItems:"center"}}>
      
        
        {data ? (
          <h1 className="data-container" style={{ color: 'green' }}>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </h1>
        ) : (
          <p>Loading...</p>
        )}
      
    </div>
  );
}

export default App;
