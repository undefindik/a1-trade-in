const routes = [
    {
        url: '/api/devices',
        title: 'Получить список девайсов',
    },
    {
        url: '/api/devices/:id',
        title: 'Получить объект девайса по ID'
    },
    {
        url: '/api/devices?producer=&model=&configuration',
        title: 'Получить объект девайса по параметрам'
    },
    {
        url: '/api/conditions',
        title: 'Получить список состояний девайса'
    },
    {
        url: '/api/conditions/:type',
        title: 'Получить объект состояния по type'
    },
    {
        url: '/api/calculate?producer=&model=&configuration&condition=',
        title: 'Получить объект суммы вознаграждений за девайс'
    }
]

export default routes