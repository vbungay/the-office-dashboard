import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Charts.scss'

const Charts = () => {
    const data = [
        {
            month: 'January',
            sales: 3000,
        },
        {
            month: 'February',
            sales: 4000,
        },
        {
            month: 'March',
            sales: 2500,
        },
        {
            month: 'January',
            sales: 3000,
        },
        {
            month: 'February',
            sales: 4000,
        },
        {
            month: 'March',
            sales: 2500,
        },
        {
            month: 'January',
            sales: 3000,
        },
        {
            month: 'February',
            sales: 4000,
        },
        {
            month: 'March',
            sales: 2500,
        },
        {
            month: 'January',
            sales: 3000,
        },
        {
            month: 'February',
            sales: 4000,
        },
        {
            month: 'March',
            sales: 2500,
        },
    ];

    return (
        <div className="chart">
            <h3 className="title">
                Quarterly Sales
            </h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
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