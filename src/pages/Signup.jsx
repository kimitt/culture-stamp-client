import React from "react";
import styled from "styled-components";




const Signup = () => {

  
    return (
      <SignupSection>
        <SignupContainer>
          <SignupForm>
            <SignupTitle>회원가입</SignupTitle>

          </SignupForm>
        </SignupContainer>
      </SignupSection>
    );
}

const SignupSection = styled.section`
  display: flex;
  justify-content: center;
`;

const SignupContainer = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignupTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
`;



export default Signup;