var DataTypes = require("sequelize").DataTypes;
var _families = require("./families");
var _periods = require("./periods");
var _persons = require("./persons");
var _sequelizemeta = require("./sequelizemeta");
var _taskexecutions = require("./taskexecutions");
var _tasks = require("./tasks");
var _tasksettingpersons = require("./tasksettingpersons");
var _tasksettings = require("./tasksettings");

function initModels(sequelize) {
  var families = _families(sequelize, DataTypes);
  var periods = _periods(sequelize, DataTypes);
  var persons = _persons(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var taskexecutions = _taskexecutions(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var tasksettingpersons = _tasksettingpersons(sequelize, DataTypes);
  var tasksettings = _tasksettings(sequelize, DataTypes);

  persons.belongsTo(families, { as: "family", foreignKey: "familyId"});
  families.hasMany(persons, { as: "people", foreignKey: "familyId"});
  tasksettings.belongsTo(families, { as: "family", foreignKey: "familyId"});
  families.hasMany(tasksettings, { as: "tasksettings", foreignKey: "familyId"});
  taskexecutions.belongsTo(periods, { as: "period", foreignKey: "periodId"});
  periods.hasMany(taskexecutions, { as: "taskexecutions", foreignKey: "periodId"});
  taskexecutions.belongsTo(persons, { as: "person", foreignKey: "personId"});
  persons.hasMany(taskexecutions, { as: "taskexecutions", foreignKey: "personId"});
  tasksettingpersons.belongsTo(persons, { as: "person", foreignKey: "personId"});
  persons.hasMany(tasksettingpersons, { as: "tasksettingpeople", foreignKey: "personId"});
  taskexecutions.belongsTo(tasks, { as: "task", foreignKey: "taskId"});
  tasks.hasMany(taskexecutions, { as: "taskexecutions", foreignKey: "taskId"});
  periods.belongsTo(tasksettingpersons, { as: "taskSetting", foreignKey: "taskSettingId"});
  tasksettingpersons.hasMany(periods, { as: "periods", foreignKey: "taskSettingId"});
  tasks.belongsTo(tasksettings, { as: "taskSetting", foreignKey: "taskSettingId"});
  tasksettings.hasMany(tasks, { as: "tasks", foreignKey: "taskSettingId"});

  return {
    families,
    periods,
    persons,
    sequelizemeta,
    taskexecutions,
    tasks,
    tasksettingpersons,
    tasksettings,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
