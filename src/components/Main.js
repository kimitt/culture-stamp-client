import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 임시 이미지 import 
import Img1 from '../assets/images/1.jpg';
import Img2 from '../assets/images/2.jpg';
import Img3 from '../assets/images/3.jpg';
import Img4 from '../assets/images/4.jpg';
import Img5 from '../assets/images/5.jpg';
import Img6 from '../assets/images/6.jpg';
import Img7 from '../assets/images/7.jpg';
import Img8 from '../assets/images/8.jpg';
import Img9 from '../assets/images/9.jpg';

const MainBackground = styled.div`
  width:100vw;
  height: 100%;
  margin-left: calc(-50vw + 50%);
  text-align: center;
  background: #e5e7eb;
`;

const Head = styled.header`
  padding-top: 13vh;
`

const Title = styled.span`
  font-size: 17px;
  font-weight: 600;
`
const Menu = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 50px 0 100px 0;
`;

const MenuList = styled(Link)`
  margin: 0 15px;
  color: black;
  font-size: 11px;
  text-decoration: none;
`
const MainSection = styled.section` 
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
`

const Button = styled.span`
  margin-left: 700px;
  font-size: 0px;
`

const ThumbnailItem = styled.div`
  position: relative;
  flex: 1 0 22rem;
  margin: 1rem;
  color: #fff;
  cursor: pointer;
`

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const AddButton = styled.span`
  margin-left: 80%;
  font-size: 32px;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -1rem;
  padding-bottom: 3rem;
`

const Container = styled.div`
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;

`

function Main() {
  return (
    <MainBackground>
      <Head>
        <Title>C U L T U R E S T A M P</Title>
        <Menu>
          <MenuList to="/category">CATEGORY</MenuList>
          <MenuList to="/date">DATE</MenuList>
          <MenuList to="/todo">TODO</MenuList>
          <MenuList to="/my-page">MYPAGE</MenuList>
          <MenuList to="/login">LOGIN</MenuList>
        </Menu>
        <div>
          <AddButton>+</AddButton>
        </div>
      </Head>
      <MainSection>
        <div>
          <Button>+</Button>
        </div>
        <Container>
          <Category>
            <ThumbnailItem>
              <ThumbnailImage src={Img1} alt="image1"/>
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img2} alt="image2"/>
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img3} alt="image3"/>
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img4} alt="image4"/>
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img5} alt="image5"/>
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img6} alt="image6"/>
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img7} alt="image7"/>
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img8} alt="image8"/>
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img9} alt="image9"/>
            </ThumbnailItem>
          </Category>
        </Container>
      </MainSection>
    </MainBackground>
  );
}

export default Main;
