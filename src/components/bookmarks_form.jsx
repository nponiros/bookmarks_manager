import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {Button, Glyphicon, Input, Panel} from 'react-bootstrap';

import {save} from '../db/db_wrapper.js';

const title = <div>
  <Row>
    <Col xs={12} className="h3" componentClass="h2">
      <Col xs={10} componentClass="span">
        Add new Bookmark
      </Col>
      <Col xs={2} className="text-right" componentClass="span">
        <Glyphicon glyph="plus"></Glyphicon>
      </Col>
    </Col>
  </Row>
</div>;

class BookmarksForm extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const bookmark = {
      title: this.refs.title.getValue(),
      url: this.refs.url.getValue(),
      author: this.refs.author.getValue(),
      description: this.refs.description.getValue(),
      dateWritten: this.refs.dateWritten.getValue()
    };
    save(bookmark).then((id) => {
      bookmark._id = id;
      console.log('hrere');
      this.props.onBookmarkSubmit(bookmark);
      this.setState({
        open: false
      });
      // TODO reset form
    }).catch((e) => {
      console.log('error', e);
    });
    return;
  }

  handleSelect() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return <Row>
      <Col md={8} mdOffset={2} sm={10} smOffset={1}>
        <Panel header={this.props.title} bsStyle="primary" collapsible expanded={this.state.open}
               onSelect={() => this.handleSelect()}>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <Input type="text" label="Title" ref="title"/>
            <Input type="textarea" label="Description" ref="description"/>
            <Input type="url" label="Url" ref="url"/>
            <Input type="text" label="Author" ref="author"/>
            <Input type="date" label="Date written" ref="dateWritten"/>
            <Button type="submit" bsStyle="primary" block>Add</Button>
          </form>
        </Panel>
      </Col>
    </Row>;
  }
}
BookmarksForm.propTypes = {title: React.PropTypes.element};
BookmarksForm.defaultProps = {title};

export default BookmarksForm;
