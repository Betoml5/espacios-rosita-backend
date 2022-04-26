const Report = require("./model");
const create = async (report) => {
  try {
    const newReport = await Report.create(report);
    return newReport;
  } catch (error) {
    return error;
  }
};
