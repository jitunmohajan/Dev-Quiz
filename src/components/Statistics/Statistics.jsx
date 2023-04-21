import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const topics = useLoaderData().data;
    return (
       
        <div className='my-5 container'>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart data={topics}>
                    <CartesianGrid/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#0000FF" />
                </BarChart>
            </ResponsiveContainer>
          
          <h5 className = "text-center">Figure: Bar chart of quiz topics vs total questions</h5>
          
         </div>
        
    );
};

export default Statistics;