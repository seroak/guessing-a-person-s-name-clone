module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // mySQl에는 users 테이블 생성
      // id는 기본적으로 들어있다
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.Problem);
  };
  return User;
};
