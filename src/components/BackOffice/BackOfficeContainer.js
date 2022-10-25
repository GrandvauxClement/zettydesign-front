import React, {useEffect, useState} from "react";
import UserService from "../../services/user.service";
import {useNavigate} from "react-router-dom";
import {Box} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import IndexBackOffice from "./index";

const BackOfficeContainer = () => {
    const navigate = useNavigate();
    const [checkToken, setCheckToken] = useState(false)

    useEffect(()=> {
        UserService.checkToken().then((res) => {

            if (res.data.isLoggedIn){
                setCheckToken(true);
            } else {
                navigate("/");
            }

        })
    }, [setCheckToken])

    if(checkToken){
        return (
            <IndexBackOffice />
        )
    } else {
        return (
            <Box sx={{display: 'flex', alignItems: 'center', mt: 3}}>
                <CircularProgress/>
            </Box>
        )
    }

}

export default BackOfficeContainer