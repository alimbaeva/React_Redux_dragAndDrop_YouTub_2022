import React, { PureComponent } from "react";
// import Routes from "../routes";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
// import { ListAlt } from "@material-ui/icons";
// import TrelloCreate from "./TrelloCreate";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";
// import { sort } from "../actions";

class App extends PureComponent {
  render() {

    const { lists } = this.props;

    return (
      <div className="App">
        <h1>DDDD</h1>
        <div style={styles.listsContainer} >
          { lists.map(list => <TrelloList title={list.title} cards={list.cards} /> )}
        </div>
      </div>
        // return <Routes />;
    );
  }
}

const styles = {
  listsContainer: {
      display: "flex",
      flexDirection: "row",
      marginRight: 8,
  },
}

const mapStateToProps = state => ({
  lists: state.lists // lists: state.myLista
})

export default connect(mapStateToProps) (App);