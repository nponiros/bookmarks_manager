import React from 'react';

import {Col, Grid, Row} from 'react-bootstrap';

import AddNewBookmark from './add_new_bookmark.js';
import BookmarksList from './bookmarks_list.js';

class BmApp extends React.Component {
  render() {
    return <Grid fluid>
      <Row>
        <Col md={8} mdOffset={2} sm={10} smOffset={1}>
          <AddNewBookmark/>
          <BookmarksList/>
        </Col>
      </Row>
    </Grid>;
  }
}
BmApp.propTypes = {};

export default BmApp;
