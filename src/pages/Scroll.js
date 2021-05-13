import React from 'react';
import styles from '../css/Scroll.scss';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const Scroll = (props) => {
    return (
        <React.Fragment>
            <ScrollMenu
                arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
                arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
                data={props.data.map((val, index) => (
                    <div >{val.name}</div>
                ))}
            >
            </ScrollMenu>
        </React.Fragment>
    )
}

export default Scroll;