import React, { Fragment, useState, useEffect } from 'react';

//components
import Slide from '../Slide/Slide.component';
import CardSlide from '../MainContainer/CardSlide.component';

//react-redux, action
import { useSelector, useDispatch } from 'react-redux';
import { getDataHome, refreshData } from '../../Redux/Product/Product.action';

function Home() {
    const dispatch = useDispatch();

    const [DataA, setDataA] = useState([]);
    const [DataB, setDataB] = useState([]);
    const [DataC, setDataC] = useState([]);
    const [DataD, setDataD] = useState([]);
    const [DataE, setDataE] = useState([]);
    const [DataF, setDataF] = useState([]);
    const [DataG, setDataG] = useState([]);
    const [DataH, setDataH] = useState([]);
    const [DataAll, setDataAll] = useState([]);

    const { ProductReducer } = useSelector(state => ({
        ProductReducer: state.ProductReducer
    }));

    useEffect(() => {
        dispatch(getDataHome({ page: 1, pageNumber: 5 }));
        
        return () => dispatch(refreshData());
    },[dispatch]);

    useEffect(() => {
        if(!ProductReducer) return;
        if(!ProductReducer.Products) return;

        setDataAll(ProductReducer.Products);
        setDataA(ProductReducer.Products.filter(item => item.proid === "Meal"));
        setDataB(ProductReducer.Products.filter(item => item.proid === "Vegetable"));
        setDataC(ProductReducer.Products.filter(item => item.proid === "Spice"));
        setDataD(ProductReducer.Products.filter(item => item.proid === "DryFood"));
        setDataE(ProductReducer.Products.filter(item => item.proid === "DryFood"));
        setDataF(ProductReducer.Products.filter(item => item.proid === "Milk"));
        setDataG(ProductReducer.Products.filter(item => item.proid === "chemical"));
        setDataH(ProductReducer.Products.filter(item => item.proid === "Care"));
    }, [ProductReducer]);

    return (
        <Fragment>
            <Slide />
            <CardSlide data={DataA} title="Thịt - Cá - Trứng" />
            <CardSlide data={DataB} title="Rau - Củ - Quả" />
            <CardSlide data={DataC} title="Gia vị" />
            <CardSlide data={DataD} title="Thực phẩm khô" />
            <CardSlide data={DataE} title="Đồ uống - Giải khát" />
            <CardSlide data={DataF} title="Sữa" />
            <CardSlide data={DataG} title="Hóa phẩm" />
            <CardSlide data={DataH} title="Chăm sóc cá nhân" />
            <CardSlide data={DataAll} allProduct={true} title="Các sản phẩm khác" />
        </Fragment>
    )
}

export default Home;
