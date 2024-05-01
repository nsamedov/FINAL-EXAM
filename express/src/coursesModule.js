import {getCollection} from "./mongodb.js";

const collectionName = "courses"

export async function getAll() {
    const collection = await getCollection(collectionName)
    return await collection.find().sort({name: 1}).toArray()
}

export async function findCourseByName(name) {
    const collection = await getCollection(collectionName)
    return await collection.findOne({name})
}

export async function addCourse(name, count, startYear) {
    const collection = await getCollection(collectionName)
    const existingCourse = await findCourseByName(name)
    if (existingCourse) {
        return null
    }
    return await collection.insertOne({name, count, startYear})
}