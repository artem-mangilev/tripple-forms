let tabsContainer = document.getElementsByClassName('form-tabs')[0]
let tabs = [...tabsContainer.children]

// Only God knows why passwordTab stores the whole elements collection
// when the first 2 variables works as expected and stores appropriate elements.
const [ loginTab, registerTab, passwordTab ] = tabs

// const loginTab = tabs[0]
// const registerTab = tabs[1]
// const passwordTab = tabs[2]

const views = document.querySelectorAll('.form-views > div')
const [ loginView, registerView, passwordView ] = [...views]

let currentTab = loginTab

function showView(tab) {
  if (tab === loginTab) {
    loginView.style.display = 'block';
    registerView.style.display = 'none';
    passwordView.style.display = 'none';
  } 
  if (tab === registerTab) {
    loginView.style.display = 'none';
    registerView.style.display = 'block';
    passwordView.style.display = 'none';
  }
  if (tab === passwordTab) {
    loginView.style.display = 'none';
    registerView.style.display = 'none';
    passwordView.style.display = 'block';    
  }
}

showView(currentTab)
currentTab.focus()

tabs.forEach(tab => {
  tab.onclick = () => {
    showView(tab)
  }
})

