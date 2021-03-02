import React from "react";
import PasswordReset from "../components/auth/PasswordReset";
import SignIn from "../components/auth/SignIn";
import styled from "styled-components";

const Loginstyles = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	background-color: rgba(240, 164, 50, 0.8);
`;

function signin() {
	return (
		<Loginstyles>
			<SignIn />
			<PasswordReset />
		</Loginstyles>
	);
}

export default signin;
