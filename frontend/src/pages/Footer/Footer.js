import React from 'react'
import { FiFacebook, AiOutlineHeart, AiOutlineInstagram, IoLogoYoutube } from 'react-icons/all';
import { Input, Stack } from '@chakra-ui/react'
import './footercss.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footerCmp">
            <footer>
                <div className="footerCategorie">
                    <h1>Categories</h1>
                    <ul>
                        <li><Link to='/shop/?cg=Art'>Art</Link></li>
                        <li><Link to='/shop/?cg=Stationery'>Stationery</Link></li>
                        <li><Link to='/shop/?cg=Office'>Office</Link></li>
                        <li><Link to='/shop/?cg=Craft'>Craft</Link></li>
                    </ul>
                </div>

                <div className="fooHelp">
                    <h1>Help</h1>
                    <ul>
                        <li>Tracke Order</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div className="footerGetInTouch">
                    <h1>Get in touch</h1>
                    <ul>
                        <p>Any questions? Let us know in store at GLA universitaire, Mathura or call us on (+91) 4862789654</p>
                        <li className="footerIcons">
                            <FiFacebook size="25" />
                        </li>
                        <li className="footerIcons">
                            <AiOutlineInstagram size="25" />
                        </li>
                        <li className="footerIcons">
                            <IoLogoYoutube size="25" />
                        </li>
                    </ul>
                </div>

                <div className="footerNews">
                    <h1>Newsletter</h1>
                    <ul>
                        <li>
                            <Stack spacing={3}>
                                <Input variant="flushed" placeholder="email@example.com" size="10" width="200px" />
                            </Stack>
                        </li>
                        <li>
                            <button className="footerBtn">Subscribe</button>
                        </li>
                    </ul>
                </div>

                <div className="creditsIcons">
                    <ul>
                        <li><img src="https://i.imgur.com/AHCoUZO.png" className="img1" /></li>
                        <li><img src="https://i.imgur.com/JZRipBg.png" className="img2" /></li>
                        <li><img src="https://i.imgur.com/l8OAGyo.png" className="img3" /></li>
                        <li><img src="https://i.imgur.com/IDHC2iv.png" className="img4" /></li>
                    </ul>

                </div>

                <div className="paragraphFooter"><p>Copyright ©2021 All rights reserved | This template is made with ♡ by Developer</p>
                    <Link to='' ></Link>
                    <Link to=''  >Astha Chauhan</Link>
                    <Link to=''  ></Link>
                </div>



            </footer>

        </div>
    )
}

export default Footer;
