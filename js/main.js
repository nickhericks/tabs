const component = document.querySelector(".tabbed-component");
const tabList = component.querySelector(".tabs");
const tabContents = [...component.querySelectorAll(".tab-content")];

const toggleTabs = (e, component) => {
	const link = e.target.closest("a");
	const selectedTab = link.parentNode;
	const tabs = [...component.querySelectorAll(".tab")];
	const href = link.getAttribute("href");
	const selectedTabContent = component.querySelector(href);

	// Hiding previous tab and tab content
	tabs.forEach(elem => elem.classList.remove("is-selected"));
	tabContents.forEach(elem => elem.classList.remove("is-selected"));

	// Showing the selected tab and tab content
	selectedTab.classList.add("is-selected");
	selectedTabContent.classList.add("is-selected");
}

tabList.addEventListener('click', e => {
	// Prevent tab from jumping
	e.preventDefault();
	toggleTabs(e, component);
});
