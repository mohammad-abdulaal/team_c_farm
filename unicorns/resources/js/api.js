import axios from 'axios';
import CookieService from './service/cookieService';

const BASE_URL = '/api'

const cookie = CookieService.get('access_token');

const token = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + cookie
    },
}


export default{

    checkLogin: (login) =>
    axios.post(`${BASE_URL}/login`,login),

    register: (register) =>
    axios.post(`${BASE_URL}/register`,register),

    details: () =>
    axios.get(`${BASE_URL}/details`, token),

    logout: () =>
    axios.get(`${BASE_URL}/logout`, token),


    getUnicorns: () =>
    axios.get(`${BASE_URL}/unicorns`, token),

    getOneUnicorn: (unicorn_id) =>
    axios.get(`${BASE_URL}/unicorns/${unicorn_id}/show`, token),

    createUnicorn: (unicorn) =>
    axios.post(`${BASE_URL}/unicorns`, unicorn, token),


    editUnicorn: (id) =>
    axios.get(`${BASE_URL}/unicorns/${id}/edit`, token),

    updateUnicorn: (unicorn, id) =>
    axios.put(`${BASE_URL}/unicorns/${id}`,unicorn, token),


    deleteUnicorn: (id) =>
    axios.delete(`${BASE_URL}/unicorns/${id}`, token)

}