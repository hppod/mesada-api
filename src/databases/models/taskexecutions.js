const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taskexecutions', {
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
        model: 'persons',
        key: 'id'
      }
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tasks',
        key: 'id'
      }
    },
    periodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'periods',
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
    tableName: 'taskexecutions',
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
