import React, { useState } from 'react'
import {
    Dashboard, Insights, MonetizationOn,
    AccountCircleOutlined, Inventory2Outlined, ReceiptOutlined,
    AssessmentOutlined, MailOutlineOutlined, DynamicFeedOutlined,
    ChatBubbleOutlineOutlined, ManageAccountsOutlined,
    Menu, Close
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Menu className={`menu-icon ${isOpen ? 'hide' : ''}`} onClick={toggleSidebar} />
            <Close className={`close-icon ${isOpen ? '' : 'hide'}`} onClick={toggleSidebar} />
            <div className={`sidebar ${!isOpen && 'hide'}`}>
                <div className="wrapper">
                    <div className="menu">
                        <h3 className="title">
                            Dashboard
                        </h3>
                        <ul className="list">
                            <NavLink to="/" className="list-item" activeClassName="active" onClick={toggleSidebar}>
                                <Dashboard className="icon" />
                                Home
                            </NavLink>
                            <li className="list-item">
                                <Insights className="icon" />
                                Analytics
                            </li>
                            <li className="list-item">
                                <MonetizationOn className="icon" />
                                Sales
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <h3 className="title">
                            Quick Menu
                        </h3>
                        <ul className="list">
                            <li className="list-item">
                                <Inventory2Outlined className="icon" />
                                Products
                            </li>
                            <li className="list-item">
                                <ReceiptOutlined className="icon" />
                                Transactions
                            </li>
                            <li className="list-item">
                                <AssessmentOutlined className="icon" />
                                Reports
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <h3 className="title">
                            Notifications
                        </h3>
                        <ul className="list">
                            <li className="list-item">
                                <MailOutlineOutlined className="icon" />
                                Mail
                            </li>
                            <li className="list-item">
                                <DynamicFeedOutlined className="icon" />
                                Feedback
                            </li>
                            <li className="list-item">
                                <ChatBubbleOutlineOutlined className="icon" />
                                Messages
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <h3 className="title">
                            Staffs
                        </h3>
                        <ul className="list">
                            <NavLink to="/users" className="list-item" activeClassName="active" onClick={toggleSidebar}>
                                <AccountCircleOutlined className="icon" />
                                Users
                            </NavLink>
                            <li className="list-item">
                                <ManageAccountsOutlined className="icon" />
                                Manage
                            </li>
                        </ul>
                    </div>
                </div>
            </div></>
    )
}

export default Sidebar