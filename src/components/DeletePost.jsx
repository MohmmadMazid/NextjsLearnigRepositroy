"use client";
const DeletePost = ({ id }) => {
  const handleDeletePost = async () => {
    try {
      let res = await fetch(`http://localhost:3000/api/my/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Post deleted successfully");
      } else {
        alert("Post not found or failed to delete");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <button onClick={handleDeletePost}>Delete Post</button>
    </div>
  );
};

export default DeletePost;
