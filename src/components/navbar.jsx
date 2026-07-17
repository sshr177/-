import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faRss, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faStar, faClock } from '@fortawesome/free-regular-svg-icons'

const NavbarWapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0px;
    
`

const NavTabs = styled.div`
    display: flex;
    display: row;
`

const Tags = styled.a`
    font-size: 18px;
    font-weight: 700;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
`
const NavActcion = styled.div`
    display: flex;
    gap: 8px;
`
const DropBox = styled.select`
    
`

const Navbar = () => {
    return (
        <NavbarWapper>
            <NavTabs>
                <Tags><FontAwesomeIcon icon={ faArrowTrendUp } style={{color: "rgb(0, 0, 0)",}} />트렌딩</Tags>
                <Tags><FontAwesomeIcon icon={ faStar } style={{color: "rgb(0, 0, 0)",}} />추천</Tags>
                <Tags><FontAwesomeIcon icon={ faClock } style={{color: "rgb(0, 0, 0)",}} />최신</Tags>
                <Tags><FontAwesomeIcon icon={ faRss } style={{color: "rgb(0, 0, 0)",}} />피드</Tags>
            </NavTabs>
            <NavActcion>
                <DropBox type="dropdox">
                    <option>오늘</option>
                    <option>이번 주</option>
                    <option>이번 달</option>
                    <option>올해</option>
                </DropBox>
                <FontAwesomeIcon icon={ faEllipsisVertical } style={{color: "rgb(134, 142, 150)",}} />
            </NavActcion>
        </NavbarWapper>
    )

}

export default Navbar