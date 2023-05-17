import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';


type Props = {}

const DashBoard = (props: Props) => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", backgroundColor: "lightcyan" }} flexDirection={"row"} gap={4}>
                <Card sx={{ width: 500 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={require("../images/productivity.png")}
                            alt="productivity"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Todo-App
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Make work Productive
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <NavLink to="/notes" color="#1976d2" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                            &nbsp; {"Create"}
                        </NavLink>
                    </CardActions>
                </Card>
                <Card sx={{ width: 500 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={require("../images/organize.jfif")}
                            alt="organize"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Todo-App
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                better be oragnize
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {/* <Button to="/notes" size="small" color="primary">
                            Create
                        </Button> */}
                        <NavLink to="/notes" color="#616161" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                            &nbsp; {"Create"}
                        </NavLink>
                    </CardActions>
                </Card>
                <Card sx={{ width: 500 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={require("../images/prioritize.jpg")}
                            alt="prioritize"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Todo-App
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                prioritize your task
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <NavLink to="/notes" color="#616161" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                            &nbsp; {"Create"}
                        </NavLink>
                    </CardActions>
                </Card>


            </Box>

        </>
    )
}

export default DashBoard