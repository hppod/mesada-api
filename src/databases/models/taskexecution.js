const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taskexecution', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    personId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'person',
        key: 'id'
      }
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'task',
        key: 'id'
      }
    },
    periodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'period',
        key: 'id'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    executed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'taskexecution',
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
        name: "personId",
        using: "BTREE",
        fields: [
          { name: "personId" },
        ]
      },
      {
        name: "taskId",
        using: "BTREE",
        fields: [
          { name: "taskId" },
        ]
      },
      {
        name: "periodId",
        using: "BTREE",
        fields: [
          { name: "periodId" },
        ]
      },
    ]
  });
};
