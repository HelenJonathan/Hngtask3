import React from "react";
import "../Styles/StylesHomePage.css";
// import { useForm } from "react-hook-form";
import Headerimage from "../Images/headerimage.png";
import Token from "../Images/metatoken.png";
import Meta from "../Images/metamask.png";
import Opensea from "../Images/opensea.png";
import Frame1 from "../Images/grid-frame1.png";
import Frame2 from "../Images/grid-frame2.png";
import Frame3 from "../Images/grid-frame3.png";
import Frame4 from "../Images/grid-frame4.png";
import Frame5 from "../Images/grid-frame5.png";
import Frame6 from "../Images/grid-frame6.png";
import Frame7 from "../Images/grid-frame7.png";
import Frame8 from "../Images/grid-frame-new-row1.png";
import Star from "../Images/star-frame.png";
import Threeimages from "../Images/threeimage.png";


const Home = () => {

    return(
        <div className="body-container">
            <header className="header-section">
                <div> 
                    <h1 className="h1-header">Rent a <span className="color-specified">Place</span> away from <span className="color-specified">Home</span> in the <span className="color-specified">Metaverse</span> </h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <div className="search"> 
                        <input type="text" placeholder="Search for location" />
                        <button>Search</button>
                    </div>             
                </div>
                <div>
                    <img src={Headerimage} alt="headerimage" className="header-image" />
                </div>
            </header>
            <div className="token-meta">
                <div className="token-section">
                    <img src={Token} alt="mbtoken" />
                    <p> MBToken</p>
                </div>
                <div className="token-section">
                    <img src={Meta} alt="meatamask" />
                    <p> METAMASK</p>
                </div>
                <div className="token-section">
                    <img src={Opensea} alt="opensea" />
                    <p> OpenSea </p>
                </div>
            </div>
            <div>
                <h1>Inspiration for your next adventure</h1>
                <div className="grid-template">
                    <div className="frame-section">
                        <img src={Frame1} alt="frame1" className="frame-images" />
                        <div className="below-image">
                            <div className="desert">
                                <p>Desert king</p>
                                <p>2345km away</p>
                                <img src={Star} alt="four-star" classNmae="star" />
                            </div>
                            <div className="available">
                                <p className="bold-text">1MBT per night</p>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                    </div>

                    <div className="frame-section">
                        <img src={Frame2} alt="frame2" className="frame-images" />
                        <div className="below-image">
                            <div className="desert">
                                <p>Desert king</p>
                                <p>2345km away</p>
                                <img src={Star} alt="four-star" classNmae="star" />
                            </div>
                            <div className="available">
                                <p className="bold-text">1MBT per night</p>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                    </div>

                    <div className="frame-section">
                        <img src={Frame3} alt="frame1" className="frame-images" />
                        <div className="below-image">
                            <div className="desert">
                                <p>Desert king</p>
                                <p>2345km away</p>
                                <img src={Star} alt="four-star" classNmae="star" />
                            </div>
                            <div className="available">
                                <p className="bold-text">1MBT per night</p>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                    </div>

                    <div className="frame-section">
                        <img src={Frame4} alt="frame1" className="frame-images" />
                        <div className="below-image">
                            <div className="desert">
                                <p>Desert king</p>
                                <p>2345km away</p>
                                <img src={Star} alt="four-star" classNmae="star" />
                            </div>
                            <div className="available">
                                <p className="bold-text">1MBT per night</p>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                    </div>

                    <div className="frame-section">
                        <img src={Frame5} alt="frame1" className="frame-images" />
                        <div className="below-image">
                            <div className="desert">
                                <p>Desert king</p>
                                <p>2345km away</p>
                                <img src={Star} alt="four-star" classNmae="star" />
                            </div>
                            <div className="available">
                                <p className="bold-text">1MBT per night</p>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                    </div>

                    <div className="frame-section">
                        <img src={Frame6} alt="frame1" className="frame-images" />
                        <div className="below-image">
                            <div className="desert">
                                <p>Desert king</p>
                                <p>2345km away</p>
                                <img src={Star} alt="four-star" classNmae="star" />
                            </div>
                            <div className="available">
                                <p className="bold-text">1MBT per night</p>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                    </div>

                    <div className="frame-section">
                        <img src={Frame7} alt="frame1" className="frame-images" />
                        <div className="below-image">
                            <div className="desert">
                                <p>Desert king</p>
                                <p>2345km away</p>
                                <img src={Star} alt="four-star" classNmae="star" />
                            </div>
                            <div className="available">
                                <p className="bold-text">1MBT per night</p>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                    </div>

                    <div className="frame-section">
                        <img src={Frame8} alt="frame1" className="frame-images" />
                        <div className="below-image">
                            <div className="desert">
                                <p>Desert king</p>
                                <p>2345km away</p>
                                <img src={Star} alt="four-star" classNmae="star" />
                            </div>
                            <div className="available">
                                <p className="bold-text">1MBT per night</p>
                                <p>available for 2weeks stay</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="threeimage-section">
                <div>
                    <h1>Metabnb NFTs</h1>
                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button>Learn more</button>
                </div>
                <div>
                    <img src={Threeimages} alt="threeimage" />
                </div>
            </div>
        </div>
    )
}

export default Home;