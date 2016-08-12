import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';
import AutoComplete from './AutoComplete';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';



const style = {
   height: 400,
   width: '80%',
   margin: "0 auto",
   textAlign: 'center',
   display: 'inline-block',
};
const buttonStyle = {
  width: "100%",
  padding: 20,
};
const getLocationButton = {
  marginTop: 20,
  marginLeft: -20,
  width: '20%',
};
const bgImage = {
  backgroundImage: "url('https://image.pbs.org/poster_images/assets/01mpmdkk0npu1svmvp6s_1.png.resize.710x399.png')",
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'bottom',
  height: '100vh',
  width: '100%',
  backgroundColor: 'skyblue',
  padding: 20,
};



export default function SplashPage() {
  return (
    <div style={bgImage}>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Row center="xs">
            <Paper style={style} zDepth={3}>
              <h1>Fix Our City!</h1>
              <Row>
                <Col xs={8} md={8} lg={8}>
                  <AutoComplete />
                </Col>
                <Col xs={4} md={4} lg={4}>
                  <RaisedButton
                    secondary={true}
                    icon={<FontIcon className="muidocs-icon-action-home" />}
                    style={getLocationButton}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6} lg={6}>
                  <Link to="/add-an-issue">
                    <RaisedButton label="Add Issue" primary={true} style={buttonStyle} />
                  </Link>
                </Col>
                <Col xs={6} md={6} lg={6}>
                  <Link to="/view-issues">
                    <RaisedButton label="View Issues" primary={true} style={buttonStyle} />
                  </Link>
                </Col>
              </Row>
            </Paper>
          </Row>
        </Col>
      </Row>
    </div>


  );
}
