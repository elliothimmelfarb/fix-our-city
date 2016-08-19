import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import { Card, CardTitle } from 'material-ui/Card';

const pageStyle = {
  height: '40%',
  padding: '5%',
  width: '80%',
  margin: '0 auto',
  display: 'inline-block',
};

const cardStyle = {
  textAlign: 'center',
};

class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
  }

  handleExpand = () => {
    this.setState({ expanded: true })
  }

  render() {
    return (
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Row>
            <Paper style={pageStyle} zDepth={5}>
              <CardTitle title="Meet The Team" style={cardStyle} />

            </Paper>
          </Row>
        </Col>
      </Row>
    );
  }
};

export default AboutUs;
