const component = document.querySelector('.tabbed-component');
const tabs = Array.from(component.querySelectorAll('.tab'));
const contents = Array.from(component.querySelectorAll('.tab-content'));


tabs.forEach(tab => {

  // Add event listener to each tab
  tab.addEventListener('click', _ => {

    // Use attribute to select correct content
    const link = tab.children[0]
    const href = link.getAttribute('href')
    console.log(href)
    const tabContent = component.querySelector(href)

    // Clear 'is-selector' class from all elements
    tabs.forEach(elem => elem.classList.remove('is-selected'))
    contents.forEach(elem => elem.classList.remove('is-selected'))

    // Apply 'is-selector' class to selected tab and related content
    tab.classList.add('is-selected')
    tabContent.classList.add('is-selected')

  })
})
