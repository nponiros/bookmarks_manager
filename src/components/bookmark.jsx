import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {Glyphicon, Panel} from 'react-bootstrap';

import BookmarkForm from './bookmark_form.js';
import {remove, update} from '../actions/bookmark_actions.js';

// TODO data should be state
class Bookmark extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      editMode: false
    };
  }

  handleSelect() {
    this.setState({
      open: !this.state.open
    });
  }

  handleDelete(event) {
    event.preventDefault();
    event.stopPropagation();
    remove(this.props.data._id);
  }

  handleEdit() {
    this.setState({
      editMode: true
    });
  }

  handleSubmit(bookmark) {
    this.setState({
      open: false,
      editMode: false
    });
    bookmark._id = this.props.data._id;
    update(bookmark);
  }

  renderTitle() {
    return <Row>
      <Col xs={12} className="h3" componentClass="h2">
        <Col xs={8} sm={10} componentClass="span">
          {this.props.data.title}
        </Col>
        <Col xs={4} sm={2}>
          <Col xs={6} className="align-right">
            <Glyphicon onClick={() => this.handleEdit()} glyph="edit"/>
          </Col>
          <Col xs={6} className="align-right">
            <Glyphicon onClick={(event) => this.handleDelete(event)} glyph="trash"/>
          </Col>
        </Col>
      </Col>
    </Row>;
  }

  renderBody() {
    if (this.state.editMode) {
      return <BookmarkForm handleSubmit={(data) => this.handleSubmit(data)} defaultData={this.props.data}/>;
    } else {
      return <Row>
        <Col sm={6} smPush={6}>
          <p><strong>Description</strong> {this.props.data.description}</p>
        </Col>
        <Col sm={6} smPull={6}>
          <p><strong>Url</strong> {this.props.data.url}</p>

          <p><strong>Author</strong> {this.props.data.author}</p>

          <p><strong>Date</strong> {this.props.data.dateWritten}</p>
        </Col>
      </Row>;
    }
  }

  render() {
    return <Panel header={this.renderTitle()} bsStyle="primary" collapsible expanded={this.state.open}
                  onSelect={() => this.handleSelect()}>
      {this.renderBody()}
    </Panel>;
  }
}

export default Bookmark;
