import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Cart/Cart'
import { default as S } from './Layout.styled';

const Layout = () => {
    const [sidebarActive, setSidebarActive] = useState<boolean>(false);

    const handleSidebar = (value: boolean) => {
        setSidebarActive(value);
    }

    return (
        <>
            <S.Layout sidebarActive={sidebarActive}>
                <Navbar open={() => handleSidebar(true)} />
                <S.Main>
                    <Outlet />
                </S.Main>
            </S.Layout>
            {
                sidebarActive &&
                <Sidebar close={() => handleSidebar(false)} />
            }
        </>
    )
}

export default Layout;