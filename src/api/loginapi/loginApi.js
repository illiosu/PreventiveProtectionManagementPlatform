
import request from '../../utils/request';


export function login(data) {
    return request({
        url: '/auth/auth/login',
        method: 'POST',
        data,
    })
}