import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {Glyphicon, Panel} from 'react-bootstrap';

import AddNewBookmark from './bookmarks/add_new_bookmark.js';
import Search from './search.js';

import {sync} from '../actions/sync_actions.js';
import {showError} from '../actions/error_actions.js';

import connectionStatusStore from '../stores/connection_status_store.js';
import {CHANGE} from '../constants/connection_status_constants.js';

class Menu extends React.Component {
  constructor() {
    super();
    this.searchOpen = false;
    this.addOpen = false;
    this.state = {
      open: this.searchOpen || this.addOpen,
      syncing: false,
      isOnline: connectionStatusStore.getInitialState().isOnline
    };

    this.changeListener = (data) => {
      this.onChange(data);
    };
  }

  componentDidMount() {
    connectionStatusStore.addListener(CHANGE, this.changeListener);
  }

  componentWillUnmount() {
    connectionStatusStore.removeListener(CHANGE, this.changeListener);
  }

  onChange(data) {
    this.setState(data);
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
      this.setState({
        syncing: false
      });
      showError(err);
    });
  }

  renderTitle() {
    const classes = this.state.syncing ? 'syncing' : '';
    const glyph = this.state.isOnline ? 'signal' : 'plane';
    return <Row>
      <Col xs={12} sm={12} className="h3" componentClass="h2">
        <Col xs={3} sm={3}>
          <Glyphicon onClick={() => this.handleAddToggle()} glyph="plus"/>
        </Col>
        <Col xs={3} sm={3}>
          <Glyphicon onClick={() => this.handleSearchToggle()} glyph="search"/>
        </Col>
        <Col xs={3} sm={3} className={classes}>
          <Glyphicon onClick={() => this.handleSync()} glyph="refresh"/>
        </Col>
        <Col xs={3} sm={3}>
          <Glyphicon glyph={glyph}/>
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
