let currentPage = 1; // Start with the first page
const totalPages = 10; // Total number of pages

function turnPage(direction) {
    const currentPageElement = document.getElementById(`page${currentPage}`);
    let nextPageElement;

    // Determine the next page based on direction
    if (direction === 'next') {
        if (currentPage < totalPages) {
            nextPageElement = document.getElementById(`page${currentPage + 1}`);
            currentPage++;
        }
    } else if (direction === 'prev') {
        if (currentPage > 1) {
            nextPageElement = document.getElementById(`page${currentPage - 1}`);
            currentPage--;
        }
    }

    // Check if next page exists
    if (nextPageElement) {
        // Add flip class to the current page
        currentPageElement.classList.add('flip');

        // Show next page after a short delay
        setTimeout(() => {
            currentPageElement.classList.add('hidden'); // Hide current page
            currentPageElement.style.zIndex = 0; // Set current page behind
            
            nextPageElement.classList.remove('hidden'); // Show next page
            nextPageElement.style.zIndex = 1; // Bring next page to the front
            nextPageElement.classList.remove('flip'); // Remove flip effect for next page
        }, 500); // Adjust the timeout to match the flip duration
    }
}

function resetBook() {
    const currentPageElement = document.getElementById(`page${currentPage}`);
    currentPageElement.classList.add('hidden');
    currentPageElement.style.zIndex = 0; // Set current page behind

    // Reset to first page
    currentPage = 1;
    const firstPage = document.getElementById(`page1`);
    firstPage.classList.remove('hidden');
    firstPage.style.zIndex = 1; // Bring first page to front
}
