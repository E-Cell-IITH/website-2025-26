import React from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';

const GuideCard = ({ title, description, image, latitude, longitude, width }) => {
    const openGoogleMap = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
        window.open(url, '_blank');
    }

    return (
        <Card sx={{
            zIndex: 1000,
            border: '#5B5A5A solid 1px',
            display: 'flex',
            alignItems: 'center',
            height: { xs: 68, md: 136 },
            width: { xs: width ? width : 200, md: width ? 440 : 380 },
            borderRadius: '7px',
            overflow: 'hidden',
            backgroundColor: '#3A3C43',
            color: '#fff'
        }}>
            <CardMedia
                component="img"
                sx={{
                    width: { xs: 54, md: 108 },
                    height: { xs: 54, md: 108 }, ml: "12px"
                }}
                image={image}
                alt={title}
            />
            <Box sx={{
                justifyContent: 'space-between',
                marginRight: '12px',
                marginTop: { xs: '8px', md: '16px' },
                marginBottom: { xs: '8px', md: '16px' },
                height: { xs: 'calc(100% - 16px)', md: 'calc(100% - 32px)' },
                ml: "12px",
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
            }}>
                <Box>
                    <Typography variant="h5" component="div" sx={{ fontFamily: 'Montserrat', fontSize: { xs: "11px", md: "22px" }, fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontFamily: 'Montserrat', fontSize: { xs: "7px", md: "14px" }, fontWeight: '400' }}>
                        {description}
                    </Typography>
                </Box>
                <button onClick={openGoogleMap} className="bg-[#45474D] text-white font-montserrat button-googleMap font-normal py-0.5 px-2 rounded outline-none focus:outline-none hover:bg-[#56585D] transition-colors">
                    Show in Google Maps
                </button>
            </Box>
        </Card>
    );
};

export default GuideCard;