import React from 'react'
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
import './WidgetLarge.scss'

const WidgetLarge = () => {
    const Button = ({ type }) => {
        return <button className={"btn " + type}>
            {type}
        </button>
    }
    return (
        <div className="widgets-lg">
            <h3 className="title">
                Latest Transactions
            </h3>
            <table className="table">
                <tr className="table-tr">
                    <th className="table-th">
                        Customer
                    </th>
                    <th className="table-th">
                        Date
                    </th>
                    <th className="table-th">
                        Amount
                    </th>
                    <th className="table-th">
                        Status
                    </th>
                </tr>
                <tr className="table-tr">
                    <td className="user">
                        <img src={c1} alt="" className="img" />
                        <span className="name">
                            Lackawanna County
                        </span>
                    </td>
                    <td className="date">
                        08 Nov 2005
                    </td>
                    <td className="amount">
                        $450.00
                    </td>
                    <td className="status">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="table-tr">
                    <td className="user">
                        <img src={c4} alt="" className="img" />
                        <span className="name">
                            Julia
                        </span>
                    </td>
                    <td className="date">
                        05 Feb 2009
                    </td>
                    <td className="amount">
                        $450.00
                    </td>
                    <td className="status">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="table-tr">
                    <td className="user">
                        <img src={c2} alt="" className="img" />
                        <span className="name">
                            Phil Maguire
                        </span>
                    </td>
                    <td className="date">
                        08 May 2008
                    </td>
                    <td className="amount">
                        $450.00
                    </td>
                    <td className="status">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="table-tr">
                    <td className="user">
                        <img src={c3} alt="" className="img" />
                        <span className="name">
                            Larry Meyers
                        </span>
                    </td>
                    <td className="date">
                        04 Oct 2007
                    </td>
                    <td className="amount">
                        $450.00
                    </td>
                    <td className="status">
                        <Button type="Declined" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLarge