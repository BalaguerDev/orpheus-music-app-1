import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { color, device } from "./utils/styleConstants";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    HTML, body, #root{
        height: 100vh;
        width: 100vw;
        background-color: ${color.primaryBlack};
        font-family: 'Roboto', sans-serif;
        color: ${color.primaryWhite};
        overflow-x: hidden;
        &::-webkit-scrollbar {
            cursor: pointer;
            width: 4px;
            height: 4px;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #9D9D9D;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: ${color.secondaryYellow};
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
`

export const GridStyle = styled.div`
    display: grid; 
    height: 100%;
    grid-template-rows: 1fr 50px; // Grid for Mobile
    
    @media ${device.desktop}{
        height: 100%;
        grid-template: 60px 1fr 50px / 200px 1fr; // Grid for desktop
    };  
`
export const GridLandingStyle = styled.div`
    display: grid; 
    height: 100%;
    grid-template: 1fr 50px / 1fr; // Grid for Mobile    
    `

export const Header = styled.header`
    display: none; 
    @media ${device.desktop} {
        position: fixed;
        top: 0;
        grid-column: 1;
        grid-row: 1;
        width: 200px;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 20px;
    }
`

export const Main = styled.main`
    grid-row: 1;
    @media ${device.desktop}{
        grid-column: 2;
        grid-row: 1 / span 3;
        width: 100%;
        height: 100%;
    }
`
export const MainLandingStyle = styled.main`
    grid-row: 1; 
`
export const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.desktop}{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row: 3;
        grid-column: 1;
    }
`

export const Aside = styled.aside`
    width: 100%;
    height: 50px;
    grid-row: 2; 
    position: static;
    bottom: 0;
    background-color: #121212CC;
    @media ${device.desktop}{
        width: 300px;
        height:100%;
        grid-column: 1;
        grid-row: 2;
    }
`

export const AsideMobileStyle = styled.aside`
    display: flex;
    background-color: #121212dd;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 25px;
    padding: 5px;
    position: fixed;
    bottom: 0;
    left: 0;
`

export const AsideDesktopStyle = styled.aside`
    position: fixed;
    top: 50px;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 10px;
`

export const LinkAside = styled(Link)`
    display: flex;
    align-items: center;
    padding-bottom: 3px;
    color: ${props => props.active};
    text-decoration: none;
    font-size: 1.2em;
    transition: 300ms;
    &:hover{
        color: ${color.primaryYellow};
        transform: scale(1.03);
    }
    @media ${device.desktop}{
        display: flex;
        padding-left: 5px;
        margin: 15px 0;
    }
`
export const PMenuStyle = styled.p`
    margin-left:10px;
`

export const Hr = styled.hr`
    opacity: .1;
    width: 90%;
`

export const ButtonPrimaryStyle = styled.button`
    background-color: ${color.primaryYellow};
    color: ${color.primaryBlack};
    height: 40px;
    width: 280px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    border: none;
    font-weight: bold;
    font-size: 18px;
    border-radius: calc(40px * .5);
    cursor: pointer;
    margin: 10px auto;
    transition: 300ms;
    &:hover{
        transform: scale(1.1);
    }
    &:disabled {
        color: ${color.secondaryBlack};
        background-color: ${color.secondaryYellow};
        cursor: default;
        &:hover{ 
            transform: none;
            }
    }
`

export const ButtonSecondaryStyle = styled.button`
    
    background: #3d3d3d77;
    color: ${color.primaryYellow};
    height: 40px;
    width: 150px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    font-weight: bold;
    border: 2px solid ${color.primaryYellow};
    border-radius: calc(40px * .5);
    font-size: 10px;
    transition: 300ms;
    &:hover{
        transform: scale(1.1);
    }
`

export const ImgLogoL = styled.img`
    object-fit: contain;
    height: 110px;
    margin: 0 auto 20px;
`
export const ImgLogoM = styled.img`
    object-fit: contain;
    height: 60px;
    margin: 0 auto 20px;
`

export const ImgLogoS = styled.img`
    object-fit: contain;
    height: 35px;
`

export const H2Style = styled.h2`
    color: ${color.primaryYellow};
    font-size: 24px;
    font-weight: bold;
    cursor:pointer;
    @media ${device.desktop}{
        font-size: 36px;
    }
    &:hover{
        color:${color.primaryWhite}
    }
`
export const H3Style = styled.h3`
    color: ${color.primaryYellow};
    font-size: 22px;
    font-weight: bold;
    justify-content: center;
    @media ${device.desktop}{
        font-size: 30px;
    }
    &:hover{
        color:${color.primaryWhite}
    }
`
export const H2StyleWhite = styled.h2`
    color: ${color.primaryWhite};
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    @media ${device.desktop}{
        font-size: 36px;
    }
    &:hover{
        color:${color.primaryYellow}
    }
`
export const H4Style = styled.h4`
    color: ${color.primaryWhite};
    font-size: 20px;
    font-weight: bold;
    color:${color.primaryYellow};
    @media ${device.desktop}{
        font-size: 24px;
    }
`
export const H5StyleAside = styled.h5`
    color: ${color.primaryWhite};
    font-size: 18px;
    font-weight: bold;
    color:${color.primaryYellow};
    padding-left: 20px;
    cursor: pointer;
    @media ${device.desktop}{
        font-size: 20px;
    }
`
export const FieldsetStyle = styled.fieldset`
    border: none;  
`

export const DivStepsContainer = styled.div`
    border: 1px solid ${color.primaryWhite};
    height:  8px;
    width: 350px;
    margin-bottom: 20px;
    border-radius: calc(8px * .5);
    display: flex;
    align-items: center;
    justify-content: left;
`
export const DivStepsCounter = styled.div`
    background-color: ${color.primaryYellow};
    height: 5px;
    width: ${props => `${parseInt(props.step) * 116}px` || "85px"};
    border-radius: calc(5px * .5);
    transition: 500ms;
`

export const DivInputStyle = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    justify-content:center;
`

export const LabelStyle = styled.label`
    margin: 0 auto;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
`

export const LabelFilesStyle = styled.label`
    height: 40px;
    width: 280px;
    border: 2px solid ${color.primaryYellow};
    font-size: 18px;
    border-radius: calc(40px * .5);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const InputStyle = styled.input`
    background-color: ${color.primaryWhite};
    height: 40px;
    width: 280px;
    border: none;
    font-size: 18px;
    border-radius: calc(40px * .5);
    margin: 10px auto;
    text-align: center;
    display: column;
`
export const SelectStyle = styled.select`
    background-color: ${color.primaryWhite};
    height: 40px;
    width: 280px;
    border: none;
    font-size: 18px;
    border-radius: calc(40px * .5);
    margin: 10px auto;
    text-align: center;
    display: column;
`
export const SelectCountry = styled(CountryDropdown)`
    background-color: ${color.primaryWhite};
    height: 40px;
    width: 120px;
    border: none;
    font-size: 18px;
    border-radius: calc(40px * .5);
    margin: 10px auto;
    text-align: center;
    display: column;
`
export const SelectRegion = styled(RegionDropdown)`
    background-color: ${color.primaryWhite};
    height: 40px;
    width: 160px;
    border: none;
    font-size: 18px;
    border-radius: calc(40px * .5);
    margin: 10px auto;
    text-align: center;
    display: column;
`

export const BtnSelectOption = styled.button`
    background: ${color.primaryBlack};
    color: ${color.primaryWhite};
    border-radius: calc(40px * .5);
    height: 40px;
    width: 280px;
    border: none;
    font-size: 18px;
    margin: 0 auto;
    &:hover {
        background-color: #ffffff22;
        cursor: pointer;
    }
`

export const PErrorStyle = styled.p`
    color: ${color.primaryError};
    font-size: 14px;
    text-align: center;
`

export const HrStyle = styled.hr`
    margin: 15px 0;
    opacity: .1;
`

export const LinkPrimaryStyle = styled(Link)`
    color: ${color.primaryYellow};
    text-decoration: none;
`

export const LinkSecondaryStyle = styled(Link)`
    color: ${color.primaryWhite};
    text-decoration: none;
    &:hover {
        color: ${color.primaryYellow};
    }
`

/* DIVS IMAGE ALBUMS, TRACKS, USERS,... */
/* CIRCLE */
export const DivImgCircleL = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    @media ${device.desktop}{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    } 
`

export const DivImgCircleM = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    @media ${device.desktop}{
        width: 130px;
        height: 130px;
        border-radius: 50%;
    }
`

export const ImgCircleS = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    @media ${device.desktop}{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }    
`
export const ImgCircleXL = styled.img`
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    @media ${device.desktop}{
        width: 180px;
        height: 180px;
        border-radius: 50%;
    }    
`

/* SQUARE */
export const DivImgSquareL = styled.div`
    width: 250px;
    height: 250px;
    border-radius: calc(250px * .04);
    @media ${device.desktop}{
        width: 400px;
        heigth: 400px;
        border-radius: 10px;
    }
`

export const DivImgSquareM = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 10px;
    @media ${device.desktop}{
        width: 200px;
        heigth: 200px;
        border-radius: 10px;
    }
`

export const DivImgSquareS = styled.div`
    width: 135px;
    height: 135px;
    border-radius: 10px;
    @media ${device.desktop}{
        width: 100px;
        heigth: 100px;
        border-radius: 10px;
    }
`
export const DivMainSpinnerStyle = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

/* BANNER CONTAINER FULL-WIDTH */
export const DivImgBannerSliderHome = styled.div`
    width: 100%;
    height: 500px;
`

/* RECTANGLE */
export const DivImgRectangleL = styled.img`
    display:block;
    width: 280px;
    height:190px;
    border-radius: 20px 20px 0 0;
    object-fit:cover;
    transition: 300;
    @media ${device.desktop}{
        width: 420px;
        height:250px;
    }
   
`
export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    fieldset {
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    legend {
        color: ${color.primaryYellow};
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }

`
export const DivMusicPlayer = styled.div`
    display: flex;
    position: fixed;
    width: 100vw;
    bottom: 23.8px;
    @media ${device.desktop}{
        width: calc(100vw - 204px);
        bottom: 0;
    }
`
export const DivMusicPlayerInfo = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    color: white;
    @media ${device.desktop}{
        width: 240px;
    }
`

export const DivInfoTrack = styled.div`
    display: none;
    @media ${device.desktop}{
        display: flex;
        width: 200px;
        background-color: ${color.primaryBlack};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 3px 0 0 3px;
    }
 `

export const ButtonClosePlayer = styled.button`
    border: none;
    color: ${color.primaryWhite};
    background-color: #12121299;
    font-size: 24px;
    width: 40px;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    &:hover{
        color: ${color.primaryYellow};
    }
    @media ${device.desktop}{
        background-color: #121212;
    }
`
export const SpanPlayerUser = styled.span`
    font-size: .8em;
    color: ${color.secondaryYellow};
`

export const SpanPlayerName = styled.span`
    font-size: .9em;
`

export const DivModalOptions = styled.div`
    width: 350px;
    height: 400px;
    background-color: ${color.primaryBlack};
    padding: 20px;
    border-radius: 25px;
    justify-content: center;
    text-align: center;
    overflow-y:auto;
    @media ${device.desktop}{
        width: 350px;
        height: 450px;
    }
`

export const DivOptionsIcon = styled.div`
    opacity: .5;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        opacity: 1;
        color: ${color.primaryYellow};
    }
`

export const DivInfoMusicBottom = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DivFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const DivPolicy = styled.div`
    padding: 20px;
    margin: 5px;
    @media ${device.desktop}{
        padding: 40px 100px 0 100px;
        margin: 20px;
    }
`