import styled from "styled-components"
import PostCard from "../components/PostCard"
import dummyData from "../data/dummy_data";
import Navbar from "../components/navbar";

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    padding-top: 30px;
`


function MainPage () {
    return (
        <>
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