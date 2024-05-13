import { images, captions } from 'src/utils/data';
import Carousel from 'src/components/Carrousel/Carroussel';

export default function SectionTwoCarrousel() {

  return <Carousel images={images}  captions={captions}/>;
}
