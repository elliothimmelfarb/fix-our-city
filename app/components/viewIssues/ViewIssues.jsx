import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';


import GoogleMapContainer from './GoogleMapContainer';
import ListView from './ListView';

const style = {
  height: '100%',
  width: '100%',
  margin: 0,
  padding: 10,
  display: 'inline-block',
};

function ViewIssues() {
  return (
    <div>
      <Row>
        <Col xs={6} md={3} xsOffset={5}>Hello, from view issues!</Col>
      </Row>
      <Paper style={style} zDepth={4}>
        <GoogleMapContainer />
        <ListView />
      </Paper>
    </div>
  );
}

export default ViewIssues;
