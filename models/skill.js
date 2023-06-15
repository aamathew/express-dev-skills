const skills = [
    {id: 125223, skill: 'Organized', acquire: true},
    {id: 127904, skill: 'Time Management', acquire: false},
    {id: 139608, skill: 'Teamwork', acquire: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id ===id);
  }
	
  function getAll() {
    return skills;
  }