import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {Panel, Glyphicon} from 'react-bootstrap';

import BookmarkForm from './bookmark_form.js';
import {create} from '../actions/bookmark_actions.js';

const emptyData = {
  title: '',
  author: '',
  dateWritten: '',
  url: '',
  description: '',
  tagIds: []
};

class AddNewBookmark extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      data: emptyData
    };
  }

  handleSelect() {
    this.setState({
      open: !this.state.open
    });
  }

  handleSubmit(bookmark) {
    create(bookmark);
    this.setState({
      open: false,
      data: emptyData
    });
  }

  renderTitle() {
    return <Row>
      <Col xs={12} className="h3" componentClass="h2">
        <Col xs={10} componentClass="span">
          Add new bookmark
        </Col>
        <Col xs={2} componentClass="span" className="text-right">
          <Glyphicon glyph="plus"/>
        </Col>
      </Col>
    </Row>;
  }

  render() {
    if (this.state.open) {
      return <Panel header={this.renderTitle()} bsStyle="primary" collapsible expanded={this.state.open}
                  onSelect={() => this.handleSelect()}>
      <BookmarkForm defaultData={this.state.data} handleSubmit={(data) => this.handleSubmit(data)}/>
      </Panel>;
    } else {
      return <Panel header={this.renderTitle()} bsStyle="primary" collapsible expanded={this.state.open}
                    onSelect={() => this.handleSelect()}></Panel>;
    }
  }
}

export default AddNewBookmark;
