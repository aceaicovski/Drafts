import React from 'react'
import { Header } from '../../components'
import { NewsSlider } from '../../components'
import { homeObjOne, homeObjTwo } from './Data'
import { Images } from '../../components/NewsCartsSlider/SliderData'

export const Home = () => {
    return (
        <>
            <Header { ...homeObjOne } />
            <Header { ...homeObjTwo } />
            <NewsSlider slides={ Images } />

        </>
    )
};