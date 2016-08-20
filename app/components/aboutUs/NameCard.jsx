import React from 'react';
import { Card, CardTitle, CardMedia, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

const imgStyle = {
  width: '35px',
  height: '35px',
  borderRadius: '5px',
  marginRight:'7px',
}

class NameCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
    this.handleExpand = this.handleExpand.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleExpand = () => {
    this.setState({ expanded: true })
  }

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={this.props.title}
          subtitle={this.props.subtitle}
          avatar={<Avatar
                    src={this.props.avatar}
                    size={88}
                  />}
          actAsExpander
          showExpandableButton
        />
        <CardMedia expandable style={{ textAlign: 'center'}}>
          <div style={{ marginLeft: '20' }}>
            <a href={this.props.linkedin} target="_blank"><img src="http://i.imgur.com/T24Z0Jx.png" style={imgStyle} /></a>
            <a href={this.props.github} target="_blank"><img src="http://i.imgur.com/FLDnGkc.png" style={imgStyle} /></a>
            <a href={this.props.twitter} target="_blank"><img src="http://i.imgur.com/LU77jNo.png" style={imgStyle} /></a>
          </div>
        </CardMedia>
        <CardText expandable={true} style={{ textAlign: 'center'}}>
        <p style={{ fontSize: '25'}}><em>"{this.props.body}"</em></p> <br />
        <i>-{this.props.author}</i>
        </CardText>

      </Card>
    )
  }
};


export default NameCard;
