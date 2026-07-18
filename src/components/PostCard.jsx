import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const CardSection = styled.div`
    width: 320px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Postimg = styled.img`
    width: 320px;
    height: 167px;
`
const PostContentWapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
`
const PostContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Posttitle = styled.h4`
    height: 24px;
    margin: 0;
    margin-bottom: 4px;
    overflow: hidden;
`
const PostSummary = styled.p`
    height: 63px;
    margin: 0;
    margin-bottom: 24px;
`
const PostDate = styled.div`
    color: #868E96;
    font-size: 12px;
`
const PostAuthorWapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    span{
        font-size: 12px;
        color: #868E96;
    }
    
    b{
        font-size: 12px;
        color: black;
        padding-left: 2px;
    }
`
const Authorimg = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`

const Postfooter = styled.div`
    border: 1px solid rgb(241, 243, 245);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    
`
const PostLike = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: small;
    gap: 6px;

    span{
        padding-bottom: 2px;
        font-size: 12px;
    }
`

const PostCard = ({ post }) => {
    const { title, summary, author, date, likes, comments, thumbnail} = post;
    return (
        <CardSection>
            <Postimg src={thumbnail} />
            <PostContentWapper>
                <PostContent>
                    <Posttitle>{ title }</Posttitle>
                    <PostSummary>{ summary }</PostSummary>
                </PostContent>
                <PostDate>
                    <span>{ date } · { comments }개의 댓글</span>
                </PostDate>
            </PostContentWapper>
            <Postfooter>
                <PostAuthorWapper>
                    <Authorimg src={ thumbnail }/>
                    <span>by <b>{ author.name }</b></span>
                </PostAuthorWapper>
                <PostLike>
                    <FontAwesomeIcon icon={ faHeart } style={{color: "rgb(0, 0, 0)",}} />
                    <span>{ likes }</span>
                </PostLike>
            </Postfooter>

        </CardSection>
    )
}

export default PostCard