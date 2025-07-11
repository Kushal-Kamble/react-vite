import React from 'react';
import EventHandlingIndex from './03-event-handling';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <EventHandlingIndex />
        <ToastContainer /> {/* Ye ek hi baar app me hona chahiye */}
    </div>
  );
}

export default App;
