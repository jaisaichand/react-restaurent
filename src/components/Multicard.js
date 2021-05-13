import React from 'react';
import '../css/Multicard.scss';
import Rating from '@material-ui/lab/Rating';
import { useHistory } from 'react-router-dom'

const MultiCard = (props) => {

    console.log(props)

    const historyUrl = useHistory();

    const clickedCard = (opt) => {
        historyUrl.push(`/restaurent/${opt}`)
    }

    return (
        <div className="mr-2 mb-4" >
            <div className="max350 width350">
                <div onClick={() => { clickedCard(props.data.key) }} className="w-100 ">
                    <div className="imageContainerrelative">
                        <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="restaurentImage" />
                        {
                            (props.data.discount && Number(props.data.discount > 0)) ? (
                                <span className="imagetag">{props.data.discount}% OFF</span>
                            ) : null
                        }
                    </div>

                    <div className="cardbody px-1 py-2">
                        <p className="m-0 restaurentTitle">{props.data.name}</p>
                        <div className="reviewscontainer">
                            <Rating
                                name="simple-controlled"
                                precision={0.5} readOnly
                                value={Number(props.data.rating)}

                            />
                            <span className="reviewtext">(20 Reviews)</span>
                        </div>
                        <p className="restaurentDesc">
                            {props.data.description}
                        </p>
                        <div className="detailscontainer">
                            <span> ₹150 for one </span>
                            <span className="bigdot">.</span>
                            <span> 45 min</span>
                        </div>

                        <React.Fragment>
                            {
                                (props.data.discount && Number(props.data.discount) > 0) ? (<div className="offertextt">
                                    {props.data.discount}% off on code TRYJAI
                        </div>) : null
                            }
                        </React.Fragment>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MultiCard;