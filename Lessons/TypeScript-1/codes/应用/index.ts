import {
    login,
    getUser
} from './api'
import {
    USER,
    USER_DETAIL
} from './api/interfaces'


login({
    username: 'zMouse',
    password: '123'
});


(async function() {
    let user = await getUser<USER_DETAIL>(1, true);
    user.id
})()
