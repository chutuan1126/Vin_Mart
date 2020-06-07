import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//components
import CardAdmin from './CardAdmin/CardAdmin';

//react-redux, action
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProducts } from '../../Redux/Admin/Admin.action';

const Bound = styled.div`
    width: 100%;
    height: max-content;
    .admin_container {
        margin: 10px auto;
        display: grid;
        width: 1180px;
        height: max-content;
        grid-gap: 10px;
        padding: 15px;
        background-color: #fff;
        grid-template-columns: repeat(5, 1fr);
    }
`

function MainAdmin() {
    const dispatch = useDispatch();

    const [data, setData] = useState(null);

    const { AdminReducer } = useSelector(state => ({
        AdminReducer: state.AdminReducer
    }))

    useEffect(() => {
        if(!AdminReducer) return;
        if(!AdminReducer.AdminProducts) return;

        setData(AdminReducer.AdminProducts);
    }, [AdminReducer]);

    useEffect(() => {
        dispatch(getAdminProducts());
    }, [dispatch]);
    return (
        <Bound>
            <div className="admin_container">
                {
                    data && data
                    .map((item, index) => <CardAdmin key={index} item={item} />)
                }
            </div>
        </Bound>
    )
}

export default MainAdmin;
