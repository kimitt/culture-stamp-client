import React from "react";
import styled from "styled-components";



const Signin = () => {


    return (
      <LoginSection>
        <LoginContainer>
          <LoginForm>
            <LoginTitle>로그인</LoginTitle>
            <LoginInput>
              <input type="text" placeholder="정말 죄송합니다 ㅜㅜ" />
              <input type="password" placeholder="저에게 조금만 더 시간을.." />
            </LoginInput>
            <SocialLogin>
              <KakaoLogin>
                <KakaoButton>카카오 로그인</KakaoButton>
              </KakaoLogin>
              <NaverLogin>
                <NaverButton>네이버 로그인</NaverButton>
              </NaverLogin>
            </SocialLogin>
          </LoginForm>
        </LoginContainer>
      </LoginSection>
    );
}

const LoginSection = styled.section`
    display: flex;
    justify-content: center;
`;

const LoginContainer = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
`;
const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  `;

const KakaoLogin = styled.div``;

const KakaoButton = styled.button`
  border: none;
  border-radius: 9px;
  font-size: 17px;
  width: 284px;
  font-weight: 500;
  height: 32px;
  cursor: pointer;
  background: #fae101;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 4px 0px;
  margin-bottom: 10px;
`;
const NaverLogin = styled.div``;

const NaverButton = styled.button`
  border: none;
  border-radius: 9px;
  font-size: 17px;
  width: 284px;
  font-weight: 500;
  height: 32px;
  cursor: pointer;
  background: #23a648;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 4px 0px;
`;

const LoginInput = styled.div``;



export default Signin;