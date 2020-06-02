import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//components
import Card from '../MainContainer/Card.component';

const Bound = styled.div`
    display: grid;
    width: 100%;
    height: calc(100% - 48px);
    gap: 15px;
    padding: 15px;
    grid-template-columns: repeat(4, 1fr);
`

function GridProduct({ data }) {

    const [gridData, setGridData] = useState(null);

    useEffect(() => {
        data && setGridData(data);
    }, [data]);

    return (
        <Bound>
            {
                gridData && gridData
                    .filter((item, index) => index < 20)
                    .map((item, index) => <Card key={index} width="202px" item={item} />)
            }
        </Bound>
    )
}

export default React.memo(GridProduct);
