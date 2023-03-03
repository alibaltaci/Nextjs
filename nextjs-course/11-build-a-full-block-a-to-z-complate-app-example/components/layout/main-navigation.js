import Link from 'next/link'
import Logo from './logo'
import classes from './main-navigation.module.css'

const dummyData = [
    {
        link: '/posts',
        text: 'Posts'
    },
    {
        link: '/contact',
        text: 'Contact'
    },
]

export default function MainNavigation( ){

    return(
        <header className={ classes.header } >
            <Link href='/' id='link'>
                    <Logo />
            </Link>
            <nav>
                <ul>
                    {
                        dummyData.map( data => (
                            <li key={data.link} id={data.text}>
                                <Link href={ data.link }>{ data.text }</Link>
                            </li>
                        ) )
                    }
                </ul>
            </nav>
        </header>
    )
}