import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import AsideMenu from '../components/general_components/Aside';
import { Aside, GridStyle, GridLandingStyle, Header, Main, MainLandingStyle } from '../components/style/generalStyle'

const Layout = () => {
    const [logged, setLogged] = useState(sessionStorage.getItem('user') ? true : false)

    return (
        logged 
            ? 
            <GridStyle>
                <Header>I'm a header</Header>
                <Aside><AsideMenu /></Aside>
                <Main>
                    <Outlet context={{setLogged}}/>
                </Main>
            </GridStyle>
            :
            <GridLandingStyle>
                <MainLandingStyle>
                    <Outlet context={{setLogged}}/>
                </MainLandingStyle>
            </GridLandingStyle>
    )
}

export default Layout