import React from 'react';
import './ImgAlign.css'
import img1 from '../../Images/img1.png';
import img2 from '../../Images/img2.png';
import img3 from '../../Images/img3.png';
import featureImg from '../../Images/feathureBg.png'
import img4 from '../../Images/img4.png';
import img5 from '../../Images/img5.png';
import img7 from '../../Images/img7.png';
import img8 from '../../Images/img8.png';
import img9 from '../../Images/img9.png';
import img10 from '../../Images/img10.png';
import img11 from '../../Images/img11.png';
import img12 from '../../Images/img12.png';
import img13 from '../../Images/img13.png';
import img14 from '../../Images/img14.png';
import img15 from '../../Images/img16.png';
import alex from '../../Images/alex.png';
import jack from '../../Images/jack.png';
import lava from '../../Images/lava.png';
import lee from '../../Images/lee.png';
import doe from '../../Images/doe.png';


const ImgAlign = () => {
    return (
        <div className="d-flex  imgComponentMove">
            <div className="">
                <img id="imgAlignMove" className="img-fluid" src={img1} alt="img1" />
                <img id="imgAlignMove" className="img-fluid" src={img3} alt="img4" />
                <img id="imgAlignMove" className="img-fluid" src={img7} alt="img7" />
                <img id="imgAlignMove" className="img-fluid" src={img10} alt="img10" />
                <img id="imgAlignMove" className="img-fluid" src={img13} alt="img13" />
            </div>
            <div className="marginLeftMiddleImg">
                <img id="imgAlignMove" className="img-fluid" src={img2} alt="img2" />
                <img id="imgAlignMove" className="img-fluid" src={img4} alt="img4" />
                <img id="imgAlignMove" className="img-fluid" src={img8} alt="img8" />
                <img id="imgAlignMove" className="img-fluid" src={img11} alt="img11" />
                <img id="imgAlignMove" className="img-fluid" src={img14} alt="img14" />
            </div>
            <div className="marginLeftLastImg">
                <div className="textOverImg">
                    <img id="imgAlignMove" src={featureImg} alt="featureImg" />
                    <div className="topLeft">
                        <h2>Featured Artists</h2>
                        <div className="d-flex marginBottom">
                            <img className="imgReSi" src={alex} alt="alx" />
                            <p className="pMarginLeft"> <span>Alex</span> <br /> 5.03M Views </p>
                        </div>
                        <div className="d-flex marginBottom">
                            <img className="imgReSi" src={jack} alt="jack" />
                            <p className="pMarginLeft"> <span>Jack</span> <br /> 4.85M Views </p>
                        </div>
                        <div className="d-flex marginBottom">
                            <img className="imgReSi" src={lava} alt="alx" />
                            <p className="pMarginLeft"> <span>Roku Lava</span> <br /> 4.81M Views </p>
                        </div>
                        <div className="d-flex marginBottom">
                            <img className="imgReSi" src={lee} alt="alx" />
                            <p className="pMarginLeft"> <span>Gringo Lee</span> <br /> 4.14M Views </p>
                        </div>
                        <div className="d-flex marginBottom">
                            <img className="imgReSi" src={doe} alt="alx" />
                            <p className="pMarginLeft"> <span>John Doe</span> <br /> 3.83M Views </p>
                        </div>
                    </div>
                </div>
                <img id="imgAlignMove" className="img-fluid" src={img5} alt="img5" />
                <img id="imgAlignMove" className="img-fluid" src={img9} alt="img9"/>
                <img id="imgAlignMove" className="img-fluid" src={img12} alt="img12" />
                <img id="imgAlignMove" className="img-fluid" src={img15} alt="img15" />
            </div>
        </div>
    )
}

export default ImgAlign


