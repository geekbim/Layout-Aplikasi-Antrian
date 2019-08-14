import React, { Component } from 'react'


class Center extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
    }

    componentWillUnmount() {
    clearInterval(this.timerID);
    }

    tick() {
    this.setState({
        date: new Date()
    });
    }

    tanggal() {
        const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
        const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        const waktu = new Date()
        return `${hari[waktu.getDay()]}, ${waktu.getDate()}, ${bulan[waktu.getMonth()]}, ${waktu.getFullYear()}`
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row waktu text-center">
                    <div className="col-md-5 py-1">
                        <h4 id="clock" className="my-0">{this.state.date.toLocaleTimeString()}</h4>
                    </div>
                    <div className="col-md-6 py-1">
                        <h4 id="hari text-center" className="my-0">
                            {this.tanggal()}
                        </h4>
                    </div>
                </div>
                <div className="row body-center kotak-nomor">
                    <div className="col-md-5 antrian text-center">
                        <h1 className="font-weight-bold antrian1">NOMOR ANTRIAN</h1>
                        <br></br><br></br>
                        <h1 className="font-weight-bold antrian2">1</h1>
                    </div>
                    <div className="col-md-7 blank">
                        <div className="embed-responsive embed-responsive-21by9 antrian3">
                            <iframe title="video" className="embed-responsive-item" src="https://www.youtube.com/embed/l504hRl7xqk?rel=0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Center
