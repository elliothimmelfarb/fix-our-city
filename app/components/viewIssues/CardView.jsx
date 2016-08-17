import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, CardMedia } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import { Col } from 'react-flexbox-grid';
import { upvoteIssue, downvoteIssue } from '../../actions/issueActions';

const styles = {
  image: {
    maxHeight: 500,
    maxWidth: 500,
    textAlign: 'center',
  },
  voting: {
    position: 'relative',
    bottom: '65px',
    marginBottom: '-50px',
  },
};

const CardView = (props) => {
  const upvoteStatus = props.upvoted.includes(props._id);
  const downvoteStatus = props.downvoted.includes(props._id);
  return (
    <Card>
      <CardHeader
        title={props.title}
        avatar={props.imgUrl}
        subtitle={props.description}
        actAsExpander
      >
      </CardHeader>
      <CardText>
        <Col xsOffset={9} mdOffset={11} style={styles.voting}>
          <IconButton
            disabled={upvoteStatus}
            onClick={() => props.upvoteIssue(props._id, props.mapCenter, props.mapCorner)}>
            <FontIcon className="material-icons">thumb_up</FontIcon>
          </IconButton>
          <Badge
            badgeContent={props.votes}
            secondary
            badgeStyle={{ top: 5, right: 5 }}
          />
          <IconButton
            disabled={downvoteStatus}
            onClick={() => props.downvoteIssue(props._id, props.mapCenter, props.mapCorner)}>
            <FontIcon className="material-icons">thumb_down</FontIcon>
          </IconButton>
        </Col>
      </CardText>
      <CardMedia
        expandable
        mediaStyle={styles.image}
      >
        <img src={`${props.imgUrl}`} alt="Issue" style={styles.image} />
      </CardMedia>
      />
    </Card>

    );
};

CardView.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  upvoteIssue(id, center, corner) {
    return dispatch(upvoteIssue(id, center, corner));
  },
  downvoteIssue(id, center, corner) {
    return dispatch(downvoteIssue(id, center, corner));
  },
});

const mapStateToProps = (state) => ({
  mapCenter: state.map.center,
  mapCorner: state.map.bounds.nw,
  upvoted: state.issues.upvoted,
  downvoted: state.issues.downvoted,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardView);
