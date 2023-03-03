import { Fragment } from 'react'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs', 
        title: 'Getting Started with NextJS', 
        image: 'getting-started-nextjs.jpg', 
        excerpt: 'NextJS is a the React framework for production - It makes building fullstack React apps and sites a breeze and ships with build-in SSR', 
        date: '2022-02-10' 
    },
    {
        slug: 'getting-started-with-nextjs2', 
        title: 'Getting Started with NextJS', 
        image: 'getting-started-nextjs.jpg', 
        excerpt: 'NextJS is a the React framework for production - It makes building fullstack React apps and sites a breeze and ships with build-in SSR', 
        date: '2022-02-10' 
    },
    {
        slug: 'getting-started-with-nextjs3', 
        title: 'Getting Started with NextJS', 
        image: 'getting-started-nextjs.jpg', 
        excerpt: 'NextJS is a the React framework for production - It makes building fullstack React apps and sites a breeze and ships with build-in SSR', 
        date: '2022-02-10' 
    },
    {
        slug: 'getting-started-with-nextjs4', 
        title: 'Getting Started with NextJS', 
        image: 'getting-started-nextjs.jpg', 
        excerpt: 'NextJS is a the React framework for production - It makes building fullstack React apps and sites a breeze and ships with build-in SSR', 
        date: '2022-02-10' 
    },
]

export default function HomePage(){

    return(
        <Fragment>
            <Hero />
            <FeaturedPosts posts={ DUMMY_POSTS } />
        </Fragment>
    )
}