import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {Glyphicon, Panel} from 'react-bootstrap';

import BookmarkForm from './bookmark_form.js';
import ViewTagsList from '../tags/view_tags_list.js';
import {remove, update} from '../../actions/bookmark_actions.js';
import {showError} from '../../actions/alert_actions.js';

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
    remove(this.props.data._id).catch((err) => {
      showError(err);
    });
  }

  handleEdit(event) {
    if (this.state.open) {
      event.preventDefault();
      event.stopPropagation();
    }
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
    update(bookmark).catch((err) => {
      showError(err);
    });
  }

  renderTitle() {
    return <Row>
      <Col xs={12} className="h3" componentClass="h2">
        <Col xs={8} sm={10} componentClass="span">
          {this.props.data.title}
        </Col>
        <Col xs={4} sm={2}>
          <Col xs={6} className="align-right">
            <Glyphicon onClick={(event) => this.handleEdit(event)} glyph="edit"/>
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
          <p><strong>Description:</strong> {this.props.data.description}</p>
        </Col>
        <Col sm={6} smPull={6}>
          <p><strong>URL:</strong> <a href={this.props.data.url}>{this.props.data.url}</a></p>

          <p><strong>Author:</strong> {this.props.data.author}</p>

          <p><strong>Date:</strong> {this.props.data.dateWritten}</p>
        </Col>
        <Col sm={12}>
          <ViewTagsList tagIds={this.props.data.tagIds}></ViewTagsList>
        </Col>
      </Row>;
    }
  }

  render() {
    if (this.state.open) {
      return <Panel header={this.renderTitle()} bsStyle="primary" collapsible expanded={this.state.open}
                    onSelect={() => this.handleSelect()}>
        {this.renderBody()}
      </Panel>;
    } else {
      return <Panel header={this.renderTitle()} bsStyle="primary" collapsible expanded={this.state.open}
                    onSelect={() => this.handleSelect()}></Panel>;
    }
  }
}
Bookmark.propTypes = {
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

export default Bookmark;
