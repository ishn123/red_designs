import { Box, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Overlay = () => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" position="fixed" zIndex="999" height="1000px" width="100%">
            <Navbar>
            </Navbar>
            <Box display="flex" justifyContent="space-between" position="fixed" zIndex="1" bottom="2%" padding="10px">
                <PhoneIcon color='green' fontSize='large' sx={{ backgroundColor: "green", borderRadius: "5px" }}></PhoneIcon>
                <Box display="flex" alignItems="center" gap="5px" justifyContent="end">
                    <Typography component="div" sx={{ backgroundColor: "white", color: "black", borderRadius: "10px" }}>
                        Need Help?
                    </Typography>
                    <WhatsAppIcon color='green' fontSize='large' sx={{ backgroundColor: "green", borderRadius: "5px" }}></WhatsAppIcon>
                </Box>

            </Box>
        </Box>
    )
}

export default Overlay