import React from 'react';

export default function ImageLinkForm() {
  return (
    <div>
      <p className="f3">{'This is App will detect faces in your Pictures'}</p>
      <div>
        <div className="center">
          <div className="center pa4 br3 shadow">
            <input className="f4 pa2 w-70 center" type="text" name="" />
            <button type="button" className="w-30 grow f4 link ph3 pv2">
              Detect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
