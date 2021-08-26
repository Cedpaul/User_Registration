import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
const UserList = () => {
    const [items, setItems] = useState([]);

    return (
        <div>
            <h1>UserList</h1>
            <div className="mt-3">
            <h3>Todo List</h3>
            <table className="table table-striped mt-3">
                <thead>
                <tr>
                    <th>Text</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                items.map((user) => (
                    <tr key={user._id}>
                    <td>{user.text}</td>
                    <td>{user.description}</td>
                    <td>
                        <Link to={`/edit/${user._id}`}>Edit</Link>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default UserList
