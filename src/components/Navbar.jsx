import React, { Component } from 'react'
import logo from '../img/logo-kabupaten-bekasi.png';


export default class Navbar extends Component {
    render() {
        return (
            <div className="jumbo jumbotron-fluid mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={logo} className="img-fluid" width="100px" height="100px" alt="jumbo"/>
                        </div>
                        <div className="col-md-9">
                            <h3 className="font-weight-bold">DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL</h3>
                            <h1 className="font-weight-bold">KABUPATEN BEKASI</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
