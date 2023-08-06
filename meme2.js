document.addEventListener("DOMContentLoaded", function() {
    const memeContainer = document.querySelector("#memeContainer");
    const generateBtn = document.querySelector("#generateBtn");
    const topTextInput = document.querySelector("#topTextInput");
    const bottomTextInput = document.querySelector("#bottomTextInput");
    const imageUrlInput = document.querySelector("#imageUrlInput");

    function saveMemeToLocalStorage(memeData) {
        let existingMemes = JSON.parse(localStorage.getItem("memes")) || [];
        existingMemes.push(memeData);
        localStorage.setItem("memes", JSON.stringify(existingMemes));
    }


    function makeMeme(topTextVal, bottomTextVal, imageUrlVal) {
        if (imageUrlVal !== null && imageUrlVal.length > 0) {
            const memeDiv = document.createElement("div");
            const topText = document.createElement("p");
            const bottomText = document.createElement("p");
            const newMeme = document.createElement("img");
            const hoverDiv = document.createElement("div");
            const deleteBtn = document.createElement("button");

            topText.innerText = topTextVal;
            bottomText.innerText = bottomTextVal;
            deleteBtn.innerText = "Remove";
            topText.classList.add("topText");
            bottomText.classList.add("bottomText");
            deleteBtn.classList.add("deleteBtn");
            memeDiv.classList.add("memeDiv");
            hoverDiv.classList.add("hoverDiv");
            newMeme.setAttribute("src", imageUrlVal);

            memeDiv.append(topText);
            memeDiv.append(bottomText);
            memeDiv.append(newMeme);
            memeDiv.append(hoverDiv);
            memeDiv.append(deleteBtn);
            memeContainer.append(memeDiv);

            saveMemeToLocalStorage({
                topText: topTextVal,
                bottomText: bottomTextVal,
                imageUrl: imageUrlVal
            });

            deleteBtn.addEventListener('click', function (e) {
            memeDiv.remove();
            console.log("Button working");
            })
        }
    }

    generateBtn.addEventListener("click", function (e) {
        e.preventDefault();
            let topTextVal = topTextInput.value;
            let bottomTextVal = bottomTextInput.value;
            let imageUrlVal = imageUrlInput.value;
            topTextInput.value = "";
            bottomTextInput.value = "";
            imageUrlInput.value = "";
            makeMeme(topTextVal, bottomTextVal, imageUrlVal);
    });


});