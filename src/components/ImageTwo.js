import { Parallax } from 'react-parallax';
import satellite from '../images/satellite.jpg'

const ImageTwo = () => (
    <Parallax  className='image' bgImage={satellite} strength={800}>
       <div className="content">
        <span className="img-txt"> A TRIP TO SPACE
            </span></div>.
    </Parallax>
);

export default ImageTwo