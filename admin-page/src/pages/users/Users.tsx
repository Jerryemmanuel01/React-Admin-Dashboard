import DataTable from "../../components/dataTable/DataTable";
// import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";

const colums: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const url = "https://react-admin-dashboard-servers.vercel.app/api/users";
// const url = "http://localhost:8800/api/users";

const Users = () => {
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();

    setData(users)
    setisLoading(false)
  };

  useEffect(() => {
    getUsers();
  }, []);

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch(url).then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New Users</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable colums={colums} rows={data} slug="users" />
      )}
      {open && <Add setOpen={setOpen} slug="user" columns={colums} />}
    </div>
  );
};

export default Users;
