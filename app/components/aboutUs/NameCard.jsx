import React from 'react';
import { Card, CardTitle, CardText, CardHeader } from 'material-ui/Card';

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
          avatar={this.props.avatar}
          actAsExpander
          showExpandableButton
        />

        <CardTitle title="Card title" expandable={true} />
        <CardText expandable>
          {this.props.body}
        </CardText>
      </Card>
    )
  }
};


export default NameCard;
