import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  const [clicked, setClicked] = React.useState(false);

  const sectionStyle = {
    display: clicked ? "inline" : "none"
  };

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setNote((previousValue) => {
      return {
        ...previousValue,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    setClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          onClick={handleClick}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          style={sectionStyle}
        />
        <button
          type="button"
          style={sectionStyle}
          onClick={() => {
            props.onClick(note);
            setNote({ title: "", content: "" });
          }}
        >
          <AddCircleIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
