const { getDbWithCollection } = require("../../db/mongo")

const postUserHandler =  async (req, res) => {   
    const getDb = getDbWithCollection("users")
    try {
        const {body: newUser} = req

        const {insertedId} = await getDb.insertOne(newUser)
    
        return res.status(201).send(insertedId)
    } catch (err) {
        logger.error('Error message post didnt work', err);

        res.status(500).send({ error: "Internal Server Error" })
    }
}

module.exports = postUserHandler
