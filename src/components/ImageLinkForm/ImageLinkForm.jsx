import React from 'react';

export default function ImageLinkForm({ onInputChange, onButtonSubmit }) {
  return (
    <div>
      <p className="f3">This is App will detect faces in your Pictures</p>
      <div>
        <div className="center">
          <div className="center pa4 br3 shadow">
            <input
              type="text"
              name="input"
              onChange={onInputChange}
              className="f4 pa2 w-70 center"
            />
            <button
              type="button"
              onClick={onButtonSubmit}
              className="w-30 grow f4 link ph3 pv2"
            >
              Detect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
