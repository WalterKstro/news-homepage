(()=>{
    const btnClose = document.querySelector('#close')
    const btnOpen = document.querySelector('#open')
    
    btnOpen.addEventListener('click', openMenu)
    btnClose.addEventListener('click', closeMenu)

    function openMenu(evt){
        const sidebar = evt.target.parentElement.nextElementSibling
        const menu = sidebar.firstElementChild

        toogleClass({ remove:'-right-full',add:'right-0',sidebar })
        toogleClass({ remove:'-right-full',add:'right-0', sidebar:menu })
    }

    function closeMenu(evt){
        const sidebar = evt.target.parentElement.parentElement.parentElement
        const menu = sidebar.parentElement
        toogleClass({ remove:'right-0',add:'-right-full',sidebar })
        toogleClass({ remove:'right-0',add:'-right-full',sidebar:menu })
    }

    function toogleClass({remove,add,sidebar}){
        sidebar.classList.remove(remove)
        sidebar.classList.add(add)
    }
})()