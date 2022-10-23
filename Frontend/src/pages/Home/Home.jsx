import React, { useState, useEffect } from "react";
import "./Home.scss";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CardHome from "../../components/CardHome/CardHome";
import product from "./dataShoes";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(product);
    }, []);
    
    return (
        <div>
            <Navbar />
            <div className="container_home">
                <div className="container_home_top">
                    <div className="container_home_top_content">
                        <p>
                            Welcome to <span>SHOESAPP</span>
                        </p>
                        <h2>
                            We are a team of talented designers who create the best clothing
                            products in Vietnam
                        </h2>
                        <button>
                            GET STARTED
                        </button>
                    </div>
                </div>
                <div className="container_home_main">
                    <div className="container_home_main_left">
                        <h1>THƯƠNG HIỆU</h1>
                    </div>
                    <div className="container_home_main_rigth">
                        <div className="container_home_main_right_top">
                            <div className="container_home_main_right_top1">
                                <h1>GIÀY DÉP NAM</h1>
                            </div>
                            <div className="container_home_main_right_top2">
                                <select
                                    name=""
                                    id=""
                                >
                                    <option value="all">All</option>
                                    <option value="new">New</option>
                                    <option value="sale">Sale</option>
                                    <option value="tang">Giá Tăng dần</option>
                                    <option value="giam">Giá giảm dần</option>
                                </select>
                            </div>
                        </div>
                        <div className="container_home_product_card">
                            {data.map((item) => (
                                <CardHome product={item} />
                            ))};
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;