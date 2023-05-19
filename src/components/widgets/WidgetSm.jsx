import React from 'react'
import Erin from '../../assets/erin.jpg'
import { Visibility } from '@mui/icons-material';
import './WidgetSm.scss'

const WidgetSm = () => {
    return (
        <div className="widgets-sm">
            <span className="title">
                Members
                <ul className="list">
                    <li className="item">
                        <img src={Erin} alt="" className="image" />
                        <div className="user">
                            <span className="name">Erin Hannon</span>
                            <span className="job-title">Reception</span>
                        </div>
                        <button className="btn">
                            <Visibility className="icon" />
                        </button>
                    </li>
                    <li className="item">
                        <img src={Erin} alt="" className="image" />
                        <div className="user">
                            <span className="name">Erin Hannon</span>
                            <span className="job-title">Reception</span>
                        </div>
                        <button className="btn">
                            <Visibility className="icon" />
                        </button>
                    </li>
                    <li className="item">
                        <img src={Erin} alt="" className="image" />
                        <div className="user">
                            <span className="name">Erin Hannon</span>
                            <span className="job-title">Reception</span>
                        </div>
                        <button className="btn">
                            <Visibility className="icon" />
                        </button>
                    </li>
                    <li className="item">
                        <img src={Erin} alt="" className="image" />
                        <div className="user">
                            <span className="name">Erin Hannon</span>
                            <span className="job-title">Reception</span>
                        </div>
                        <button className="btn">
                            <Visibility className="icon" />
                        </button>
                    </li>
                    <li className="item">
                        <img src={Erin} alt="" className="image" />
                        <div className="user">
                            <span className="name">Erin Hannon</span>
                            <span className="job-title">Reception</span>
                        </div>
                        <button className="btn">
                            <Visibility className="icon" />
                        </button>
                    </li>
                </ul>
            </span>
        </div>
    )
}

export default WidgetSm