import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header(){
 
    return <header className="header">
        <NavLink to={'/'}>Edit Users</NavLink>
        <NavLink to={'/users/'}>Users</NavLink>
    </header>
}