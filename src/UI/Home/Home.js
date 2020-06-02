import React, { useState, useEffect } from 'react';

//components
import Slide from '../Slide/Slide.component';
import CardSlide from '../MainContainer/CardSlide.component';

//react-redux, action
import { useSelector, useDispatch } from 'react-redux';
import { getDataHome, refreshData } from '../../Redux/Product/Product.action';

function Home() {
    const cates = ["Meal", "Vegetable", "Spice", "DryFood", "Drinks", "Milk", "chemical", "Care"];
    const title = ["Thịt - Cá - Trứng", "Rau - Củ - Quả", "Gia vị", "Thực phẩm khô", "Đồ uống - Giải khát", "Sữa", "Hóa phẩm", "Chăm sóc cá nhân"];

    const dispatch = useDispatch();
    const [dataHome, setDataHome] = useState(null);

    const { ProductReducer } = useSelector(state => ({
        ProductReducer: state.ProductReducer
    }));

    useEffect(() => {
        if (window.onload) {
            window.scrollTo(0, 0);
        }
    });

    useEffect(() => {
        if (!ProductReducer) return;
        if (!ProductReducer.Products) return;

        setDataHome(ProductReducer.Products);
    }, [ProductReducer]);

    useEffect(() => {
        dispatch(getDataHome());

        return () => dispatch(refreshData());
    }, [dispatch]);

    return (
        <div id='main-container'>
            <Slide />
            {
                dataHome && cates
                    .map((item, index) => <CardSlide
                        key={index}
                        type={item}
                        title={title[index]}
                        data={dataHome && dataHome.filter(i => i.proid === item)}
                    />)
            }
            {dataHome && <CardSlide data={dataHome} type="all" title="Các sản phẩm khác" allProduct />}
        </div>
    )
}

export default React.memo(Home);