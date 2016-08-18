import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, CardMedia, CardActions, CardTitle } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import { Row, Col } from 'react-flexbox-grid';
import moment from 'moment';
import Toggle from 'material-ui/Toggle';
import { upvoteIssue, downvoteIssue } from '../../actions/issueActions';
const styles = {
  image: {
    // maxHeight: 500,
    // maxWidth: 500,
    width: '90%',
    height: '90%',
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

const CardView = (props) => {
  const upvoteStatus = props.upvoted.includes(props._id);
  const downvoteStatus = props.downvoted.includes(props._id);
  const tagStyle = {
    backgroundColor: '#eee',
    borderRadius: '20px',
    border: '1px solid #eee',
    wordWrap: 'break-word',
  };
  const toggleStyles = {
    marginBottom: 16,
  };
  const descriptionStyle = {
    wordWrap: 'break-word',
  };
  const subStyle = {
    whiteSpace: 'pre-line',
  };
  const day = moment(props.dateAdded).format('l') + "\nexp. " + moment("20160822").startOf('day').from(props.dateAdded);
  console.log('day: ', day);
  return (
    <Card>
      <CardHeader
        title={props.title}
        subtitle={day}
        subtitleStyle={subStyle}
        avatar={props.imgUrl}
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
      <CardText expandable>
        <Row >
          <Col xs={7} md={10} lg={10} style={descriptionStyle}>
            {props.description}
          </Col>
          <Col xs={5} md={2} lg={2}>
            <Toggle
              style={toggleStyles}
              labelPosition="right"
              label="Fixed?"
            />
          </Col>
        </Row>
      </CardText>
      <CardActions>
        <button style={tagStyle}>test</button>
      </CardActions>
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
