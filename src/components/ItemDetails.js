import React, { Component } from 'react';

class ItemDetails extends Component {
  render() {
    return (
        <p>Item {this.props.itemId}</p>
    );
  }
}

export default ItemDetails;
