import axios from "axios"

const baseURL = '   /api/persons'

const getAll = () => {
    const promise = axios.get(baseURL)
    return promise.then(result => result.data)
}

const fetchOne = id => {
    const promise = axios.get(`${baseURL}/${id}`)
    return promise.then(result => result.data)
}

const update = (id, newObj) => {
    console.log(id);
    const promise = axios.put(`${baseURL}/${id}`, newObj)
    return promise.then(result => result.data)
}

const create = newObj => {
    const promise = axios.post(baseURL, newObj)
    return promise.then(result => result.data)
}

const deletePerson = id => {
    const url = `${baseURL}/${id}`
    const promise = axios.delete(url)
    return promise.then(result => result.data)
}

export default {
    getAll,
    create,
    update,
    fetchOne,
    deletePerson
}