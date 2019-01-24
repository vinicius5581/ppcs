import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ItemDetails from './ItemDetails';
import './Items.css';

const ITEMS_LIST = [
    {
        vendor: 'Marshalls',
        description: 'key chain',
        unitBuyPrice: 5.90
    }
]

class Items extends Component {
    renderItemsListHeaders = () => (
        <div className='listHeader'>
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
        <div className='listRow'>
            <div>{item.vendor}</div>
            <div>{item.description}</div>
            <div>{item.unitBuyPrice}</div>
            <Link to="/items/a">Item a</Link>
        </div>
    )

    renderItemsList = () => (
        <div className='list'>
            {this.renderItemsListHeaders()}
            {ITEMS_LIST.map(item => this.renderItemRow(item))}
        </div>
    )

    render() {
        const itemId = this.props.match.params.id;
        
        return (
            <div className='items'>
                <header>
                    <h1>Items</h1>
                    <nav>
                        <Link to="/additem">Add Item</Link>
                        <Link to="/addinvoice">Add Invoice</Link>
                        <Link to="/addreceipt">Add Receipt</Link>
                    </nav>                   
                </header>
                <main>
                    {itemId && <ItemDetails itemId={itemId}/>}
                    {!itemId && this.renderItemsList()}
                </main>
            </div>

        )
    }
}

export default Items;