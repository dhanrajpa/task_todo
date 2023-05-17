import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { noteObj } from './ToDo';
import { TextField } from '@mui/material';
import axios from 'axios';

type Props = {
    handleClose: () => void,
    data: noteObj | undefined,
    getData: () => void,
    open: boolean,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModelEdit = ({ handleClose, open, data, getData }: Props) => {

    const [editTask, seteditTask] = useState<string>("");

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        seteditTask(e.target.value)
    }
    const editDetails = (id: number | undefined): void => {
        console.log("note edited");

        let data = {
            task: editTask
        }

        axios.patch(`http://localhost:3000/toDo/${id}`, data).then((res) => {
            console.log(res?.data);
        });
        getData();
        handleClose();
    }
    useEffect(() => {

    }, [editTask])

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TextField id="time" placeholder="Enter task details" label="Note" size="small" fullWidth={true} value={editTask} type="string" variant="outlined" onChange={handleEditChange} />
                <div >
                    <Button variant="contained"
                        sx={{ mt: 1, ml: 1, float: "right" }}
                        onClick={() => {
                            handleClose()
                        }}>Close</Button>

                    <Button variant="contained"
                        sx={{ mt: 1, float: "right" }}
                        onClick={() => {
                            editDetails(data?.id)
                        }}>Edit</Button>
                </div>

            </Box>
        </Modal>

    )
}

export default ModelEdit