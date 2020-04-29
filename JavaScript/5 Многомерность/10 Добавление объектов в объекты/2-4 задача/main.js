let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};

// 2 зад
// Добавьте нового студента в подгруппу 'subgroup11'.
students['group1']['subgroup11'].push('student114');

// 3 зад
// Добавьте в первую группу еще одну подгруппу.
students['group1']['subgroup13'] = [];

// 4 зад
// Добавьте в первую группу еще одну подгруппу.
students['group4'] = {};
students['group4']['subgroup41'] = [];
students['group4']['subgroup41'].push('students411','students412');

console.log(students);
