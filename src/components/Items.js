import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ItemDetails from './ItemDetails';

const ITEMS_LIST = [
    {
        vendor: 'Marshalls',
        description: 'key chain',
        unitBuyPrice: 5.90
    }
]

class Items extends Component {
    renderItemsListHeaders = () => (
        <div>
            <div>Vendor</div>
            <div>Location</div>
            <div>Purchase date</div>
            <div>Lot #</div>
            <div>Invoice #</div>
            <div>Invoice file</div>
            <div>Receipt #</div>
            <div>Receipt file</div>
            <div>Paid by</div>
            <div>Vendor SKU / UPC</div>
            <div>Item SKU / UPC</div>
            <div>Vendor description</div>
            <div>Qty</div>
            <div>Unit price</div>
            <div>Total Price</div>
            <div>History</div>
        </div>
        
    )

    renderItemRow = item => (
        <div>
            <div>{item.vendor}</div>
            <div>{item.description}</div>
            <div>{item.unitBuyPrice}</div>
            <Link to="/items/a">Item a</Link>
        </div>
    )

    renderItemsList = () => (
        <div>
            {this.renderItemsListHeaders()}
            {ITEMS_LIST.map(item => this.renderItemRow(item))}
        </div>
    )

    render() {
        const itemId = this.props.match.params.id;
        
        return (
            <React.Fragment>
                <header>
                    <h1>Items</h1>
                    <Link to="/additem">Add Item</Link>
                </header>
                <div>
                    {itemId && <ItemDetails itemId={itemId}/>}
                    {!itemId && this.renderItemsList()}
                </div>
            </React.Fragment>

        )
    }
}

export default Items;