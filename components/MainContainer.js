import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"Next JS" + keywords}></meta>
                <title>{keywords}</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text="Home"/>
                <A href={"/users"} text="Users"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar{
                        background: red;
                        padding: 20px;
                        margin-bottom: 25px
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;
