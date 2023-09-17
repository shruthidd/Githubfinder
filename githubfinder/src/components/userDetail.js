import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

const UserDetail = (props) => {
    const params = useParams ();
    const navigate = useNavigate ();
    console.log(navigate, 'navigate');
    console.log(params);
    return ( 
 <h1>  {params.login}</h1>


    )
}
console.log(UserDetail, 'usersdetail')
export default UserDetail;