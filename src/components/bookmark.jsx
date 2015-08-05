import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';

class Bookmark extends React.Component {
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
    return <Panel header={this.renderTitle()} eventKey={this.props.eventKey}
                  expanded={this.props.expanded} onSelect={this.props.onSelect} collapsible={this.props.collapsible}
                  bsStyle="primary">
      <Row>
        <Col sm={6} smPush={6}>
          <p><strong>Description</strong> {this.props.data.description}</p>
        </Col>
        <Col sm={6} smPull={6}>
          <p><strong>Url</strong> {this.props.data.url}</p>

          <p><strong>Author</strong> {this.props.data.author}</p>

          <p><strong>Date</strong> {this.props.data.date}</p>
        </Col>
      </Row>
    </Panel>;
  }
}

export default Bookmark;
