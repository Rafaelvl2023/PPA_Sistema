import { Grid } from '@mui/material';
import './cards.css'

const Cards = () => {
    return (
        <Grid container spacing={2} style={{ padding: '10px' }}>
            <Grid item xs={12} sm={6} md={2}>
                <div className="card">
                    <div className="titleCards">CMNT</div>
                    <i className="zmdi zmdi-upload"></i>
                    <div className="value"><b>$</b> 10.920.000,00</div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <div className="card">
                    <div className="titleCards">CX</div>
                    <i className="zmdi zmdi-upload"></i>
                    <div className="value"><b>$</b> 12.390.000,00</div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <div className="card">
                    <div className="titleCards">CEAP</div>
                    <i className="zmdi zmdi-download"></i>
                    <div className="value"><b>$</b> 17.010.000,00</div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <div className="card">
                    <div className="titleCards">TX</div>
                    <i className="zmdi zmdi-download"></i>
                    <div className="value"><b>$</b> 6.010.000,00</div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <div className="card">
                    <div className="titleCards">TXAP</div>
                    <i className="zmdi zmdi-download"></i>
                    <div className="value"><b>$</b> 6.580.000,00</div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <div className="card">
                    <div className="titleCards">0103</div>
                    <i className="zmdi zmdi-download"></i>
                    <div className="value"><b>$</b> 3.510.000,00</div>
                </div>
            </Grid>
        </Grid>
    );
}

export default Cards;


