import { useEffect } from 'react';
import './grafico.css'
import Highcharts from 'highcharts';

const Grafico = () => {

    useEffect(() => {
        Highcharts.chart('container', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Vendas'
            },
            xAxis: {
                categories: [
                    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                    'Oct', 'Nov', 'Dec'
                ]
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'CMNT',
                data: [
                    250000, 480000, 560000, 760000, 1100000, 800000, 780000, 930000, 1150000, 1090000,
                    1000000, 1350000
                ],
                color: '#f06b50'
            }, {
                name: 'CX',
                data: [
                    720000, 610000, 880000, 1400000, 1200000, 930000, 1200000, 930000, 850000, 1450000,
                    1120000, 980000
                ],
                color: '#394240'
            }, {
                name: 'CEAP',
                data: [
                    1000000, 1210000, 1400000, 1300000, 1600000, 1550000, 1400000, 1470000, 1370000, 1450000,
                    1590000, 1670000
                ],
                color: '#45aab8'
            },{
                name: 'TX',
                data: [
                    500000, 580000, 550000, 440000, 450000, 570000, 510000, 490000, 470000, 520000,
                    410000, 520000
                ],
                color: '#407ca8'
            },{
                name: 'TXAP',
                data: [
                    400000, 480000, 450000, 510000, 590000, 510000, 540000, 550000, 580000, 600000,
                    610000, 760000
                ],
                color: '#c066a8'
            },{
                name: '0103',
                data: [
                    100000, 180000, 150000, 240000, 250000, 270000, 210000, 230000, 270000, 340000,
                    410000, 560000
                ],
                color: '#009c00'
            }]
        });
    }, []);

    return (
        <div className="grafico">
            <div id="container" style={{ width: '100%', height: '615px' }}></div>
        </div>
    );
}

export default Grafico;

