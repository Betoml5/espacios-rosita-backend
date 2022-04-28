const store = require("./store");

const createOne = async (bullyType) => {

    if (!bullyType) {
        throw new Error("Need bullytype")
    }
    const newBullyType = await store.createOne(bullyType);
    return newBullyType;


}

const deleteOne = (id) => {
    if (!id) {
        throw new Error("Need id")
    }

    const deletedBullyType = await store.deleteOne(id);
    return deletedBullyType;
}

const findOne = (id) => {
    if (!id) {
        throw new Error("Need id")
    }
    const bullyType = await store.findOne(id);
    return bullyType;
}

const updateOne = (id, bullyType) => {
    if (!id || !bullyType) {
        throw new Error("Need id")
    }
    const updatedBullyType = await store.updateOne(id, bullyType)
    return updatedBullyType;
}

const find = () => {
    const bullyTypes = await store.find();
    return bullyTypes
}

module.exports = {
    createOne,
    deleteOne,
    updateOne,
    findOne,
    find
}