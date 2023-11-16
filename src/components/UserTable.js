import React from 'react';
import {useState,useEffect} from 'react'

const UserTable = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'Rohan Volety',
            email: 'rohan@gmail.com',
            phone: '1234567890',
            creationDate: '2023-01-01',
        },
        {
            id: 2,
            username: 'Rohit Singh',
            email: 'rohit@gmail.com',
            phone: '9876543210',
            creationDate: '2023-01-02',
        },
        {
            id: 3,
            username: 'Aryan jaiswal',
            email: 'aryan@example.com',
            phone: '9876543210',
            creationDate: '2023-01-03',
        },
        {
            id: 4,
            username: 'Arya Jain',
            email: 'Arya@example.com',
            phone: '9876543210',
            creationDate: '2023-01-04',
        },
        {
            id: 5,
            username: 'Divyanshu singh ',
            email: 'Divyanshu@example.com',
            phone: '9876541210',
            creationDate: '2023-01-05',
        },        
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [reportGenerated, setReportGenerated] = useState(false); 


    useEffect(() => {
        //Dummy fetching of data
        fetch('/api/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setReportGenerated(false); 
    };

    const handleGenerateReport = () => {        
        console.log('Generating report for user:', selectedUser);  
        setReportGenerated(true);      
    };


    const filteredUsers = users.filter((user) => {
        return user.username.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const printReport = () => {        
        window.print();
    };

    return (
        <div className="container mx-auto">
            <input
                className="w-full my-4 p-2 border rounded-md"
                placeholder="Search by username"
                value={searchTerm}
                onChange={handleSearchChange}
            />

            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border text-left">Username</th>
                        <th className="px-4 py-2 border text-left">Email</th>
                        <th className="px-4 py-2 border text-left">Phone</th>
                        <th className="px-4 py-2 border text-left">ID</th>
                        <th className="px-4 py-2 border text-left">Creation Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr
                            key={user.id}
                            className="px-4 py-2 border hover:bg-blue-100"
                            onClick={() => handleUserClick(user)}
                        >
                            <td className="px-4 py-2">{user.username}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">{user.phone}</td>
                            <td className="px-4 py-2">{user.id}</td>
                            <td className="px-4 py-2">{user.creationDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

           
            {selectedUser && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 absolute inset-0" onClick={() => setSelectedUser(null)}></div>
                    <div className="bg-white p-4 rounded-md z-10">
                        <h2 className="text-lg font-bold mb-4"> Report for {selectedUser.username}</h2>
                        {reportGenerated ? (
                            <div>
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="px-4 py-2">Username</th>
                                            <th className="px-4 py-2">Email</th>
                                            <th className="px-4 py-2">Phone</th>
                                            <th className="px-4 py-2">ID</th>
                                            <th className="px-4 py-2">Creation Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2">{selectedUser.username}</td>
                                            <td className="px-4 py-2">{selectedUser.email}</td>
                                            <td className="px-4 py-2">{selectedUser.phone}</td>
                                            <td className="px-4 py-2">{selectedUser.id}</td>
                                            <td className="px-4 py-2">{selectedUser.creationDate}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="mt-4">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                        onClick={() => printReport()}
                                    >
                                        Print Report
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={handleGenerateReport}
                            >
                                Generate Report
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserTable;