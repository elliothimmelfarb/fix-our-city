import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import UploadImage from './UploadImage';
import Dropzone from 'react-dropzone';


class AddAnIssue2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      issue:'',
      files: '',
    };

    this.onDrop = this.onDrop.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDrop(files) {
    console.log('Received files:', files);
    this.setState({ files });
    // send to server
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('this.state:', this.state)
  }

  render() {

    let imgStyle = {
      width: '200px',
      height: '200px',
    };
    let imgPreview = this.state.files ? this.state.files.map((file) =>
      <img role="presentation" src={file.preview} style={imgStyle} />) : 'No images uploaded';

    return (
      <form>
        <Dropzone onDrop={this.onDrop}>
          {imgPreview}
        </Dropzone>
        <input type="text"
          value={this.state.issue}
          onChange={ e => this.setState({issue: e.target.value })}/>

        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default AddAnIssue2;
