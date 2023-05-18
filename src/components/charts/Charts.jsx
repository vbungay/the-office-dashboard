import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Charts.scss'

const Charts = () => {
    const data = [
        {
            month: 'Jan.',
            sales: 3000,
        },
        {
            month: 'Feb.',
            sales: 4000,
        },
        {
            month: 'Mar.',
            sales: 2500,
        },
        {
            month: 'Apr.',
            sales: 3000,
        },
        {
            month: 'May.',
            sales: 4000,
        },
        {
            month: 'Jun.',
            sales: 2500,
        },
        {
            month: 'Jul.',
            sales: 3000,
        },
        {
            month: 'Aug.',
            sales: 4000,
        },
        {
            month: 'Sept.',
            sales: 2500,
        },
        {
            month: 'Oct.',
            sales: 3000,
        },
        {
            month: 'Nov.',
            sales: 4000,
        },
        {
            month: 'Dec.',
            sales: 2500,
        },
    ];

    return (
        <div className="chart">
            <h3 className="title">
                Annual Reports
            </h3>
            <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="month" stroke="#6c757d" />
                    <YAxis />
                    <Line type="mono" dataKey="sales" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts