import {Link, NavLink} from "react-router-dom";
import React from "react";

export default function Header() {

    return (
        <div>
            <h1>Todo Board</h1>
            <Link to='/todos'>Todos</Link>
            <NavLink to='/todos/add'>Add</NavLink>
        </div>
    )
}
