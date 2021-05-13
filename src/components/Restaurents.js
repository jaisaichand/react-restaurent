import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Multicardcontainer from './Multicardcontainer';
import Multicard from './Multicard';

const Restaurents = (props) => {


    const restaurentsList = useSelector(state => state.restaurents);
    console.log(restaurentsList)

    useEffect(() => {
        console.log(restaurentsList);
    }, [restaurentsList])


    return (
        <div className="w-100 mt-4 allcenter">

            <div className="container80center">

                <Multicardcontainer >
                    {
                        restaurentsList.map((val, ind) => {
                            return <Multicard key={val.key} data={val}></Multicard>
                        })
                    }
                </Multicardcontainer>
            </div>

        </div>
    )
}

export default Restaurents;