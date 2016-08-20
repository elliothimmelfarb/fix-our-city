import React, { PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import FloatingButton from './FloatingButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import { RouteTransition } from 'react-router-transition';
import GoogleMapContainer from './GoogleMapContainer';
import ListView from './ListView';

const style = {
  height: '100%',
  width: '100%',
  margin: '0 auto',
  padding: '1%',
  display: 'inline-block',
  marginBottom: '10em',
  marginTop: '8%',
};

const listViewStyle = {
  textAlign: 'left',
};
const floatbuttonStyle = {
  left: '0',
  top: '50',
  marginLeft: '20%',
  
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
                <FloatingButton style={floatbuttonStyle} />
              </Paper>
            </Row>
          </Col>
        </Row>
      


    </div>
  );
}

export default ViewIssues;
