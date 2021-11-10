module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('tasksettingpersons', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            personId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'persons',
                    key: 'id'
                }
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

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('tasksettingpersons')
    }
};
