const { getDbWithCollection } = require("../../db/mongo");
// const logger = require("../../middleware/loggerWinson")

const getProductByIdHandler = async (req, res) => {
    const db = getDbWithCollection("products");

    try {
        const products = await db.find().toArray();
        res.send(products);
    } catch (err) {
        logger.error('Error message', err)
        res.status(500).send({ err: "Internal Server Error" });
    }
};

module.exports = getProductByIdHandler;
