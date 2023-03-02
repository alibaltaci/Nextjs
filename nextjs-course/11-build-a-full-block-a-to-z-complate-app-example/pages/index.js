import { Fragment } from 'react'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'

export default function HomePage(){

    return(
        <Fragment>
            <Hero />
            <FeaturedPosts />
        </Fragment>
    )
}