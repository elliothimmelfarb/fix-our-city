import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
   height: 400,
   padding: '5%',
   width: '80%',
   margin: "0 auto",
   textAlign: 'center',
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
};
const TextFieldStyle = {
  marginBottom: '5%',
};
export default function AddAnIssue() {
  return (
    <div style={bgImage}>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Row center="xs">
            <Paper style={style} zDepth={3}>
              <Row>
                <Col xs={9} md={9} lg={9}>
                  <TextField hintText="Location" fullWidth={true} />
                </Col>
                <Col xs={3} md={3} lg={3}>
                  <RaisedButton label="location" primary={true} style={buttonStyle} />
                </Col>
              </Row>
              <Row>
                <Col xs={9} md={9} lg={9}>
                  <TextField
                    hintText="Message Field"
                    floatingLabelText="Issue"
                    multiLine={true}
                    rows={3}
                    style={TextFieldStyle}
                    fullWidth={true}
                  />
                </Col>
                <Col xs={3} md={3} lg={3}>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <RaisedButton label="Submit" primary={true} style={buttonStyle} />
                </Col>
              </Row>
            </Paper>
          </Row>
        </Col>
      </Row>
    </div>

  );
}
