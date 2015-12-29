import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {Glyphicon, Panel} from 'react-bootstrap';

import AddNewBookmark from './bookmarks/add_new_bookmark.js';
import Search from './search.js';

import {sync} from '../actions/sync_actions.js';

class Menu extends React.Component {
  constructor() {
    super();
    this.searchOpen = false;
    this.addOpen = false;
    this.state = {
      open: this.searchOpen || this.addOpen,
      syncing: false
    };
  }

  handleSearchToggle() {
    this.searchOpen = !this.searchOpen;
    this.addOpen = false;
    this.setState({
      open: this.searchOpen || this.addOpen
    });
  }

  handleAddToggle() {
    this.addOpen = !this.addOpen;
    this.searchOpen = false;
    this.setState({
      open: this.searchOpen || this.addOpen
    });
  }

  handleSync() {
    this.setState({
      syncing: true
    });
    sync().then(() => {
      this.setState({
        syncing: false
      });
    }).catch((err) => {
      console.log('error', err);
      this.setState({
        syncing: false
      });
    });
  }

  renderTitle() {
    const classes = this.state.syncing ? 'align-right syncing' : 'align-right';
    return <Row>
      <Col xs={12} className="h3" componentClass="h2">
        <Col xs={6} sm={6}>
          <Col xs={6} sm={2} className="align-right">
            <Glyphicon onClick={() => this.handleSearchToggle()} glyph="search"/>
          </Col>
          <Col xs={6} sm={2} className="align-right">
            <Glyphicon onClick={() => this.handleAddToggle()} glyph="plus"/>
          </Col>
          <Col xs={6} sm={2} className={classes}>
            <Glyphicon onClick={() => this.handleSync()} glyph="refresh"/>
          </Col>
        </Col>
      </Col>
    </Row>;
  }

  renderBody() {
    if (this.addOpen) {
      return <AddNewBookmark/>;
    } else {
      return <Search/>;
    }
  }

  render() {
    if (this.state.open) {
      return <Panel header={this.renderTitle()} bsStyle="primary" collapsible expanded={this.state.open}>
        {this.renderBody()}
      </Panel>;
    } else {
      return <Panel header={this.renderTitle()} bsStyle="primary" collapsible expanded={this.state.open}></Panel>;
    }
  }
}
Menu.propTypes = {};

export default Menu;
