import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
    return (
        <div className="flex min-h-screen">           
            <div className="flex-1">
                <Navbar />
                <div className="container mx-auto mt-4" style={{ backgroundColor: '#F0F4FF' }}>                    
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
