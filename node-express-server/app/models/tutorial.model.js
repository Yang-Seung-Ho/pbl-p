module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    teamName: {   
      type: Sequelize.STRING
    },  
    member: {   
      type: Sequelize.STRING
    },
    thought: {   
      type: Sequelize.STRING
    },
    fileName: {
      type: Sequelize.STRING
    },
    filePath: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};