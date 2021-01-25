import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertDeponija = payload => api.post(`/deponija`, payload)
export const getAllDeponii = () => api.get(`/deponii`)
export const updateDeponijaById = (id, payload) => api.put(`/deponija/${id}`, payload)
export const deleteDeponijaById = id => api.delete(`/deponija/${id}`)
export const getDeponijaById = id => api.get(`/deponija/${id}`)

const apis = {
    insertDeponija,
    getAllDeponii,
    updateDeponijaById,
    deleteDeponijaById,
    getDeponijaById,
}

export default apis