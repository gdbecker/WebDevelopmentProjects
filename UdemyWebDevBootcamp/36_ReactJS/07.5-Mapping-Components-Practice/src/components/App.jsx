import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

function createEntry(e) {
  return <Entry emoji={e.emoji} name={e.name} meaning={e.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
