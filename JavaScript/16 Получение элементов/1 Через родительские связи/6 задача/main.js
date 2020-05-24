// Дан элемент:
//
// <header>
// 	<div>
// 		<p>
// 			<span id="elem"></span>
// 		</p>
// 	</div>
// </header>
// Найдите ближайшего родителя этого элемента, являющегося тегом div.
console.log(document.querySelector('#elem').closest('div'));
