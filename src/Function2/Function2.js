import React, { Component } from 'react'
import Moment from 'moment';

export default class Function2 extends Component {
    constructor() {
        super()
        this.state = {
            date: Moment("2020-08-10T14:54:52+07:00").format('DD-MM-YYYY HH:mm'),
            date1: Moment("2020-08-10T14:54:52+07:00").valueOf(),
            date2: Moment("2020-08-10T14:54:52+07:00").daysInMonth(),
            date3: Moment("2020-08-10T14:54:52+07:00").quarter()
        }
    }

    render() {
        const monthNames = ["มกราคม", "กุมพาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
            "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
        ];
        const d = new Date("2020-08-10T14:54:52+07:00");
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">{this.state.date}</h2>
                <h2>{d.getDate()} {monthNames[d.getMonth()]} {d.getFullYear()+543}<label># รูปแบบปฎิทินไทย</label></h2>
                <h2 className="mt-5 mb-5">{this.state.date2}<label># DaysInMonth</label></h2>
                <h2 className="mt-5 mb-5">{this.state.date3}<label># Quarter</label></h2>
                <h2 className="mt-5 mb-5">{this.state.date1}<label># Unix timestamp</label></h2>
            </div>
        )
    }
}
