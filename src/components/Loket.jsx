import React, { Component } from 'react'

class Loket extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "antrian": [
                {
                    "nama": "LOKET 1",
                    "nomor": 1
                },
                {
                    "nama": "LOKET 2",
                    "nomor": 2
                },
                {
                    "nama": "LOKET 3",
                    "nomor": 3
                },
                {
                    "nama": "LOKET 4",
                    "nomor": 4
                }
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid">
            <div className="row mt-3 mb-3">
                <div className="col-md-3">
                    <div className="card">
                        <h5 className="card-header">{this.state.antrian[0].nama}</h5>
                        <div className="card-body">
                            <h1>{this.state.antrian[0].nomor}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <h5 className="card-header">{this.state.antrian[1].nama}</h5>
                        <div className="card-body">
                            <h1>{this.state.antrian[1].nomor}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <h5 className="card-header">{this.state.antrian[2].nama}</h5>
                        <div className="card-body">
                            <h1>{this.state.antrian[2].nomor}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <h5 className="card-header">{this.state.antrian[3].nama}</h5>
                        <div className="card-body">
                            <h1>{this.state.antrian[3].nomor}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Loket
