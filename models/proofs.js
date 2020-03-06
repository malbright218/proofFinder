module.exports = function(sequelize, DataTypes) {
    var proof = sequelize.define("proof", {
        orderLine:{type: DataTypes.STRING},
        customer: {type: DataTypes.STRING},
        location: {type: DataTypes.STRING},
    })

    return proof;
}