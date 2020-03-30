import React from 'react';

import banner from '../images/banner.jpg'
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

const Body = () =>{
    return(
        // <!-- Wrapper -->
        <div classId="wrapper">
            {/* <!-- Main --> */}
            <div classId="main">

            {/* <!-- One --> */}
            <section classId="one">
                <div className="image main" data-position="center">
                    <img src={banner} alt="" />
                </div>
                <div className="container">
                    <header className="major">
                        <h2>Read Only</h2>
                        <p>Just an incredibly simple responsive site<br />
                        template freebie by <a href="http://html5up.net">HTML5 UP</a>.</p>
                    </header>
                    <p>Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo classId in arcu ante lorem ipsum sed accumsan erat praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum.</p>
                </div>
            </section>

            {/* <!-- Two --> */}
            <section classId="two">
                <div className="container">
                    <h3>Things I Can Do</h3>
                    <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.</p>
                    <ul className="feature-icons">
                        <li className="icon solid fa-code">Write all the code</li>
                        <li className="icon solid fa-cubes">Stack small boxes</li>
                        <li className="icon solid fa-book">Read books and stuff</li>
                        <li className="icon solid fa-coffee">Drink much coffee</li>
                        <li className="icon solid fa-bolt">Lightning bolt</li>
                        <li className="icon solid fa-users">Shadow clone technique</li>
                    </ul>
                </div>
            </section>

            {/* <!-- Three --> */}
            <section classId="three">
                <div className="container">
                    <h3>A Few Accomplishments</h3>
                    <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
                    <div className="features">
                        <article>
                            <a href="#" className="image"><img src={pic01} alt="" /></a>
                            <div className="inner">
                                <h4>Possibly broke spacetime</h4>
                                <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
                            </div>
                        </article>
                        <article>
                            <a href="#" className="image"><img src={pic02} alt="" /></a>
                            <div className="inner">
                                <h4>Terraformed a small moon</h4>
                                <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
                            </div>
                        </article>
                        <article>
                            <a href="#" className="image"><img src={pic03} alt="" /></a>
                            <div className="inner">
                                <h4>Snapped dark matter in the wild</h4>
                                <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* <!-- Four --> */}
            <section classId="four">
                    <div className="container">
                        <h3>Contact Me</h3>
                        <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
                        <form method="post" action="#">
                            <div className="row gtr-uniform">
                                <div className="col-6 col-12-xsmall"><input type="text" name="name" classId="name" placeholder="Name" /></div>
                                <div className="col-6 col-12-xsmall"><input type="email" name="email" classId="email" placeholder="Email" /></div>
                                <div className="col-12"><input type="text" name="subject" classId="subject" placeholder="Subject" /></div>
                                <div className="col-12"><textarea name="message" classId="message" placeholder="Message" rows="6"></textarea></div>
                                <div className="col-12">
                                    <ul className="actions">
                                        <li><input type="submit" className="primary" value="Send Message" /></li>
                                        <li><input type="reset" value="Reset Form" /></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Body;