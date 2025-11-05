// Your code here.
const cubes = document.querySelectorAll('.item');
let selectedCube = null;
let offsetX, offsetY;

cubes.forEach(cube => {
    cube.addEventListener('mousedown', (e) => {
        selectedCube = cube;
        offsetX = e.clientX - cube.getBoundingClientRect().left;
        offsetY = e.clientY - cube.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
    });
});

document.addEventListener('mouseup', () => {
    selectedCube = null;
    document.removeEventListener('mousemove', onMouseMove);
});

function onMouseMove(e) {
    if (!selectedItem) return;
    const container = document.querySelector('.items');
    const containerRect = container.getBoundingClientRect();
    let newX = e.clientX - containerRect.left - offsetX;
    let newY = e.clientY - containerRect.top - offsetY;

    // Boundary checks
    newX = Math.max(0, Math.min(newX, containerRect.width - selectedCube.offsetWidth));
    newY = Math.max(0, Math.min(newY, containerRect.height - selectedCube.offsetHeight));

    selectedCube.style.left = `${newX}px`;
    selectedCube.style.top = `${newY}px`;
}