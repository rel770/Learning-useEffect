import { useState, useEffect } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
}

function ExampleUseEffect3() {
    const [data, setData] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // This effect runs once on mount to fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                console.log("Fetching data from API...");

                // Fetch from a public API
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await response.json();
                setData(result);
                console.log("Data fetched successfully:", result);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty array means run only once on mount

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h3>Fetched Data:</h3>
            {data && (
                <div>
                    <p><strong>ID:</strong> {data.id}</p>
                    <p><strong>Title:</strong> {data.title}</p>
                    <p><strong>Body:</strong> {data.body}</p>
                </div>
            )}
        </div>
    );
}

export default ExampleUseEffect3;
