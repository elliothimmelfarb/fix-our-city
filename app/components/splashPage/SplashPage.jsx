import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';
import AutoCompleteInput from './AutoComplete';
import IssueButton from './IssueButton';
import GetLocation from './GetLocation';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styles from '../../css/common/card.css';

// injectTapEventPlugin();


const style = {
   height: 400,
   width: '80%',
   margin: "0 auto",
   textAlign: 'center',
   display: 'inline-block',
   padding: '5%',
};

const buttonStyle = {
  width: "100%",
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
  padding: '5%',
};



export default function SplashPage(props) {
  return (
    <div style={bgImage}>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Row center="xs">
            <Paper style={style} zDepth={3}>
              <h1>Fix Our City!</h1>
              <Row>
                <Col xs={12} md={8} lg={8}>
                  <AutoCompleteInput />
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <GetLocation />
                </Col>
              </Row>
              <IssueButton />
            </Paper>
          </Row>
        </Col>
      </Row>
    </div>


  );
}
