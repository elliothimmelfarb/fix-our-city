import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import CardView from './CardView';

class ListView extends React.Component {
  createCards(issues) {
    return issues.map(issue => (
      <CardView
        key={issue.obj._id}
        {...issue.obj}
      />

      ));
  }

  render() {
    const {
      issues,
    } = this.props;

    const cards = issues && this.createCards(issues);

    return (
      <Col xs={12}>
        {cards}
      </Col>

    );
  }
}

ListView.propTypes = {
  issues: PropTypes.array,
};


const mapStateToProps = (state) => ({
  issues: state.issues.list,
});


export default connect(mapStateToProps)(ListView);
