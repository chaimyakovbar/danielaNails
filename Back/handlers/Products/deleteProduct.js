const { getDbWithCollection } = require("../../db/mongo");
const { ObjectId } = require("mongodb")
// const logger = require("../../middleware/loggerWinson")


const deleteProductHandler = async (req, res) => {
    const getDb = getDbWithCollection("products")
    const id = req.params.id

    try {
        console.log("ID received:", id);
        const product = await getDb.findOne({ _id: new ObjectId(id) });
        console.log("Product found:", product);

        if (!product) {
            return res.status(404).send("Product not found");
        }
        
        const result = await getDb.deleteOne({ _id: new ObjectId(id) })
        res.send({ id: id, message: "delete operation completed", result });
    } catch (err) {
        logger.error('Error message', err)
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = deleteProductHandler;