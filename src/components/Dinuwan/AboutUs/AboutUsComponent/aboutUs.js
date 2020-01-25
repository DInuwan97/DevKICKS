import React from 'react'
import AboutUsBanner from '../AboutUsBannerComponent/AboutusBanner';
import VisionMission from '../VisionMisionComponent/VisionMission';
import Partners from '../PartnersComponent/Partners';
import Testimonials from '../Testimonials/Testimonials';
export default function aboutUs() {
    return (
        <div>
            <AboutUsBanner/>
            <VisionMission/>
            <Partners/>
            <Testimonials/>
        </div>
    )
}
