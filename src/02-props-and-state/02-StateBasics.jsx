import React, { useState } from 'react';

function StateBasicsExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body text-center">
          <h4 className="card-title mb-3">🧠 useState का Example</h4>

          <p className="card-text fs-5">Button को {count} बार क्लिक किया गया है।</p>

          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
              ➕ बढ़ाएं
            </button>

            <button className="btn btn-danger" onClick={() => setCount(0)}>
              🔄 रीसेट करें
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                }
              }}
              disabled={count === 0}
            >
              ➖ घटाएं
            </button>
          </div>

          {/* Optional: Message if count is 0 */}
          {count === 0 && (
            <p className="text-muted mt-3">Count already zero ⛔</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default StateBasicsExample;
