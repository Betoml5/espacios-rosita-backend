const BullyType = require("./model");


const createOne = async (bullyType) => {
    try {
        const newBullyType = await BullyType.create(bullyType);
        return newBullyType;
    } catch (error) {
        throw error;
    }
}

const findOne = async (id) => {
    try {
        const bullyType = await BullyType.findById(id);
        return bullyType;
    } catch (error) {
        throw error;
    }
}

const updateOne = async (id, bullyType) => {
    try {
        const updatedBullyType = await BullyType.findByIdAndUpdate(id, bullyType);
        return updatedBullyType;
    } catch (error) {
        throw error;
    }
}

const deleteOne = async (id) => {
    try {
        const deletedBullyType = await BullyType.deleteOne(id);
        return deletedBullyType;
    } catch (error) {
        throw error;
    }
}

const find = async () => {
    try {
        const bullyTypes = await BullyType.find({});
        return bullyTypes;
    } catch (error) {
        throw error
    }
}


module.exports = {
    createOne,
    updateOne,
    findOne,
    deleteOne,
    find
}