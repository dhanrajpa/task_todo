import React from 'react'
import { Box } from '@mui/material';
import backgroundImage1 from '../images/todo1.jpg'
type Props = {}

const HomePage = (props: Props) => {
    return (
        <Box sx={{ height: "800px", backgroundImage: `url(${backgroundImage1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

        </Box>
    )
}

export default HomePage