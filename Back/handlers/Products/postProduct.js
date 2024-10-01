const { getDbWithCollection } = require("../../db/mongo")


const postProductHandler =  async (req, res) => {   
    const getDb = getDbWithCollection("products")
    try {
        const {body: newProduct} = req

        const {insertedId} = await getDb.insertOne(newProduct)
    
        return res.status(201).send(insertedId)
    } catch (err) {
        logger.error('Error message post didnt work', err);

        res.status(500).send({ error: "Internal Server Error" })
    }
}

module.exports = postProductHandler
