import React, { useEffect } from 'react';

//components
import Slide from '../Slide/Slide.component';
import CardSlide from '../MainContainer/CardSlide.component';

//react-redux, action
import { useDispatch } from 'react-redux';
import { refreshData } from '../../Redux/Product/Product.action';

function Home({ categorys }) {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(refreshData());
    }, [dispatch]);

    return (
        <div id='main-container'>
            <Slide />
            {categorys?.map((item, index) => <CardSlide key={index} cate={item} all={item.id === 'all' ? true : false} />)}
        </div>
    )
}

export default React.memo(Home);