const { getDbWithCollection } = require("../../db/mongo");
// const logger = require("../../middleware/loggerWinson")

const getUserByIdHandler = async (req, res) => {
    const db = getDbWithCollection("users");

    try {
        const users = await db.find().toArray();
        res.send(users);
    } catch (err) {
        logger.error('Error message', err)
        res.status(500).send({ err: "Internal Server Error" });
    }
};

module.exports = getUserByIdHandler;
