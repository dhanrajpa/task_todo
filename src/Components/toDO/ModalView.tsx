import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { noteObj } from './ToDo';

type Props = {
    handleClose: () => void,
    task: string,
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

const ModalView = ({ handleClose, open, task }: Props) => {

    return (

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Task
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {task}
                </Typography>
            </Box>
        </Modal>

    )
}

export default ModalView