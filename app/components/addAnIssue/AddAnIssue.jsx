import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import Dropzone from 'react-dropzone';
import superagent from 'superagent';
import ActionLocation from 'material-ui/svg-icons/maps/my-location';
import LinearProgress from 'material-ui/LinearProgress';
import { Card, CardTitle } from 'material-ui/Card';
import InputInfo from './InputInfo';
import * as locationActions from '../../actions/locationActions';

const pageStyle = {
  height: '40%',
  padding: '5%',
  width: '80%',
  margin: '0 auto',
  display: 'inline-block',
};

const buttonStyle = {
  marginTop: '3%',
  width: '100%',
  marginBottom: '2%',
};

const dropZoneStyle = {
  width: '100%',
  height: '150px',
  border: '2px solid #eee',
  marginBottom: '2%',
  textAlign: 'center',
};
const bgDefault = {
  background: 'url("http://research.larc.smu.edu.sg/ge2015/assets/img/default_photo.png")',
  backgroundSize: '100%, 100%',
};
const test = {
  position: 'relative',
  left: '-5%',
};
class AddAnIssue extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      location: '',
      files: '',
      open: false,
    };
    this.getLocation = this.getLocation.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDrop(files) {
    this.setState({ files });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ open: true });
    const issueObj = {
      location: {
        coordinates: [this.props.userLocation.lng, this.props.userLocation.lat],
      },
      title: this.props.title,
      description: this.props.description,
    };
    superagent.post('/api/issues/add-issue')
      .attach('file', this.state.files[0])
      .field('issueObj', JSON.stringify(issueObj))
      .end((err, res) => {
        if (err) console.log(err);
        this.redirect();
      });
  }

  getLocation() {
    this.props.getUserLocation();
  }
  redirect() {
    this.context.router.push('/view-issues');
  }

  render() {
    let imgStyle = {
      width: '100%',
      height: '150px',
    };
    let imgPreview = this.state.files ? this.state.files.map((file, i) =>
      <img key={i} role="presentation" src={file.preview} style={imgStyle} />) : 'Upload Image';
    console.log('userLocation: ', this.props.userLocation.lat);
    return (

      <div>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Row>
              <Paper style={pageStyle} zDepth={5}>
                <CardTitle title="Add Issue" />
                <form onSubmit={this.onSubmit}>
                  <Row>
                    <Col xs={12} md={8} lg={8}>
                      <TextField
                        hintText={Object.keys(this.props.userLocation).length > 0 ?
                           'Using your current location' : 'Location'}
                        floatingLabelText={Object.keys(this.props.userLocation).length > 0 ?
                            'Current Location at '+this.props.userLocation.lat.toFixed(2)+", "+this.props.userLocation.lng.toFixed(2) : 'Location'}
                        fullWidth={true}
                        disabled={Object.keys(this.props.userLocation).length > 0}
                        value={this.state.location}
                        onChange={e => this.setState({ location: e.target.value })}
                        required={Object.keys(this.props.userLocation).length === 0}
                      />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <RaisedButton
                        icon={this.props.loading ? <LinearProgress mode="indeterminate" style={test} /> : <ActionLocation />}
                        label={this.props.loading ? 'Loading...' : 'Get Current Location'}
                        primary
                        style={buttonStyle}
                        onClick={this.getLocation}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={8} lg={8}>
                      <InputInfo />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <Card style={imgStyle}>
                        <Dropzone onDrop={this.onDrop} style={dropZoneStyle}>
                          {imgPreview}
                        </Dropzone>
                      </Card>
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
                      <Snackbar
                        open={this.state.open}
                        message='Issue Submitted'
                        autoHideDuration={4000}
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
  getUserLocation: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
};

AddAnIssue.contextTypes = {
  router: PropTypes.object,
};

function mapStateToProps(state, ownProps) {
  return {
    userLocation: state.location.location,
    loading: state.location.loading,
    title: state.input.title,
    description: state.input.description,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserLocation: () => dispatch(locationActions.getUserLocation()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddAnIssue);
