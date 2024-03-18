import { Parallax } from 'react-parallax';
import nasa from '../images/nasa.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={nasa} strength={800}>
       <div className="content">
        <span className="img-txt"> A TRIP TO SPACE
            </span></div>.
    </Parallax>
);

export default ImageOne