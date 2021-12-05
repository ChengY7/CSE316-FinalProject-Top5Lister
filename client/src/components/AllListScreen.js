import React, { useContext, useEffect } from 'react'
import { GlobalStoreContext } from '../store'
import ListCard from './ListCard.js'
import List from '@mui/material/List';
import Toolbar from './Toolbar'

const AllListScreen = () => {
    const { store } = useContext(GlobalStoreContext)

    useEffect(() => {
        store.loadIdNamePairs();
    }, []);

    return (
        <div>
            <Toolbar />
            <div>All</div>
        </div>
    )

}
export default AllListScreen;