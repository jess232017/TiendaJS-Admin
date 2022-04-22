import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import EmojiSymbolsOutlinedIcon from '@mui/icons-material/EmojiSymbolsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import HotTubIcon from '@mui/icons-material/HotTub';
import HomeIcon from '@mui/icons-material/Home';

const nav = {
    items: [
        {
            id: 'dash',
            title: 'Sistema de gestion',
            caption: 'De inventario y ventas',
            type: 'group',
            icon: NavigationOutlinedIcon,
            children: [
                {
                    id: 'dashboard',
                    title: 'Panel de datos',
                    type: 'item',
                    icon: HomeIcon,
                    url: '/admin',
                },
            ],
        },
        {
            id: 'ui-element',
            title: 'Tienda',
            //caption: 'Material UI Components',
            type: 'group',
            icon: HotTubIcon,
            children: [
                {
                    id: 'ventas',
                    title: 'Ventas',
                    type: 'item',
                    icon: LocalGroceryStoreOutlinedIcon,
                    url: '/admin/venta',
                },
                {
                    id: 'productos',
                    title: 'Productos',
                    type: 'collapse',
                    icon: EmojiSymbolsOutlinedIcon,
                    children: [
                        {
                            id: 'items',
                            title: 'Productos',
                            type: 'item',
                            url: '/admin/producto',
                        },
                        {
                            id: 'categorias',
                            title: 'Categorias',
                            type: 'item',
                            url: '/admin/categoria',
                        },
                        {
                            id: 'brands',
                            title: 'Marcas',
                            type: 'item',
                            url: '/admin/marca',
                        },
                    ],
                },
                {
                    id: 'inventario',
                    title: 'Inventarios',
                    type: 'item',
                    icon: AssessmentOutlinedIcon,
                    url: '/admin/inventario',
                },
                {
                    id: 'session',
                    title: 'Sesiones',
                    type: 'item',
                    icon: ClassOutlinedIcon,
                    url: '/admin/sesion',
                },
            ],
        },
        {
            id: 'personal',
            title: 'Contactos',
            //caption: 'Material UI Components',
            type: 'group',
            icon: HotTubIcon,
            children: [
                {
                    id: 'cliente',
                    title: 'Clientes',
                    type: 'item',
                    icon: SupervisedUserCircleOutlinedIcon,
                    url: '/admin/cliente',
                },
                {
                    id: 'empleado',
                    title: 'Empleados',
                    type: 'item',
                    icon: SupervisorAccountOutlinedIcon,
                    url: '/admin/empleado',
                },
                {
                    id: 'proveedor',
                    title: 'Proveedores',
                    type: 'item',
                    icon: RecentActorsOutlinedIcon,
                    url: '/admin/proveedor',
                },
            ],
        },
        {
            id: 'tools',
            title: 'Herramientas',
            //caption: 'Material UI Components',
            type: 'group',
            icon: HotTubIcon,
            children: [
                {
                    id: 'report',
                    title: 'Reportes',
                    type: 'item',
                    icon: DescriptionIcon,
                    url: '/admin/reporte',
                },
                {
                    id: 'help',
                    title: 'Ayuda',
                    type: 'item',
                    icon: HelpOutlineOutlinedIcon,
                    url: '/admin/proveedor',
                },
                {
                    id: 'accessibility',
                    title: 'Accesibilidad',
                    type: 'item',
                    icon: AccessibilityOutlinedIcon,
                    url: '/admin/proveedor',
                },
            ],
        },
    ],
};

export default nav;