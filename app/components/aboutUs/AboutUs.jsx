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
                subtitle={"@AmySkns "}
                avatar={"http://i.imgur.com/6GbIeyt.jpg"}
                linkedin={"https://www.linkedin.com/in/somtida-sinkamnoonsak-b40949101"}
                twitter={"https://twitter.com/AmySkns"}
                github={"https://github.com/Somtida"}
                body={"If you can dream it, you can do it."}
                author={"Walt Disney"}
              />
              <NameCard
                title={"Elliot Himmelfarb"}
                subtitle={"@e_himmelfarb"}
                avatar={"http://i.imgur.com/1NwRHk6.jpg"}
                linkedin={"https://www.linkedin.com/in/elliot-himmelfarb-14347976"}
                twitter={"https://twitter.com/e_himmelfarb"}
                github={"https://github.com/elliothimmelfarb"}
                body={`The way Aaron always saw it, is that programming is magic.
                       You can accomplish these things that normal humans can\'t,
                       by being able to program. So if you had magical powers, would
                       you use them for good, or to make you mountains of cash?`}
                author={"Ben Swartz"}
              />

              <NameCard
                title={"Lyndon La Rosa"}
                subtitle={"@lyndon_larosa"}
                avatar={"http://i.imgur.com/nnq3p8L.jpg"}
                linkedin={"https://www.linkedin.com/in/lyndonlarosa"}
                twitter={"https://twitter.com/lyndon_larosa"}
                github={"https://github.com/lyndonl3091"}
                body={"A genuine, affectionate smile is very important in our day-to-day lives."}
                author={"Dalai Lama XIV"}
              />
              <NameCard
                title={"Thomas Wolfe"}
                subtitle={"@tewolfe2"}
                avatar={"http://i.imgur.com/zaHqy4q.jpg"}
                linkedin={"https://www.linkedin.com/in/twolfe2"}
                twitter={"https://twitter.com/tewolfe2"}
                github={"https://github.com/twolfe2"}
                body={"Strive not to be a success, but rather to be of value"}
                author={"Albert Einstein"}
              />
            </Paper>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default AboutUs;
