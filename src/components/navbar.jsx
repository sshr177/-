import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faRss, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faStar, faClock } from '@fortawesome/free-regular-svg-icons'
import { useState } from "react"

const NavbarWapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0px;
    height: 48px;
    
`

const NavTabs = styled.div`
    display: flex;
    flex-direction: row;
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
    cursor: pointer;
`
const NavActcion = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const DropDown = styled.div`
    position: relative;
    margin: 10px;
`
const DropDownButton = styled.button`
    width: 100px;
    height: 48px;
    padding: 0 12px;
    font-weight: 700;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: none;
    border-radius: 6px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
`
const DropDownMenu = styled.div`
    position: absolute;
    top: 56px;
    right: 0;
    z-index: 10;

    width: 192px;
    height: 42.5px;
    background: white;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
`

const DropDownItem = styled.button`
    width: 100%;
    height: 48px;
    padding: 0 16px;

    border: none;
    border-bottom: 1px solid #f1f3f5;
    background: white;
    text-align: left;
    cursor: pointer;

    color: ${({ $selected }) => $selected ? "#12b886" : "#212529"};
    font-weight: ${({ $selected }) => $selected ? "700" : "400"};
    
    &:hover {
    background: #f8f9fa;
    }

    &:last-child {
        border-bottom: none;
    }
`

const Navbar = () => {
    const [selected, setSelected] = useState("이번 주");
    const [isOpen, setIsopen] = useState(false);

    const selectOption = (option) => {
        setSelected(option);
        setIsopen(false);
    };

    return (
        <NavbarWapper>
            <NavTabs>
                <Tags><FontAwesomeIcon icon={ faArrowTrendUp } style={{color: "rgb(0, 0, 0)",}} />트렌딩</Tags>
                <Tags style={{color: "gray",}}><FontAwesomeIcon icon={ faStar } style={{color: "gray",}} />추천</Tags>
                <Tags style={{color: "gray",}}><FontAwesomeIcon icon={ faClock } style={{color: "gray",}} />최신</Tags>
                <Tags style={{color: "gray",}}><FontAwesomeIcon icon={ faRss } style={{color: "gray",}} />피드</Tags>
            </NavTabs>
            <NavActcion>
                <DropDown>
                    <DropDownButton type="button" onClick={()=>setIsopen(!isOpen)}>
                        {selected}
                        <span>⌄</span>
                    </DropDownButton>

                    {isOpen && (
                        <DropDownMenu>
                            {["오늘", "이번 주", "이번 달", "올해"].map((option) => (
                                <DropDownItem key={option} type="button" $selected={selected === option} onClick={() => selectOption(option)}>
                                    {option}
                                </DropDownItem>
                            ))}
                        </DropDownMenu>
                        )}
                </DropDown>
                <FontAwesomeIcon icon={ faEllipsisVertical } style={{color: "rgb(134, 142, 150)",}} />
            </NavActcion>
        </NavbarWapper>
    )

}

export default Navbar