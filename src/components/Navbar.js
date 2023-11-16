import React, { useState } from 'react';
import UserTable from './UserTable';
import AccountCreationForm from './AccountCreationForm';


export const Tab = ({ label, activeTab, onClick }) => {
    const isActive = activeTab === label;

    return (
        <li
            className={`p-2 mr-4 rounded-lg ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-700'}`}
        >
            <button
                type="button"
                className={`text-gray-400 cursor-pointer ${isActive ? 'font-bold' : ''}`}
                onClick={() => onClick(label)}
            >
                {label}
            </button>
        </li>
    );
};

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('User Details');    

    const onClickTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <nav className="bg-gray-900 shadow-lg h-16">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-white mr-4">User Data</h1>
                        <ul className="flex space-x-4">
                            <Tab label="User Details" activeTab={activeTab} onClick={onClickTab} />
                            <Tab label="Account Creation" activeTab={activeTab} onClick={onClickTab} />
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 pb-12">
                {activeTab === 'User Details' && <UserTable />}
                {activeTab === 'Account Creation' && <AccountCreationForm />}
            </div>
        </div>
    );
};

export default Navbar;
