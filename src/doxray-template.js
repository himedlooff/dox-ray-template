this.PatternLibrary = this.PatternLibrary || {};

this.PatternLibrary.content = this.PatternLibrary.content || {};

this.PatternLibrary.init = function() {
    // Save the data and then massage it a little
    // The `Doxray` var is made available from `parsed_docs.js`.
    this.doxray = Doxray;
    this.compileMarkdown();
    this.makeFilesProperty();
    this.setWhichCodeTabToShow();

    this.$docs = $('#doxray');
    this.html = '';

    this.currentFile = getParameterByName('file') ? getParameterByName('file') : this.currentFile;
    this.currentProperty = getParameterByName('property') ? getParameterByName('property') : this.currentProperty;
    this.currentValue = getParameterByName('value') ? getParameterByName('value') : this.currentValue;
    this.currentPatternId = getParameterByName('id') ? getParameterByName('id') : this.currentPatternId;

    // Determine the layout and build the HTML
    if (getParameterByName('raw')) {
        this.layout = 'raw-file';
        this.html = this.makePageContentHTML();
        this.$docs.addClass('doxray__raw');
    } else if (this.currentFile) {
        this.layout = 'file';
        this.html = this.makePageContentHTML();
        this.html += this.makeNavHTML();
    } else if (this.currentProperty) {
        this.layout = 'property';
        this.html = this.makePageContentHTML();
        this.html += this.makeNavHTML();
    } else {
        this.layout = 'toc';
        this.html = this.makeTocHTML();
    }

    // Place the HTML in the DOM.
    this.$docs.append(this.html);
    this.removeExpandersIfNotNeeded();
    this.initCollapsedTOCBtn();

    // Set event handlers.
    this.$docs.on('click', '[data-tabs-btn]', this.handleTabClick.bind(this));
};

this.PatternLibrary.compileMarkdown = function() {
    this.doxray.patterns.forEach(function(pattern, index){
        if (pattern.description) {
            pattern.description = marked(pattern.description);
        }
        if (pattern.notes) {
            pattern.notes.forEach(function(note, index) {
                pattern.notes[index] = marked(note);
            });
        }
    });
};

this.PatternLibrary.makeFilesProperty = function() {
    var files = {};
    this.doxray.patterns.forEach(function(pattern, index) {
        if (files[pattern.filename]) {
            files[pattern.filename].push(pattern);
        } else {
            files[pattern.filename] = [pattern];
        }
    });
    this.content.files = files;
};

this.PatternLibrary.setWhichCodeTabToShow = function() {
    this.doxray.patterns.forEach(function(pattern, index) {
        if (pattern.collapseAllCode) {
            pattern.showMarkup = false;
        } else {
            pattern.showMarkup = !!pattern.markup;
            pattern.showMarkup = pattern.collapseMarkup ? false : pattern.showMarkup;
        }
        delete pattern.collapseMarkup;
        if (typeof pattern.scss !== 'undefined') {
            if (pattern.collapseAllCode) {
                pattern.showSCSS = false;
            } else {
                pattern.showSCSS = pattern.scss ? !pattern.showMarkup : false;
            }
        } else if (typeof pattern.less !== 'undefined') {
            if (pattern.collapseAllCode) {
                pattern.showLESS = false;
            } else {
                pattern.showLESS = pattern.less ? !pattern.showMarkup : false;
            }
        }
    });
};

this.PatternLibrary.removeExpandersIfNotNeeded = function(e) {
    $('.doxray-doc-code-expander_body').each(function() {
        var $this = $(this);
        if ($this.outerHeight() <= 160) {
            $this.removeClass('doxray-doc-code-expander_body');
            $this.parents('.doxray-doc-code-expander').removeClass('doxray-doc-code-expander')
            .find('.js-doxray-doc-code-expander_btn').remove();
        }
    });
};

this.PatternLibrary.initCollapsedTOCBtn = function(e) {
    var self = this;
    $('.js-doxray-toggle-collapsed-toc').each(function() {
        self.toggleCollapsedTOC(this);
    });
    this.$docs.on('click', '.js-doxray-toggle-collapsed-toc', this.handleToggleCollapsedTOCClick.bind(this));
};

this.PatternLibrary.toggleCollapsedTOC = function(el) {
    var checked = $(el).is(':checked');
    $('.doxray-toc_file-list').toggleClass('is-collapsed', checked);
};

this.PatternLibrary.handleToggleCollapsedTOCClick = function(e) {
    this.toggleCollapsedTOC(e.currentTarget);
};

this.PatternLibrary.handleTabClick = function(e) {
    var $this = $(e.currentTarget);
    var id = $this.data('tabs-btn');
    var currentBtnIsActive = $this.hasClass('doxray-tabs_btn__active');
    var $allBtns = $this.parents('[data-tabs]').find('[data-tabs-btn]');
    var $allBodies = $this.parents('[data-tabs]').find('[data-tabs-body]');
    var $matchingBody = $this.parents('[data-tabs]').find('[data-tabs-body="'+id+'"]');
    $allBtns.not($this).removeClass('doxray-tabs_btn__active');
    $this.toggleClass('doxray-tabs_btn__active', !currentBtnIsActive);
    $allBodies.removeClass('doxray-tabs_body__visible');
    $matchingBody.toggleClass('doxray-tabs_body__visible', !currentBtnIsActive);
};

this.PatternLibrary.makePageContentHTML = function() {
    this.content.layout = this.layout;
    this.content.patterns = [];
    this.content.templateId = '';
    // Set content and template depending on the page type
    if (this.layout === 'file') {
        this.content.patterns = this.content.files[getParameterByName('file')];
        this.content.templateId = '#doxray-docs_patterns-template';
        this.content.currentFile = this.currentFile;
        this.content.paramPrefix = '?file=' + this.currentFile;
        this.content.showRawButton = true;
        this.content.showFileName = true;
        this.content.showCategory = true;
        this.content.showType = true;
    } else if (this.layout === 'raw-file') {
        if (this.currentPatternId) {
            this.content.currentPatternId = this.currentPatternId;
            this.content.patterns = this.doxray.getByProperty('slug', this.currentPatternId);
        } else {
            this.content.patterns = this.content.files[getParameterByName('file')];
        }
        this.content.templateId = '#doxray-docs_patterns-template-raw';
    } else if (this.layout === 'property') {
        this.content.patterns = this.doxray.getByProperty(this.currentProperty, this.currentValue);
        this.content.templateId = '#doxray-docs_patterns-template';
        this.content.currentProperty = this.currentProperty;
        this.content.currentValue = this.currentValue;
        this.content.paramPrefix = '?property=' + this.currentProperty + (this.currentValue ? '&value=' + this.currentValue : '');
    }
    this.contentTemplate = Handlebars.compile($(this.content.templateId).html());
    return this.contentTemplate(this.content);
};

this.PatternLibrary.makeNavHTML = function() {
    this.navTemplate = Handlebars.compile($('#doxray-docs_nav-template').html());
    return this.navTemplate(this.content);
};

this.PatternLibrary.makeTocHTML = function() {
    this.tocTemplate = Handlebars.compile($('#doxray-toc-template').html());
    return this.tocTemplate(this.content);
};


//
// Handlebars helpers
//

Handlebars.registerHelper('log', function(something) {
    console.log(something);
});


//
// Utility functions
//

// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

$(document).ready(function() {
    PatternLibrary.init();
});
