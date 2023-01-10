import ImageComponent from './components/ImageComponent'
import ListComponent from './components/ListComponent'


const app =document.querySelector('#app');


app.appendChild(ImageComponent.render());
app.appendChild(ListComponent.render());