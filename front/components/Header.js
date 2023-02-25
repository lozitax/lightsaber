import Link from 'next/link';
import Styles from '../styles/Home.module.css';

export default function Header({
    link,
    value
}) {
    return (
        <header className={`min-w-screen flex justify-between items-center pt-5 px-20`}>
            <h1 className={`flex flex-col items-center leading-3 lowercase ${Styles.Starjhol}`}>
                <span className={`text-5xl text-yellow-500`}>Star</span>
                <span className={`text-white ${Styles.Starjedi}`}>LightSaber</span>
                <span className="text-5xl text-yellow-500 -mt-2">Wars</span>
            </h1>
            <Link className={`border border-yellow-500 rounded-full h-fit text-white px-10 py-4 flex item-center justify-center ${Styles.Starjedi}`} href={link}>
                {value}
            </Link>
        </header>
    );
}