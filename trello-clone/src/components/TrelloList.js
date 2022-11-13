import React from "react";
import TrelloCard from "./TrelloCard";

const TrelloList = ({title}) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            <TrelloCard />
        </div>
    )
}

const styles = {
    container: {
        width: 300,
        backgroundColor: "#ccc",
        borderRadius: 3,
        padding: 5,
    }
}

export default TrelloList;
