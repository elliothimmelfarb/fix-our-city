import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dropzone from 'react-dropzone';
import superagent from 'superagent';
import * as addIssueActions from '../../actions/addIssueActions';


console.log('addIssueActions: ', addIssueActions);
const style = {
  height: 400,
  padding: '5%',
  width: '80%',
  margin: '0 auto',
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
      location: '' ,
      title: '',
      description: '',
      files: '',
    };
    this.getLocation = this.getLocation.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDrop(files) {
    console.log('files', files);
    this.setState({ files });
  }

  onSubmit(event) {
    event.preventDefault();

    const issueObj = {
      location: {
        coordinates: [this.props.userLocation.lng, this.props.userLocation.lat],
      },
      title: this.state.title,
      description: this.state.description,
    };
    // console.log(this.state.files[0]);
    superagent.post('/api/issues/add-issue')
      .attach('file', this.state.files[0])
      .field('issueObj', JSON.stringify(issueObj))
      .end((err, res) => {
        if (err) console.log(err);
        alert('Issue added! Thanks!');
      })


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
    let imgPreview = this.state.files ? this.state.files.map((file, i) =>
      <img key={i} role="presentation" src={file.preview} style={imgStyle} />) : 'Upload Image';
    console.log('userLocation: ',this.props.userLocation);

    return (

      <div style={bgImage}>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Row>
              <Paper style={style} zDepth={3}>
                <form onSubmit={this.onSubmit}>
                <Row>
                  <Col xs={8} md={8} lg={8}>
                    <TextField
                      hintText={Object.keys(this.props.userLocation).length > 0 ?
                         'Using your current location' : 'Location'}
                      floatingLabelText={Object.keys(this.props.userLocation).length > 0 ?
                         'Using your current location' : 'Location'}
                      fullWidth={true}
                      disabled={Object.keys(this.props.userLocation).length > 0}
                      value={this.state.location}
                      onChange={e => this.setState({ location: e.target.value })}
                      required={Object.keys(this.props.userLocation).length === 0}
                    />
                  </Col>
                  <Col xs={4} md={4} lg={4}>
                    <RaisedButton
                      label={this.props.loading ? 'Loading...' : 'Get Current Location'}
                      primary={true}
                      style={buttonStyle}
                      onClick={this.getLocation}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} md={8} lg={8}>
                  <TextField
                    hintText="Title"
                    floatingLabelText="Title"
                    fullWidth={true}
                    value={this.state.title}
                    onChange={e => this.setState({ title: e.target.value })}
                    required
                  />
                    <TextField
                      hintText="Description"
                      floatingLabelText="Description"
                      multiLine={true}
                      rows={2}
                      style={TextFieldStyle}
                      fullWidth={true}
                      value={this.state.description}
                      onChange={e => this.setState({ description: e.target.value })}
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
                      type="Submit"
                      label="Submit"
                      primary={true}
                      style={buttonStyle}
                    />
                  </Col>
                </Row>
                </form>
              </Paper>
            </Row>
          </Col>
        </Row>
      </div>


    );
  }
}

AddAnIssue.propTypes = {
  userLocation: PropTypes.object,
  loading: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    userLocation: state.location.location,
    loading: state.location.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserLocation: () => dispatch(addIssueActions.getUserLocation()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddAnIssue);
