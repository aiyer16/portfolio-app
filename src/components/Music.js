import React, { Component } from "react"

class Music extends Component {
    audio = new Audio()

    constructor(props) {
        super(props)

        const initialState = this.props.musicData.map(function (item) {
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
            prevClickedKey: null
        }
    }

    // Using arrow function to define handlePlayClick means we don't have to explicitly bind
    // by doing this.handlePlayClick = this.handlePlayClick.bind(this)
    handlePlayClick = (index) => {

        var isPlaying = this.audio.currentTime > 0 && !this.audio.paused && !this.audio.ended && this.audio.readyState > 2;

        this.setState(function (prevState) {
            let newStateList = []
            let audioSrc = ""
            newStateList = prevState.list.map((item) => {
                if (item.key === index) {
                    audioSrc = item.songLink
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

            if (this.audio.currentSrc == null || prevState.prevClickedKey !== index) {
                this.audio.src = audioSrc
                this.audio.load()
            }

            if (!isPlaying) {
                this.audio.play()
            }
            else {
                this.audio.pause()
            }

            //Return new state
            return {
                list: newStateList,
                prevClickedKey: index
            }
        }
        )
        this.audio.onended = () => {
            console.log(this.state);
            this.setState(function (prevState) {
                let newStateList = []
                newStateList = prevState.list.map((item) => {
                    return ({
                        ...item,
                        "iconClass": "button primary color2 circle icon solid fa-play-circle",
                    })
                })
                return {
                    list: newStateList,
                    prevClickedKey: index
                }
            })
        };
    }

    render() {
        return (
            <section className="panel color1">
                <div className="inner columns divided">
                    <div className="span-2">
                        <h2 className="major">Music</h2>
                        <p style={{ textAlign: "justify" }}>
                            I've been making music as a hobby for over 10 years now. When I first started, I was more focused on music composition and making melodies but
                            over time I shifted towards learning more about the music production process.
                        </p>
                        <p style={{ textAlign: "justify" }}>
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
                                    {this.state.list.map((item) => {
                                        return (
                                            <tr key={item.key}>
                                                <td>
                                                    {/*Use arrow function when passing to onClick to prevent binding issues*/}
                                                    <button
                                                        className={item.iconClass}
                                                        style={{ verticalAlign: "middle" }}
                                                        onClick={() => this.handlePlayClick(item.key)}>
                                                    </button>
                                                </td>
                                                <td
                                                    style={{ verticalAlign: "middle", textAlign: "start", fontSize: "17px" }}>
                                                    <span><b>{item.songTitle}</b></span>
                                                    <br />
                                                    <span style={{ fontSize: "12px" }}>{item.songDesc}</span>
                                                </td>
                                                <td
                                                    style={{ verticalAlign: "middle", textAlign: "start", fontSize: "17px" }}>
                                                    <span><a href={item.originalLink} target="_blank" rel="noopener noreferrer">Listen to the original</a></span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Music 