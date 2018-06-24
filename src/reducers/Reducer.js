export const initialState = {
 
    users: [
        {   login: 'Lalka',
            pass: '123456',
            id: 0,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            friends: [1,2],
            parties: [1,2,3,6,9]
        },
        {   login: 'User',
            pass: 'qwerty',
            id: 1,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            friends: [0,2],
            parties: [0,2,4,7,8]
        },
        {
            login: 'Admen',
            pass: 'qwerty123456',
            id: 2,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            friends: [0,1],
            parties: [0,1,5,7,9]
        }
    ],
    parties: [
        {
            name: 'Rock',
            id: 0,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            organizer: 'Lalka',
            cost: '42$',
            category: 'Music',
            adress: 'Zibickaia 42',
            time: '13:37',
            members: [1,2]
        },
        {
            name: 'Party',
            id: 1,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            organizer: 'User',
            cost: '1337$',
            category: 'Drink',
            adress: 'Niamiha 7',
            time: '07:07',
            members: [0,2]
        },
        {
            name: 'Club',
            id: 2,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            organizer: 'Admen',
            cost: '100500$',
            category: 'Dance',
            adress: 'Oktiabrskaia 11',
            time: '23:23',
            members: [0,1]
        },
        {
            name: 'Pool',
            id: 3,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            organizer: 'Lalka',
            cost: '42$',
            category: 'Music',
            adress: 'Vulica 1b',
            time: '20:20',
            members: [1,2,0]
        },
        {
            name: 'Open Air',
            id: 4,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            organizer: 'User',
            cost: '1337$',
            category: 'Drink',
            adress: 'Angarskaia 3',
            time: '22:22',
            members: [0,2,1]
        },
        {
            name: 'Azaza',
            id: 5,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            organizer: 'Admen',
            cost: '100500$',
            category: 'Dance',
            adress: 'Stroitelei 13',
            time: '14:48',
            members: [0,1,2]
        },
        {
            name: '123',
            id: 6,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            organizer: 'Lalka',
            cost: '42$',
            category: 'Music',
            adress: 'Proletarskaia 5',
            time: '04:20',
            members: [1,2,0]
        },
        {
            name: 'qwerty',
            id: 7,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            organizer: 'User',
            cost: '1337$',
            category: 'Drink',
            adress: 'Pushkina 8',
            time: '11:11',
            members: [0,2,1]
        },
        {
            name: ':3',
            id: 8,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            organizer: 'Admen',
            cost: '100500$',
            category: 'Dance',
            adress: 'Backer str. 10',
            time: '13:00',
            members: [0,1]
        },
        {
            name: 'My Party',
            id: 9,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            organizer: 'Admen',
            cost: '100500$',
            category: 'Dance',
            adress: 'Borovaia 23',
            time: '10:30',
            members: [0,1,2]
        },
    ],
    categories: [
        {
            name: 'Music',
            id: 0,
            parties: [0,3,6,9]
        },
        {
            name: 'Drink',
            id: 1,
            parties: [1,4,7]
        },
        {
            name: 'Dance',
            id: 2,
            parties: [2,5,8]
        }
    ],
    currentUser: 
        {   
            login: 'Lalka',
            pass: '123456',
            id: 0,
            status: 'Lol Kek 4eburek',
            discr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
            friends: [1,2],
            parties: [1,2,3,6,9]
            
        },
        
}

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;