import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CardView from './CardView';

class ListView extends React.Component {
  createCards(issues) {
    return issues.map(issue => (
      <CardView
        key={issue.obj._id}
        {...issue.obj}
        expanded={this.props.selected === issue._id}
      />

      ));
  }

  render() {
    const {
      issues,
    } = this.props;

    const cards = issues && this.createCards(issues);

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
  selected: state.issues.selected

});


export default connect(mapStateToProps)(ListView);
