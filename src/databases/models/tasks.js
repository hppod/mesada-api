const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasks', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    taskSettingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tasksettings',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    difficultyLevel: {
      type: DataTypes.ENUM('easy','medium','hard'),
      allowNull: false,
      defaultValue: "easy"
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tasks',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "taskSettingId",
        using: "BTREE",
        fields: [
          { name: "taskSettingId" },
        ]
      },
    ]
  });
};
