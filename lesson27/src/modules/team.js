  //team

  const team = () => {
    const command = document.querySelector('.command');

    const photo = event => {
        const target = event.target;

        if (target.classList.contains('command__photo')) {
            let a = target.src,
                b = target.dataset.img;


            target.dataset.img = a;
            target.src = b;

        }
    }

    command.addEventListener('mouseover', photo)
    command.addEventListener('mouseout', photo)

} 

export default team;