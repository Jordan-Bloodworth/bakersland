function menu(open) {
	let list = document.querySelector('ul');

	open.name === 'menu' ? (open.name = "close", list.classList.add('top-[90px]') , list.classList.add('opacity-100')) : (open.name = "menu", list.classList.remove('top-[90px]') , list.classList.remove('opacity-100'))
}