import React, { useRef, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Image } from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            Line.current.classList.add('lineon')
            text.current.classList.add('titleon');
        }, 5)


        return () => {

        }
    }, [])
    return (



        <>
            <Helmet>
                <title>About</title>
            </Helmet>


            <div className='headingA'>
                <div className='line' ref={Line}>
                </div>
                <h1 className='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className='text'>
                    <h1>
                        Why?
                    </h1>
                    <p>Having the right office supplies is essential for the day to day running of your business. Objects such as pens, pencils, paper, calculators and other office equipment such as printers, need to be available for your employees to work productively and efficiently.

                        When looking for items you need, make sure that they’re fit for the job and that they are of a quality and comfort you desire. If for example your company sends lots of internal mail consider the type of envelopes you’ll need, or if your staff are often on the phone consider the type of notepad, if any that you will need to provide them.

                        If at any time you’re unsure what your staff will need to be able to do their job efficiently, ask them from time to time if there is anything that would make their job easier or if there is anything missing that is crucial for their job role.

                        Finding a supplier however, that can accommodate all your office procurement needs whilst keeping costs low and quality high can be hard to come by. </p>
                </div>

                <div className='imagecontainer'>
                    <div className='Imageabt'>
                        <Image className='mImage' boxSize='400px' objectFit="cover" src='https://images.unsplash.com/photo-1614771637369-ed94441a651a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt="Segun Adebayo" />
                    </div>
                </div>
            </div>
            <div className='Content2'>

                <div className='imagecontainer'>
                    <div className='Imageabt'>
                        <Image className='mImage' boxSize='400px' objectFit="cover" src='https://images.unsplash.com/photo-1614038276039-667c23bc32fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80' alt="Segun Adebayo" />
                    </div>
                </div>
                <div className='text'>
                    <h1>
                        How?
                    </h1>
                    <p>With The-Notebook-Shop we’ll take care of you; our friendly dedicated account managers will listen to your needs and find the best possible solution to suit your office needs. <br></br>
                        From the basic Bic pen, highlighter and pencil to more complex items such as binding machines, data storage and projectors – we ensure that your office will have everything you need, whilst ensuring the price is just right.

                        For more information about the products and services that we offer simply browse our online shop.</p>
                </div>
            </div>
        </>

    )
}

export default About
