import React, { PureComponent } from "react";
// import Routes from "../routes";
import TrelloList from "./TrelloList";
// import { connect } from "react-redux";
// import TrelloCreate from "./TrelloCreate";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";
// import { sort } from "../actions";

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <h1>DDDD</h1>
        <TrelloList title={"test11111"} />
      </div>
        // return <Routes />;
    );
  }
}

export default App;