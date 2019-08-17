function groupAdultsByAgeRange(people) {
    if (people.length === 0){
        return {};
    };

    const peopleAllowed = people.filter(person => person.age >= 18);
    const peopleObject = peopleAllowed.reduce((object, person) => {
        object[matchObjectKeys(person)].push(person);
        return object;
        }, {'20 and younger': [], 
            '21-30': [], 
            '31-40': [],
            '41-50': [], 
            '51 and older': [] 
        })
        
    return removeEmptyKeys(peopleObject);
};

function matchObjectKeys(person) {
    if (person.age < 21) {
        return '20 and younger';
    } else if (person.age <= 30) {
        return '21-30';
    } else if (person.age <= 40) {
        return '31-40';
    } else if (person.age <= 50) {
        return '41-50';
    } else if (person.age >= 51) {
        return '51 and older';
    };
};

function removeEmptyKeys(obj) {
    Object.keys(obj).forEach(function(key) {
      if (obj[key].length === 0) delete obj[key];
    });
    return obj;
};

module.exports = {groupAdultsByAgeRange};