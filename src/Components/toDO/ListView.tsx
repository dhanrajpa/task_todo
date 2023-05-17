import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { noteObj } from './ToDo';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ModalView from './ModalView';
import {
    Box, Button, TextField, Paper,
    TableRow, TableHead, TableContainer,
    TableCell, tableCellClasses, TableBody,
    Table, styled
} from '@mui/material';
import ModelEdit from './ModelEdit';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
type Props = {
    note: string
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const names: string[] = ["pending", "completed", "In Progress"]
export const ListView = (props: Props) => {
    const [tableData, setTableData] = useState<noteObj[]>([])
    const [open, setOpen] = useState<boolean>(false);
    const [task, setTask] = useState<string>("");
    const [rowData, setRowData] = useState<noteObj | undefined>();
    const [selectStatus, setselectStatus] = React.useState<string>("");
    //model open close
    const handleOpen = (): void => { setOpen(true); }
    const handleClose = (): void => { setOpen(false); }

    useEffect(() => {
        getData();
    }, [props.note, tableData])

    const handleChangeStatus = (event: SelectChangeEvent<string>): void => {
        setselectStatus(event.target.value);
    }

    const statusUpdate = (id: number | undefined): any => {
        let data = {
            status: selectStatus
        }
        axios.patch(`http://localhost:3000/toDo/${id}`, data).then((res) => {
            console.log(res?.data);
        });
        getData()
    }

    //update data
    const getData = (): void => {

        axios.get<noteObj[]>("http://localhost:3000/toDo", { headers: { "Content-Type": "application/json", }, })
            .then((response) => {
                const listData = response?.data
                setTableData(listData)
            })
            .catch((err) => console.log(err));
    };

    //del task
    const delTask = (id: number | undefined): void => {
        console.log("task Deleted");
        console.log({ id: id });
        axios.delete(`http://localhost:3000/toDo/${id}`).then(response => {
            console.log(response);
        }).catch((err) => {
            console.error({ error: err });
        });
        getData();
    }

    const editTask = (data: noteObj | undefined): void => {
        setTask("")
        setRowData(data);
        setOpen(true);
    }

    const viewTask = (value: string): void => {
        setTask(value);
        setRowData(undefined);
    }



    return (
        <>
            <Box sx={{ p: 1 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead >
                            <TableRow>
                                <StyledTableCell align="left">Sr.No</StyledTableCell>
                                <StyledTableCell align="left">Task</StyledTableCell>
                                <StyledTableCell align="center">action</StyledTableCell>
                                {/* <StyledTableCell align="center">status</StyledTableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((value, key) => (
                                <StyledTableRow key={value.id}>
                                    <StyledTableCell align="left">{key + 1}</StyledTableCell>
                                    <StyledTableCell align="left">{value.task}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <div>
                                            <Button size="small" onClick={() => {
                                                viewTask(value.task);
                                                handleOpen();
                                            }}>view</Button>
                                            <Button size="small" onClick={() => {
                                                console.log("edit called");
                                                console.log(value);
                                                editTask(value)
                                            }}>Edit</Button>
                                            <Button size="small" onClick={() => { delTask(value?.id) }}>Delete</Button>
                                        </div>
                                    </StyledTableCell>
                                    {/* <StyledTableCell align="center">
                                        {value.status}
                                        <FormControl sx={{ m: 1, width: 150 }}>
                                            <InputLabel id="demo-multiple-name-label">Status</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                id="demo-multiple-name"
                                                value={selectStatus}
                                                onChange={handleChangeStatus}
                                                input={<OutlinedInput label="Name" />}
                                                MenuProps={MenuProps}
                                            >
                                                {names.map((name) => (
                                                    <MenuItem
                                                        key={name}
                                                        value={name}
                                                        onClick={() => {
                                                            statusUpdate(value.id)
                                                        }}
                                                    >
                                                        {name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </StyledTableCell> */}
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {task && <ModalView handleClose={handleClose} open={open} task={task} />}

            {rowData && <ModelEdit handleClose={handleClose} open={open} data={rowData} getData={getData} />}
        </>
    )
}