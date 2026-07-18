import styled from "styled-components"
import Header from "../components/Header"
import Navbar from "../components/navbar"
import PostCard from "../components/PostCard"
import dummyData from "../data/dummy_data";

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
`


function MainPage () {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <CardGrid>
                {dummyData.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </CardGrid>
            
        </>
    )
}

export default MainPage