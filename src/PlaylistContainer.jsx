import { useState } from "react";
export default function PlaylistContainer(){
    const [searchQuery, setSearchQuery]= useState('');
    const handleInputChange = (Event)=>{
        setSearchQuery(Event.target.value);
    }
    const handleSubmit =  ()=>{
       
    }
    return(
        <>
        <h2 className="text-5xl text-action font-semibold text-center my-4">Playlist</h2>
        <div id="trackContainer" className=" rounded-lg max-w-[700px] sm:w-5/6 sm:mx-auto bg-main-back dark:bg-main-back-dark mx-2 pl-2 flex gap-4 my-3 shadow-md">
            <div className="w-1/4 m-2">
                <img className="" src="./public/jammmingFavicon.ico"/>
            </div>
            <div className="ml-5 mt-2 w-2/4"> 
            <h3 className="text-2xl text-white">Song Name</h3>
            <p className="mt-2 text-white"><span className="text-white">Artist Name</span> | <span className="text-white">album Name</span></p>
            </div>
            <div className="ml-5 mt-2 w-1/4 items-center justify-center flex"> 
            <i className="fa-solid fa-minus scale-150 text-action font-bold"></i>
            </div>
        </div>
        <form action="#" onSubmit={handleSubmit} className="my-7 flex flex-col w-3/5 mx-auto"> 
            <input className="text-action2 border-2 border-action shadow-lg py-3 text-center font-bold focus:outline-none" id="songName" required type="text" value={searchQuery} onChange={handleInputChange} placeholder="Name Playlist"/>
            <button type="submit" className="bg-main-back dark:bg-main-back-dark text-white mt-7 w-2/4 py-2 rounded-full mx-auto font-semibold shadow-md text-lg hover:scale-105">Add to Spotify</button>
        </form>
        </>
    );
}