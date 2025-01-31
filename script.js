const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yes! You just made my day!";
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDBna2lkYjFha3R1NzRwaTM0b3l6OWU2NmxzYzdhbGhkeWNiajllZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qca5DjHlDzhrW/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
         const wrapper = document.querySelector(".wrapper");
         const yesBtn = document.querySelector(".yes-btn");

         const wrapperRect = wrapper.getBoundingClientRect();
         const noBtnRect = noBtn.getBoundingClientRect();
         const yesBtnRect = yesBtn.getBoundingClientRect();

         const maxX = wrapperRect.width - noBtnRect.width;
         const maxY = wrapperRect.height - noBtnRect.height;

         let randomX, randomY;

         for (let i = 0; i < 10; i++) { // Try 10 different positions quickly
             randomX = Math.floor(Math.random() * maxX);
             randomY = Math.floor(Math.random() * maxY);

             // Calculate distance from Yes button
             const distanceX = Math.abs(randomX - (yesBtnRect.left - wrapperRect.left));
             const distanceY = Math.abs(randomY - (yesBtnRect.top - wrapperRect.top));

             if (distanceX > 80 || distanceY > 50) { // If it's far enough, break the loop
                 break;
             }
         }

         noBtn.style.left = `${randomX}px`;
         noBtn.style.top = `${randomY}px`;
});

noBtn.addEventListener("touchstart", () => {
        const wrapper = document.querySelector(".wrapper");
        const yesBtn = document.querySelector(".yes-btn");

        const wrapperRect = wrapper.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();
        const yesBtnRect = yesBtn.getBoundingClientRect();

        const maxX = wrapperRect.width - noBtnRect.width;
        const maxY = wrapperRect.height - noBtnRect.height;

        let randomX, randomY;

        for (let i = 0; i < 10; i++) { // Try 10 different positions quickly
            randomX = Math.floor(Math.random() * maxX);
            randomY = Math.floor(Math.random() * maxY);

            // Calculate distance from Yes button
            const distanceX = Math.abs(randomX - (yesBtnRect.left - wrapperRect.left));
            const distanceY = Math.abs(randomY - (yesBtnRect.top - wrapperRect.top));

            if (distanceX > 80 || distanceY > 50) { // If it's far enough, break the loop
                break;
            }
        }

        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
});
