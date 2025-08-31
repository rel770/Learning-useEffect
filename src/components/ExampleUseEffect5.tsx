import { useState, useEffect } from "react";

function ExampleUseEffect5() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    // This effect runs when either firstName or lastName changes
    useEffect(() => {
        console.log("Building full name from:", { firstName, lastName });

        if (firstName || lastName) {
            const newFullName = `${firstName} ${lastName}`.trim();
            setFullName(newFullName);
            console.log("Full name updated to:", newFullName);
        } else {
            setFullName("");
            console.log("Full name cleared");
        }
    }, [firstName, lastName]); // Multiple dependencies

    return (
        <div>
            <div style={{ marginBottom: '15px' }}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter first name"
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </label>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter last name"
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </label>
            </div>

            <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
                <h4>Full Name: {fullName || "No name entered"}</h4>
            </div>

            <p><small>Check console to see when the effect runs</small></p>
        </div>
    );
}

export default ExampleUseEffect5;
