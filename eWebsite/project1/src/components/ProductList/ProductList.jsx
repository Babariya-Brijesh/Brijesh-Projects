import React from 'react'
import { useFilterContext } from "../../context/filter_context";
import Gridview from '../Gridview';
import Listview from '../Listview';

export default function ProductList() {
    const { state } = useFilterContext();
if( state.grid_view === true){
    return <Gridview products={state.filter_products}/>
} 
if( state.grid_view === false){
    return <Listview products={state.filter_products}/>
}
}
