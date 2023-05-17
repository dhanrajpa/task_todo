import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import '../../css/signUp.css'
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IPost } from './Login';

type Props = {}

export const SignUp = (props: Props) => {
    const navigate = useNavigate();
    const [checkNameA, setNameA] = useState('');
    const [checkEmailA, setEmailA] = useState('');
    const [checkPasswordA, setPasswordA] = useState('');
    const [checkConfPasswordA, setConfpasswordA] = useState('');
    const [checkAgeA, setAgeA] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameA(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailA(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordA(e.target.value)
    }
    const handleConfpasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfpasswordA(e.target.value);
    }

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgeA(e.target.value);
    }

    const handleSubmitA = async (e: any) => {
        e.preventDefault();
        console.log(checkEmailA, checkPasswordA, checkAgeA);
        if (checkConfPasswordA === checkPasswordA) {

            let data =
            {
                name: checkNameA,
                email: checkEmailA,
                password: checkPasswordA,
                age: checkAgeA
            }

            axios.post<IPost>("http://localhost:3000/users", data, { headers: { "Content-Type": "application/json", }, })
                .then((response) => {
                    console.log(response.data);
                    navigate('/Login');
                })
                .catch((err) => console.log(err));

            setNameA('');
            setEmailA('');
            setPasswordA('');
            setAgeA('');
        }
    };

    return (
        <div id='user-div'>
            <Container component="main" maxWidth="xs" sx={{ display: 'flex', alignItems: 'center' }}>
                <CssBaseline />
                <Box id="user-card"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyItems: 'center',
                    }}
                >
                    <Avatar sx={{ mt: 2, mb: 1, bgcolor: 'primary.main', }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h6">
                        User Registration
                    </Typography>
                    <Box component="form" onSubmit={handleSubmitA} noValidate sx={{ mt: 1, width: '80%', }}>
                        <TextField
                            fullWidth
                            id="Aname"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            variant="standard"
                            sx={{ mt: 0 }}
                            onChange={handleNameChange}
                            InputProps={{ sx: { height: 28 } }}
                        />

                        <TextField
                            required
                            fullWidth
                            id="areg-email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            variant="standard"
                            sx={{ mt: 1 }}
                            onChange={handleEmailChange}
                            InputProps={{ sx: { height: 28 } }}

                        />
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="AReg-password"
                            autoComplete="current-password"
                            variant="standard"
                            sx={{ mt: 1 }}
                            onChange={handlePasswordChange}
                            InputProps={{ sx: { height: 28 } }}

                        />
                        <TextField
                            required
                            fullWidth
                            name="Confirm password"
                            label="Confirm Password"
                            type="password"
                            id="ACpassword"
                            autoComplete="current-password"
                            variant="standard"
                            sx={{ mt: 1 }}
                            onChange={handleConfpasswordChange}
                            InputProps={{ sx: { height: 28 } }}
                        />


                        <TextField
                            name="Age"
                            label="Age"
                            fullWidth
                            type="text"
                            id="age"
                            variant="standard"
                            onChange={handleAgeChange}
                            InputProps={{ sx: { height: 28 } }}
                            sx={{ mt: 0 }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2, mb: 2, color: 'white' }}
                        >
                            Sign Up
                        </Button>

                        <Grid container item id='ASign-Link'>
                            <Grid container item >
                                Have an account?
                                <Link href="/Login" color="#616161" sx={{ textDecoration: 'inherit' }} >
                                    &nbsp;{"  Login"}
                                </Link>
                            </Grid>

                        </Grid>
                    </Box>


                </Box>
            </Container>


        </div>
    )
}