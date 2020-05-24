// Дан элемент:
//
// <header>
// 	<div class="www">
// 		<p class="www">
// 			<span id="elem"></span>
// 		</p>
// 	</div>
// </header>
// Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.
console.log(document.querySelector('#elem').closest('.www'));
