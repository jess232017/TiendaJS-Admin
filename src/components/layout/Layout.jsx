import React from 'react';

import { Outlet } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import RequireAuth from '@/services/auth/RequireAuth';
import RequireRole from '@/services/auth/RequireRole';
import { ROLES } from '@/services/auth/permission-maps';
import Loader from '@/components/LoaderPage';
//import Loader from '@/components/Loader';

import clsx from 'clsx';

import { styled } from '@mui/system';
import { makeStyles, useTheme } from '@mui/styles';
import { useMediaQuery, Box, Toolbar } from '@mui/material';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import { drawerWidth } from '@/services/constant';

const Layout = React.lazy(() => import('@/components/layout/Layout'));
const Auth = React.lazy(() => import('@/pages/auth/Auth'));
const Login = React.lazy(() => import('@/pages/auth/Login'));
const Register = React.lazy(() => import('@/pages/auth/Register'));
const Ventas = React.lazy(() => import('@/pages/admin/Venta'));
const DetalleVenta = React.lazy(() => import('@/pages/admin/Venta/Detalle'));
const VentaNueva = React.lazy(() => import('@/pages/admin/Venta/Nueva'));
const Inventory = React.lazy(() => import('@/pages/admin/Inventory'));
const Supplier = React.lazy(() => import('@/pages/admin/Supplier'));
const Dashboard = React.lazy(() => import('@/pages/admin/Dashboard'));
const Employee = React.lazy(() => import('@/pages/admin/Employee'));
const Product = React.lazy(() => import('@/pages/admin/Product'));
const Category = React.lazy(() => import('@/pages/admin/Category'));
const Brand = React.lazy(() => import('@/pages/admin/Brand'));
const Client = React.lazy(() => import('@/pages/admin/Client'));
const Reporte = React.lazy(() => import('@/pages/admin/Report'));
const ReportViewer = React.lazy(() => import('@/pages/admin/Report/ReportViewer'));
const Setting = React.lazy(() => import('@/pages/admin/Setting'));
const NoFound = React.lazy(() => import('@/pages/error/NoFound'));

const Main = styled('div')(({ theme }) => ({
    padding: theme.spacing(2.5),
    height: 'calc(100% - 20px)',
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
}));

const Div = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    flexGrow: 1,
    /*padding: theme.spacing(3),*/
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
        marginLeft: -drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
    },
}));

const useStyles = makeStyles((theme) => ({
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const MainLayout = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    React.useEffect(() => {
        setDrawerOpen(matchUpMd);
    }, [matchUpMd]);

    return (
        <Box display="flex">
            <Sidebar drawerOpen={drawerOpen} drawerToggle={handleDrawerToggle} />
            <Div className={clsx({ [classes.contentShift]: drawerOpen })}>
                <Toolbar>
                    <Header drawerOpen={drawerOpen} drawerToggle={handleDrawerToggle} />
                </Toolbar>
                <Main>
                    <React.Suspense fallback={<Loader />}>
                        <Routes>
                            <Route index element={<RequireRole roles={[ROLES.administrador]} children={<Dashboard />} />} />

                            <Route
                                path="venta"
                                element={<RequireRole roles={[ROLES.administrador, ROLES.vendedor]} children={<Ventas />} />}
                            />

                            <Route
                                path="venta/:invoiceId"
                                element={<RequireRole roles={[ROLES.administrador, ROLES.vendedor]} children={<DetalleVenta />} />}
                            />

                            <Route
                                path="venta/nueva"
                                element={<RequireRole roles={[ROLES.administrador, ROLES.vendedor]} children={<VentaNueva />} />}
                            />

                            <Route
                                path="categoria"
                                element={<RequireRole roles={[ROLES.administrador, ROLES.vendedor]} children={<Category />} />}
                            />

                            <Route
                                path="marca"
                                element={<RequireRole roles={[ROLES.administrador, ROLES.vendedor]} children={<Brand />} />}
                            />

                            <Route
                                path="Inventario"
                                element={<RequireRole roles={[ROLES.administrador, ROLES.bodeguero]} children={<Inventory />} />}
                            />

                            <Route
                                path="producto"
                                element={<RequireRole roles={[ROLES.administrador, ROLES.bodeguero]} children={<Product />} />}
                            />

                            <Route
                                path="cliente"
                                element={<RequireRole roles={[ROLES.administrador, ROLES.cajero, ROLES.vendedor]} children={<Client />} />}
                            />

                            <Route
                                path="proveedor"
                                element={
                                    <RequireRole roles={[ROLES.administrador, ROLES.cajero, ROLES.vendedor]} children={<Supplier />} />
                                }
                            />

                            <Route path="empleado" element={<RequireRole roles={[ROLES.administrador]} children={<Employee />} />} />

                            <Route path="reporte" element={<RequireRole roles={[ROLES.administrador]} children={<Reporte />} />} />

                            <Route path="reporte/ver" element={<RequireRole roles={[ROLES.administrador]} children={<ReportViewer />} />} />

                            <Route
                                path="setting"
                                element={
                                    <RequireRole
                                        roles={[ROLES.administrador]}
                                        children={
                                            <React.Suspense fallback={<Loader />}>
                                                <Setting />
                                            </React.Suspense>
                                        }
                                    />
                                }
                            />

                            <Route path="*" element={<NoFound />} />
                        </Routes>
                    </React.Suspense>
                    <Outlet />
                </Main>
            </Div>
        </Box>
    );
};

export default MainLayout;