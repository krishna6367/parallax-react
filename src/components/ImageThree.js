import { Parallax } from 'react-parallax';
import spacestation from '../images/spaceStation.jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={spacestation} strength={800}>
       <div className="content">
        <span className="img-txt"> A TRIP TO SPACE
            </span></div>.
    </Parallax>
);

export default ImageThree