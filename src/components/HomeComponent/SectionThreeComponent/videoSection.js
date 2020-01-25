import React from 'react'
import './videoSection.css'
export default function videoSection() {
    return (
        <section id="thirdSection">
        <div className="container" >
            <div className="row">
                <div className="col-sm-1 col-md-6 text-center" data-aos="fade-right">
                    <h1 className="shake animated" >What do we do ...</h1>
                    <p >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                     Latin literature from 45 BC, making it over 2000 years old.
                     Richard McClintock, a Latin professor at Hampden-Sydney College
                        in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                         word in classical literature, discovered the undoubtable source</p>
                        <button class="btn btn-primary bounce animated infinite"
                        type="button">Check US</button>
                </div>
                <div class="col-sm-1 col-md-6 text-center" data-aos="fade-left">
                    <iframe id = "video" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/668nUCeBHyY?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=668nUCeBHyY" width="560" height="315" >
                    </iframe>
                </div>
            </div>
        </div>
    </section>
    )
}
