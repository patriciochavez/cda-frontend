import React, { Component } from 'react';
import axios from 'axios';

export default class ListProducts extends Component {

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/products');
        console.log(res);
    }
    render() {
        return (
            <div>
                LIST PRODUCTS
            </div>
        )
    }
}
