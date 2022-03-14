import React, {useState} from "react";
import Box from "@mui/material/Box";
import theme from "../../theme";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UserService from "../../services/user.service";
import {useNavigate} from "react-router-dom"

const Login = () => {
    const history = useNavigate();
    const [connectForm, setConnectForm] = useState({
        email: "",
        password: ""
    })

    const handleClick = (e) => {
        const {name, value} = e.target;
        setConnectForm({
            ...connectForm,
            [name]: value
        })
    }

    const onSubmit = () => {
        console.log(connectForm);
        if (connectForm.email.length > 5 && connectForm.password.length > 4){
            UserService.login(connectForm.email, connectForm.password)
                .then((res) => {
                    console.log(res);
                    localStorage.setItem("token", res.data.token);
                    history("/admin");
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    return (
        <Box sx={{backgroundColor: theme.palette.primary.main, width: '100vw', height: '100vh'}}>
            <Container sx={{display: "flex", height: '100vh', alignItems: "center", justifyContent: "center"}}>
                <Grid container item md={6} xs={12} justifyContent="center">
                    <Typography variant="h1" color="white">Login</Typography>
                    <TextField
                        id="email-login"
                        label="Email"
                        variant="filled"
                        name="email"
                        fullWidth
                        sx={{mt: 2}}
                        value={connectForm.email}
                        onChange={handleClick}
                    />
                    <TextField
                        id="password-login"
                        label="Mot de passe"
                        variant="filled"
                        name="password"
                        fullWidth
                        type="password"
                        sx={{mt: 2}}
                        value={connectForm.password}
                        onChange={handleClick}
                    />
                    <Button variant="outlined" color="inherit" sx={{mt: 2}} onClick={onSubmit}> Se connecter</Button>
                </Grid>
            </Container>
        </Box>
    )
}

export default Login