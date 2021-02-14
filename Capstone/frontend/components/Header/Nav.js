import React from 'react';
import Link from "next/link";
import styled from "styled-components";

const NavStyles = styled.div`
    /* border: solid blue; */
    color: white;
    display: flex;
    justify-content: space-around;
    width: 30%;
    margin-right: 6rem;

    @media(max-width: 700px)
    {
        display: none;
    }
    
`

function Nav() {
    return (
        <NavStyles>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/reserve">Reserve</Link>
            <Link href="/cancel">Cancel</Link>
        </NavStyles>
    )
}

export default Nav
