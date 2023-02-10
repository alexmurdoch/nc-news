import { removeComments } from "../api";

export const DeleteComment = (id) => {
  const handleSubmit = (e) => {
    console.log(id);
    e.preventDefault();
    removeComments(id);
    window.location.reload();
  };

  return (

    <form onSubmit={handleSubmit}>
        
        <button onClick={handleSubmit} type="submit"> Delete</button>
    </form>
  )
};