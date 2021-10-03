const Report = require("./model");

const create = async (reportDoc) => {
  try {
    const report = await Report.create(reportDoc);
    return report;
  } catch (error) {
    return error;
  }
};

const getAll = async () => {
  try {
    const reports = await Report.find({});
    return reports;
  } catch (error) {
    return error;
  }
};

const getOne = async (id) => {
  try {
    const report = await Report.findById(id);
    return report;
  } catch (error) {
    return report;
  }
};

const deleteOne = async (id) => {
  try {
    const report = await Report.deleteOne(id);
    return report;
  } catch (error) {
    return report;
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  deleteOne,
};
