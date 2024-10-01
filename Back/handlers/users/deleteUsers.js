const { getDbWithCollection } = require("../../db/mongo");
const { ObjectId } = require("mongodb")

const deleteUserHandler = async (req, res) => {
    const getDb = getDbWithCollection("users")
    const id = req.params.id

    try {
        console.log("ID received:", id);
        const user = await getDb.findOne({ _id: new ObjectId(id) });
        console.log("user found:", user);

        if (!user) {
            return res.status(404).send("user not found");
        }
        
        const result = await getDb.deleteOne({ _id: new ObjectId(id) })
        res.send({ id: id, message: "delete operation completed", result });
    } catch (err) {
        logger.error('Error message', err)
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = deleteUserHandler;