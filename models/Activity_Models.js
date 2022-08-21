module.exports = (sequelize, DataTypes) =>{
    const Activity = sequelize.define(
        "Activity",{
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
              },
              activityType:{
                type: DataTypes.STRING,
              },
              institution:{
                type: DataTypes.STRING,
              },
              when:{
                type: DataTypes.DATE,
              },
              objective:{
                type: DataTypes.STRING,
              },
              remarks:{
                type:DataTypes.STRING,
              },
              createdAt:{
                type: DataTypes.DATE,
              },
              updatedAt:{
                type: DataTypes.DATE,
              },
        },
        {
            tableName: "activity",
        }
    );
    return Activity
}