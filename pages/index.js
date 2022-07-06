import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from "react";
import { SearchIcon } from '@heroicons/react/solid'








export default function Home() {

  const initialSearchItem = [
    {
      text: 'Google',
      url: "https://www.google.com/search?q=",
      checked: false
    },
    {
      text: 'DuckDuckGo',
      url: "https://duckduckgo.com/?q=",
      checked: false
    },
    {
      text: 'Bing',
      url: "https://www.bing.com/search?q=",
      checked: false
    },
    {
      text: 'Wikipedia',
      url: "https://id.wikipedia.org/wiki/",
      checked: false
    },
    {
      text: 'Twitter',
      url: "https://twitter.com/search?q=",
      checked: false
    },
    {
      text: 'Quora',
      url: "https://id.quora.com/search?q=",
      checked: false
    },
    {
      text: 'Youtube',
      url: "https://www.youtube.com/results?search_query=",
      checked: false
    },
    {
      text: 'Facebook',
      url: "https://www.facebook.com/search/top/?q=",
      checked: false
    },
    {
      text: 'Tiktok',
      url: "https://www.tiktok.com/search?q=",
      checked: false
    },
    {
      text: 'Instagram',
      url: "https://www.instagram.com/explore/search/keyword/?q=",
      checked: false
    }
];

  const [searchItem, setSearchItem] = useState(initialSearchItem)
  const [query, setQuery] = useState("")

  function handleChangeSearchText(event ){

    const target = event.target;
    var value = target.value;
    setQuery(value)
  }

  function handleCheckboxChange(event) {

    const target = event.target;
    var value = target.value;

    var temp = [...searchItem]
    temp[value].checked = target.checked

    setSearchItem(temp)
  }

  function handleSearch(){

    
    if(query != "" && searchItem.map((item) => item.checked).includes(true)){
      searchItem.forEach((item) => {
        if(item.checked){
          window.open(item.url + query)
        }
      })

      setSearchItem(initialSearchItem)
      setQuery("")
    }

  }

  function handleClickSupport(){
    window.open("https://ko-fi.com/prasetyanurangga")
    window.open("https://www.nihbuatjajan.com/prasetyanurangga")
  }

  return (
    <>
      <Head>
        <title>Search All</title>
        <meta name="description" content="search on multiple websites at the same time" />
        <link rel="icon" href="/icon.ico"567 />
      </Head>

      <div className="py-12 bg-gray-200 h-screen flex lg:justify-center justify-start flex-col items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center flex justify-center flex-col items-center">
            <h2 className="mb-2  text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Search All
            </h2>
            <p className="mb-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              search on multiple websites at the same time
            </p>
            <div className="flex justify-center items-center lg:w-96 w-full ">
                <div className=" relative bg-white w-full mr-2  rounded-md">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <SearchIcon className="h-5 w-5 text-gray-300 focus:text-indigo-400" aria-hidden="true" />
                    </span>
                  <input
                    type="text"
                    value={query}
                    placeholder="Search..."
                    onChange={handleChangeSearchText}
                    className="pl-9 focus:ring-indigo-500 p-3 focus:border-indigo-500 block relative bg-white  w-full shadow-sm sm:text-sm border-gray-300  rounded-md"
                  />
                </div>

                <button
                  onClick={handleSearch}
                  className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Search
                </button>
            </div>
            <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4 ">
              {searchItem.map((item, key) => (
                <div className="flex items-center" key={key}>
                  <div className="flex items-center h-5">
                    <input
                      id={item.text}
                      name="search_item[]"
                      type="checkbox"
                      value={key}
                      checked={item.checked}
                      onChange={handleCheckboxChange}
                      className="cursor-pointer focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor={item.text} className="cursor-pointer font-medium text-gray-700">
                      {item.text}
                    </label>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>
        <span className="bottom-2 text-xs absolute ">☕ Want to support me? <b className="cursor-pointer" onClick={handleClickSupport}>Buy Me Coffe</b></span>
      </div> 
    </>
    
  )
}
