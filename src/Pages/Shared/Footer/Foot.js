import { Footer } from 'flowbite-react';
import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin, BsMedium, BsTwitter} from "react-icons/bs";


const Foot = () => {

    const social =[
        {
            id:1,
            icon:<BsFacebook/>,
            link:"#",
        },
        {
            id:2,
            icon:<BsLinkedin/>,
            link:"https://www.linkedin.com/in/isaac-wagner-68409b304/",
        },
        {
            id:3,
            icon:<BsTwitter/>,
            link:"#",
        },
        {
            id:4,
            icon:<BsGithub/>,
            link:"https://github.com/glory001106",
        },
        {
            id:5,
            icon:<BsMedium/>,
            link:"#",
        }
    ]
    
    return (
        <div>
            <Footer container={true}>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                            href="#"
                            // src="https://i.ibb.co/n7s9vgT/logo.png"
                            alt=""
                            name="Isaac Wagner"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Shop
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Team
                                </Footer.Link>
                            </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="https://github.com/glory001106">
                                    Github
                                    </Footer.Link>
                                    <Footer.Link href="https://www.linkedin.com/in/isaac-wagner-68409b304/">
                                    LinkedIn
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-10/12 mx-auto sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="https://portfolio-rakibul.netlify.app/"
                            by="Isaac Wagner™"
                            year={2023}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            {
                                social.map(s=><a className='text-xl hover:text-green-500' key={s.id} href={s.link}>{s.icon}</a>)
                            }
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default Foot;