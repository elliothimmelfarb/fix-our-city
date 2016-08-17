import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';


import GoogleMapContainer from './GoogleMapContainer';
import ListView from './ListView';

const style = {
  height: '100%',
  width: '80%',
  margin: '0 auto',
  padding: '1%',
  display: 'inline-block',
  marginBottom: '10em',
};

const listViewStyle = {
  textAlign: 'left',
};

function ViewIssues() {
  return (
    <div>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Row center="xs">
            <Paper style={style} zDepth={4}>
              <GoogleMapContainer />
              <Row>
                <Col xs={12} md={12} lg={12} style={listViewStyle}>
                  <ListView />
                </Col>
              </Row>
            </Paper>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ViewIssues;
