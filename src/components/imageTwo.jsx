import { Parallax } from 'react-parallax';
import Imagetwo from '../images/thunderstorm2.jpg';

const ImageTwo = () => (
    <Parallax blur={0} bgImage={Imagetwo} strength={200}     bgImageStyle={{ height: '100vh', width: '100vw' }}>
        <div style={{ height: '100vh',width:'100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            vhjkdksdbbds
        </div>
    </Parallax>
);

export default ImageTwo;
