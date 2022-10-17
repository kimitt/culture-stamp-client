import Img1 from '../assets/images/1.jpg';
import Img2 from '../assets/images/2.jpg';
import Img3 from '../assets/images/3.jpg';
import Img4 from '../assets/images/4.jpg';
import Img5 from '../assets/images/5.jpg';
import Img6 from '../assets/images/6.jpg';
import Img7 from '../assets/images/7.jpg';
import Img8 from '../assets/images/8.jpg';
import Img9 from '../assets/images/9.jpg';

function Main() {
  return (
    <>
      <header>
        <div>C U L T U R E S T A M P</div>
        <nav>
          <li>CATEGORY</li>
          <li>DATE</li>
          <li>TODO</li>
          <li>MYPAGE</li>
          <li>LOGIN</li>
        </nav>
      </header>
      <section>
        <img src={Img1} />
        <img src={Img2} />
        <img src={Img3} />
        <img src={Img4} />
        <img src={Img5} />
        <img src={Img6} />
        <img src={Img7} />
        <img src={Img8} />
        <img src={Img9} />
      </section>
    </>
  );
}

export default Main;
