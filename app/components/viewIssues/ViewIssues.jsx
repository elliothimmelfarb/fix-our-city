import React, { PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { RouteTransition } from 'react-router-transition';

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
      <RouteTransition
                pathname={location.pathname}

        atEnter={{ translateX: 120 }}
        atLeave={{ translateX: -120 }}
        atActive={{ translateX: 0 }}
        mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
      >
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
      </RouteTransition>

    </div>
  );
}




export default ViewIssues;
