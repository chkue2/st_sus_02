import React, {useState} from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
import './List.css';
import data from '../data.json';

const columns = [
    {field: 'date', title: '날짜'},
    {field: 'productCnt', title: '상품수량'},
    {field: 'addCnt', title: '추가상품'},
    {field: 'changeCnt', title: '변경상품'},
];

function List() {
    const [states, setStates] = useState({
        skip: 0,
        take: 5,
    });
    const {skip, take} = states;

    const pageChange = (event) => {
       setStates({
           ...states,
           skip: event.page.skip,
           take: event.page.take
       })
    }
    return(
        <Grid style={{width:'500px', height: '265px'}} data={data.slice(skip, take+skip)} total={data.length} pageable={true} skip={skip} take={take} onPageChange={pageChange}> 
            {
                columns.map((column , index) => {
                    return <Column field={column.field} title={column.title} key={index} className="customColumn"/>
                })
            }
        </Grid>
    )
}

export default List;