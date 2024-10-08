function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName('button'))

    buttons.forEach(button => {
        button.addEventListener('click', showMoreInfo)

        function showMoreInfo(e){
            let btn = e.target;
            let profile = btn.parentElement;
            let children = Array.from(profile.children);

            let unlocked = children[4];
            let additionalInfo = children[9];

            if (!unlocked.checked){
                return;
            }

            if (btn.textContent === 'Show More'){
                additionalInfo.style.display = 'block';
                btn.textContent = 'Hide It';
            } else if (btn.textContent === 'Hide It'){
                additionalInfo.style.display = 'none';
                btn.textContent = 'Show More';
            }
            



        }
        
    });

}