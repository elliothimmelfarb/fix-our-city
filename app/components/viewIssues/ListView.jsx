import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import CardView from './CardView';

class ListView extends React.Component {
  createCards(issues) {
    console.log(issues);
    return issues.map(issue => (
      <CardView
        key={issue.obj._id}
        {...issue.obj}
      />

      ));
  }

  render() {
    console.log('loading', this.props.issuesLoading);
    const {
      issues,
      issuesLoading,
    } = this.props;
    // show all cards or one if selected
    const input = this.props.selectedObj.length > 0 ? this.props.selectedObj : issues;
    const cards = issues && this.createCards(input);
    const loading = issuesLoading ? <LinearProgress mode="indeterminate" /> : '';


    return (

      <div>
        {cards}
        {loading}
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
  selected: state.issues.selected.Id,
  selectedObj: state.issues.selected,

});


export default connect(mapStateToProps)(ListView);
