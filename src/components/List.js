import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
import './List.css';

const columns = [
    {field: 'date', title: '날짜'},
    {field: 'productCnt', title: '상품수량'},
    {field: 'addCnt', title: '추가상품'},
    {field: 'changeCnt', title: '변경상품'},
];

function List(data) {
    return(
        <Grid style={{width:'500px', height: '220px'}} data={{...data}}> 
            {
                columns.map((column , index) => {
                    return <Column field={column.field} title={column.title} key={index} className="customColumn"/>
                })
            }
        </Grid>
    )
}

export default List;