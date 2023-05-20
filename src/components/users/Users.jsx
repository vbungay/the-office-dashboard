import React from 'react'
import avatar from '../../assets/avatar.png'
import dwight from '../../assets/dwight.jpg'
import jim from '../../assets/jim.jpg'
import stanley from '../../assets/stanley.jpg'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';
import './Users.scss'

const Users = () => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'name',
            headerName: 'User Name',
            width: 180,
            renderCell: (params: GridValueGetterParams) => (
                <div className="user-list">
                    <img className="img" src={params.row.avatar} alt="avatar" />
                    {params.value}
                </div>
            )
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'occupation', headerName: 'Job Title', width: 250, },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params: GridValueGetterParams) => (
                <div>
                    <button className="btn edit">
                        <div className="btn-edit">
                            <Edit className="user-icon" />
                            Edit
                        </div>
                    </button>
                    <button className="btn delete">
                        <div className="btn-delete">
                            <Delete className="user-icon" />
                            Delete
                        </div>

                    </button>
                </div>
            )
        }
    ];

    const rows = [
        { id: 1, name: 'Michael Scott', email: 'MiketheMagic@gmail.com', avatar: avatar, occupation: "Regional Manager" },
        { id: 2, name: 'Dwight Schrute', email: 'Recyclops@gmail.com', avatar: dwight, occupation: "Assistant to the Regional Manager" },
        { id: 3, name: 'Jim Halpert', email: 'Jimbo@gmail.com', avatar: jim, occupation: "Sales Representative" },
        { id: 4, name: 'Pam Beesly', email: 'Pamcake@gmail.com', avatar: dwight, occupation: "Office Admin" },
        { id: 5, name: 'Ryan Howard', email: 'Temp@gmail.com', avatar: stanley, occupation: "Temp" },
        { id: 6, name: 'Andy Bernard', email: 'NardDog@gmail.com', avatar: stanley, occupation: "Sales Representative" },
        { id: 7, name: 'Angela Martin', email: 'Pumpkin@gmail.com', avatar: stanley, occupation: "Senior Accountant" },
        { id: 8, name: 'Kelly Kapoor', email: 'Kapoor@gmail.com', avatar: stanley, occupation: "Sales Representative" },
        { id: 9, name: 'Toby Flenderson', email: 'WasteofLife@gmail.com', avatar: stanley, occupation: "Human Resources" },
        { id: 10, name: 'Creed Bratton', email: 'OldMan@gmail.com', avatar: stanley, occupation: "Quality Assurance" },
        { id: 11, name: 'Darryl Philbin', email: 'Darnell@gmail.com', avatar: stanley, occupation: "Warehouse Manager" },
        { id: 12, name: 'Kevin Malone', email: 'Chumbo@gmail.com', avatar: stanley, occupation: "Accountant" },
        { id: 13, name: 'Meredith Palmer', email: 'Floozy@gmail.com', avatar: stanley, occupation: "Supplier Relations" },
        { id: 14, name: 'Oscar Martinez', email: 'BigO@gmail.com', avatar: stanley, occupation: "Accountant" },
        { id: 15, name: 'Phyllis Vance', email: 'Phallus@gmail.com', avatar: stanley, occupation: "Sales Representative" },
        { id: 16, name: 'Stanley Hudson', email: 'PapaBear@gmail.com', avatar: stanley, occupation: "Sales Representative" },
    ];
    return (
        <div className="users">
            <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
                <DataGrid
                    rows={rows}
                    disableRowSelectionOnClick
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 8 },
                        },
                    }}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Users