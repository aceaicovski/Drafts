import React from 'react'
import { ConnectComponent } from '../../components'
import { NewsSlider } from '../../components'
import { homeObjOne, homeObjTwo } from './Data'
import { Images } from '../../components/NewsCartsSlider/SliderData'

export const Home = () => {
    return (
        <>
            <ConnectComponent { ...homeObjOne } />
            <ConnectComponent { ...homeObjTwo } />
            <NewsSlider slides={ Images } />

        </>
    )
};