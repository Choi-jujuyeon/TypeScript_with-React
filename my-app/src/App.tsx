import React, { FC } from "react";
import Box from "./components/Box";

const App: FC = () => {
    return (
        <div>
            <Box color="pink" width={200} height={200} />
            <Box color="red" width={400} height={100} />
            <Box color="blue" width={300} height={450} />
        </div>
    );
};

export default App;
