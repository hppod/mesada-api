module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('taskexecution', {
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
                    model: 'person',
                    key: 'id'
                }
            },
            taskId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'task',
                    key: 'id'
                }
            },
            periodId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'period',
                    key: 'id'
                }
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Date.now
            },
            executed: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
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
        return queryInterface.dropTable('taskexecution')
    }
};
