import React from "react"

function About() {
    return (
        <section className="panel spotlight medium center" id="first" >
            <div className="content span-7">
                <h3 className="major">About Me</h3>
                <p style={{ textAlign: "justify" }}> I am a <b>Data Engineer </b>who loves solving complex problems
                    and believes in the power of data-driven decision making and analytics to help drive ideas forward. I am currently working on furthering <b>ETL</b> capabilities
                    within <b>Mastercard's Data and Services </b>organization to fuel a growing suite of SaaS analytics solutions.
                    </p>
                <p style={{ textAlign: "justify" }}> In my spare time, I like to exercise my music making skills, exploring
                different musical genres and learning more about the production process. More recently, my two-year stay in London inspired
                me to travel around Europe and pick up a new hobby - photography!
                    </p>
            </div>
            <div className="image filtered tinted" data-position="top left">
                <img src="images/pic02.jpg" alt="" />
            </div>
        </section >
    )
}

export default About 