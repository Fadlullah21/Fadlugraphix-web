document.addEventListener("DOMContentLoaded", function () {
        const button = document.getElementById("generateBtn");
        const resultDisplay = document.getElementById("result");

        button.addEventListener("click", function () {
          const randomNum = Math.floor(Math.random() * 100) + 1;
          resultDisplay.textContent = randomNum;

          console.log("Generated number:", randomNum);
        });
      });