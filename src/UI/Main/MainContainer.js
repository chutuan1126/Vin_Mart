import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Slide from '../Slide/Slide.component';
import CardSlide from '../MainContainer/CardSlide.component';
import Footer from '../Footer/Footer';

//data
import { Data } from '../../MockData/MockData';

function MainContainer() {
    const [DataA, setDataA] = useState([]);
    const [DataB, setDataB] = useState([]);
    const [DataC, setDataC] = useState([]);
    const [DataD, setDataD] = useState([]);
    const [DataE, setDataE] = useState([]);
    const [DataF, setDataF] = useState([]);
    const [DataG, setDataG] = useState([]);
    const [DataH, setDataH] = useState([]);
    const [DataAll, setDataAll] = useState([]);

    useEffect(() => {
        setDataA(Data[0].Thit_Ca_Trung);
        setDataB(Data[0].Rau_Cu_Qua);
        setDataC(Data[0].Gia_Vi);
        setDataD(Data[0].Thuc_Pham_Kho);
        setDataE(Data[0].Thuc_Uong);
        setDataF(Data[0].Sua);
        setDataG(Data[0].Hoa_pham);
        setDataH(Data[0].Cham_Soc_Ca_Nhan);
        setDataAll(Data[0].Thit_Ca_Trung.concat(Data[0].Gia_Vi, Data[0].Thuc_Pham_Kho, Data[0].Thuc_Uong, Data[0].Sua, Data[0].Hoa_pham, Data[0].Rau_Cu_Qua, Data[0].Cham_Soc_Ca_Nhan));
    }, []);

    return (
        <div>
            <Header />
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
            <Footer />
        </div>
    )
}

export default MainContainer;
