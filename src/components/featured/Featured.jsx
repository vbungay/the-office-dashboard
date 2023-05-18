import React from 'react'
import { ArrowDownward, ArrowUpward, ArrowForward } from '@mui/icons-material';
import './Featured.scss'

const Featured = () => {
    return (
        <div className="featured">
            <div className="item">
                <span className="title">
                    Revenue
                </span>
                <div className="money-container">
                    <span className="money">$4200</span>
                    <span className="rate">
                        <ArrowDownward className="icon negative" />
                        -69.0%
                        <span className="sub">Last 7 days</span>
                    </span>
                </div>
                <div className="nums">
                    <div>
                        <span className="rate">
                            <ArrowUpward className="icon positive" />
                            +40.0%
                            <span className="sub">Last month</span>
                        </span>
                    </div>
                    <div>
                        <ArrowForward className="right" />
                    </div>
                </div>
            </div>
            <div className="item">
                <span className="title">
                    Sales
                </span>
                <div className="money-container">
                    <span className="money">$4200</span>
                    <span className="rate">
                        <ArrowDownward className="icon negative" />
                        -69.0%
                        <span className="sub">Last 7 days</span>
                    </span>
                </div>
                <div className="nums">
                    <div>
                        <span className="rate">
                            <ArrowUpward className="icon positive" />
                            +40.0%
                            <span className="sub">Last month</span>
                        </span>
                    </div>
                    <div>
                        <ArrowForward className="right" />
                    </div>
                </div>
            </div>
            <div className="item">
                <span className="title">
                    Cost
                </span>
                <div className="money-container">
                    <span className="money">$4200</span>
                    <span className="rate">
                        <ArrowDownward className="icon negative" />
                        -69.0%
                        <span className="sub">Last 7 days</span>
                    </span>
                </div>
                <div className="nums">
                    <div>
                        <span className="rate">
                            <ArrowUpward className="icon positive" />
                            +40.0%
                            <span className="sub">Last month</span>
                        </span>
                    </div>
                    <div>
                        <ArrowForward className="right" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured