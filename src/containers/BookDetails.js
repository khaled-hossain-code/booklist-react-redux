import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
  render() {
    if(!this.props.book){
      return <div>Select a Book</div>
    }
    return (
      <div>
        <h3>
          {this.props.book.title}
        </h3>
        <h4>
          Pages: {this.props.book.page}
        </h4>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.selectedBook
  }
}

export default connect(mapStateToProps)(BookDetails);