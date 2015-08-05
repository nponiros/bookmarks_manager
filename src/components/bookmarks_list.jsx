import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {PanelGroup} from 'react-bootstrap';

import Bookmark from './bookmark.js';

class BookmarksList extends React.Component {
  render() {
    const bookmarks = this.props.data.map((bookmark, index) => {
      return <Bookmark data={bookmark} key={bookmark._id} eventKey={index + 1}/>;
    });
    return <Row>
      <Col md={8} mdOffset={2} sm={10} smOffset={1}>
        <PanelGroup accordion>{bookmarks}</PanelGroup>
      </Col>
    </Row>;
  }
}

export default BookmarksList;
