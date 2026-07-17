import { useEffect, useState } from "react";
import {
  getUsers,
  deleteUser,
} from "../services/adminService";

function ManageUsers(){
    const [users, setUsers] = useState([]);



    const fetchUsers = async () => {
        try {
            const response = await getUsers();

            console.log(response.data);
            

        setUsers(response.data.users);
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
    fetchUsers();
  }, []);

    const handleDelete = async (id) => {
        if(!window.confirm("Delete this user")){
            return;
        }
    try {
        await deleteUser(id);

        alert("User Deleted")

        fetchUsers()

    } catch (error) {
        console.log(error);
        alert("Delete Failed")
        
    }

    };

    return(
         <div className="container mt-4">

            <h2>
                Manage Users
            </h2>
            <table className="table table-bordered">
                 <thead>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>
            {
                users.map((user) => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.role}</td>

                        <td>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>

              </td>
                    </tr>
                ) )
            }
        </tbody>
            </table>

</div>
    )
}

export default ManageUsers;