import React from 'react';

import TagsStore from '../../stores/tags_store.js';
import EditTag from './edit_tag.js';

import {CHANGE} from '../../constants/tags_constants.js';

class EditTagsList extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      availableTags: []
    };
  }

  componentDidMount() {
    TagsStore.addListener(CHANGE, (data) => this.onChange(data));
  }

  componentWillUnmount() {
    TagsStore.removeListener(CHANGE, this.onChange);
  }

  onChange(availableTags) {
    this.setState({availableTags});
  }

  onTagSelect(id, isSelected) {
    // TODO: need to let the tag know it has a new bookmark (maybe on close)
    this.props.onTagSelectionChanged(id, isSelected);
  }

  renderTags() {
    const tags = this.state.availableTags.map((tag) => {
      const isTagSelected = Boolean(this.props.selectedTagIds.indexOf(tag._id) !== -1);

      return <li key={tag._id}>
        <EditTag id={tag._id} name={tag.name} initiallySelected={isTagSelected} onSelect={(id, isSelected) => this.onTagSelect(id, isSelected)}/>
      </li>;
    });
    return tags;
  }

  render() {
    return <ul className="list-inline">{this.renderTags()}</ul>;
  }
}
EditTagsList.propTypes = {
  onTagSelectionChanged: React.PropTypes.func.isRequired,
  selectedTagIds: React.PropTypes.array.isRequired
};

export default EditTagsList;
