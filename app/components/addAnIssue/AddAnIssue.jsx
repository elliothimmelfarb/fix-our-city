import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import UploadImage from './UploadImage';


export default function AddAnIssue() {
  return (
    <form className="dropzone">
      <div className="dropzone-previews"></div>

      <input type="text" />
      <input type="text" />

      <button type="submit" onClick={this.onSubmit}></button>
    </form>


  );
}
