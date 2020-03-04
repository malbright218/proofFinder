module.exports = function(sequelize, DataTypes) {
    var proof = sequelize.define("proof", {
        order:{type: DataTypes.INTEGER},
        line: {type: DataTypes.INTEGER},
        customer: {type: DataTypes.STRING},
        locationRow: {type: DataTypes.STRING},
        locationCol: {type: DataTypes.INTEGER}
    })

    return proof;
}