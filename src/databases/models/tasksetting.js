const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasksetting', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    familyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'family',
        key: 'id'
      }
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    finish: {
      type: DataTypes.DATE,
      allowNull: true
    },
    baseValue: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 1
    },
    replaceBaseValue: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    minimumReplacementValue: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tasksetting',
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
        name: "familyId",
        using: "BTREE",
        fields: [
          { name: "familyId" },
        ]
      },
    ]
  });
};
