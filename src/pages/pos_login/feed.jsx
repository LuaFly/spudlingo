import React from "react";
import Card from "./ingles/card";
import CardA2 from "./ingles/cardA2";
import CardB1 from "./ingles/cardB1";

const Feed = () => {
    return (
        <div className="feed-container">
            <h1>Inglês</h1>
                <div className="card-container">
                    <Card />
                    <CardA2 />
                    <CardB1 />
                </div>

        </div>
    );
};

export default Feed;
