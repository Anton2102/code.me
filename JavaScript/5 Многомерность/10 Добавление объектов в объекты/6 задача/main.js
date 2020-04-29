// Дана вот такая структура для хранения студентов:
// let students = {
// 	'group1' {
// 		'subgroup11': ['student111', 'student112', 'student113'],
// 		'subgroup12': ['student121', 'student122', 'student123'],
// 	},
// 	'group2' {
// 		'subgroup21': ['student211', 'student212', 'student213'],
// 		'subgroup22': ['student221', 'student222', 'student223'],
// 	},
// 	'group3' {
// 		'subgroup31': ['student311', 'student312', 'student313'],
// 		'subgroup32': ['student321', 'student322', 'student323'],
// 	},
// };
// Сделайте функцию addStudent, которая будет добавлять нового студента. Пусть функция первым параметром принимает группу, а вторым - подгруппу, а третьим - имя студента.

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

function addStudent(group, subgroup, nameStudent){
  students[group][subgroup].push(nameStudent);
}

addStudent('group1', 'subgroup12', 'Anton');

console.log(students);
