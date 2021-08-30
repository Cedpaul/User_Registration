import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';

const UserList = (props) => {
    const {userInformation, deleteUser, getUserInfo} = props;
    const history = useHistory();

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
                userInformation.map((user) => (
                    <tr key={user._id}>
                    <td>{user.firstName}</td>
                    <td>{user.middleName}</td>
                    <td>
                        <Link onClick={() => {getUserInfo({
                                _id: user._id,
                                firstName: user.firstName,
                                middleName: user.middleName,
                                lastName: user.lastName,
                                age: user.age,
                                stAddress: user.stAddress,
                                city: user.city,
                                phoneNumber: user.phoneNumber
                            }); history.push('/edit')} }>Edit</Link>
                    </td>
                    <td>
                    <Link onClick={() => {deleteUser(user._id)}}>Delete</Link>
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