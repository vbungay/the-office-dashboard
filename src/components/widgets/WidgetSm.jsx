import React from 'react'
import Dwight from '../../assets/dwight.jpg'
import Jim from '../../assets/jim.jpg'
import Stanley from '../../assets/stanley.jpg'
import Phy from '../../assets/phy.jpg'
import Andy from '../../assets/andy.jpg'
import { Visibility } from '@mui/icons-material';
import './WidgetSm.scss'

const WidgetSm = () => {
    return (
        <div className="widgets-sm">
            <span className="title">
                Top Salesmen
                <ul className="list">
                    <li className="item">
                        <div className="user-details">
                            <img src={Dwight} alt="" className="image" />
                            <div className="user">
                                <span className="name">Dwight Schrute</span>
                                <span className="job-title">Salesman</span>
                            </div>
                        </div>
                        <button className="btn">
                            <Visibility className="icon" />
                        </button>
                    </li>
                    <li className="item">
                        <div className="user-details">
                            <img src={Jim} alt="" className="image" />
                            <div className="user">
                                <span className="name">Jim Halpert</span>
                                <span className="job-title">Salesman</span>
                            </div>
                        </div>
                        <button className="btn">
                            <Visibility className="icon" />
                        </button>
                    </li>
                    <li className="item">
                        <div className="user-details">
                            <img src={Stanley} alt="" className="image" />
                            <div className="user">
                                <span className="name">Stanley Hudson</span>
                                <span className="job-title">Salesman</span>
                            </div>
                        </div>
                        <button className="btn">
                            <Visibility className="icon" />
                        </button>
                    </li>
                    <li className="item">
                        <div className="user-details">
                            <img src={Phy} alt="" className="image" />
                            <div className="user">
                                <span className="name">Phyllis Lapin-Vance</span>
                                <span className="job-title">Salesman</span>
                            </div>
                        </div>
                        <button className="btn">
                            <Visibility className="icon" />
                        </button>
                    </li>
                    <li className="item">
                        <div className="user-details">
                            <img src={Andy} alt="" className="image" />
                            <div className="user">
                                <span className="name">Andy Bernard</span>
                                <span className="job-title">Salesman</span>
                            </div>
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