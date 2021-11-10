module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('tasks', {
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
                    model: 'tasksettings',
                    key: 'id'
                }
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false
            },
            value: {
                type: Sequelize.DOUBLE,
                allowNull: false
            },
            difficultyLevel: {
                type: Sequelize.ENUM,
                allowNull: false,
                values: ['easy', 'medium', 'hard'],
                defaultValue: 'easy'
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
        return queryInterface.dropTable('tasks')
    }
};
