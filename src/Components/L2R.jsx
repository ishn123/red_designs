import { Box, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react'

const L2R = () => {

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row" position="absolute" top="60%" width="100%" marginLeft="0" marginRight="0" justifyContent="center">
                <Box display="flex" flexDirection="row" alignItems="center" bgcolor="black">
                    <Box bgcolor="gray">
                        <KeyboardArrowRightIcon fontSize='large'></KeyboardArrowRightIcon>
                    </Box>
                    <Box>
                        <Typography fontSize="x-large" fontFamily="monospace" padding="40px" color="white">
                            Interior Design
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" bgcolor="white">
                    <Box bgcolor="gray">
                        <KeyboardArrowRightIcon fontSize='large' sx={{ color: "white" }}></KeyboardArrowRightIcon>
                    </Box>
                    <Box bgcolor="white">
                        <Typography fontSize="x-large" fontFamily="monospace" padding="40px">
                            Architecture
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" bgcolor="gray">
                    <Box bgcolor="black">
                        <KeyboardArrowRightIcon fontSize='large' sx={{ color: "white" }}></KeyboardArrowRightIcon>
                    </Box>
                    <Box>
                        <Typography fontSize="x-large" fontFamily="monospace" padding="40px">
                            Landscape
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" bgcolor="white">
                    <Box bgcolor="black">
                        <KeyboardArrowRightIcon fontSize='large' sx={{ color: "white" }}></KeyboardArrowRightIcon>
                    </Box>
                    <Box bgcolor="white">
                        <Typography fontSize="x-large" fontFamily="monospace" padding="40px">
                            Automation
                        </Typography>
                    </Box>
                </Box>


            </Box>
        </Box>






    )
}

export default L2R