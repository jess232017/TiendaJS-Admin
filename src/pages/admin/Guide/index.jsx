import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Icon
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SummarizeIcon from '@mui/icons-material/SummarizeTwoTone';

//owned
import reports from './data';
import PageCard from '@/common/PageCard';
import useReader from '../../../services/hooks/UseReader';

const ReportBox = styled(Stack)(({ theme }) => ({
    paddingTop: '1rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingBottom: '1.5rem',
    height: '100%',
    backgroundColor: theme.palette.background.paperSecondary,
    borderRadius: '.3rem',
    '&:hover': {
        transition: 'all .2s ease-out',
        transform: 'translate(0, -6px)',
        boxShadow: '0 0.25rem 0.25rem rgb(0 0 0 / 10%) !important',
    },
}));

const Guide = () => {
    const { t } = useTranslation();
    const { viewLightBox, enable } = useReader();

    const handleClick = (url, subtitle) => {
        viewLightBox(url, subtitle);
    };

    return (
        <PageCard
            headerProps={{
                title: t('report.title'),
                subheader: t('report.subheader'),
                avatar: <SummarizeIcon />,
            }}
        >
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                {reports.map(({ title, subtitle, url }, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index} p={2}>
                        <ReportBox component="article" spacing={2} justifyContent="space-between">
                            <Typography component="span" variant="h5">
                                {title}
                            </Typography>
                            <Typography component="span" variant="subtitle2">
                                {subtitle}
                            </Typography>
                            <Button
                                fullWidth={false}
                                onClick={() => handleClick(url, subtitle)}
                                endIcon={<NavigateNextIcon />}
                                variant="outlined"
                            >
                                Mirar Guia
                            </Button>
                        </ReportBox>
                    </Grid>
                ))}
            </Grid>
        </PageCard>
    );
};

export default Guide;
