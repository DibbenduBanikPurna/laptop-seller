import React from 'react';
import BarGraph from '../BarGraph/BarGraph';
import AreaGraph from '../AreaGraph/AreaGraph';
import LineCharts from '../Dashboard/../LineChart/LineChart';
import PieGraph from '../Dashboard/../PieGraph/PieGraph';


const Dashboard = () => {
    const data=
    [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className=''>
            <div className='row mt-5 pt-5'>
                <div className='col-md-3'>
                    <h5 className='text-info'>MONTH WISE SELL</h5>
                <LineCharts data={data}/>

                </div>
                <div className='col-md-3 m-auto'>
                <h5 className='text-info'>Investment vs Revenue</h5>
                    <AreaGraph data={data}/>
                    </div>
            </div>
            <div className='row mt-5 pt-5'>
                <div className='col-md-5'>
                <h5 className='text-info'>Investment vs Revenue</h5>
                <BarGraph data={data}/>

                </div>
                <div className='col-md-5'>
                <h5 className='text-info'>Investment vs Revenue</h5>
                    <PieGraph data={data} />
                    
                    </div>
               

            </div>
           
           
        </div>
    );
};

export default Dashboard;