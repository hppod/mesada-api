var DataTypes = require("sequelize").DataTypes;
var _family = require("./family");
var _period = require("./period");
var _person = require("./person");
var _sequelizemeta = require("./sequelizemeta");
var _task = require("./task");
var _taskexecution = require("./taskexecution");
var _tasksetting = require("./tasksetting");
var _tasksettingperson = require("./tasksettingperson");

function initModels(sequelize) {
  var family = _family(sequelize, DataTypes);
  var period = _period(sequelize, DataTypes);
  var person = _person(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var task = _task(sequelize, DataTypes);
  var taskexecution = _taskexecution(sequelize, DataTypes);
  var tasksetting = _tasksetting(sequelize, DataTypes);
  var tasksettingperson = _tasksettingperson(sequelize, DataTypes);

  person.belongsTo(family, { as: "family", foreignKey: "familyId"});
  family.hasMany(person, { as: "people", foreignKey: "familyId"});
  tasksetting.belongsTo(family, { as: "family", foreignKey: "familyId"});
  family.hasMany(tasksetting, { as: "tasksettings", foreignKey: "familyId"});
  taskexecution.belongsTo(period, { as: "period", foreignKey: "periodId"});
  period.hasMany(taskexecution, { as: "taskexecutions", foreignKey: "periodId"});
  taskexecution.belongsTo(person, { as: "person", foreignKey: "personId"});
  person.hasMany(taskexecution, { as: "taskexecutions", foreignKey: "personId"});
  tasksettingperson.belongsTo(person, { as: "person", foreignKey: "personId"});
  person.hasMany(tasksettingperson, { as: "tasksettingpeople", foreignKey: "personId"});
  taskexecution.belongsTo(task, { as: "task", foreignKey: "taskId"});
  task.hasMany(taskexecution, { as: "taskexecutions", foreignKey: "taskId"});
  task.belongsTo(tasksetting, { as: "taskSetting", foreignKey: "taskSettingId"});
  tasksetting.hasMany(task, { as: "tasks", foreignKey: "taskSettingId"});
  period.belongsTo(tasksettingperson, { as: "taskSetting", foreignKey: "taskSettingId"});
  tasksettingperson.hasMany(period, { as: "periods", foreignKey: "taskSettingId"});

  return {
    family,
    period,
    person,
    sequelizemeta,
    task,
    taskexecution,
    tasksetting,
    tasksettingperson,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
