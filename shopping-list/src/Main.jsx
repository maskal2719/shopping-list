import './style.css';
import {useState} from "react";

export const Main = () => {

    const [list, setItem] = useState([
        {
            id: 1, title: 'Сахар', buy: true
        },
        {
            id: 2, title: 'Макароны', buy: false,
        },
        {
            id: 3, title: 'Чай', buy: false,
        },
        {
            id: 4, title: 'Молоко', buy: false
        },
        {
            id: 5, title: 'Мыло', buy: false
        },
        {
            id: 6, title: 'Шампунь', buy: false
        },
    ])

    const [currentItem, setCurrentItem] = useState('');

    const currentItemHandler = (e) => {
        let newValue = e.currentTarget.value;
        console.log(newValue)
        setCurrentItem(newValue);
    }

    const addItem = () => {
        const newItem = {
            id: 4, title: currentItem
        }
        setItem([newItem, ...list])
        setCurrentItem('');
    }

    return (<div>
        <main>
            <h1>Shopping list</h1>
            <input value={currentItem} onChange={currentItemHandler} type="text"/>
            <button onClick={addItem}>Add</button>
            <div>
                {list.map((el) => {
                    return (<div>
                        <input value={el.title}/>
                        <button>Delete</button>
                    </div>)
                })}
            </div>
        </main>
    </div>)
}