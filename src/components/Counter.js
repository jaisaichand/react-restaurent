import React from 'react';
import { useDispatch } from 'react-redux';


const Counter = (props) => {

    const clickedAdd = (opt) => {
        console.log('clicked add function');
        if (opt) {
            if (opt == 'inc') {

                console.log(props);

                dispatchFunc({ type: 'INCREMENT', payload: { restaurent: props.data.restaurent, item: props.data.wholedata } })
            }

            if (opt == 'dec') {
                console.log(props);

                dispatchFunc({ type: 'DECREMENT', payload: { restaurent: props.data.restaurent, item: props.data.wholedata } })
            }
        }
    }

    const dispatchFunc = useDispatch();

    return (
        <div>
            {props.data.quantity < 1 ?
                (<div className="addBtnContainer cursorpointer" onClick={() => { clickedAdd('inc') }} >Add <span className="pluss">+</span> </div>) :
                (<div className="countercontainer d-flex align-items-center">
                    <div className="flexone">

                        <span onClick={() => { clickedAdd('dec') }} className="pluss cursorpointer">-</span>
                    </div>

                    <div className="flexone">

                        <span className="">{props.data.quantity}</span>
                    </div>

                    <div className="flexone">

                        <span onClick={() => { clickedAdd('inc') }} className="pluss cursorpointer">+</span>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Counter;