import React from 'react';
import { connect } from 'react-redux';
import * as addIssueActions from '../../actions/addIssueActions';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dropzone from 'react-dropzone';

console.log('addIssueActions: ', addIssueActions);
const style = {
  height: 400,
  padding: '5%',
  width: '80%',
  margin: "0 auto",
  // textAlign: 'center',
  display: 'inline-block',
};
const bgImage = {
  backgroundImage: "url('https://image.pbs.org/poster_images/assets/01mpmdkk0npu1svmvp6s_1.png.resize.710x399.png')",
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'bottom',
  height: '100vh',
  width: '100vw',
  backgroundColor: 'skyblue',
  padding: '5%',
};
const buttonStyle = {
  width: '100%',
  marginBottom: '2%',
};
const TextFieldStyle = {
  marginBottom: '5%',
};
const dropZoneStyle = {
  width: '100%',
  height: '95%',
  border: '2px solid #eee',
  marginBottom: '5%',
  textAlign: 'center',
};
class AddAnIssue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      issue: '',
      files: '',
    };
    this.getLocation = this.getLocation.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDrop(files) {
    this.setState({ files });
    // send to server
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  getLocation() {
    console.log('click!');
    this.props.getUserLocation();
  }
  render() {
    let imgStyle = {
      width: '200px',
      height: '200px',
    };
    let imgPreview = this.state.files ? this.state.files.map((file) =>
      <img role="presentation" src={file.preview} style={imgStyle} />) : 'Upload Image';
    console.log('userLocation: ',this.props.userLocation);
    return (

      <div style={bgImage}>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Row>
              <Paper style={style} zDepth={3}>
                <Row>
                  <Col xs={8} md={8} lg={8}>
                    <TextField
                      hintText="Location"
                      fullWidth={true}
                      value={this.state.location}
                      onChange={e => this.setState({ location: e.target.value })}
                    />
                  </Col>
                  <Col xs={4} md={4} lg={4}>
                    <RaisedButton
                      label="location"
                      primary={true}
                      style={buttonStyle}
                      onClick={this.getLocation}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} md={8} lg={8}>
                    <TextField
                      hintText="Message Field"
                      floatingLabelText="Issue"
                      multiLine={true}
                      rows={5}
                      style={TextFieldStyle}
                      fullWidth={true}
                      value={this.state.issue}
                      onChange={e => this.setState({ issue: e.target.value })}
                    />
                  </Col>
                  <Col xs={4} md={4} lg={4}>
                    <Dropzone onDrop={this.onDrop} style={dropZoneStyle}>
                      {imgPreview}
                    </Dropzone>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    <RaisedButton
                      label="Submit"
                      primary={true}
                      style={buttonStyle}
                      onClick={this.onSubmit}
                    />
                  </Col>
                </Row>
              </Paper>
            </Row>
          </Col>
        </Row>
      </div>


    );
  }
}

function mapStateToProps(state) {
  return {
    userLocation: state.location.userLocation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserLocation: () => dispatch(addIssueActions.getUserLocation()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddAnIssue);
