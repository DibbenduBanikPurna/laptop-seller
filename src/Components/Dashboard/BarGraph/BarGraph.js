import React from 'react';
import { BarChart,XAxis,YAxis,Legend, Bar,Tooltip,CartesianGrid } from 'recharts';
const BarGraph = ({data}) => {
    return (
        <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sell" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
    );
};

export default BarGraph;