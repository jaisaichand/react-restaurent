import React from 'react';

const Multicardcontainer = (props) => {
    return (
        <React.Fragment>
            <div className="d-flex flex-wrap">
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Multicardcontainer;