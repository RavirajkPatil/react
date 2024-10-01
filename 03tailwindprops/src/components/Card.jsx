import React from 'react'

function Card({username,btnText = "Search"}) {      // function Card(props)   ..... // Search declare for best readability
    //console.log("Props",props),
    //console.log(username);
    console.log(username)
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
          <img
            src="https://source.unsplash.com/300x300/?random"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
              {username}
            </span>
            <button className="text-xl font-semibold tracking-wide">
                {/* {btnText || "Search"}  We declare the default value here also but it cause readability issue */}
                {btnText}
            </button>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
            amet
          </p>
        </div>
    )
}

export default Card
