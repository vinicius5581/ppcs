import React, { Component } from 'react';

class Items extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <h1>Items</h1>
                    <button>Add Item</button>
                </header>
                <div>
                    <p>List of items</p>
                </div>
            </React.Fragment>

        )
    }
}

export default Items;