"use strict";
const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');
function setRed() {
    redLight.style.opacity = '1';
    yellowLight.style.opacity = '0.2';
    greenLight.style.opacity = '0.2';
}
function setYellow() {
    redLight.style.opacity = '0.2';
    yellowLight.style.opacity = '1';
    greenLight.style.opacity = '0.2';
}
function setGreen() {
    redLight.style.opacity = '0.2';
    yellowLight.style.opacity = '0.2';
    greenLight.style.opacity = '1';
}
setRed();
function runTrafficLight() {
    setInterval(() => {
        setGreen();
        setTimeout(() => {
            setYellow();
            setTimeout(() => {
                setRed();
            }, 2000);
        }, 2000);
    }, 4000);
}
runTrafficLight();
