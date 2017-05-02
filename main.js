-function() {
	document.addEventListener('DOMContentLoaded',function(){
		this.addEventListener('scroll',setOrange);
	});
	function setOrange(){
		this.querySelector('[data-style="productCard__buyBlock"]').classList.add('orange');
		this.removeEventListener('scroll',setOrange);	
	}
}();