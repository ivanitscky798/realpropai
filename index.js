
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ padding: 32 }}>
      <h1>RealProp AI - Demo Interattiva</h1>
      <p>Accedi ai dati immobiliari della tua zona e scopri chi è il proprietario.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
