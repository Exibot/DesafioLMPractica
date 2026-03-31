import React, { useState, useEffect } from "react";

function Search() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const url = "https://jsonplaceholder.typicode.com/users";

    const getData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    let result = [];
    if (!search) {
        result = users;
    } else {
        result = users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase()),
        );
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
            />

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User name</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default Search;
