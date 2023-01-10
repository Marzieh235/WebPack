import './styles/list-style.scss';




class ListComponent {

createItem(title){
    const Item = document.createElement('li');

    Item.innerText = title;

    return Item ;
}



render(){
    const element = document.createElement('ul');

    element.appendChild(this.createItem('Item 1'));
    element.appendChild(this.createItem('Item 2'));
    element.appendChild(this.createItem('Item 3'));
    element.appendChild(this.createItem('Item 4'));




    return element;
}

}



export default new ListComponent() ;