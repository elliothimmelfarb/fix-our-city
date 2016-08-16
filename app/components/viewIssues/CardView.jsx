import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardText, CardMedia } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { upvoteIssue } from '../../actions/issueActions';

import { Row, Col } from 'react-flexbox-grid';


const styles = {
  image: {
    maxHeight: 500,
    maxWidth: 500,
    textAlign: 'center',
  },
  voting: {
    position: 'relative',
    bottom: '65px',
    marginBottom: '-50px'
  },
}

const CardView = (props) =>  (
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
        <IconButton onClick={() => props.upvoteIssue(props._id, props.mapCenter, props.mapCorner)}>
          <FontIcon className="material-icons">thumb_up</FontIcon>
        </IconButton>
        <IconButton><FontIcon className="material-icons">thumb_down</FontIcon></IconButton>
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

CardView.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  upvoteIssue(id, center, corner) {
    console.log('in upvote ', id, center, corner);
    return dispatch(upvoteIssue(id, center, corner));
  },
});

const mapStateToProps = (state) => ({
  mapCenter: state.map.center,
  mapCorner: state.map.bounds.nw,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardView);
