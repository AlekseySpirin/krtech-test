import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Context, FirebaseContextProps} from "../../index";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {Box, Button, Grid, Typography} from "@mui/material";
import {cn} from "@bem-react/classname";
import GoogleIcon from '@mui/icons-material/Google';
import './Login.scss';

function Login() {
	const login = cn('Login');

	const navigate = useNavigate();
	const {auth} = useContext(Context) as FirebaseContextProps;
	const handleLogin = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		const provider = new GoogleAuthProvider();

		signInWithPopup(auth, provider)
			.then(({user}) => {
				navigate('/chat');
				console.log(user);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Grid className={login()}
			      container>
				<Box className={login('Wrapper')}>
					<Button className={login('Button')}
					        onClick={handleLogin}
					        type={"button"}
					        variant="contained"
					        size="large">
						<GoogleIcon/>
						<Typography className={login('Text')}
						            variant="h6">
							Войти с помощью Google
						</Typography>
					</Button>
				</Box>
			</Grid>
		</>
	);
}

export default Login;
