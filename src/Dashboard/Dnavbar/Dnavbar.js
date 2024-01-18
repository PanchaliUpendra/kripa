import React from "react";
import './Dnavbar.css';
import { NavLink } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HomeIcon from '@mui/icons-material/Home';

function Dnavbar(){
    return(
        <>
            <div className="dnavbar-con">
                <div className="dnav-header">
                    <p>Kripa Designers</p>
                </div>
                <ul className="dnav-ul">
                    <NavLink to='/'>
                        <li>
                            <HomeIcon/>
                            <p>Home</p>
                        </li>
                    </NavLink>
                    <NavLink to='/dashboard'>
                        <li>
                            <AssessmentIcon/>
                            <p>Analytics</p>
                        </li>
                    </NavLink>
                    <li>
                        <AddShoppingCartIcon/>
                        <p>Add Products</p>
                    </li>
                    <li>
                        <DeleteOutlineIcon/>
                        <p>Delete Products</p>
                    </li>
                    <li>
                        <EditIcon/>
                        <p>Edit Products</p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Dnavbar;