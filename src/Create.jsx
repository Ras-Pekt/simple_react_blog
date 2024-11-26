import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log(`Blog (${blog.title}) has been created successfully!`);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="create">
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Author</label>
        <input
          type="text"
          required
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <label>Body</label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <button>Create Blog</button>
      </form>
    </div>
  );
};

export default Create;
