import React from 'react'; // jshint ignore:line
import CategoryPicker from 'misago/components/threads/category-picker'; // jshint ignore:line

export default class extends React.Component {
  getCategoryPicker() {
    if (this.props.subcategories.length) {
      /* jshint ignore:start */
      return <div className="toolbar-left">
        <CategoryPicker choices={this.props.subcategories}
                        categories={this.props.categories}
                        list={this.props.list} />
      </div>;
      /* jshint ignore:end */
    } else {
      return null;
    }
  }

  getModerationButton() {
    if (this.props.user.id && this.props.moderation.allow) {
      /* jshint ignore:start */
      return <div class="dropdown toolbar-right">
        <button type="button"
                className="btn btn-default"
                disabled={!this.props.isLoaded || !this.props.selection.length || !this.props.threads.length}>
          <span className="material-icon">
            settings
          </span>
          {gettext("Moderation")}
        </button>
      </div>;
      /* jshint ignore:end */
    } else {
      return null;
    }
  }

  render() {
    /* jshint ignore:start */
    return <div className="toolbar with-js">
      {this.getCategoryPicker()}
      <p className="toolbar-left hidden-xs hidden-sm">
        {this.props.children}
      </p>
      {this.getModerationButton()}
    </div>;
    /* jshint ignore:end */
  }
}