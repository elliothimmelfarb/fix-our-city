import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import { CardMedia } from 'material-ui/Card';
import AutoCompleteInput from './AutoComplete';
import IssueButton from './IssueButton';
import GetLocation from './GetLocation';



const pageStyle = {
  height: '40%',
  width: '85%',
  margin: '0 auto',
  textAlign: 'center',
  display: 'inline-block',
  padding: '5%',
};
const titelImage = {
  width: '100%',
  height: '40%',
  marginBottom: '2%',
};
export default function SplashPage() {
  return (
    <div>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Row center="xs">
            <Paper style={pageStyle} zDepth={3}>
              <img src="https://s3.postimg.org/t70rczfgj/logo2.png" alt="logo" />
              <CardMedia>
                <img style={titelImage} src="https://s4.postimg.org/py58esox9/Screen_Shot_2016_08_13_at_3_05_32_PM.png" alt="fix our city" />
              </CardMedia>
              <Row>
                <Col xs={12} md={8} lg={8}>
                  <AutoCompleteInput />
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <GetLocation />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <IssueButton />
                </Col>
              </Row>
            </Paper>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
