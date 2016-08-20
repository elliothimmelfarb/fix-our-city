import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import { CardTitle } from 'material-ui/Card';
import NameCard from './NameCard';


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
  render() {
    return (
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Row>
            <Paper style={pageStyle} zDepth={5}>
              <CardTitle title="Meet The Team" style={cardStyle} />
              <NameCard
                title={"Somtida"}
              />
              <NameCard
                title={"Elliot"}
              />
              <NameCard
                title={"Lyndon"}
            />
              <NameCard
                title={"Thomas"}
            />
            </Paper>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default AboutUs;
