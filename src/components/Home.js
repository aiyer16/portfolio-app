import React, { Component } from "react"

class Home extends Component {
    render() {
        return (
            /* Panel (Banner) */
            < section className="panel banner right" >
                <div className="content color0 span-3-75">
                    <h1 className="major">Akshay Iyer</h1>
                    <p style={{
                        fontWeight: "bold",
                        webkitAnimation: "text-flicker-in-glow 10s linear infinite forwards",
                        animation: "text-flicker-in-glow 10s linear infinite forwards"
                    }}>DATA ENGINEER . MUSICIAN . PHOTOGRAPHER</p>
                    <ul className="actions">
                        <li><a href="#first" className="button primary color1 circle icon solid fa-angle-right">Next</a></li>
                    </ul>
                </div>
                <div className="image filtered span-1-75" data-position="25% 25%">
                    <img src="images/profile.jpg" alt="" />
                </div>
            </section >
        )
    }
}

export default Home