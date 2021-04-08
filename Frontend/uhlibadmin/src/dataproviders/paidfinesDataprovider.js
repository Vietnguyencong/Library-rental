import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import { responsiveFontSizes } from '@material-ui/core';
import { string } from 'prop-types';

//const apiUrl = 'https://uhlib.cc/api';
 const apiUrl = 'http://localhost:5000/api';
const httpClient = fetchUtils.fetchJson;

export default {
    getList:  async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        
        const url = `${apiUrl}/${resource}/allpaidfines?${stringify(query)}`;
        return  httpClient(url).then(({ headers, json }) => ({
            data: json.map(resource => ({ ...resource, id: resource.users_id }) ),
            // total: parseInt(headers.get('Content-Range')), // 0-10/10
            // total: [0,9],
            total:10
        }));
        
    },

    getOne: async (resource, params) => { //NEEDS TO TAKE IN USER AND ITEM TO GET ONE THING
        let url = `${apiUrl}/${resource}/${params.users_id}/${params.item_id}`
        const response = await fetch (url)
        const json = await response.json()
        return {data: json}
    },

    update: async(resource, params) =>{ ///NEEDS WORK DONE
        let url = `${apiUrl}/${resource}/${params.id}`
        console.log(params.data)
        return httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: params.data })) // {data: json}
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),



};