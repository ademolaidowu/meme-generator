import React, {useState} from "react"

export default function Meme() {

    // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])
    
    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setAllMemes(data.data.memes))
    // }, [])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newUrl = allMemes[randomNumber].url
        
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: newUrl
        })) 

    }  

    function handleChange(event) {

        const {name, value} = event.target

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main className="container">
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                    />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>  
            <div className="meme">
                <img src={meme.randomImage} className="meme--img" alt="meme-pic"/>
                <h2 className="meme--text--top">{meme.topText}</h2>
                <h2 className="meme--text--bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}