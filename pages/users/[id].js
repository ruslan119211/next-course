import {useRouter} from 'next/router'
import style from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    const {query} = useRouter()

    return (
        <MainContainer keywords={"User "+ user.name}>
            <div className={style.user} >
                <h1>Users {query.id}</h1>
                <p>User name {user.name}</p>
            </div>

        </MainContainer>
    )
}


export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user}, // will be passed to the page component as props
    }
}
