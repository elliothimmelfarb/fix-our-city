import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { Paper, RaisedButton, Dialog, FlatButton, Snackbar } from 'material-ui';
import Dropzone from 'react-dropzone';
import superagent from 'superagent';
import Upload from 'material-ui/svg-icons/image/add-a-photo';
import { Card, CardTitle } from 'material-ui/Card';
import InputInfo from './InputInfo';
import GetLocation from '../splashPage/GetLocation';
import * as inputActions from '../../actions/inputActions';
import * as locationActions from '../../actions/locationActions';
import AutoComplete from '../splashPage/AutoComplete';


const pageStyle = {
  height: '40%',
  padding: '5%',
  width: '80%',
  margin: '0 auto',
  display: 'inline-block',
};

const button2Style = {
  marginTop: '3%',
  width: '50%',
  marginBottom: '2%',
};

const dropZoneStyle = {
  width: '100%',
  height: '150px',
  border: '2px solid #eee',
  marginBottom: '2%',
  textAlign: 'center',
};


const svgStyle = {
  height: '100%',
  width: '100%',
  opacity: '0.6',
  cursor: 'copy',
};

const cardStyle = {
  textAlign: 'center',
};

class AddAnIssue extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      location: '',
      files: '',
      openDialog: false,
      openSnackbar: false,
      imageError: false,
    };
    this.getLocation = this.getLocation.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onDrop(files) {
    this.setState({ files });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.files) {
      this.setState({ openDialog: true });
      const issueObj = {
        location: {
          coordinates: [this.props.userLocation.lng, this.props.userLocation.lat],
        },
        title: this.props.title,
        description: this.props.description,
        tag: this.props.tag,
      };
      superagent.post('/api/issues/add-issue')
        .attach('file', this.state.files[0])
        .field('issueObj', JSON.stringify(issueObj))
        .end((err) => {
          if (err) this.setState({ openSnackbar: true });
        });
    } else {
      this.setState({ imageError: true })
    }
  }

  getLocation() {
    this.props.getUserLocation();
  }
  redirect() {
    this.context.router.push('/view-issues');
  }

  handleClose() {
    this.setState({ openDialog: false, files: '', location: '' });
    this.props.clearInputs();
  }

  render() {
    let imgStyle = {
      width: '100%',
      height: '150px',
    };
    let imgPreview = this.state.files ? this.state.files.map((file, i) =>
      <img key={i} role="presentation" src={file.preview} style={imgStyle} />) :
      <Upload style={svgStyle} />;

    const dialogActions = [
      <FlatButton
        label="Add New Issue"
        primary
        hoverColor="gray"
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="View Issues"
        primary
        hoverColor="gray"
        onTouchTap={this.redirect}
      />,
    ];

    const {
      userLocation,
    } = this.props;
    return (

      <div>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Row>
              <Paper style={pageStyle} zDepth={5}>
                <CardTitle title="Add an Issue" style={cardStyle}/>
                <form onSubmit={this.onSubmit}>
                  <Row>
                    <Col xs={12} md={8} lg={8}>
                      <AutoComplete />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                      <GetLocation />
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
                    <Col xs={6} md={6} lg={6}>
                      <RaisedButton
                        type="button"
                        label="Cancel"
                        default
                        fullWidth
                        style={button2Style}
                        onClick={this.handleClose}
                      />
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                      <RaisedButton
                        type="Submit"
                        label="Submit"
                        fullWidth
                        primary
                        style={button2Style}
                      />
                    </Col>
                  </Row>
                </form>
                <Dialog
                  title="Issue Submitted!"
                  actions={dialogActions}
                  modal={false}
                  open={this.state.openDialog}
                  onRequestClose={this.handleClose}
                >
                  Thank You for your submission.
                </Dialog>
                <Snackbar
                  open={this.state.openSnackbar}
                  message="Error adding Issue"
                  autoHideDuration={4000}
                />
                <Snackbar
                  open={this.state.imageError}
                  message="Please upload an image."
                  autoHideDuration={4000}
                />
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
  clearInputs: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.string,
};

AddAnIssue.contextTypes = {
  router: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    userLocation: state.location.location,
    loading: state.location.loading,
    title: state.input.title,
    description: state.input.description,
    tag: state.tags.selectedTag,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserLocation: () => dispatch(locationActions.getUserLocation()),
    clearInputs: () => dispatch(inputActions.clearInputs()),

  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddAnIssue);

// <TextField
//   hintText={this.state.location ? '' : 'Location'}
//   floatingLabelText={Object.keys(userLocation).length > 0 ?
//      'Current Location at ' + userLocation.lat.toFixed(2) + ','
//      + userLocation.lng.toFixed(2) : 'Location'}
//   disabled={Object.keys(userLocation).length > 0}
//   value={userLocation.location}
//   onChange={e => this.setState({ location: e.target.value })}
//   required={Object.keys(userLocation).length === 0}
//   fullWidth
// />
