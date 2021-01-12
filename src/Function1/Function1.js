import React, { Component } from 'react'
import Examdata from '../exam-data.json';

class Function1 extends Component {
    constructor() {
        super()
        this.state = {
            ExamdataJsx: [],
            Calculate: [],
            Calculate1: 0
        };
    }

    render() {
        var Calculate1 = 0;
        const ExamdataJsx = Examdata.map((examdata, i) => {
            if (examdata.is_editable_price === false) {
                const Calculate = examdata.products[0].weight;
                Calculate1 = Calculate1 + Calculate;
                return <div className="col-md-4" key={i}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Name : {examdata.name}</h5>
                            <div className="card-text">Weight : {Calculate}</div>
                        </div>
                    </div>
                </div>
            }
        })

        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Function 1</h2>
                <div className="row">
                    {ExamdataJsx}
                    <div className="card">
                        <div className="card-body">
                            <h4>Total products weight : </h4>
                            {Calculate1}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Function1;