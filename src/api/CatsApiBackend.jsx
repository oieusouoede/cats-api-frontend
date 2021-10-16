import axios from "axios"

const baseurl = process.env.REACT_APP_BACKEND_BASE_URL

export const getCats = async () => {
    const {data} = await axios.get(`${baseurl}/cats/find=all`)
    return data
    }

export const rmCat = async (id) => {
    const {data} = await axios.delete(`${baseurl}/cats/delete=${id}`)
    console.log(data)

}

export const addCat = async(cat) => {
    const { data } = await axios.post(`${baseurl}/cats`, cat)
    console.log(data)
}

export const updateCat = async(cat) => {
    const { data } = await axios.put(`${baseurl}/cats/update=${cat.id}`, cat)
    console.log(data)
}