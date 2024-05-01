const { gql, default: request } = require("graphql-request")

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCourseList = async() =>{
    const query = gql`asd`
    const result = await request(MASTER_URL, query)
    return result
}
const getSideBanner = async() => {
    const query = gql`sss`
    const result = await request(MASTER_URL, query)
    return result
}

const getCourseById = async() => {
    const query = gql`aaa`
    const result = await request(MASTER_URL, query)
    return result
}
const enrollToCourse = async() => {
    const query = gql`aaa`
    const result = await request(MASTER_URL, query)
    return result
}
const checkUserEnrolledToCourse = async() => {
    const query = gql`aaa`
    const result = await request(MASTER_URL, query)
    return result
}

export default {
    getAllCourseList, getSideBanner, getCourseById, enrollToCourse, checkUserEnrolledToCourse
}