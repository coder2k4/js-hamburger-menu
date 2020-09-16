$hamburger = document.getElementById('hamburger')
$menu = document.querySelector('.menu'
)
$hamburger.addEventListener('click', (e)=>{
    // console.log(e.target == $hamburger || e.target.matches('#hamburger > span'))
    // e.preventDefault()
    // e.stopPropagation()
    // console.log(e.currentTarget == e.target)


    $hamburger.classList.toggle('active')
    $menu.classList.toggle('active')

})
