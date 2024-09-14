import React, { useState } from "react";
import Header from "./Header";
import Select from "react-select";
import {users} from "../DataBase/Users";
import {departments} from "../DataBase/Department";


export default function EditUsers(){

    return  <div className="edit_users_screen">
                <Header />
                <EditUserForm />
            </div>
}

function EditUserForm(){
    const [user, setUser] = useState(null);

    return <div className="edit_user_form">
                <h1>Edit Users</h1>
                <div className="user_name">
                    <label>
                        User
                        <Select 
                            value={user} 
                            onChange={setUser} 
                            options={users} 
                            getOptionLabel={user=>user.name} 
                            getOptionValue={user => user.name} 
                            placeholder={'Oleg Schevchenko'}
                        />
                    </label>
                </div>
            </div>
}