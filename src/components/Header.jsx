import styled from 'styled-components'
import logo from '../assets/logoVelog.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Vlogo from '../assets/logoV.png'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.div`
    padding: 12px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`
const HeaderLogo = styled.img`
    display: block;
    width: 71px;
    height: 24px;
`

const HeaderActcion = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
`
const IconButton = styled.div`
    font-size: large;
`

const LoginButton = styled.button`
    background-color: black;
    border-radius: 1rem;
    color: white;
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    font-weight: 700;
`
const BlogLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    a {
        display: flex;
        align-items: center;
    }
`
const BlogIcon = styled.img`
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 10px;
`
const BlogName = styled.span`
    font-size: 21px;
    font-weight: 600;
`
const Header = ({ post }) => {
    return(

        <>
        <HeaderWrapper>
            { post ? (
                <BlogLogo>
                    <Link to={`/`}>
                        <BlogIcon src={ Vlogo } alt='velog logo'></BlogIcon>
                    </Link>
                    <BlogName>{post.author.name}. log</BlogName>
                </BlogLogo>
            ) : (
                    <HeaderLogo src={ logo } alt="velog logo"/>
            )}
            <HeaderActcion>
                <IconButton>
                    <FontAwesomeIcon icon={faBell} style={{ color: 'rgb(0, 0, 0)' }} />
                </IconButton>
                <IconButton>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "rgb(0, 0, 0)",}} />
                </IconButton>
                <LoginButton>로그인</LoginButton>
            </HeaderActcion>
        </HeaderWrapper>
        </>
    )
}

export default Header