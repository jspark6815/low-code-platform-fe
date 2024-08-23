import theme from '@/styles/theme';
import { useAuthStore } from '../store/authStore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'


type Props = {
  bgColor?: string;
};

type Side = {
  side: "left" | "right"
};

const LoginContainer = styled.div<Props> `
  display: flex;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
`;

const SideFrame = styled.div<Side>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 50vw;
  height: 100vh;
  background-color: ${({ side }) => side == 'left' ? theme.colors.main500 : 'white' }; 
`;

const LoginBox = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  color: #3e8df7;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #b0b0b0;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #e7e7e7;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    border-color: #3e8df7;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #3e8df7;
  color: white;
  padding: 14px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  &:hover {
    background-color: #3a7cdc;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
  color: #b0b0b0;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;


const LoginPage = ({ bgColor }: Props) => {
  const login = useAuthStore((state) => state.login);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  const handleLogin = async () => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      let res = await response.json();

      login(res.data.accessToken, res.data.refreshToken);
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };


  return (
    <LoginContainer bgColor={bgColor}>
      <SideFrame side='left' className='leftFrame'>
        Shinhan Bank
      </SideFrame>
      <SideFrame side='right' className='rightFrame'>
        <LoginBox>
          <Title>Login Account</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
          <Input
            type="text"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Options>
            <CheckboxLabel>
              <Checkbox type="checkbox" />
              Keep me signed in
            </CheckboxLabel>
            <a href="#" style={{ color: '#3e8df7' }}>Already a member?</a>
          </Options>
          <Button onClick={handleLogin}>Sign In</Button>
        </LoginBox>
      </SideFrame>
    </LoginContainer>
  );
};

export default LoginPage;
