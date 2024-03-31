import request from '../../utils/request.js';



export function adminaegionList() {// 行政区域列表
    return request({
        url: '/databank/adminaegion/list',
        method: 'get',
    });
}
export function updatelist(data) {// 项目列表
    return request({
        url: '/databank/project/list',
        method: 'post',
        data
    });
}


export function selectByAll(data) {// 区域列表
    return request({
        url: '/databank/area/selectByAll',
        method: 'post',
        data
    });
}