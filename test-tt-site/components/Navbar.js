import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image
                    uri="https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-nature-1725825019"
                    alt="temp"
                    width={128}
                    height={77}
                />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
        </nav>
    )
}

export default Navbar 