const elements = ['.n-products-page__gender','.n-products-page__categories'];

class isVisible {
	constructor() {
		for (var i = 0; i < elements.length; i++) {

			this.isDisplay(elements[i]);

		}
	}

	isDisplay(element) {
				console.log(element,'1');
		
		let b = document.querySelectorAll(element);

		for (var i = 0; i < b.length; i++) {

			let a = b[i];

			while(true) {
				if (!a.parentNode) return;
				if (getComputedStyle(a).display === 'none') {
					this.isDisplayed = true;
						console.log(element,'Этот элемент скрыт с помощью элемента ', a);
					return;
				}
				a = a.parentNode;
			}
		}
	}

	isOpacity() {
		getComputedStyle(elements[i]).opacity <= 0.2 
	}
}

new isVisible();