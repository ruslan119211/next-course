export default function Error() {
    return (
        <>
            <h1>
                Error 404 <br/> Page not found
            </h1>
            <a href="/">Go home</a>

            <style jsx>
                {`
                    a{
                        font-size: 16px;
                        text-decoration: none;
                        display: flex;
                        background: red;
                        color: #fff;
                        padding: 10px 25px;
                        margin: auto;
                        width: max-content;
                    }
                `}
            </style>
        </>
    )
}
