import { useState } from "react";
import Button from "./Button";

export default function User() {

    const [isLoading, setIsloading] = useState(false);
    const [user, setUser] = useState(null);

    const loadUser = async () => {
        setIsloading(true);
        const result = await fetch('http://localhost:5173/user.json');
        const response = await result.json();

        console.log(response);
        setUser(response);
        setIsloading(false);
    }

    return(
        <div>
            {!user && !isLoading && <Button text='Load' onClick={loadUser}/>}
            {isLoading && <p>loading...</p>}
            {user && <p>id: {user.id} | name: {user.name}</p>}
        </div>
    )
}