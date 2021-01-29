
const initState = {
    addList: [
        {id: 1, title: 'Dvds Rick and Morty', category:'multimédia', description: 'Lorem Ipsum', image: 'https://images-na.ssl-images-amazon.com/images/I/61XyRAQ3KmL._AC_.jpg'},
        {id: 2, title: 'Dvds Bojack Horseman', category:'multimédia', description: 'Lorem Ipsum'},
        {id: 3, title: 'Dvds Steven Universe', category:'multimédia', description: 'Lorem Ipsum'},
        {id: 4, title: 'Dvds Gravity Falls', category:'multimédia', description: 'Lorem Ipsum'},
        {id: 5, title: 'Dvds Avatar the last air bender', category:'multimédia', description: 'Lorem Ipsum'},
        {id: 6, title: 'MBK Rocket', category:'véhicules', description: 'Lorem Ipsum'},
        {id: 7, title: 'Suzuki Marauder 125cc', category:'véhicules', description: 'Lorem Ipsum'},
        {id: 8, title: 'Fiat Panda', category:'véhicules', description: 'Lorem Ipsum'},
        {id: 9, title: 'K2000', category:'véhicules', description: 'Lorem Ipsum'},
        {id: 10, title: 'Supercopter', category:'véhicules', description: 'Lorem Ipsum'},
    ],
    newAdd: {
        title: '',
        description: '',
        category: '',
    },
    newAddClear: {
        title: '',
        description: '',
        category: '',
    }
}

const addReducer = (state = initState, action) => {
    switch(action.type){
        case 'NEW_ADD':
            console.log('created add', action.add);
    }
    return state
}

export default addReducer