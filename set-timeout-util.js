async function modifySetTimeoutPTag() {
    let setTimeoutPTag = document.getElementById('timeoutPTag');
    let originalText = setTimeoutPTag.textContent
    setTimeoutPTag.textContent = 'Timing Out for 3 Seconds . . .';
    setTimeout(() => {
        setTimeoutPTag.textContent = 'Time Out Completed!';
        setTimeout(() => {
            setTimeoutPTag.textContent = originalText;
        }, 1500);
    }, 3000);
    
};

export { modifySetTimeoutPTag };