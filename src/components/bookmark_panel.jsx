import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {Panel, Glyphicon} from 'react-bootstrap';

import Bookmark from './bookmark.js';

class BookmarkPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleSelect() {
    this.setState({
      open: !this.state.open
    });
  }

  renderTitle() {
    return <Row>
      <Col xs={12} className="h3" componentClass="h2">
        <Col xs={10} componentClass="span">
          {this.props.data.title}
        </Col>
        <Col xs={2} componentClass="span" className="text-right">
          <Glyphicon glyph="plus"/>
        </Col>
      </Col>
    </Row>;
  }

  render() {
    return <Panel header={this.renderTitle()} bsStyle="primary" collapsible expanded={this.state.open}
                  onSelect={() => this.handleSelect()}>
      <Bookmark data={this.props.data}/>
    </Panel>;
  }
}
// TODO: proptypes will change after validation is added
BookmarkPanel.propTypes = {
  data: React.PropTypes.shape({
    _id: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string,
    author: React.PropTypes.string,
    dateWritten: React.PropTypes.string,
    tagIds: React.PropTypes.arrayOf(React.PropTypes.string)
  }).isRequired
};

export default BookmarkPanel;
