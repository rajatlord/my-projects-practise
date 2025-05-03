function UserList(){
    const users =["RJ" , "Emily", "Alex", "Sophia"];
    return(
        <ul>
            {users.map((user , index)=>(
                <li key = {index}>👤 {user}</li>
            ))}

        </ul>
    )
}

export default UserList;