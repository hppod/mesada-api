const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('period', {
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
        model: 'tasksettingperson',
        key: 'id'
      }
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'period',
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
