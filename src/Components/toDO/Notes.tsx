import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { ToDo } from './ToDo'

type Props = {}

export const Notes = (props: Props) => {
    return (
        <Box >
            <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
                <Stack spacing={2}
                    justifyContent="center"
                    alignItems={'center'}
                    textAlign={'center'}
                >
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    // sx={{ backgroundColor: "lightgray" }}
                    >
                        Create Task List
                    </Typography>


                    <ToDo />


                </Stack>
            </Container>
        </Box >
    )
}
