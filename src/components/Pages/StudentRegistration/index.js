import { Box, Button, Card, CardContent, makeStyles, TextareaAutosize, TextField, Typography } from "@material-ui/core";
import React from "react";
import Layout from "../../layout";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
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
  error : {
    margin:'-18px 0px 12px 0px',
    color:'red',
    fontSize:'14px'
  }
}))

export default function StudentRegistration() {
  const classes = useStyles();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const studentData = JSON.parse(localStorage.getItem("studentRecord"))
    if(data){
      if(studentData){
        const studentDataCopy = studentData
        studentDataCopy.push(data)
        localStorage.setItem("studentRecord",JSON.stringify(studentDataCopy))
        reset()
      }else {
        localStorage.setItem("studentRecord",JSON.stringify([data]))
        reset()
      }
    }
  }

  return (
    <Layout>
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
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

    </Layout>
  )
}
