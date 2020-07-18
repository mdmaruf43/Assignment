import React from 'react';
import './Banner.css';
import imgGroup from '../../Images/imgGroup.png';
import SelectBox from '../SelectBox/SelectBox';
import ImgAlign from '../ImgAlign/ImgAlign';

const Banner = () => {
    return (
        <div className="">
            <div className="positionChange">
                <div className="banngerBgImg">
                    <div >
                        <div>
                            Middle
                        </div> 
                    </div>
                </div>
                <div className="topCategories">
                    <div className="textClass">
                        <div className="marginMove">
                            <h1>Top categories</h1>
                            <div>
                                <img className="img-fluid imgSize" src={imgGroup} alt="imgGroup" />
                            </div>
                            <div className="d-flex justify-content-between marginTop">
                                <ul className="d-flex moveUl">
                                    <li className="">
                                        <a id="linkCustom" href="/">All</a>
                                    </li>
                                    <li className="">
                                        <a id="linkCustom" className="" href="/">Photos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="linkCustom" href="/">Videos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="linkCustom" href="/">Freebies</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="linkCustom" href="/">360</a>
                                    </li>
                                </ul>
                                <div className="dropdownUp">
                                    <SelectBox 
                                        width={182}
                                        name="name_id"
                                        items={[
                                            {value: 'Recommended', id: 1},
                                            {value: 'Most Recent', id: 2},
                                            {value: 'Most Viewed', id: 3},
                                            {value: 'Most Downloaded', id: 4},
                                            {value: 'Most Appreciated', id: 5},
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ImgAlign />
            </div>
        </div>
    )
}

export default Banner
