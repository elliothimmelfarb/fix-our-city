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
      issuesLoading,
    } = this.props;

    const cards = issues && this.createCards(issues);
    console.log('loading?:', issuesLoading);
    return (
     
        <div>
          {cards}
        </div>
      

    );
  }
}

ListView.propTypes = {
  issues: PropTypes.array,
  issuesLoading: PropTypes.boolean,
};

const mapStateToProps = (state) => ({
  issues: state.issues.list,
  issuesLoading: state.issues.issuesLoading,
});


export default connect(mapStateToProps)(ListView);
