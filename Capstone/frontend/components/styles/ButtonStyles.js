import styled from "styled-components"

const ButtonStyles = styled.div`
    width: 10rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5rem;
    background: var(--orange);
    color: black;
    border-radius: 1rem;

    @media(max-width: 700px)
    {
        display: none;
    }
`

export default ButtonStyles;