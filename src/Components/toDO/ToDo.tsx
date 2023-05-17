import React, { useState, useContext, useEffect } from 'react'
import { Box, Button, TextField, Modal, Typography, Divider } from '@mui/material';
import axios from 'axios';
import { ListView } from './ListView';

export interface noteObj {
    task: string,
    status: string,
    id?: number | undefined
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ToDo = (): JSX.Element => {
    const [note, setNote] = useState("")
    const [flag, setFlag] = useState<boolean>(true)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNote(e.target.value)
        console.log("handleChange Input");
        setFlag(false)
    }
    //Add task
    const addNote = (): void => {
        console.log({ task: note });
        if (note) {

            let data =
            {
                task: note,
                status: "pending"
            }

            axios.post<noteObj>("http://localhost:3000/toDo", data, { headers: { "Content-Type": "application/json", }, })
                .then((response) => {
                    console.log({ taskAdded: response.status });
                })
                .catch((err) => console.log(err));
        };
        setNote("");
        console.log("note added");
    }
    //Delete task

    return (
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }} gap={2}  >
            <Button variant="contained" sx={{ ml: 1 }} onClick={handleOpen}>Add Note</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
                <Box sx={{ width: 600, display: "flex" }}>
                    <Box sx={style} >
                        <Typography>
                            Add Task
                        </Typography>
                        {/* <Divider /> */}
                        <TextField id="time" placeholder="Enter task details" label="Note" size="small" fullWidth={true} value={note} type="string" variant="outlined" onChange={handleChange} />
                        <Button variant="contained"
                            sx={{ mt: 1, float: "right" }}
                            disabled={flag}
                            onClick={() => {
                                console.log("note added");
                                addNote()
                                handleClose()
                            }}>Add</Button>
                    </Box>
                </Box>
            </Modal >

            <ListView note={note} />
        </Box >

    )
}

