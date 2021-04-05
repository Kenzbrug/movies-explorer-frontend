const initialMovies = [
    {
        name: 'Киноальманах «100 лет дизайна»',
        link: 'https://images.unsplash.com/photo-1595917442739-94707ce5d02e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        time: '1ч 30мин',
    },
    {
        name: '33 слова о дизайне',
        link: 'https://images.unsplash.com/photo-1595923112485-5e7c738fa67b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2123&q=80',
        time: '1ч 35мин',
    },
    {
        name: 'В погоне за Бенкси',
        link: 'https://images.unsplash.com/photo-1595925024338-c52444a47e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        time: '1ч 10мин',
    },
    {
        name: 'Баския: Взрыв реальности',
        link: 'https://images.unsplash.com/photo-1595927238580-797684d76bd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        time: '30мин',
    },
    {
        name: 'Бег это свобода',
        link: 'https://images.unsplash.com/photo-1595928661736-75db10480925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
        time: '1ч 57мин',
    },
    {
        name: 'Книготорговцы',
        link: 'https://images.unsplash.com/photo-1595903236347-2af2d0c62d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        time: '1ч 29мин',
    },
    {
        name: 'Киноальманах «100 лет дизайна»',
        link: 'https://images.unsplash.com/photo-1595917442739-94707ce5d02e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        time: '1ч 30мин',
    },
    {
        name: '33 слова о дизайне',
        link: 'https://images.unsplash.com/photo-1595923112485-5e7c738fa67b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2123&q=80',
        time: '1ч 35мин',
    },
    {
        name: 'В погоне за Бенкси',
        link: 'https://images.unsplash.com/photo-1595925024338-c52444a47e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        time: '1ч 10мин',
    },
    {
        name: 'Баския: Взрыв реальности',
        link: 'https://images.unsplash.com/photo-1595927238580-797684d76bd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        time: '30мин',
    },
    {
        name: 'Бег это свобода',
        link: 'https://images.unsplash.com/photo-1595928661736-75db10480925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
        time: '1ч 57мин',
    },
    {
        name: 'Книготорговцы',
        link: 'https://images.unsplash.com/photo-1595903236347-2af2d0c62d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        time: '1ч 29мин',
    },
    {
        name: 'Киноальманах «100 лет дизайна»',
        link: 'https://images.unsplash.com/photo-1595917442739-94707ce5d02e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        time: '1ч 30мин',
    },
    {
        name: '33 слова о дизайне',
        link: 'https://images.unsplash.com/photo-1595923112485-5e7c738fa67b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2123&q=80',
        time: '1ч 35мин',
    },
    {
        name: 'В погоне за Бенкси',
        link: 'https://images.unsplash.com/photo-1595925024338-c52444a47e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        time: '1ч 10мин',
    },
    {
        name: 'Баския: Взрыв реальности',
        link: 'https://images.unsplash.com/photo-1595927238580-797684d76bd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        time: '30мин',
    },
    {
        name: 'Бег это свобода',
        link: 'https://images.unsplash.com/photo-1595928661736-75db10480925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
        time: '1ч 57мин',
    },
    {
        name: 'Книготорговцы',
        link: 'https://images.unsplash.com/photo-1595903236347-2af2d0c62d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        time: '1ч 29мин',
    },
    {
        name: 'Киноальманах «100 лет дизайна»',
        link: 'https://images.unsplash.com/photo-1595917442739-94707ce5d02e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        time: '1ч 30мин',
    },
    {
        name: '33 слова о дизайне',
        link: 'https://images.unsplash.com/photo-1595923112485-5e7c738fa67b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2123&q=80',
        time: '1ч 35мин',
    },
    {
        name: 'В погоне за Бенкси',
        link: 'https://images.unsplash.com/photo-1595925024338-c52444a47e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        time: '1ч 10мин',
    },
    {
        name: 'Баския: Взрыв реальности',
        link: 'https://images.unsplash.com/photo-1595927238580-797684d76bd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        time: '30мин',
    },
    {
        name: 'Бег это свобода',
        link: 'https://images.unsplash.com/photo-1595928661736-75db10480925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
        time: '1ч 57мин',
    },
    {
        name: 'Книготорговцы',
        link: 'https://images.unsplash.com/photo-1595903236347-2af2d0c62d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        time: '1ч 29мин',
    },
    {
        name: 'Киноальманах «100 лет дизайна»',
        link: 'https://images.unsplash.com/photo-1595917442739-94707ce5d02e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        time: '1ч 30мин',
    },
    {
        name: '33 слова о дизайне',
        link: 'https://images.unsplash.com/photo-1595923112485-5e7c738fa67b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2123&q=80',
        time: '1ч 35мин',
    },
    {
        name: 'В погоне за Бенкси',
        link: 'https://images.unsplash.com/photo-1595925024338-c52444a47e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        time: '1ч 10мин',
    },
    {
        name: 'Баския: Взрыв реальности',
        link: 'https://images.unsplash.com/photo-1595927238580-797684d76bd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        time: '30мин',
    },
    {
        name: 'Бег это свобода',
        link: 'https://images.unsplash.com/photo-1595928661736-75db10480925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
        time: '1ч 57мин',
    },
    {
        name: 'Книготорговцы',
        link: 'https://images.unsplash.com/photo-1595903236347-2af2d0c62d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        time: '1ч 29мин',
    },
]

const saveMovies = [
    {
        name: 'Киноальманах «100 лет дизайна»',
        link: 'https://images.unsplash.com/photo-1595917442739-94707ce5d02e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        time: '1ч 30мин',
    },
    {
        name: '33 слова о дизайне',
        link: 'https://images.unsplash.com/photo-1595923112485-5e7c738fa67b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2123&q=80',
        time: '1ч 35мин',
    },
    {
        name: 'В погоне за Бенкси',
        link: 'https://images.unsplash.com/photo-1595925024338-c52444a47e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        time: '1ч 10мин',
    },
]

export { initialMovies, saveMovies }