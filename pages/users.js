import Link from 'next/link'
import MainContainer from "../components/MainContainer";
import style from '../styles/users.module.scss'

const Users = ({users}) => {


    return (
        <MainContainer keywords={"Users list"}>
            <h1>Users list</h1>
            <ul className={style.users_list}>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    )
}

export default Users;


export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {users}, // will be passed to the page component as props
    }
}
