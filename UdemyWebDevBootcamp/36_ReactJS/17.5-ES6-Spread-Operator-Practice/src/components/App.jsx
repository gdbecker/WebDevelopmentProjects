import React from "react";

function App() {
  const [item, setItem] = React.useState("");
  const [itemList, setItemList] = React.useState([]);

  function handleChange(event) {
    var newItem = event.target.value;
    setItem(newItem);
  }

  function addItem() {
    setItemList((previousValue) => {
      return [...previousValue, item];
    });
    setItem("");
  }

  function showItems(i) {
    return <li>{i}</li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{itemList.map(showItems)}</ul>
      </div>
    </div>
  );
}

export default App;
