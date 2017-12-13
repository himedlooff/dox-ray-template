var Doxray = {
  "patterns": [
    {
      "header": true,
      "label": ".doxray",
      "description": "The namespace which all Doxray classes should be prepended with.",
      "notes": [
        "All Doxray classes must be namespaced with `doxray` in order to avoid accidentally overriding the users' stylesheet.\n",
        "This class must be added to the `<body>` tag.\n"
      ],
      "less": ".doxray {\n    margin: 0;\n    padding: 0;\n    background: @doxray-color-clean-white;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray"
    },
    {
      "header": true,
      "label": "The rest of the patterns",
      "description": "To be documented",
      "less": "",
      "filename": "doxray-template.less",
      "slug": "the-rest-of-the-patterns"
    },
    {
      "label": ".doxray-intro",
      "markup": "...\n",
      "less": ".doxray-intro {\n    margin: 0 0 1em;\n}\n\n.doxray-intro_header {\n    margin: 0;\n    font-family: @doxray-font-family-default;\n    font-size: @doxray-font-size-xlg;\n    font-weight: @doxray-font-weight-light;\n    line-height: 1.2;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-intro"
    },
    {
      "label": ".doxray-toc_header",
      "markup": "<header class=\"doxray-toc_header\">...</header>\n",
      "less": ".doxray-toc_header {\n    padding: @doxray-margin-lg;\n    border-bottom: 1px solid @doxray-color-dirtier-white;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-toc_header"
    },
    {
      "label": ".doxray-toc_body",
      "less": ".doxray-toc_body {\n    position: relative;\n    padding: @doxray-margin-lg;\n    text-align: center;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-toc_body"
    },
    {
      "label": ".doxray-toc_collapsed-view-btn",
      "less": ".doxray-toc_collapsed-view-btn {\n    position: absolute;\n    bottom: @doxray-margin-md;\n    left: 50%;\n    font-family: @doxray-font-family-default;\n    font-size: 12px;\n    transform: translate(-50%, 50%);\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-toc_collapsed-view-btn"
    },
    {
      "label": ".doxray-toc_file-list",
      "less": ".doxray-toc_file-list {\n    display: inline-block;\n    width: 220px;\n    margin: 0 @doxray-margin-md @doxray-margin-lg 0;\n    padding: 0;\n    vertical-align: top;\n    list-style-type: none;\n    text-align: left;\n\n    &.is-collapsed {\n        margin-bottom: @doxray-margin-sm;\n    }\n\n    &.is-collapsed .doxray-link {\n        display: none;\n    }\n\n    &.is-collapsed .doxray-link__file {\n        display: block;\n        margin-bottom: 0;\n    }\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-toc_file-list"
    },
    {
      "label": ".doxray-toc_file-list",
      "less": ".doxray-toc_file-list-item {\n    margin: 0;\n    padding: 0;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-toc_file-list"
    },
    {
      "label": ".doxray-link",
      "markup": "<a class=\"doxray-link\" href=\"#0\">\n    A simple blocky link\n</a>\n",
      "less": ".doxray-link {\n    &,\n    &:link,\n    &:visited {\n        position: relative;\n        display: block;\n        margin: 0;\n        padding: 6px 12px;\n        border: 1px solid @doxray-color-clean-white;\n        background: @doxray-color-clean-white;\n        font-family: @doxray-font-family-default;\n        font-size: @doxray-font-size-sm;\n        color: @doxray-color-gray;\n        text-decoration: none;\n    }\n\n    &:hover,\n    &:focus {\n        border-color: @doxray-color-shadow;\n        background: @doxray-color-shadow;\n        color: @doxray-color-paper-white;\n    }\n\n    &:focus {\n        outline: 0;\n    }\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-link"
    },
    {
      "label": ".doxray-link__file",
      "markup": "<a class=\"doxray-link doxray-link__file\" href=\"#0\">\n    filename.ext\n</a>\n",
      "less": ".doxray-link__file {\n    &,\n    &:link,\n    &:visited {\n        margin: 0 0 .5em;\n        padding-top: 8px;\n        padding-bottom: 8px;\n        border-color: @doxray-color-gray;\n        background: @doxray-color-gray;\n        color: @doxray-color-paper-white;\n        font-family: @doxray-font-family-code;\n    }\n\n    &:hover,\n    &:focus {\n        border-color: @doxray-color-shadow;\n        background: @doxray-color-shadow;\n        color: @doxray-color-paper-white;\n    }\n\n    &.is-selected {\n        &,\n        &:link,\n        &:visited {\n            border-color: @doxray-color-gray;\n            background: @doxray-color-gray;\n            color: @doxray-color-paper-white;\n        }\n\n        &:hover,\n        &:focus {\n            border-color: @doxray-color-shadow;\n            background: @doxray-color-shadow;\n            color: @doxray-color-paper-white;\n        }\n    }\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-link__file"
    },
    {
      "label": ".doxray-link__header",
      "markup": "<a class=\"doxray-link doxray-link__header\" href=\"#0\">\n    Header link\n</a>\n",
      "less": ".doxray-link__header {\n    font-weight: @doxray-font-weight-demi;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-link__header"
    },
    {
      "label": ".doxray-link-hr",
      "markup": "<a class=\"doxray-link\" href=\"#0\">\n    A simple blocky link\n</a>\n<hr class=\"doxray-link-hr\">\n<a class=\"doxray-link\" href=\"#0\">\n    A simple blocky link\n</a>\n",
      "less": ".doxray-link-hr {\n    display: block;\n    height: 1px;\n    margin: 20px 10px;\n    border: 0;\n    background: @doxray-color-dirtier-white;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-link-hr"
    },
    {
      "label": ".doxray-doc",
      "less": ".doxray-doc {\n    position: relative;\n    padding: @doxray-margin-lg (@doxray-margin-lg + @doxray-margin-md);\n    overflow-x: hidden;\n\n    &:before {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 0;\n        height: 0;\n        border-top: 14px solid @doxray-color-dirtier-white;\n        border-right: 14px solid transparent;\n        border-left: 14px solid transparent;\n        transform: rotate(135deg) translate(-50%, -100%);\n        transform-origin: top left;\n    }\n}\n\n.doxray-doc + .doxray-doc {\n    border-top: 1px solid @doxray-color-dirtier-white;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc"
    },
    {
      "label": ".doxray-doc-label",
      "markup": "<h1 class=\"doxray-doc-label\">\n    Lorem ipsum\n</h1>\n",
      "less": ".doxray-doc-label {\n    margin: 0 0 @doxray-margin-sm;\n    font-family: @doxray-font-family-default;\n    font-size: @doxray-font-size-lg;\n    font-weight: @doxray-font-weight-demi;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-label"
    },
    {
      "label": ".doxray-doc-label_link",
      "markup": "<h1 class=\"doxray-doc-label\">\n    <a class=\"doxray-doc-label_link\" href=\"#0\">\n        Lorem ipsum\n    </a>\n</h1>\n",
      "less": ".doxray-doc-label_link {\n    &,\n    &:link,\n    &:visited,\n    &:hover,\n    &:focus {\n        color: @doxray-color-gray;\n        text-decoration: none;\n        outline: 0;\n    }\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-label_link"
    },
    {
      "label": ".doxray-doc-label__header",
      "markup": "<h1 class=\"doxray-doc-label doxray-doc-label__header\">\n    <a class=\"doxray-doc-label_link\" href=\"#0\">\n        Header label\n    </a>\n</h1>\n",
      "less": ".doxray-doc-label__header {\n    font-size: @doxray-font-size-xlg;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-label__header"
    },
    {
      "label": ".doxray-doc-tag",
      "markup": "<small class=\"doxray-doc-tag\">Tag</small>\n",
      "less": ".doxray-doc-tag {\n    display: inline-block;\n    margin: 0 0 0 .5em;\n    padding: .2em .8em;\n    border-radius: @doxray-font-size-sm;\n    font-family: @doxray-font-family-default;\n    font-size: @doxray-font-size-sm;\n    font-weight: @doxray-font-weight-normal;\n    background: @doxray-color-dirtier-white;\n    color: @doxray-color-gray;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-tag"
    },
    {
      "label": ".doxray-doc-description",
      "markup": "<div class=\"doxray-doc-description\">\n    <p>A description</p>\n</div>\n",
      "less": ".doxray-doc-description {\n    max-width: 50em;\n    margin: @doxray-margin-sm 0;\n\n    p {\n        margin: @doxray-margin-sm 0 0;\n        font-family: @doxray-font-family-default;\n        font-size: @doxray-font-size-lg - 4px;\n        font-weight: @doxray-font-weight-normal;\n    }\n\n    code {\n        display: inline-block;\n        padding: 3px 5px;\n        border-radius: 5px;\n        background: @doxray-color-dirty-white;\n        color: @doxray-color-gray;\n        font-family: @doxray-font-family-code;\n        font-size: .9em;\n    }\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-description"
    },
    {
      "label": ".doxray-doc-note",
      "markup": "<div class=\"doxray-doc-note\">\n    <p>A note</p>\n</div>\n",
      "less": ".doxray-doc-note {\n    position: relative;\n    max-width: 50em;\n    margin: @doxray-margin-sm 0;\n    padding-left: 1.3em;\n\n    &:before {\n        content: \"●\";\n        position: absolute;\n        left: 0;\n        display: inline-block;\n        margin-right: .25em;\n        color: @doxray-color-gray;\n        font-size: @doxray-font-size-md;\n        font-family: @doxray-font-family-default;\n        font-weight: @doxray-font-weight-normal;\n    }\n\n    p {\n        margin: @doxray-margin-sm 0 0;\n        font-size: @doxray-font-size-md;\n        font-family: @doxray-font-family-default;\n        font-weight: @doxray-font-weight-normal;\n    }\n\n    code {\n        display: inline-block;\n        padding: 3px 5px;\n        border-radius: 5px;\n        background: @doxray-color-dirty-white;\n        color: @doxray-color-gray;\n        font-family: @doxray-font-family-code;\n        font-size: .9em;\n    }\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-note"
    },
    {
      "label": ".doxray-doc-reference",
      "markup": "<a class=\"doxray-doc-reference\" href=\"#0\" target=\"_blank\">\n    A reference link\n</a>\n",
      "less": ".doxray-doc-reference {\n    &,\n    &:active,\n    &:link,\n    &:focus,\n    &:hover,\n    &:visited {\n        margin: @doxray-margin-sm 0;\n        font-family: @doxray-font-family-default;\n        font-size: @doxray-font-size-md;\n        color: @doxray-color-blue;\n        text-decoration: none;\n    }\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-reference"
    },
    {
      "label": ".doxray-doc-markup",
      "description": "Contains both the rendered and raw markup.\n",
      "markup": "<div class=\"doxray-doc-markup\">\n    <div class=\"doxray-doc-markup_rendered\">\n        Markup is rendered here\n    </div>\n</div>\n",
      "less": ".doxray-doc-markup {\n    margin: ((@doxray-margin-lg / 2) + (@doxray-margin-lg / 4)) (@doxray-margin-lg / 2 * -1) (@doxray-margin-lg / 2);\n    box-shadow: 0 0 6px @doxray-color-shadow;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-markup"
    },
    {
      "label": ".doxray-doc-markup_rendered",
      "description": "Contains both the rendered markup.\n",
      "notes": [
        "By default this container uses `display: inline-block;`. This is beneficial when using wrappers, since they will stack horizontally so you can compare them.\n"
      ],
      "markup": "<div class=\"doxray-doc-markup\">\n    <div class=\"doxray-doc-markup_rendered\">\n        Markup is rendered here\n    </div>\n</div>\n",
      "less": ".doxray-doc-markup_rendered {\n    display: inline-block;\n    padding: @doxray-margin-lg;\n    margin-right: -3.75px;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-markup_rendered"
    },
    {
      "label": ".doxray-doc-markup_rendered__block",
      "notes": [
        "Converts this container to `display: block;`, allowing space for wider patterns.\n"
      ],
      "markup": "<div class=\"doxray-doc-markup\">\n    <div class=\"doxray-doc-markup_rendered doxray-doc-markup_rendered__block\">\n        Markup is rendered here\n    </div>\n</div>\n",
      "less": ".doxray-doc-markup_rendered__block {\n    display: block;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-markup_rendered__block"
    },
    {
      "label": ".doxray-doc-markup-wrapper",
      "less": ".doxray-doc-markup-wrapper {\n    position: relative;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-markup-wrapper"
    },
    {
      "label": ".doxray-doc-markup-wrapper_label",
      "less": ".doxray-doc-markup-wrapper_label {\n    position: absolute;\n    top: 2.5em;\n    font-family: @doxray-font-family-default;\n    font-size: @doxray-font-size-sm;\n    line-height: 1;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-markup-wrapper_label"
    },
    {
      "label": ".doxray-doc-code",
      "less": ".doxray-doc-code {\n    margin: 0;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-code"
    },
    {
      "label": ".doxray-doc-code_text",
      "less": ".doxray-doc-code_text {\n    display: block;\n    margin: 0;\n    padding: @doxray-margin-lg / 2;\n    background: @doxray-color-dirty-white;\n    font-size: @doxray-font-size-md;\n    line-height: 1.5;\n    white-space: pre-wrap;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-code_text"
    },
    {
      "label": ".doxray-doc-color-palette",
      "less": ".doxray-doc-palette {\n    width: 96px;\n    display: inline-block;\n    margin-top: 16px;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-color-palette"
    },
    {
      "label": ".doxray-doc-color-palette_color",
      "less": ".doxray-doc-palette_color {\n    display: block;\n    height: 96px;\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-color-palette_color"
    },
    {
      "label": ".doxray-doc-color-palette_input",
      "less": ".doxray-doc-palette_input {\n    position: relative;\n    z-index: 1;\n    box-sizing: border-box;\n    width: 100%;\n    margin-top: 4px;\n    padding: 8px 10px 10px;\n    border: 1px solid @doxray-color-dirtier-white;\n    border-radius: 0;\n    background: @doxray-color-clean-white;\n    color: @doxray-color-shadow;\n    font-family: @doxray-font-family-default;\n    font-size: 14px;\n    font-weight: @doxray-font-weight-normal;\n\n    &:hover,\n    &:focus {\n        width: 150px;\n        z-index: 2;\n        border-color: @doxray-color-gray;\n        box-shadow: 0 0 4px @doxray-color-shadow;\n    }\n\n    &:focus {\n        outline: 0;\n    }\n\n    & + & {\n        margin-top: -1px;\n    }\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-doc-color-palette_input"
    },
    {
      "label": ".doxray-tabs",
      "markup": "<div class=\"doxray-tabs\">\n    <div class=\"doxray-tabs_tabs\">\n        <button class=\"doxray-tabs_btn\">\n            Markup\n        </button>\n        <button class=\"doxray-tabs_btn\">\n            Less\n        </button>\n    </div>\n    <div class=\"doxray-tabs_body\">\n        Markup tab body\n    </div>\n    <div class=\"doxray-tabs_body\">\n        Less tab body\n    </div>\n</div>\n",
      "blockMarkup": true,
      "less": ".doxray-tabs_tabs {\n    position: relative;\n    top: -16px;\n    height: 0;\n    padding-left: @doxray-margin-lg * .5;\n}\n\n.doxray-tabs_btn {\n    &,\n    &:active,\n    &:link,\n    &:visited {\n        position: relative;\n        z-index: 1;\n        display: inline-block;\n        padding: 10px 12px;\n        border: 1px solid @doxray-color-clean-white;\n        border-radius: 0;\n        background: @doxray-color-shadow;\n        color: @doxray-color-clean-white;\n        font-family: @doxray-font-family-default;\n        font-size: @doxray-font-size-xsm;\n        font-weight: @doxray-font-weight-normal;\n        letter-spacing: 1px;\n        line-height: 1;\n        text-align: center;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    &:hover,\n    &__active,\n    &__active:hover {\n        background: @doxray-color-gray;\n    }\n\n    &:focus {\n        outline: 0;\n    }\n\n    & + & {\n        margin-left: -4px;\n        border-left: 0;\n    }\n\n    &:first-child {\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n    }\n\n    &:last-child {\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px;\n    }\n}\n\n.doxray-tabs_body {\n    display: none;\n\n    &__visible {\n        display: block;\n    }\n}",
      "filename": "doxray-template.less",
      "slug": "doxray-tabs"
    },
    {
      "header": true,
      "label": "Variables",
      "less": "",
      "filename": "doxray-variables.less",
      "slug": "variables"
    },
    {
      "label": "Fonts",
      "category": "helper",
      "notes": [
        "`Open Sans` is a Google font.\n",
        "`<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600\">`\n"
      ],
      "less": "@doxray-font-family-default:    \"Open Sans\", \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial;\n@doxray-font-family-code:       \"Lucida Sans Typewriter\", \"Lucida Console\", monaco, \"Bitstream Vera Sans Mono\", monospace;\n\n@doxray-font-weight-light:      300;\n@doxray-font-weight-normal:     400;\n@doxray-font-weight-demi:       600;\n\n@doxray-font-size-xsm:          10px;\n@doxray-font-size-sm:           12px;\n@doxray-font-size-md:           18px;\n@doxray-font-size-lg:           30px;\n@doxray-font-size-xlg:          42px;",
      "filename": "doxray-variables.less",
      "slug": "fonts"
    },
    {
      "label": "Colors",
      "colorPalette": [
        {
          "variable": "@doxray-color-clean-white",
          "value": "#ffffff"
        },
        {
          "variable": "@doxray-color-paper-white",
          "value": "#fdfdfd"
        },
        {
          "variable": "@doxray-color-dirty-white",
          "value": "#f8f8f8"
        },
        {
          "variable": "@doxray-color-dirtier-white",
          "value": "#f0f0f0"
        },
        {
          "variable": "@doxray-color-shadow",
          "value": "#6e6c6c"
        },
        {
          "variable": "@doxray-color-gray",
          "value": "#474646"
        },
        {
          "variable": "@doxray-color-blue",
          "value": "#5b7489"
        }
      ],
      "less": "@doxray-color-clean-white:      #ffffff;\n@doxray-color-paper-white:      #fdfdfd;\n@doxray-color-dirty-white:      #f8f8f8;\n@doxray-color-dirtier-white:    #f0f0f0;\n@doxray-color-shadow:           #6e6c6c;\n@doxray-color-gray:             #474646;\n@doxray-color-blue:             #5b7489;",
      "filename": "doxray-variables.less",
      "slug": "colors"
    },
    {
      "label": "Dimension and spacing",
      "less": "@doxray-margin-sm:              18px;\n@doxray-margin-md:              36px;\n@doxray-margin-lg:              72px;\n\n@doxray-nav-width-inner:        220px;\n@doxray-nav-width-outer:        @doxray-nav-width-inner + (@doxray-margin-md * 2);",
      "filename": "doxray-variables.less",
      "slug": "dimension-and-spacing"
    },
    {
      "header": true,
      "label": "Demo",
      "markup": "<header class=\"doxray-title\">\n    <span class=\"doxray-title_title\">\n        UI Docs\n    </span>\n    <p class=\"doxray-title_tagline\">\n        A documented collection of the HTML and CSS patterns used in the Doxray template.\n    </p>\n</header>\n",
      "less": "",
      "filename": "doxray-title.less",
      "slug": "demo"
    },
    {
      "label": ".doxray-title",
      "notes": [
        "The margins help visually center the title since the Open Sans font and the ribbons have a natural offset to them.\n"
      ],
      "less": ".doxray-title {\n    margin: 0;\n    font-size: 1em;\n    text-align: center;\n}",
      "filename": "doxray-title.less",
      "slug": "doxray-title"
    },
    {
      "label": ".doxray-title_title",
      "description": "The brand that is using the pattern library. This would get replaced by whoever is using the template.",
      "markup": "<h1 class=\"doxray-title\">\n    <span class=\"doxray-title_title\">\n        UI Docs\n    </span>\n</h1>\n",
      "less": ".doxray-title_title {\n    display: block;\n    margin: 0 0 12px 0;\n    color: @doxray-color-gray;\n    font-family: @doxray-font-family-default;\n    font-size: @doxray-font-size-xlg;\n    font-weight: @doxray-font-weight-light;\n    letter-spacing: -.03em;\n    line-height: 1.2;\n}",
      "filename": "doxray-title.less",
      "slug": "doxray-title_title"
    },
    {
      "label": ".doxray-title_tagline",
      "description": "Text to clarify the purpose of the page.",
      "markup": "<p class=\"doxray-title_tagline\">\n    A documented collection of the HTML and CSS patterns used in the Doxray template.\n</p>\n",
      "less": ".doxray-title_tagline {\n    display: block;\n    max-width: 220px;\n    margin: 18px auto 0;\n    padding: 0 5px;\n    color: @doxray-color-shadow;\n    font-family: @doxray-font-family-default;\n    font-size: 12px;\n    font-weight: @doxray-font-weight-light;\n    font-style: italic;\n    letter-spacing: 1px;\n    line-height: 1.38;\n    text-align: just;\n}",
      "filename": "doxray-title.less",
      "slug": "doxray-title_tagline"
    },
    {
      "header": true,
      "label": ".doxray-docs",
      "less": "",
      "filename": "doxray-docs.less",
      "slug": "doxray-docs"
    },
    {
      "label": ".doxray-docs_nav",
      "less": ".doxray-docs_nav {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: @doxray-nav-width-outer;\n    border-right: 1px solid @doxray-color-dirtier-white;\n    overflow: hidden;\n    z-index: 0;\n}\n\n.doxray-docs_nav-scroll {\n    width: 100%;\n    height: 100%;\n    padding: @doxray-margin-md 0 0 @doxray-margin-md;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.doxray-docs_nav-title {\n    margin-bottom: @doxray-margin-md;\n}\n\n.doxray-docs_nav-content {\n    width: @doxray-nav-width-inner;\n}",
      "filename": "doxray-docs.less",
      "slug": "doxray-docs_nav"
    },
    {
      "label": ".doxray-docs_patterns",
      "less": ".doxray-docs_patterns {\n    position: relative;\n    margin-left: @doxray-nav-width-outer;\n    z-index: 1;\n}",
      "filename": "doxray-docs.less",
      "slug": "doxray-docs_patterns"
    }
  ],
  "getByProperty": function ( property, value ) {
    return this.patterns.filter(
      this.utils.hasProperty( property, value )
    );
  },
  "utils": {
    "hasProperty": function ( property, value ) {
    return function( pattern ) {
      if ( typeof value === 'undefined' ) {
        return pattern[ property ];
      } else {
        return pattern[ property ] && pattern[ property ].toLowerCase() === value.toLowerCase();
      }
    }
  }
  }
};