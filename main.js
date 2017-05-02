-function() {
	document.addEventListener('DOMContentLoaded',function(){
		this.addEventListener('scroll',function(){
			this.querySelector('[data-style="productCard__buyBlock"]').classList.add('orange');
		});
	});
}();