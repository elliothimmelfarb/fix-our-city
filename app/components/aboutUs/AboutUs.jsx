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
                title={"Somtida Sinkamnoonsak"}
                subtitle={"Amy"}
                avatar={"http://i.imgur.com/0u0pAmE.png"}
                linkedin={"https://www.linkedin.com/in/somtida-sinkamnoonsak-b40949101"}
              />
              <NameCard
                title={"Elliot Himmelfarb"}
                subtitle={""}
              />
              <NameCard
                title={"Lyndon La Rosa"}
                subtitble={""}
                linkedin={"https://www.linkedin.com/in/lyndonlarosa"}
              />
              <NameCard
                title={"Thomas Wolfe"}
                subtitle={""}
              />
            </Paper>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default AboutUs;
