import {
    FaRegCreditCard,
    FaTerminal,
    FaConnectdevelop,
    FaGem,
    FaLaptopCode,
    FaBook,
    FaFileCode,
    FaHouseUser,
    FaUsers,
    FaGlobeAmericas,
    FaBriefcase,
    FaNewspaper,
    FaHandshake,
} from 'react-icons/fa';

const data = [
    {
        title: 'products',
        color: '',
        links: [
            {
                icon: <FaRegCreditCard />,
                label: 'payment',
                url: '/products',
            },
            {
                icon: <FaTerminal />,
                label: 'terminal',
                url: '/products',
            },
            {
                icon: <FaConnectdevelop />,
                label: 'connect',
                url: '/products',
            },
            {
                icon: <FaGem />,
                label: 'treasure',
                url: '/products',
            },
        ],
    },
    {
        title: 'developers',
        color: 'violet',
        links: [
            {
                icon: <FaLaptopCode />,
                label: 'plugins',
                url: '/developers',
            },
            {
                icon: <FaBook />,
                label: 'libraries',
                url: '/developers',
            },
            {
                icon: <FaFileCode />,
                label: 'code',
                url: '/developers',
            },
        ],
    },
    {
        title: 'company',
        color: 'gold',
        links: [
            {
                icon: <FaHouseUser />,
                label: 'about',
                url: '/company',
            },
            {
                icon: <FaUsers />,
                label: 'customers',
                url: '/company',
            },
            {
                icon: <FaGlobeAmericas />,
                label: 'enterprise',
                url: '/company',
            },
            {
                icon: <FaBriefcase />,
                label: 'jobs',
                url: '/company',
            },
            {
                icon: <FaNewspaper />,
                label: 'newsroom',
                url: '/company',
            },
            {
                icon: <FaHandshake />,
                label: 'partners',
                url: '/company',
            },
        ],
    },
];

export default data;
