import styled from 'styled-components'
import logo from '../assets/banner-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const HeaderWrapper = styled.div`
    padding: 12px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const HeaderLogo = styled.img`
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

const Header = () => {
    return(

        <>
        <HeaderWrapper>
            <HeaderLogo src={ logo } alt="velog logo"/>
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