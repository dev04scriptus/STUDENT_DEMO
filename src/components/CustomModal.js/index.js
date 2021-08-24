import { Box, Button, Card, CardContent, makeStyles, Modal, TextareaAutosize, TextField, Typography } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    CustomModal: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(229,229,229,0.5)",
    },
    modal: {
        maxWidth: "600px",
        outline: "none",
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: "20px",
    },
    modalHeader: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        paddingBottom: "8px",
        padding: [[20, 15, 30, 28]],

        "& img": {
            cursor: "pointer",
        },
        "& svg": {
            cursor: "pointer",
        },
    },
    modalBody: {
        padding: [[0, 36, 0, 37]],
    },
    root: {
        maxWidth: 500,
        display: 'block',
        margin: '30px auto'
    },

    studentForm: {
        display: 'block',
        margin: '20px 15px',

        '& .MuiFormControl-root': {
            width: '100%',
        },

        '& textarea': {
            width: "100%",
            marginBottom: '20px'
        },

        '& .MuiInputBase-root': {
            width: '100%',
            marginBottom: '20px'
        }
    },
    error: {
        margin: '-18px 0px 12px 0px',
        color: 'red',
        fontSize: '14px'
    }
}))

export default function CustomModal({ isOpen, toggle, editStudentData, handleEditData }) {
    const classes = useStyles();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const resetData = () => { reset() }
    const onSubmit = (data) => {
        const id = editStudentData.index
        if (data) {
            handleEditData(data, id)
            toggle()
        }
        resetData()
    }

    console.log("editStudentData", editStudentData);
    const handleCloseModal = () => {
        toggle()
        reset()
    }
    return (
        <Modal
            open={isOpen}
            closeAfterTransition
            className={classes.CustomModal}
        >
            <div className={classes.modal}>
                <div className={classes.modalHeader}>
                    <CloseIcon
                        className={classes.closeIcon}
                        width={24}
                        height={24}
                        onClick={handleCloseModal}
                    />
                </div>
                <div className={classes.modalBody}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Box component="div">
                                <Typography variant="h6">Student Registration Form</Typography>
                            </Box>
                            <form className={classes.studentForm} onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    id="outlined-basic"
                                    label="Enter Full Name"
                                    name="name"
                                    variant="outlined"
                                    defaultValue={editStudentData?.original.name}
                                    {...register("name", { required: 'Name is required' })}
                                />
                                <Box className={errors?.name?.message ? classes.error : null}>
                                    {
                                        errors && errors.name ? <span>{errors.name.message}</span> : null
                                    }
                                </Box>
                                <TextField
                                    id="outlined-basic"
                                    label="Enter Collage Name"
                                    name="collageName"
                                    variant="outlined"
                                    defaultValue={editStudentData?.original.collageName}
                                    {...register("collageName", { required: 'Collage name is required' })}
                                />
                                <Box className={errors?.collageName?.message ? classes.error : null}>
                                    {
                                        errors && errors.collageName ? <span>{errors.collageName.message}</span> : null
                                    }
                                </Box>
                                <TextField
                                    id="outlined-basic"
                                    label="Enter mobile number"
                                    name="mobileNumber"
                                    variant="outlined"
                                    defaultValue={editStudentData?.original.mobileNumber}
                                    {...register("mobileNumber", { required: 'Mobile number is required' })}
                                />
                                <Box className={errors?.mobileNumber?.message ? classes.error : null}>
                                    {
                                        errors && errors.mobileNumber ? <span>{errors.mobileNumber.message}</span> : null
                                    }
                                </Box>
                                <TextField
                                    id="outlined-basic"
                                    label="Enter Branch Name"
                                    name="branchName"
                                    variant="outlined"
                                    defaultValue={editStudentData?.original.branchName}
                                    {...register("branchName", { required: 'Branch name is required' })}
                                />
                                <Box className={errors?.branchName?.message ? classes.error : null}>
                                    {
                                        errors && errors.branchName ? <span>{errors.branchName.message}</span> : null
                                    }
                                </Box>
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    name="address"
                                    placeholder="Enter Your Address"
                                    minRows={5}
                                    defaultValue={editStudentData?.original.address}
                                    {...register("address", { required: 'Address is required' })}
                                />
                                <Box className={errors?.address?.message ? classes.error : null}>
                                    {
                                        errors && errors.address ? <span>{errors.address.message}</span> : null
                                    }
                                </Box>
                                <TextField
                                    id="date"
                                    label="Enter Your Birth Date"
                                    type="date"
                                    name="dateOfBirth"
                                    defaultValue={editStudentData?.original.dateOfBirth}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    {...register("dateOfBirth", { required: 'birth date is required' })}
                                />
                                <Box className={errors?.dateOfBirth?.message ? classes.error : null}>
                                    {
                                        errors && errors.dateOfBirth ? <span>{errors.dateOfBirth.message}</span> : null
                                    }
                                </Box>
                                <Button variant="contained" color="primary" type="submit">
                                    Edit
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Modal>
    )
}
