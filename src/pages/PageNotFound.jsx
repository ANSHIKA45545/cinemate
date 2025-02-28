import { useEffect } from "react";
import { Link } from "react-router";
import image from "../assets/cut-image.png";

const PageNotFound=() => {

    useEffect(() => {
       document.title = `Page not found / Cinemate`;
    })

    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
                    <div className="max-w-lg">
                    <img className="rounded h-[300px]" src={image} alt="404 Page Not Found!" />
                    </div>
                </div>

                <div className="flex justify-center my-4 ">
                    <Link to="/">
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-3 font-bold text-gray-400 rounded-lg">Back to Cinemate</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default PageNotFound;