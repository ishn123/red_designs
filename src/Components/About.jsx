import { Box,Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "../styles/about.css"
const About = () => {
    return (
        <Box display="flex" padding="10px" marginTop="50px">
            <Box textAlign="center" flexDirection="column" alignItems="flex-start" display="flex">
                <Typography component="h2" padding="60px" textAlign="left" lineHeight="1.4" fontWeight="bold" fontSize="86px">About Us</Typography>
                <Box>
                    <Typography component="p" padding="60px" textAlign="justify">
                        Our journey in the world of interior design is a story of creativity, inspiration, and innovation. With a deep understanding of architectural principles and a flair for aesthetics, we bring life to your spaces. Every project we undertake is a testament to our dedication to excellence and our passion for design. Our portfolio spans a wide range of styles, from contemporary and minimalistic to classic and opulent. We collaborate closely with our clients, ensuring that their preferences and needs are at the forefront of our designs. Our mission is to create interiors that not only capture the imagination but also enhance the functionality of each space.
                    </Typography>   
                </Box>

                <Box bgcolor="black" display="flex" width="max-content" marginLeft="50px" >
                    <Box bgcolor="gray">
                        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                    </Box>
                    <Typography color="white" fontSize="large">Read More</Typography>
                </Box>
                
            </Box>
            <Box display="flex" flexDirection="column" textAlign="center" justifyContent="center">
                <div style={{border:"10px solid gray"}} className='circle'></div>
                <Typography component='span' fontSize="90px" fontWeight="bold" >7+</Typography>
                <Typography component='span' fontSize="86px">Years</Typography>
            </Box>

        </Box>
    )
}

export default About