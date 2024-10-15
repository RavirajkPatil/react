import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const[data,setData] = useState([])
    // useEffect( () => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(responce => responce.json() )
    //     .then( data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    var data = useLoaderData()
    
    return (
        <>
        <div className='relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0'>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub followers: {data.followers}
                <img src={data.avatar_url} alt='GitPicture' width={300}/>
            </div>
        </div>
        </>
    )
}

export default Github

// use loader concept here 
// Loader is nothing but load the data before you click on button and just on hover it.
export const githubInfoLoader = async() => {
    const responce = await fetch('https://api.github.com/users/RavirajkPatil')
    return responce.json();
}
    


