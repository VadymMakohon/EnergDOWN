function goToPage(pageName) {
    model.app.currentPage = pageName;
    updateView();
}