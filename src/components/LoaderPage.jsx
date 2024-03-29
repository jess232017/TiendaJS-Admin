import React from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'

const LoaderPage = () => {
    return (
        <Box
            p={2.5}
            m={0.1}
            sx={{
                height: '100%',
                borderRadius: '0px',
                boxShadow: '0 4px 6px -2px rgb(0 0 0 / 12%), 0 2px 2px -1px rgb(0 0 0 / 5%)',
            }}
            display='flex'
            flexDirection='column'>
            <Box display='flex' justifyContent='space-between' flexWrap='wrap' mt={6.5}>
                <Stack direction='row' flexWrap='wrap' spacing={0.5}>
                    <Skeleton animation='wave' width={93} height={45} />
                    <Skeleton animation='wave' width={93} height={45} />
                    <Skeleton animation='wave' width={93} height={45} />
                </Stack>
                <Stack direction='row' flexWrap='wrap' spacing={0.5}>
                    <Skeleton animation='wave' width={40} height={45} />
                    <Skeleton animation='wave' width={143} height={45} />
                </Stack>
            </Box>
            <Skeleton animation='wave' variant='rectangular' height='100%' />

            <Box display='flex' justifyContent='space-between'>
                <Skeleton animation='wave' width={93} height={45} />
                <Skeleton animation='wave' width={293} height={45} />
            </Box>
        </Box>
    )
}

export default LoaderPage
