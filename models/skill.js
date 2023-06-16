const skills = [
    {id: 125223, skill: 'Organized', acquire: true},
    {id: 127904, skill: 'Time Management', acquire: false},
    {id: 139608, skill: 'Teamwork', acquire: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create
  };

  function create (s) {
    const skill = {}
    console.log (s)
    skill.skill = s.skill
    skill.id = Date.now() % 1000000;
    skill.acquire = false;
    skills.push(skill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id ===id);
  }
	
  function getAll() {
    return skills;
  }