import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="./images/cta-logo-one.svg" alt="cta-logo-one" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and the Disney Bundle will increase by $1.
          </Description>

          <Description>
            Dummy Account Details <br />
            Email: johndisney971@gmail.com <br />
            Password: JD971$12
          </Description>
          <CTALogoTwo src="./images/cta-logo-two.png" alt="cta-logo-two" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
  font-size: 20px;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("./images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: 600;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  cursor: pointer;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.6s ease 0s;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  margin: 0 0 24px;
  line-height: 1.2;
  letter-spacing: 1.5px;
  font-size: 15px;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
