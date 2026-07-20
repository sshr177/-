import styled from "styled-components"
import { useParams } from "react-router-dom"
import dummyData from "../data/dummy_data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons'

const DetailPageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 768px;
    margin: 0 auto;
    gap: 32px;

`
const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F1F3F5;
    height: 13  0px;
    border-radius: 25px;
    gap: 10px;
    padding: 5px;
    position: sticky;
    top:350px;

`
const IconButton = styled.button`
    border: 1px solid #f1f3f5;
    background-color: white;
    border-radius: 50px;
    width: 40px;
    height: 40px;
`
const LikeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
        font-size: 10PX;
        color: #868E96;
    }
`
const ArticleWrapper = styled.div`
    margin: 30px 0;
`
const Header = styled.div`
`
const Title = styled.div`
    margin-bottom: 32px;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
`
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;
`
const PostInfo = styled.div`
    color: #495057;
    font-weight: 300;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;

    a {
        font-size: 16px;
        text-decoration: none;
        font-weight: bold;
        color: #212529;
    }
    span {
        font-size: 16px;
        color: #495057;
        font-weight: 300;
    }
`
const Content = styled.div`
    font-size: 1.125rem;
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    overflow-wrap: break-word;
    font-weight: 400;
    margin-bottom: 55px;
    color: #212529;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
`
const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img{
        width: 128px;
        height: 128px;
        border-radius: 50%;
    }
`
const AuthorInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    span {
        font-size: 24px;
        font-weight: bold;
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
    }
    
`
const FollowButton = styled.button`
    background-color: transparent;
    color: #12B886;
    border: 1px solid #12B886;
    width: 96px;
    height: 32px;
    font-weight: 700;
    border-radius: 16px;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
`

function DetailPage () {
    const { id } = useParams();

    const post = dummyData.find((item) => item.id == id);

    const { title, author, date, summary, content, likes, thumbnail} = post;
    return (
        <DetailPageWrapper>
            <IconWrapper>
                <LikeBox>
                    <IconButton><FontAwesomeIcon icon={ faHeart } style={{color: "#868E96",}} /></IconButton>
                    <span>{ likes }</span>
                </LikeBox>
                <IconButton><FontAwesomeIcon icon={ faShareNodes } style={{color: "#868E96",}} /></IconButton>
            </IconWrapper>
            <ArticleWrapper>
                <Header>
                    <Title>
                        <h1>{ title }</h1>
                    </Title>
                    <InfoWrapper>
                        <PostInfo>
                            <a>{author.name}</a> · <span>{date}</span>
                        </PostInfo>
                        <FollowButton>팔로우</FollowButton>
                    </InfoWrapper>
                </Header>
                <Content>
                    <h1>{summary}</h1>
                    <p>{ content }</p>
                </Content>
                <Footer>
                    <AuthorInfo>
                        <img src={ thumbnail }/><span>{author.name}</span>
                    </AuthorInfo>
                    <FollowButton>팔로우</FollowButton>
                </Footer>
            </ArticleWrapper>
        </DetailPageWrapper>
    )
}

export default DetailPage