import React, { useState } from "react";
import Header from "./Header";
import Select from "react-select";
import {users} from "../DataBase/Users";
import {departments} from "../DataBase/Department";
import { countries } from "../DataBase/Country";
import { statuses } from "../DataBase/Status";


export default function EditUsers(){

    return  <div className="edit_users_screen">
                <Header />
                <EditUserForm />
            </div>
}

function EditUserForm(){
    const [user, setUser] = useState(null);
    const [fullName, setFullName] = useState('');
    const userUpdate = (user) => {
        setUser(user);
        setFullName(user.name);
        setDep(user.department);
        setStatus(user.status);
        setCon(user.country);
    };
    const [dep, setDep] = useState(null);
    const [status, setStatus] = useState(null);
    const [con, setCon] = useState(null);
   
    


    return <div className="edit_user_form">
                <div className="edit_user_form_wrap">
                    <h2>Edit Users</h2>
                        <label>
                            User
                            <div className="user_name">

                            <Select 
                                value={user} 
                                onChange={userUpdate} 
                                options={users} 
                                getOptionLabel={user=>user.name} 
                                getOptionValue={user => user.name} 
                                placeholder={'Oleg Schevchenko'}
                            />
                            </div>
                        </label>


                        {user &&
                            <div className="form">
                                <h3>User Information</h3>
                                <div className="user_data">
                                    <label >
                                        Full Name
                                        <input 
                                            onChange={e => (setFullName(e.target.value))} 
                                            type="text" 
                                            value={fullName} 
                                        />
                                    </label>

                                    <label >
                                        Department
                                        <div className="user_name">
                                            <Select 
                                                options={departments} 
                                                getOptionLabel={dep => dep.name} 
                                                value={dep} 
                                                onChange={setDep}
                                            />
                                        </div>
                                    </label>
                                    </div>

                                <div className="user_data">
                                <label >
                                    Country
                                    <div className="user_name">
                                        <Select 
                                            options={countries} 
                                            getOptionLabel={con => con.name} 
                                            value={con}
                                            onChange={setCon} 
                                        />
                                    </div>
                                </label>
                                
                                </div>
                            </div> }
                </div>
            </div>
}