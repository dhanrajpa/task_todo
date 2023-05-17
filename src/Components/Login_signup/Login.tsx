import React, { useState, useContext, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import '../../css/Login.css'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../hook/useAuth';



export interface IPost {
    // id: number,
    // age: number,
    email: string,
    password: string
}

function Login() {
    const { setAuthFlag, authflag } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashBoard";

    const [checkEmail, setEmail] = useState('');
    const [checkPassword, setPassword] = useState('');


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        axios.get<IPost[]>(`http://localhost:3000/users/?email=${checkEmail}&password=${checkPassword}`
        ).then((response) => {
            console.log("Success");
            let obj = response?.data;
            sessionStorage.setItem("user", JSON.stringify(obj[0]));
            sessionStorage.removeItem('authenticate');
            sessionStorage.setItem("authenticate", "loggedIn");
            setAuthFlag(!authflag);
            navigate(from, { replace: true });
        }).catch((err: any) => {
            return console.log(err.response?.status);
        });

        setEmail('');
        setPassword('');
    };

    return (
        <div id='Login-div'>
            <Container component="main" maxWidth="xs" sx={{ height: '40rem', display: 'flex', alignItems: 'center', pt: 5 }}>
                <CssBaseline />
                <Box id="Login-card"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyItems: 'center',
                    }}
                >
                    <Avatar sx={{ mt: 4, mb: 2, backgroundColor: "#1976d2" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h6">
                        Enter Login Credentials!
                    </Typography>
                    <Box component="form"
                        onSubmit={handleSubmit}
                        noValidate sx={{ mt: 1, width: '80%', }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            variant="standard"
                            onChange={handleEmailChange}
                            placeholder="abc@xyz.com"
                            size="small"
                            sx={{ mt: 1 }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            variant="standard"
                            onChange={handlePasswordChange}
                            size="small"
                            sx={{ mt: 1, my: 1 }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2, color: 'white' }}

                        >
                            Login
                        </Button>
                        <Grid container item id='Forget-Link'>
                            <Grid container item >
                                <NavLink to="/signUp" color="#616161" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                                    &nbsp; {"Register"}
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>


    );
}

export default Login;