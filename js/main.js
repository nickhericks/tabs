


const component = document.querySelector('.tabbed-component');
const tabs = Array.from(component.querySelectorAll('.tab'));
const contents = Array.from(component.querySelectorAll('.tab-content'));

tabs.forEach(tab => {
  tab.addEventListener('click', _ => {
    const link = tab.children[0]
    const href = link.getAttribute('href')
    console.log(href)
    const tabContent = component.querySelector(href)
    tabs.forEach(elem => elem.classList.remove('is-selected'))
    contents.forEach(elem => elem.classList.remove('is-selected'))
    tab.classList.add('is-selected')
    tabContent.classList.add('is-selected')


  })
})
