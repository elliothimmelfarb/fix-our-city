import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

const buttonStyle = {
  marginTop: '6%',
  width: '100%',
  marginBottom: '2%',
};
export default function IssueButton() {
  return (
    <div>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Link to="/add-an-issue">
            <RaisedButton label="Add Issue" primary style={buttonStyle} />
          </Link>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Link to="/view-issues">
            <RaisedButton label="View Issues" primary style={buttonStyle} />
          </Link>
        </Col>
      </Row>
    </div>
  );
}
