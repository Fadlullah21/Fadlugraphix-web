document.addEventListener("DOMContentLoaded", function () {
        const hourhand = document.getElementById("hourhand");
        const minuteshand = document.getElementById("minuteshand");
        const secondshand = document.getElementById("secondshand");
        const digitalDisplay = document.getElementById("digital-display");

        // Rotate Hand Helper
        function rotateClockHand(element, rotation) {
          element.style.setProperty("--rotation", rotation);
        }

        // Clock Logic
        function clockTick() {
          const date = new Date();
          const seconds = date.getSeconds();
          const minutes = date.getMinutes();
          const hour = date.getHours();

          const secondsDegrees = (seconds / 60) * 360 - 90;

          const sDeg = (seconds / 60) * 360 - 90; // -90 because 0deg is usually 3 o'clock in CSS rotation
          const mDeg = (minutes / 60) * 360 + (seconds / 60) * 6 - 90;
          const hDeg = ((hour % 12) / 12) * 360 + (minutes / 60) * 30 - 90;

          const secRot = (seconds / 60) * 360;
          const minRot = (minutes / 60) * 360 + (seconds / 60) * 6;
          const hourRot = ((hour % 12) / 12) * 360 + (minutes / 60) * 30;

          rotateClockHand(secondshand, secRot - 90);
          rotateClockHand(minuteshand, minRot - 90);
          rotateClockHand(hourhand, hourRot - 90);

          // 2. Update Time Display(AM,PM)
          let dHour = hour % 12;
          dHour = dHour ? dHour : 12; // if 0, make 12
          const ampm = hour >= 12 ? "PM" : "AM";
          const dMin = minutes < 10 ? "0" + minutes : minutes;
          const dSec = seconds < 10 ? "0" + seconds : seconds;

          digitalDisplay.innerHTML = `${dHour}:${dMin}:${dSec} <small>${ampm}</small>`;
        }

        setInterval(clockTick, 1000);
        clockTick();
      });