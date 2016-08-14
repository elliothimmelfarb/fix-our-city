import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';
import AutoCompleteInput from './AutoComplete';
import IssueButton from './IssueButton';
import GetLocation from './GetLocation';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// injectTapEventPlugin();


const style = {
   height: '40%',
   width: '80%',
   margin: "0 auto",
   textAlign: 'center',
   display: 'inline-block',
   padding: '2% 5% 5% 5%',
};

const buttonStyle = {
  width: "100%",
};

const getLocationButton = {
  marginTop: 20,
  marginLeft: -20,
  width: '20%',
};

const cardStyle = {
  paddind: '5%',
};
const titelImage = {
  width: '100%',
  height: '40%',
  marginBottom: '2%',
};

export default function SplashPage(props) {
  return (
    <div>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Row center="xs">
            <Paper style={style} zDepth={3}>
              <img src="https://s3.postimg.org/t70rczfgj/logo2.png" alt="logo" />
              <CardMedia>
                <img g style={titelImage} src="https://s4.postimg.org/py58esox9/Screen_Shot_2016_08_13_at_3_05_32_PM.png" alt="fix our city" />
              </CardMedia>

                <CardHeader title="Without Avatar" actAsExpander={true} />
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
