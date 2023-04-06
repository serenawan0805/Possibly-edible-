fetch('array.json')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('recipeBook');
//naming the button
        const buttonAll = document.getElementById('All');
        const buttonGrain = document.getElementById('Grain');
        const buttonMeat = document.getElementById('Meat');
        const buttonSeafood = document.getElementById('Seafood');
        const buttonSoup = document.getElementById('Soup');
        const buttonVegetable = document.getElementById('Vegetable');

        data.forEach(item => {
            const div = document.createElement('div');
            const rectdiv = document.createElement('rectdiv');
            const img = document.createElement('img');

            img.src = "img/" + item.Picture;
//Clicking to a new html file
            img.addEventListener('click', function () {
// Redirect to the link specified in the JSON file
                window.location.href = item.Link; 
            });

// Add event listeners to buttons
            div.appendChild(img);
            div.classList.add("rectdiv");
            recipeBook.appendChild(div);

//Buttons function
            buttonAll.addEventListener('click', function () {
                div.style.display = "block";
            });

            buttonGrain.addEventListener('click', function () {
                if (item.Grain == 1) {
                    div.style.display = "block";
                } else {
                    div.style.display = "none";
                }
            });

            buttonMeat.addEventListener('click', function () {
                if (item.Meat == 1) {
                    div.style.display = "block";
                } else {
                    div.style.display = "none";
                }
            });

            buttonSeafood.addEventListener('click', function () {
                if (item.Seafood == 1) {
                    div.style.display = "block";
                } else {
                    div.style.display = "none";
                }
            });

            buttonSoup.addEventListener('click', function () {
                if (item.Soup == 1) {
                    div.style.display = "block";
                } else {
                    div.style.display = "none";
                }
            });

            buttonVegetable.addEventListener('click', function () {
                if (item.Vegetable == 1) {
                    div.style.display = "block";
                } else {
                    div.style.display = "none";
                }
            });

//showing on web
            div.appendChild(img);
            div.classList.add("rectdiv");
            recipeBook.appendChild(div);
        });
    })