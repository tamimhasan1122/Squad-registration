document.addEventListener("DOMContentLoaded", function() {
    const squadListContainer = document.getElementById("squadList");

    // Function to generate squad entry list
    function generateSquadList() {
        for (let i = 1; i <= 12; i++) {
            const squad = document.createElement("div");
            squad.classList.add("squad");

            const squadHeading = document.createElement("h2");
            squadHeading.textContent = "Squad " + i;
            squad.appendChild(squadHeading);

            for (let j = 1; j <= 4; j++) {
                const player = document.createElement("div");
                player.classList.add("player");

                const input = document.createElement("input");
                input.type = "text";
                input.placeholder = "Player " + ((i - 1) * 4 + j);
                player.appendChild(input);

                squad.appendChild(player);
            }

            const submitButton = document.createElement("button");
            submitButton.textContent = "Submit";
            submitButton.classList.add("submit-btn");
            squad.appendChild(submitButton);

            squadListContainer.appendChild(squad);
        }
    }

    // Call the function to generate squad list
    generateSquadList();
});
