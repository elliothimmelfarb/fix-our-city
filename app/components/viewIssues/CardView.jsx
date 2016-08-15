import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia } from 'material-ui/Card';

const styles = {
  image: {
    height: 500,
    width: 500
  },
}

const CardView = (props) =>  (
  <Card>
    <CardHeader
      title={props.title}
      avatar={props.imgUrl}
      subtitle={props.description}
      actAsExpander
      showExpandableButton
    />
    <CardMedia
      expandable
      mediaStyle={styles.image}
    >
      <img src={`${props.imgUrl}`} alt='Issue' style={styles.image} />
    </CardMedia>
    />
  </Card>

  );

CardView.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};


export default CardView;
