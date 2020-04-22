import React, { Component } from "react"
import MusicData from "../data/Music.json"

class Music extends Component {
    audio = new Audio()

    constructor() {
        super()

        const initialState = MusicData.map(function (item) {
            return (
                {
                    "key": item.index,
                    "iconClass": "button primary color2 circle icon solid fa-play-circle",
                    "songTitle": item.songTitle,
                    "songDesc": item.songDesc,
                    "songLink": item.songLink,
                    "originalLink": item.originalLink
                }
            )
        })

        this.state = {
            list: initialState,
            prevClickedKey: null,
            nowPlayingDisplay: "none",
            nowPlayingTitle: null,
            isPlaying: false
        }
    }

    // Using arrow function to define handlePlayClick means we don't have to explicitly bind
    // by doing this.handlePlayClick = this.handlePlayClick.bind(this)
    handlePlayClick = (index) => {

        var isPlaying = this.audio.currentTime > 0 && !this.audio.paused && !this.audio.ended && this.audio.readyState > 2;

        let newStateList = []
        let audioSrc = ""
        let nowPlayingDisplay = "none"
        let nowPlayingTitle = ""

        newStateList = this.state.list.map((item) => {
            if (item.key === index) {
                audioSrc = item.songLink
                nowPlayingTitle = item.songTitle
                if (!isPlaying) {
                    return ({
                        // Return all properties of item using spread(...) operator (ES6 syntax)
                        ...item,
                        // Override icon class property
                        "iconClass": "button color2 circle icon solid fa-pause-circle",
                    })
                }
                else {
                    return ({
                        ...item,
                        "iconClass": "button primary color2 circle icon solid fa-play-circle",
                    })
                }
            }
            else {
                return ({
                    ...item,
                    "iconClass": "button primary color2 circle icon solid fa-play-circle",
                })
            }
        })

        if (this.audio.currentSrc == null || this.state.prevClickedKey !== index) {
            this.audio.src = audioSrc
            this.audio.load()
        }

        if (!isPlaying) {
            var playPromise = this.audio.play()

            playPromise
                .then(() => {
                    nowPlayingDisplay = "block"
                    this.setState(function (prevState) {
                        return {
                            list: newStateList,
                            prevClickedKey: index,
                            nowPlayingDisplay: nowPlayingDisplay,
                            nowPlayingTitle: nowPlayingTitle,
                            isPlaying: !prevState.isPlaying
                        }
                    })
                })

        }
        else {
            this.audio.pause()
            this.setState(function (prevState) {
                return {
                    list: newStateList,
                    prevClickedKey: index,
                    nowPlayingDisplay: nowPlayingDisplay,
                    nowPlayingTitle: nowPlayingTitle,
                    isPlaying: !prevState.isPlaying
                }
            })
        }

        this.audio.onended = () => {
            this.setState(function (prevState) {
                let newStateList = []
                newStateList = prevState.list.map((item) => {
                    return ({
                        ...item,
                        "iconClass": "button primary color2 circle icon solid fa-play-circle",
                    })
                })

                //Return new state
                return {
                    list: newStateList,
                    prevClickedKey: index,
                    nowPlayingDisplay: "none",
                    nowPlayingTitle: "",
                    isPlaying: !prevState.isPlaying
                }
            })
        };
    }

    render() {
        const buttonStyleAnimated = {
            verticalAlign: "middle",
            WebkitAnimation: "heartbeat 1.5s ease-in-out 1s infinite alternate-reverse both",
            animation: "heartbeat 1.5s ease-in-out 1s infinite alternate-reverse both"
        }

        const buttonStyle = {
            verticalAlign: "middle",
        }

        const songDetailsStyle = {
            verticalAlign: "middle", textAlign: "start", fontSize: "17px"
        }

        const justifyTextSyle = { textAlign: "justify" }

        const tableRows = (
            this.state.list.map((item) => {
                return (
                    <tr key={item.key}>
                        <td>
                            {/*Use arrow function when passing to onClick to prevent binding issues*/}
                            <button
                                className={item.iconClass}
                                style={this.state.isPlaying ? buttonStyle : buttonStyleAnimated}
                                onClick={() => this.handlePlayClick(item.key)}>
                            </button>
                        </td>
                        <td
                            style={songDetailsStyle} >
                            <span><b>{item.songTitle}</b></span>
                            <br />
                            <span style={{ fontSize: "12px" }}>{item.songDesc}</span>
                        </td>
                        <td
                            style={songDetailsStyle}>
                            <span><a href={item.originalLink} target="_blank" rel="noopener noreferrer">Listen to the original</a></span>
                        </td>
                    </tr>
                )
            })
        )

        return (
            <section className="panel color1" >
                <div className="inner columns divided">
                    <div className="span-2">
                        <h2 className="major">Music</h2>
                        <p style={justifyTextSyle}>
                            I've been making music as a hobby for over 10 years now. When I first started, I was more focused on making melodies but
                            over time I shifted towards learning more about the music production process.
                        </p>
                        <p style={justifyTextSyle}>
                            I am a self-taught keyboard player with a background in Indian classical
                            music. My musical style falls under the pop genre and is heavily influenced by Tamil and Hindi film music, something I grew up listening to.
                            Lastly, for all the geeks out there, my DAW of choice is Propellerhead Reason. :)
                        </p>
                    </div>
                    <div className="span-4">
                        <h3 className="major">Listen to some of my tunes!</h3>
                        <div className="table-wrapper">
                            <table>
                                <tbody>
                                    {tableRows}
                                </tbody>
                            </table>
                        </div>
                        <div className="now-playing" style={{ display: this.state.nowPlayingDisplay }}>
                            <div className="now-playing-content">
                                <div className="now-playing-body">
                                    <p><b>Now playing: {this.state.nowPlayingTitle}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Music 