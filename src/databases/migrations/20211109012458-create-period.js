module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('periods', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            taskSettingId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'tasksettingpersons',
                    key: 'id'
                }
            },
            month: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            year: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            finished: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            amount: {
                type: Sequelize.DOUBLE,
                allowNull: true
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
        return queryInterface.dropTable('periods')
    }
};
