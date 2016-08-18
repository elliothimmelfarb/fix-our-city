import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import { Card, CardHeader, CardText, CardMedia, CardActions, CardTitle } from 'material-ui/Card';
import { Row, Col } from 'react-flexbox-grid';
import moment from 'moment';
import Toggle from 'material-ui/Toggle';
import { upvoteIssue, downvoteIssue, selectIssue } from '../../actions/issueActions';


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
const voteStyle = {
  position: 'absolute',
  right: '0',
  top: '0',
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
    const divStyle = {
      position: 'relative',
    };
    const arrowStyle = {
      position: 'absolute',
      left: '50%',
      bottom: '0',
      transform: 'translate(-50%, 0%)',
    };

    const props = this.props;
    const day = moment(props.dateAdded).format('l') + "\nexp. " + moment("20160822").startOf('day').from(props.dateAdded);
    const upvoteStatus = props.upvoted.includes(props._id);
    const downvoteStatus = props.downvoted.includes(props._id);
    const arrow = props._id === props.selected ? <FontIcon className="material-icons">keyboard_arrow_up</FontIcon> : <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>;
    return (
      <div style={divStyle}>
      <Card
        zDepth={props._id === props.selected ? 5 : 1}
        expanded={props._id === props.selected}
      >

        <CardHeader
          title={props.title}
          avatar={props.imgUrl}
          subtitle={day}
          subtitleStyle={subStyle}

        >

      </CardHeader>

      <CardText style={voteStyle}>
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
          <IconButton
            style={arrowStyle}
            onClick={this.onCardClick}>
            {arrow}
          </IconButton>
      </CardActions>

      </Card>
    </div>
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
