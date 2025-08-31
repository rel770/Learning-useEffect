import { useEffect } from "react";

function ExampleUseEffect1() {
    // This effect runs only once when the component mounts
    useEffect(() => {
        console.log("Mounted");
    }, []); // Empty array means run only on mount

    return <h1>Hello Operator</h1>;
}

export default ExampleUseEffect1;
