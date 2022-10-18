import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./Test.css";

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
  height: 100vh;
  margin-left: calc(-50vw + 50%);
  text-align: center;
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

const AddButton = styled.span`
  margin-left: 80%;
  font-size: 32px;
`

const Container = styled.div`
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
`

const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -1rem -1rem;
    padding-bottom: 3rem;

    @supports (display: block) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
        grid-gap: 2rem;
    }
    
`

const GalleryItem = styled.div`
    position: relative;
    flex: 1 0 22rem;
    margin: 1rem;
    color: #fff;
    cursor: pointer;
`

const GalleryImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

function Test() {
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
      

      <main>
    
        <Container>
            <Gallery>
                <GalleryItem>
                    <GalleryImage src={Img1} class="gallery-image" alt="image1"/>
                </GalleryItem>

                <GalleryItem>
                    <GalleryImage src={Img2} class="gallery-image" alt="image2"/>
                </GalleryItem>

                <GalleryItem>
                    <GalleryImage src={Img3} class="gallery-image" alt="image3"/>
                </GalleryItem>

                <GalleryItem>
                    <GalleryImage src={Img4} class="gallery-image" alt="image4"/>
                </GalleryItem>

                <GalleryItem>
                    <GalleryImage src={Img5} class="gallery-image" alt="image5"/>
                </GalleryItem>

                <GalleryItem>
                    <GalleryImage src={Img6} class="gallery-image" alt="image6"/>
                </GalleryItem>

                <GalleryItem>
                    <GalleryImage src={Img7} class="gallery-image" alt="image7"/>
                </GalleryItem>

                <GalleryItem>
                    <GalleryImage src={Img8} class="gallery-image" alt="image8"/>
                </GalleryItem>

                <GalleryItem>
                    <GalleryImage src={Img9} class="gallery-image" alt="image9"/>
                </GalleryItem>
            </Gallery>
        </Container>
    
    </main>

    </MainBackground>
  );
}

export default Test;
