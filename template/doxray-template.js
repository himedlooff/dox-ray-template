this.PatternLibrary = this.PatternLibrary || {};

this.PatternLibrary.init = function() {
    // Save the data and then massage it a little
    // The `Doxray` var is made available from `parsed_docs.js`.
    this.doxray = Doxray;
    this.compileMarkdown();
    this.makeFilesProperty();

    this.$docs = $('#doxray');
    this.html = '';


    // Determine the layout.
    if (getParameterByName('raw')) {
        this.layout = 'raw';
        this.$docs.addClass('doxray__raw');
    } else {
        this.layout = 'default';
    }

    // Build the HTML.
    if (getParameterByName('file')) {
        this.html = this.makeContentHTML();
        if (this.layout === 'default') {
            this.html += this.makeNavHTML();
        }
    } else {
        this.html = this.makeTocHTML();
    }

    // Place the HTML in the DOM.
    this.$docs.html(this.html);
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
    this.doxray.files = files;
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
    console.log(currentBtnIsActive);
    var $allBtns = $this.parents('[data-tabs]').find('[data-tabs-btn]');
    var $allBodies = $this.parents('[data-tabs]').find('[data-tabs-body]');
    var $matchingBody = $this.parents('[data-tabs]').find('[data-tabs-body="'+id+'"]');
    $allBtns.not($this).removeClass('doxray-tabs_btn__active');
    $this.toggleClass('doxray-tabs_btn__active', !currentBtnIsActive);
    $allBodies.removeClass('doxray-tabs_body__visible');
    $matchingBody.toggleClass('doxray-tabs_body__visible', !currentBtnIsActive);
};

this.PatternLibrary.makeContentHTML = function() {
    this.content = this.doxray.files[getParameterByName('file')];
    if (this.layout === 'raw') {
        this.contentTemplate = Handlebars.compile($('#doxray-docs_patterns-template-raw').html());
    } else {
        this.contentTemplate = Handlebars.compile($('#doxray-docs_patterns-template').html());
    }
    return this.contentTemplate(this.content);
};

this.PatternLibrary.makeNavHTML = function() {
    this.navTemplate = Handlebars.compile($('#doxray-docs_nav-template').html());
    return this.navTemplate(this.content);
};

this.PatternLibrary.makeTocHTML = function() {
    this.tocTemplate = Handlebars.compile($('#doxray-toc-template').html());
    return this.tocTemplate(this.doxray.files);
};

this.PatternLibrary.changeFile = function(file) {
    this.content = this.doxray.files[file];
    this.renderContent();
};

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
