import "./add.scss";
import { GridColDef } from "@mui/x-data-grid";
import { useQueryClient, useMutation } from "@tanstack/react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {

   const queryClient = useQueryClient();

   const mutation = useMutation({
     mutationFn: () => {
       return fetch(`http://localhost:8800/api/${props.slug}s`, {
         method: "post",
       });
     },
     onSuccess: () => {
       queryClient.invalidateQueries([`all${props.slug}s`]);
     },
   });


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //add new item
    mutation.mutate();
    props.setOpen(false);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={() => handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")

            .map((column) => (
              <div className="item">
                <label> {column.headerName} </label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
