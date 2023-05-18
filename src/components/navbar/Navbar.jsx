import React from 'react'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import Avatar from '../../assets/avatar.png'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="topleft">
                    <span className="logo">the office</span>
                </div>
                <div className="top-right">
                    <div className="nav-icon">
                        <NotificationsNone />
                        <span className="icon-badge">
                            2
                        </span>
                    </div>
                    <div className="nav-icon">
                        <Language />
                    </div>
                    <div className="nav-icon">
                        <Settings />
                    </div>
                    <img className="avatar" src={Avatar} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar