import React from "react";
import Form from "../styles/Form";
import useForm from "../../lib/useForm";
import styled from "styled-components";

const PasswordResetStyles = styled.div`
	.passwordBubble {
		background: white;
		border-radius: 1rem;
		padding: 2rem;
		width: 40rem;
		height: 40rem;
		max-width: 1100px;
		min-width: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;

function PasswordReset() {
	const { input, handleChange, resetForm } = useForm({
		email: "",
	});

	return (
		<PasswordResetStyles>
			<div className="passwordBubble">
				<Form>
					<h1>Password Reset</h1>
					<fieldset>
						<label>Email</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							autoComplete="email"
							value={input.email}
							onChange={handleChange}
						/>
					</fieldset>
				</Form>
			</div>
		</PasswordResetStyles>
	);
}

export default PasswordReset;
