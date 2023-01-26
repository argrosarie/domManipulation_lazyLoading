const isIntersecting = (entry) => {
    return entry.isIntersecting
};

const action = (entry) => {
    const node = entry.target;
    console.log("I'm an intersection");
    observer.unobserve(node);
}
const observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(action)
})


export const registerImage = (image) => {
    observer.observe(image)
}