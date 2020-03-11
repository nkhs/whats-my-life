module.exports = function (sequelize, DataTypes) {
  const Question = sequelize.define("Question", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    }
  }, 
    { timestamps: false});
    return Question;
};


  
  // Post.associate = function(models) {
  //   // We're saying that a Post should belong to an Author??
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
