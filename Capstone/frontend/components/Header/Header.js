import React from "react";
import styled from "styled-components";
import ButtonStyles from "../styles/ButtonStyles";
import Nav from "./Nav";
import Link from "next/link";
import useUser from "../auth/User";
import SignOut from "../auth/SignOut";

const HeaderStyles = styled.div`
	height: 8rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--gray);
`;

const LogoStyles = styled.h1`
	color: white;
	padding: 2rem;
	margin-left: 3rem;
	cursor: pointer;
	font-family: "post_no_bill";

	h1 {
		font-size: 3.5rem;
	}

	span {
		color: var(--orange);
	}
`;

function Header() {
	const user = useUser();
	console.log(user);

	return (
		<HeaderStyles>
			<LogoStyles>
				<Link href="/">
					<h1>
						<span>DIY</span> Storage
					</h1>
				</Link>
			</LogoStyles>
			<Nav />
			{user && (
				<>
					<ButtonStyles>
						<SignOut />
					</ButtonStyles>
				</>
			)}
			{!user && (
				<Link href="/signin">
					<ButtonStyles>Sign in</ButtonStyles>
				</Link>
			)}
		</HeaderStyles>
	);
}

export default Header;
