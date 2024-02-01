module.exports = (sequelize, DataTypes) => {
  const Problem = sequelize.define(
    "Problem",
    {
      // mySQl에는 users 테이블 생성
      // id는 기본적으로 들어있다
      ProblemId: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      Image: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      Name1: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      Name2: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      Name3: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      Name4: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Problem.associate = (db) => {
    db.Problem.belongsTo(db.User);
  };
  return Problem;
};
