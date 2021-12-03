import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../layout';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import { Button } from '@material-ui/core';
import swal from 'sweetalert';
import { deleteStudentData, studentDataSet, updateStudentRecord } from '../../../redux/Student/studentAction';
import CustomModal from '../../CustomModal.js';


export default function StudentRecord() {

    const [modal, setModal] = useState(false);
    const [editStudentData, setEditStudentData] = useState(null)
    const dispatch = useDispatch()
    const studentData = useSelector(state => state.studentData)
    
    useEffect(() => {
        const StudentPersonalData = JSON.parse(localStorage.getItem("studentRecord"))
        if (StudentPersonalData) {
            const data = StudentPersonalData
            dispatch(studentDataSet(data))
        }
    }, [dispatch])
    
    const modalToggle = () => setModal(!modal);

    const handleDeleteRecord = async (id) => {
        const willDelete = await swal({
            title: 'Are You sure?',
            text: 'Are You sure that you want to delete this user',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        });
        if (willDelete) {
            let data = {
                id: id,
            }
            dispatch(deleteStudentData(data));
        }
    }

    const handleEditRecord =(data,id) => {
        setEditStudentData(data,id)
        modalToggle()
    }

    const columns = [
        {
            Header: 'Index',
            Cell: (row) => row.index + 1,
            id: 'index',
            maxWidth: 100
        },
        {
            Header: 'Name',
            accessor: 'name',
            maxWidth: 250
        },
        {
            Header: 'CollageName',
            accessor: 'collageName',
            maxWidth: 250
        },
        {
            Header: 'Birth Date',
            accessor: 'dateOfBirth',
            maxWidth: 250
        },
        {
            Header: 'Branch Name',
            accessor: 'branchName',
            maxWidth: 250
        },
        {
            Header: 'Number',
            accessor: 'mobileNumber',
            maxWidth: 250
        },
        {
            Header: 'Address',
            accessor: 'address',
            maxWidth: 250
        },
        {
            Header: 'Crud Operation',
            Cell: (row) => {
                return (
                    <div>
                        <Button variant="contained" color="secondary" size="small" onClick={() => handleDeleteRecord(row.index)}>Delete</Button>
                        <Button variant="contained" color="primary" size="small" onClick={() => handleEditRecord(row,row.index)}>Edit</Button>
                    </div>
                )
            }
        }
    ]

    const handleEditData = (data,id) => {
        const studentRecordData = {
            data,
            id
        }
        if(studentRecordData){
            dispatch(updateStudentRecord(studentRecordData))
        }

    }
    return (
        <Layout>
            {
                studentData.loading ?
                    (
                        <div>
                            Loading ...
                        </div>
                    ) : (
                        <>
                            <CustomModal fade isOpen={modal} toggle={modalToggle} editStudentData={editStudentData} handleEditData={handleEditData}></CustomModal>
                            <ReactTable
                                data={studentData && studentData.data}
                                columns={columns}
                                filterable={false}
                                showPagination={false}
                                resizable={true}
                                defaultPageSize={parseInt(studentData.data && studentData.data.length)}
                                pageSize={parseInt(studentData.data && studentData.data.length)}
                                className="-striped -highlight text-center"
                            />
                        </>
                    )
            }
        </Layout>
    )
}
