import React from 'react';
import { Card, CardTitle, CardText, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

const imgStyle = {
  width: '25px',
  height: '25px',
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
                    size={50}
                  />}
          actAsExpander
          showExpandableButton
        />

        <CardTitle title="Card title" expandable={true} />
        <CardText expandable>
          <div>
            <a href={this.props.linkedin} target="_blank"><img src="http://icons.iconarchive.com/icons/danleech/simple/1024/linkedin-icon.png" style={imgStyle} /></a>
          </div>
        </CardText>
      </Card>
    )
  }
};


export default NameCard;
