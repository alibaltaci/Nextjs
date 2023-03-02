import Link from 'next/link'
import Logo from './logo'

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
        <header>
            <Link href='/' id='link'>
                    <Logo />
            </Link>
            <nav>
                <ul>
                    {
                        dummyData.map( data => (
                            <li>
                                <Link href={ data.link }>{ data.text }</Link>
                            </li>
                        ) )
                    }
                </ul>
            </nav>
        </header>
    )
}