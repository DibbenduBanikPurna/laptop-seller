import React from 'react';
import { RadarChart,PolarGrid,PolarRadiusAxis,PolarAngleAxis,Radar,Legend } from 'recharts';
const PieGraph = ({data}) => {
    return (
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Mike" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Lily" dataKey="sell" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
    );
};

export default PieGraph;