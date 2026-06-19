function toggleSection(sectionId, btnId, options = {}) {
	const section = document.getElementById(sectionId);
	const btn = document.getElementById(btnId);
	if (!section || !btn) return;

	const showClass = options.showClass || 'show';
	const activeClass = options.activeClass || 'active';
	const showLessText = options.showLessText || 'Show Less';
	const showMoreText = options.showMoreText || 'Show More';

	section.classList.toggle(showClass);
	btn.classList.toggle(activeClass);
	btn.textContent = section.classList.contains(showClass) ? showLessText : showMoreText;
}

function toggleExtras() {
	toggleSection('hiddenSection', 'toggleBtn');
}

function toggleExtras1() {
	toggleSection('hiddenSection1', 'toggleBtn1', {
		showClass: 'show1',
		activeClass: 'active1',
	});
}

function toggleExtras2() {
	toggleSection('hiddenSection2', 'toggleBtn2', {
		showClass: 'show2',
		activeClass: 'active2',
	});
}

function toggleProjects() {
	toggleSection('hiddenSection', 'toggleBtn', {
		showLessText: 'Show Less Projects',
		showMoreText: 'Show More Projects',
	});
}

function myFunction() {
	window.scrollTo(0, 0);
	const nav = document.querySelector('nav');
	const navBtns = document.querySelectorAll('.navBtn');
	const icon = document.querySelector('.icon');

	if (!nav) return;

	const isOpen = nav.classList.toggle('responsive');
	navBtns.forEach((btn) => btn.classList.toggle('Mobile', isOpen));
	if (icon) icon.classList.toggle('Mobile', isOpen);
}
