module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('tasksettings', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            familyId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'families',
                    key: 'id'
                }
            },
            start: {
                type: Sequelize.DATE,
                allowNull: false
            },
            finish: {
                type: Sequelize.DATE,
                allowNull: true
            },
            baseValue: {
                type: Sequelize.DOUBLE,
                allowNull: false,
                defaultValue: 1
            },
            replaceBaseValue: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            minimumReplacementValue: {
                type: Sequelize.DOUBLE,
                allowNull: true
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            createdAt: {
                type: 'TIMESTAMP',
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                type: 'TIMESTAMP',
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
            }
        })
    },

    down: async (queryInterface) => {
        return queryInterface.dropTable('tasksettings')
    }
};
