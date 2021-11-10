module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('persons', {
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
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            nickname: {
                type: Sequelize.STRING,
                allowNull: false
            },
            birthday: {
                type: Sequelize.DATE,
                allowNull: false
            },
            type: {
                type: Sequelize.ENUM,
                allowNull: false,
                values: ['admin', 'player']
            },
            mail: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: true
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            isVerified: {
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
        return queryInterface.dropTable('persons')
    }
};
