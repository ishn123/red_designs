import { Box, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Overlay = () => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" position="fixed" zIndex="999" height="1000px" width="100%">
            <Box display="flex" justifyContent="space-between" position="fixed" zIndex="1" bottom="2%" padding="10px" width="100%">
                <PhoneIcon color='green' fontSize='large' sx={{ backgroundColor: "green", borderRadius: "50%" }}></PhoneIcon>
                <Box display="flex" alignItems="center" gap="5px" justifyContent="end" marginRight="20px">
                    <Typography component="div" sx={{ backgroundColor: "gray", color: "black", borderRadius: "10px" }} fontWeight="bold">
                        Need Help?
                    </Typography>
                    <WhatsAppIcon color='green' fontSize='large' sx={{ backgroundColor: "green", borderRadius: "50%" }}></WhatsAppIcon>
                </Box>

            </Box>
        </Box>
    )
}

export default Overlay