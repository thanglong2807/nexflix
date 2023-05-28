import React from 'react'
import "./style.css"
import { v4 as uuidv4 } from 'uuid'
import img1 from "../../../assets/images/Frame 6.png"
import img2 from "../../../assets/images/Frame.png"
import img3 from "../../../assets/images/Frame2.png"
import img4 from "../../../assets/images/Frame 7.png"
import FeatureList from '../component/FeatureList'
function Feature() {

    const data = [
        {
            id: uuidv4(),
            title: "Enjoy on your TV.",
            des: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img: img1
        },
        {
            id: uuidv4(),
            title: "Download your shows to watch offline.",
            des: "Save your favorites easily and always have something to watch.",
            img: img2
        },
        {
            id: uuidv4(),
            title: "Watch everywhere.",
            des: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
            img: img3
        },
        {
            id: uuidv4(),
            title: "Create profiles for kids.",
            des: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
            img: img4
        },

    ]
    return (
        <div className={`feature`}>

            <div className={`feature_content`}></div>
            {data.map((item, i) => <FeatureList key={item.id} data={item} row={i % 2 ? "row-reverse" : "row"} />)}

        </div>
    )
}

export default Feature