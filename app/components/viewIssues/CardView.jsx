import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, CardMedia } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import { Col } from 'react-flexbox-grid';
import { upvoteIssue, downvoteIssue, selectIssue } from '../../actions/issueActions';

const styles = {
  image: {
    // maxHeight: 500,
    // maxWidth: 500,
    width: '80%',
    height: '80%',
    margin: '0 auto',
    textAlign: 'center',
  },
  voting: {
    position: 'absolute',
    top: '-10%',
    right: '1%',
    textAlign: 'right',
    display: 'inline',
  },
};

class CardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shadow: 1 };
    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick() {
    if (this.props._id === this.props.selected) {
      this.props.selectIssue(0);
    } else {
      this.props.selectIssue(this.props._id);
    }
  }
  render() {
    const props = this.props;
    const upvoteStatus = props.upvoted.includes(props._id);
    const downvoteStatus = props.downvoted.includes(props._id);
    return (
      <Card
        zDepth={props._id === props.selected ? 5 : 1}
        expanded={props._id === props.selected}
      >
        <CardHeader
          title={props.title}
          avatar={props.imgUrl}
          onClick={this.onCardClick}
          subtitle={props.description}
          actAsExpander
        >
          <CardText style={styles.voting}>
            <IconButton
              disabled={upvoteStatus}
              onClick={() => props.upvoteIssue(props._id, props.mapCenter, props.mapCorner)}
            >
              <FontIcon className="material-icons">thumb_up</FontIcon>
            </IconButton>
            <Badge
              badgeContent={props.votes}
              secondary
              badgeStyle={{ top: 5, right: 5 }}
            />
            <IconButton
              disabled={downvoteStatus}
              onClick={() => props.downvoteIssue(props._id, props.mapCenter, props.mapCorner)}
            >

              <FontIcon className="material-icons">thumb_down</FontIcon>
            </IconButton>
          </CardText>
        </CardHeader>
        <CardMedia
          expandable
          mediaStyle={styles.image}
        >
          <img src={`${props.imgUrl}`} alt="Issue" style={styles.image} />
        </CardMedia>
      </Card>
    );
  }
}

CardView.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  selectIssue: PropTypes.func.isRequired,
  _id: PropTypes.string,
  selected: PropTypes.string,


};

const mapDispatchToProps = (dispatch) => ({
  upvoteIssue(id, center, corner) {
    return dispatch(upvoteIssue(id, center, corner));
  },
  downvoteIssue(id, center, corner) {
    return dispatch(downvoteIssue(id, center, corner));
  },
  selectIssue(id) {
    console.log('hi', id);
    return dispatch(selectIssue(id));
  },
});

const mapStateToProps = (state) => ({
  mapCenter: state.map.center,
  mapCorner: state.map.bounds.nw,
  upvoted: state.issues.upvoted,
  downvoted: state.issues.downvoted,
  selected: state.issues.selectedId,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardView);
