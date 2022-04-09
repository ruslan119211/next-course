import {useRouter} from 'next/router'
import style from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    const {query} = useRouter()

    return (
        <MainContainer keywords={"User " + user.name}>
            <div className={style.user}>
                <h1>Users {query.id}</h1>
                <div className={style.content}>
                    <p>User Name: <b>{user.name}</b></p>
                    <p>User Email: <b><a href={"mailto:" + user.email}>{user.email}</a></b></p>
                    <p>User Phone: <b><a href={"tel:" + user.phone}>{user.phone}</a></b></p>
                    <p>User Website: <b><a href={user.website}>{user.website}</a></b></p>
                    <p>User Company name: <b>{user.company.name}</b></p>
                </div>

            </div>

        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user},
    }
}
