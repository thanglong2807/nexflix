import React from 'react'
import "./style.css"
function FeatureList(props) {
    return (
        <div className='featurelist'>
            <div className='container'>
                <div className={`featurelist_content ${props.row}`}>
                    <div className='featurelist_text'>
                        <h3 className='featurelist_title'>{props.data.title}</h3>
                        <p className='featurelist_des'>{props.data.des}</p>
                    </div>
                    <div className='featurelist_imgs'>
                        <img className='featurelist_img' src={props.data.img} alt='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureList