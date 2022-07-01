const { Model, DataTypes } = require('sequelize')
const sequelize = require("../db.config");

class Task extends Model {}

Task.init(
    {
        Taskid: {
            type: DataTypes.INTEGER,
            unique:true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false
        },
        description: {
            type: DataTypes.STRING,
            unique:true,
            allowNull:false
        },
        compTask: {
            type: DataTypes.STRING,
            allowNull:true
        },

    },
    {
        sequelize,
        modelName: 'Task',
    }
)

module.exports = Task