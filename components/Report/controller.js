const store = require("./store");

const create = async (reportDoc) => {
  if (!reportDoc) return Promise.reject("Need report");

  const report = await store.create(reportDoc);
  console.log(report);
  console.log(reportDoc);
  return report;
};

const get = async (id) => {
  if (!id) return Promise.reject("Need id");
  const report = await store.getOne(id);
  return report;
};
const getAll = async () => {
  const reports = await store.getAll();
  return reports;
};

const deleteOne = async (id) => {
  if (!id) return Promise.reject("Need id");
  const report = await store.deleteOne(id);
  return report;
};

module.exports = {
  create,
  get,
  getAll,
  deleteOne,
};
