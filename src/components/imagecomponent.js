import './styles/image-style.scss';
import firstImage from "./images/111.jpg";


class ImageComponent {


createImageTag() {
    const image = document.createElement('img');
    image.alt = 'MY Image';
    image.classList.add('image');
    image.src = firstImage;

    return image;
}


render() {
    const element = document.createElement('div');
    element.classList.add('image-box')

    element.appendChild(this.createImageTag())

    return element;
}
}



export default new ImageComponent();