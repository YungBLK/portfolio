class renders {

    constructor(pageName) {
        this.pageName = pageName;
    }
    
    renderPage(req, res) {
        const renderVariables = {};
        renderVariables.title = 'Home' + ' | Igor Lúcio';
        renderVariables.path = this.pageName;
        renderVariables.controller = this.pageName + 'Controller';
        res.render(`pages/${this.pageName}`, renderVariables);
    }


}


module.exports = renders;