import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ActionLocation from 'material-ui/svg-icons/maps/my-location';
import injectTapEventPlugin from 'react-tap-event-plugin';

const getLocationButton = {
  width: '100%',
  marginBottom: '2%',
};
export default function getLocation() {
  return (
    <div>
      <Row bottom="xs">
        <Col xs={12} md={12} lg={12}>
          <RaisedButton
            secondary={true}
            icon={<ActionLocation />}
            style={getLocationButton}
          />
        </Col>
      </Row>
    </div>
  );
}
