import React from "react"

function Gallery() {
    return (
        < section className="panel" >
            <div className="intro color2">
                <h2 className="major">Photography</h2>
                <p style={{ textAlign: "justify" }}>Here are some of my favorite pictures from my travels around the world. My preferred equipment includes an Olympus OMD EM-5 mirror-less camera
                and with the 25mm Panasonic Lumix G prime lens (50mm equivalent). I use Affinity Photo for all my editing.
                    </p>
            </div>
            <div className="gallery">
                <div className="group span-3">
                    <a href="images/gallery/fulls/luxemborg-1.jpg" className="image filtered span-3" data-position="bottom"><img src="images/gallery/thumbs/luxemborg-1.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/greece-1.jpg" className="image filtered span-1-5" data-position="center"><img src="images/gallery/thumbs/greece-1.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/paris.jpg" className="image filtered span-1-5" data-position="bottom"><img src="images/gallery/thumbs/paris.jpg" alt="" /></a>
                </div>
                <a href="images/gallery/fulls/barcelona-self.jpg" className="image filtered span-2-5" data-position="top"><img src="images/gallery/thumbs/barcelona-self.jpg" alt="" /></a>
                <div className="group span-4-5">
                    <a href="images/gallery/fulls/london-1.jpg" className="image filtered span-3" data-position="top"><img src="images/gallery/thumbs/london-1.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/greece-2.jpg" className="image filtered span-1-5" data-position="center"><img src="images/gallery/thumbs/greece-2.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/prague-1.jpg" className="image filtered span-1-5" data-position="bottom"><img src="images/gallery/thumbs/prague-1.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/berlin-wall.jpg" className="image filtered span-3" data-position="top"><img src="images/gallery/thumbs/berlin-wall.jpg" alt="" /></a>
                </div>
                <a href="images/gallery/fulls/london-2.jpg" className="image filtered span-2-5" data-position="center"><img src="images/gallery/thumbs/london-2.jpg" alt="" /></a>
            </div>
        </section >
    )
}

export default Gallery