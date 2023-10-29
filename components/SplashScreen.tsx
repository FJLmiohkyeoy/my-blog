"use client"
import '@/css/splash.css'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
export default function SplashScreen(){
    const { theme } = useTheme()
    const [height, setheight] = useState('h-0')
    const [opacity, setOpacity] = useState('opacity-100')
    const [toShow, setToShow] = useState(false)

    const setCookie = () => {
        Cookies.set('Splashed', 'true', { expires: 1 })
    }
    useEffect(() => {
        if(typeof Cookies.get('Splashed') == 'undefined') {
        setToShow(true)
        setTimeout(
            ()=>setheight('h-full'), 500)
        setTimeout (()=> setOpacity('opacity-0'), 1500)
        setTimeout(()=>{
            setCookie()
            setToShow(false)
        }, 2200)
        }
    }, [])
    return toShow ? (
        <div>
            <div className={`${opacity} absolute left-0 top-0 flex h-full w-full items-center justify-center bg-white text-4xl text-black dark:bg-gray-950 dark:text-white sm:text-6xl md:text-9xl duration-1000`}>
                <div className="relative flex h-12 w-full items-center sm:h-20 md:h-40">
                    <div className={`${theme == 'dark' ? 'light-text-edge' : 'dark-text-edge'} absolute flex h-full w-full items-center sm:h-20 justify-center font-bold text-white dark:textgray-950`}>
                        Jihyo Lee
                    </div>
                    <div className={`transition-height z-50 flex h-full w-full flex-col items-center justify-center`}>
                        <div className={`${theme == 'dark' ? 'light-line-shadow' : 'dark-line-shadow'} h-[2px] w-[60%] bg-gray-400`}/>
                        <div className={`${height} flex w-full items-center justify-center overflow-hidden font-bold duration-700 ease-linear`} >Jihyo Lee</div>
                        <div className={`${theme == 'dark' ? 'light-line-shadow' : 'dark-line-shadow'} h-[2px] w-[60%] bg-gray-400`}/>
                        
                    </div>
                </div>
            </div>
        </div>
    ) : null
}