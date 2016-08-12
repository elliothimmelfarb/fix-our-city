import React from 'react';
import Dropzone from 'react-dropzone';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: '',
    };

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    console.log('Received files:', files);
    this.setState({ files });
    // send to server
  }

  render() {
    let imgStyle = {
      width: '200px',
      height: '200px',
    };
    let imgPreview = this.state.files ? this.state.files.map((file) =>
      <img role="presentation" src={file.preview} style={imgStyle} />) : 'No images uploaded';
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          {imgPreview}
        </Dropzone>
      </div>
    );
  }
}

export default UploadImage;
