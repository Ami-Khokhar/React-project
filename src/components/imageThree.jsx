import { Parallax } from 'react-parallax';
import Imagethree from '../images/thunderstorm3.jpg';

const ImageThree = () => (
    <Parallax blur={0} bgImage={Imagethree} strength={200}     bgImageStyle={{ height: '100vh', width: '100vw' }}>
        <div style={{ height: '100vh',width:'100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <h1>Content goes here</h1>
            <p>Parallax height grows with content height.</p>
        </div>
    </Parallax>
);

export default ImageThree;
