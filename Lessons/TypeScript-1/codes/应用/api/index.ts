import {
    LOGIN
} from './interfaces';

export const login = async (data: LOGIN) => {
    return fetch('/login');
}

export const getUser = async <T>(id: number, isDetail: boolean = false) => {
    let rs = await fetch('/getUser?id=' + id);
    let data: Promise<T> = await rs.json();
    return data;
}