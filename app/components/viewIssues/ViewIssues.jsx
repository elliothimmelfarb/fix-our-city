import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';

import GoogleMapContainer from './GoogleMapContainer';
import ListView from './ListView';

function ViewIssues() {
  return (
    <div>
      <Row>
        <Col xs={6} md={3} xsOffset={5}>Hello, from view issues!</Col>
      </Row>
      <GoogleMapContainer />
      <ListView />
    </div>
  );
}

export default ViewIssues;
