import React, { Component } from 'react'

class Loket1 extends Component {
    render() {

        const {nama, nomor} = this.props

        return (
            <div className="col-md-3">
                <div className="card">
                    <h5 className="card-header">{nama}</h5>
                    <div className="card-body">
                        <h1>{nomor}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loket1
