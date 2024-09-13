import React from "react";
import Header from "./Header";
import Select from "react-select";
import {users} from "../DataBase/Users";

let a = users.map(e => ({value: e.name, label : e.name}));

const MyComponent = () => (
    <Select options={a} placeholder={'Oleg Schevchenko'}/>
);


export default function EditUsers(){

    return  <div className="edit_users_screen">
                <Header />
                <EditUserForm />
            </div>
}

function EditUserForm(){

    return <div className="edit_user_form">
                <h1>Edit Users</h1>
                <div className="user_name">
                    <label>
                        User
                        <MyComponent />  
                    </label>
                </div>
            </div>
}