import './style.css';
import {useState} from "react";

export const Main = () => {

    const [list, setItem] = useState(
        [
            {
                id: 1,
                title: 'Сахар'
            },
            {
                id: 2,
                title: 'Макароны'
            }
        ]
    )

    const [currentItem, setCurrentItem] = useState('');

    const currentItemHandler = (e) => {
        let newValue = e.currentTarget.value;
        console.log(newValue)
        setCurrentItem(newValue);
    }

    const addItem = () => {
        const newItem = {
            id: 3,
            title: currentItem
        }
        setItem([newItem, ...list])
        setCurrentItem('');
    }

    {console.log(list)}

    return (
        <div>
            <main>
                <h1>Shopping list</h1>
                <input value={currentItem} onChange={currentItemHandler} type="text"/>
                <button onClick={addItem}>Add</button>
                <div>
                    {list.map((el) => {
                        return (
                            <div>
                                <p>{el.title}</p>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}