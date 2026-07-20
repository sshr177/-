import styled from "styled-components";
import Header from "./components/Header.jsx"
import { Outlet, useMatch } from "react-router-dom";
import dummyData from "./data/dummy_data.js";

const Main = styled.div`
    width: 1024px;
    margin: 0 auto;
`

const Layout = () => {
    const detailMatch = useMatch("/DetailPage/:id");

    const post = detailMatch?dummyData.find((item) => item.id === detailMatch.params.id): null;
    return (
        <>
        <Main>
            <Header post={post}></Header>
            <Outlet />
        </Main>
    </>
    )
}

export default Layout