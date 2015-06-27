var Doxray = {
  "files": [
    [
      {
        "docs": {
          "header": true,
          "label": ".doxray",
          "description": "The namespace which all Dox-ray classes should be prepended with.",
          "notes": [
            "All Dox-ray classes must be namespaced with `doxray` in order to avoid accidentally overriding the users' stylesheet.\n",
            "This class must be added to the `<body>` tag.\n"
          ],
          "slug": "doxray"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray {\n    margin: 0;\n    padding: 0;\n}"
          }
        ]
      },
      {
        "docs": {
          "header": true,
          "label": "The rest of the patterns",
          "description": "To be documented",
          "slug": "the-rest-of-the-patterns"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ""
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-icon-file",
          "markup": "<i class=\"doxray-icon-file\"></i>\n",
          "slug": "doxray-icon-file"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-icon-file {\n    &:before {\n        content: \"ƒ\";\n        font-family: @doxray-font-family-default;\n        font-weight: @doxray-font-weight-normal;\n    }\n\n    &:after {\n        content: \" \";\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-icon-pattern",
          "markup": "<i class=\"doxray-icon-pattern\"></i>\n",
          "slug": "doxray-icon-pattern"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-icon-pattern {\n    &:before {\n        content: \"⁋\";\n        font-family: @doxray-font-family-default;\n        font-weight: @doxray-font-weight-normal;\n    }\n\n    &:after {\n        content: \" \";\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-toc_masthead",
          "markup": "<h1 class=\"doxray-toc_masthead\">\n    Masthead\n</h1>\n",
          "slug": "doxray-toc_masthead"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-toc_masthead {\n    margin: 0;\n    padding: @doxray-margin-large;\n    border-bottom: 1px solid @doxray-color-dirtier-white;\n    background: @doxray-color-paper-white;\n    font-family: @doxray-font-family-default;\n    font-size: @doxray-font-size-xlg;\n    font-weight: @doxray-font-weight-light;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-toc_body",
          "slug": "doxray-toc_body"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-toc_body {\n    position: relative;\n    padding: @doxray-margin-large;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-toc_collapsed-view-btn",
          "slug": "doxray-toc_collapsed-view-btn"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-toc_collapsed-view-btn {\n    position: absolute;\n    bottom: @doxray-margin-large / 3;\n    left: @doxray-margin-large;\n    font-family: @doxray-font-family-default;\n    font-size: 12px;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-toc_file-list",
          "slug": "doxray-toc_file-list"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-toc_file-list {\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n\n    &__docs-nav {\n        padding: 20px;\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-toc_file-list",
          "slug": "doxray-toc_file-list"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-toc_file-list-item {\n    width: 220px;\n    min-width: 220px;\n    margin: 0 1em 4em 0;\n\n    &.is-collapsed {\n        margin-bottom: 1em;\n    }\n\n    &.is-collapsed .doxray-link {\n        display: none;\n    }\n\n    &.is-collapsed .doxray-link__file {\n        display: block;\n        margin-bottom: 0;\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-link",
          "markup": "<a class=\"doxray-link\" href=\"#0\">\n    A simple blocky link\n</a>\n",
          "slug": "doxray-link"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-link {\n    &,\n    &:link,\n    &:visited {\n        position: relative;\n        display: block;\n        margin: 0;\n        padding: 6px 12px;\n        border: 0;\n        background: transparent;\n        font-family: @doxray-font-family-default;\n        font-size: @doxray-font-size-sm;\n        color: @doxray-color-gray;\n        text-decoration: none;\n    }\n\n    &:hover,\n    &:focus {\n        background: @doxray-color-dirty-white;\n    }\n\n    &:focus {\n        outline: 0;\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-link__file",
          "markup": "<a class=\"doxray-link doxray-link__file\" href=\"#0\">\n    filename.ext\n</a>\n",
          "slug": "doxray-link__file"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-link__file {\n    &,\n    &:link,\n    &:visited {\n        margin: 0 0 .5em;\n        padding-top: 8px;\n        padding-bottom: 8px;\n        background: @doxray-color-dirty-white;\n        font-family: @doxray-font-family-code;\n    }\n\n    &:hover,\n    &:focus {\n        background: @doxray-color-dirtier-white;\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-link__header",
          "markup": "<a class=\"doxray-link doxray-link__header\" href=\"#0\">\n    Header link\n</a>\n",
          "slug": "doxray-link__header"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-link__header {\n    font-weight: @doxray-font-weight-demi;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-link-hr",
          "markup": "<a class=\"doxray-link\" href=\"#0\">\n    A simple blocky link\n</a>\n<hr class=\"doxray-link-hr\">\n<a class=\"doxray-link\" href=\"#0\">\n    A simple blocky link\n</a>\n",
          "slug": "doxray-link-hr"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-link-hr {\n    display: block;\n    height: 1px;\n    margin: 20px 10px;\n    border: 0;\n    background: @doxray-color-dirtier-white;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc",
          "slug": "doxray-doc"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc {\n    padding: @doxray-margin-large;\n}\n\n.doxray-doc + .doxray-doc {\n    border-top: 1px solid @doxray-color-dirtier-white;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-label",
          "markup": "<h1 class=\"doxray-doc-label\">\n    <a class=\"doxray-doc-label_link\" href=\"#0\">\n        Label\n    </a>\n</h1>\n",
          "slug": "doxray-doc-label"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-label {\n    margin: 0 0 @doxray-margin;\n    font-size: @doxray-font-size-lg;\n    font-weight: @doxray-font-weight-demi;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-label_link",
          "markup": "<h1 class=\"doxray-doc-label\">\n    <a class=\"doxray-doc-label_link\" href=\"#0\">\n        Doc Label Link\n    </a>\n</h1>\n",
          "slug": "doxray-doc-label_link"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-label_link {\n    &,\n    &:link,\n    &:visited,\n    &:hover,\n    &:focus {\n        color: @doxray-color-gray;\n        font-family: @doxray-font-family-default;\n        text-decoration: none;\n        outline: 0;\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-label__header",
          "markup": "<h1 class=\"doxray-doc-label doxray-doc-label__header\">\n    <a class=\"doxray-doc-label_link\" href=\"#0\">\n        Header label\n    </a>\n</h1>\n",
          "slug": "doxray-doc-label__header"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-label__header {\n    font-size: @doxray-font-size-xlg;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-tag",
          "markup": "<small class=\"doxray-doc-tag\">Tag</small>\n",
          "slug": "doxray-doc-tag"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-tag {\n    display: inline-block;\n    margin: 0 0 0 .5em;\n    padding: .2em .8em;\n    border-radius: @doxray-font-size-sm;\n    font-family: @doxray-font-family-default;\n    font-size: @doxray-font-size-sm;\n    font-weight: @doxray-font-weight-normal;\n    background: @doxray-color-dirtier-white;\n    color: @doxray-color-gray;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-description",
          "markup": "<div class=\"doxray-doc-description\">\n    <p>A description</p>\n</div>\n",
          "slug": "doxray-doc-description"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-description {\n    max-width: 50em;\n    margin: @doxray-margin 0;\n    font-family: @doxray-font-family-default;\n    font-size: @doxray-font-size-lg - 4px;\n    font-weight: @doxray-font-weight-normal;\n\n    p {\n        margin: @doxray-margin 0 0;\n    }\n\n    code {\n        display: inline-block;\n        padding: 2px 5px;\n        border-radius: 3px;\n        background: @doxray-color-dirty-white;\n        color: @doxray-color-gray;\n        font-family: @doxray-font-family-code;\n        font-size: .8em;\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-note",
          "markup": "<div class=\"doxray-doc-note\">\n    <p>A note</p>\n</div>\n",
          "slug": "doxray-doc-note"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-note {\n    position: relative;\n    max-width: 50em;\n    margin: @doxray-margin 0;\n    padding-left: 1.3em;\n    font-family: @doxray-font-family-default;\n    font-size: @doxray-font-size-md;\n    font-weight: @doxray-font-weight-normal;\n\n    &:before {\n        content: \"●\";\n        position: absolute;\n        left: 0;\n        display: inline-block;\n        margin-right: .25em;\n        color: @doxray-color-dirtier-white;\n    }\n\n    p {\n        margin: @doxray-margin 0 0;\n    }\n\n    code {\n        display: inline-block;\n        padding: 2px 5px;\n        border-radius: 3px;\n        background: @doxray-color-dirty-white;\n        color: @doxray-color-gray;\n        font-family: @doxray-font-family-code;\n        font-size: .8em;\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-reference",
          "markup": "<a class=\"doxray-doc-reference\" href=\"#0\" target=\"_blank\">\n    A reference link\n</a>\n",
          "slug": "doxray-doc-reference"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-reference {\n    &,\n    &:active,\n    &:link,\n    &:focus,\n    &:hover,\n    &:visited {\n        margin: @doxray-margin 0;\n        font-family: @doxray-font-family-default;\n        font-size: @doxray-font-size-md;\n        color: @doxray-color-blue;\n        text-decoration: none;\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-markup",
          "description": "Contains both the rendered and raw markup.\n",
          "markup": "<div class=\"doxray-doc-markup\">\n    <div class=\"doxray-doc-markup_rendered\">\n        Markup is rendered here\n    </div>\n</div>\n",
          "slug": "doxray-doc-markup"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-markup {\n    margin: (@doxray-margin-large / 2) (@doxray-margin-large / 2 * -1);\n    box-shadow: 0 0 6px @doxray-color-shadow;\n    overflow: hidden;\n\n    &:after {\n        display: table;\n        clear: both;\n        content: \"\";\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-markup_rendered",
          "description": "Contains both the rendered markup.\n",
          "notes": [
            "By default this container uses `display: inline-block;`. This is beneficial when using themes, since they will stack horizontally instead of vertically.\n"
          ],
          "markup": "<div class=\"doxray-doc-markup\">\n    <div class=\"doxray-doc-markup_rendered\">\n        Markup is rendered here\n    </div>\n</div>\n",
          "slug": "doxray-doc-markup_rendered"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-markup_rendered {\n    display: inline-block;\n    padding: @doxray-margin-large;\n    margin-right: -3.75px;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-markup_rendered__block",
          "notes": [
            "Converts this container to `display: block;`, allowing space for wider patterns.\n"
          ],
          "markup": "<div class=\"doxray-doc-markup\">\n    <div class=\"doxray-doc-markup_rendered doxray-doc-markup_rendered__block\">\n        Markup is rendered here\n    </div>\n</div>\n",
          "slug": "doxray-doc-markup_rendered__block"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-markup_rendered__block {\n    display: block;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-markup-theme",
          "slug": "doxray-doc-markup-theme"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-markup-theme {\n    position: relative;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-markup-theme_label",
          "slug": "doxray-doc-markup-theme_label"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-markup-theme_label {\n    position: absolute;\n    top: 2.5em;\n    font-family: @doxray-font-family-default;\n    font-size: @doxray-font-size-sm;\n    line-height: 1;\n    text-transform: capitalize;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-code",
          "slug": "doxray-doc-code"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-code {\n    position: relative;\n    margin: @doxray-margin 0 0;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-code_text",
          "slug": "doxray-doc-code_text"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-code_text {\n    display: block;\n    margin: 0;\n    padding: @doxray-margin-large / 2;\n    background: @doxray-color-dirty-white;\n    font-size: @doxray-font-size-md;\n    line-height: 1.5;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-code-expander",
          "slug": "doxray-doc-code-expander"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-code-expander {\n    position: relative;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-code-expander_body",
          "slug": "doxray-doc-code-expander_body"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-code-expander_body {\n    height: 160px;\n    overflow: hidden;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-code-expander_btn",
          "slug": "doxray-doc-code-expander_btn"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-code-expander_btn {\n    &,\n    &:active,\n    &:link,\n    &:focus,\n    &:hover,\n    &:visited {\n        display: block;\n        width: 100%;\n        padding: .5em .75em;\n        border: 0;\n        background: @doxray-color-dirtier-white;\n        color: @doxray-color-gray;\n        font-size: @doxray-font-size-sm;\n        line-height: 1;\n        text-align: center;\n        text-decoration: none;\n        outline: 0;\n        cursor: pointer;\n    }\n\n    &:hover,\n    &:focus {\n        background: darken(@doxray-color-dirtier-white, 2%);\n    }\n\n    &:before {\n        content: \"⇣\";\n    }\n\n    &__flipped:before {\n        content: \"⇡\";\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-color-palette",
          "slug": "doxray-doc-color-palette"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-palette {\n    width: 96px;\n    display: inline-block;\n    margin-top: 16px;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-color-palette_color",
          "slug": "doxray-doc-color-palette_color"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-palette_color {\n    display: block;\n    height: 96px;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-doc-color-palette_input",
          "slug": "doxray-doc-color-palette_input"
        },
        "code": [
          {
            "filename": "doxray-template.less",
            "type": ".less",
            "code": ".doxray-doc-palette_input {\n    position: relative;\n    z-index: 1;\n    box-sizing: border-box;\n    width: 100%;\n    margin-top: 4px;\n    padding: 8px 10px 10px;\n    border: 1px solid @doxray-color-dirtier-white;\n    border-radius: 0;\n    background: @doxray-color-clean-white;\n    color: @doxray-color-shadow;\n    font-family: @doxray-font-family-default;\n    font-size: 14px;\n    font-weight: @doxray-font-weight-normal;\n\n    &:hover,\n    &:focus {\n        width: 150px;\n        z-index: 2;\n        border-color: @doxray-color-gray;\n        box-shadow: 0 0 4px @doxray-color-shadow;\n    }\n\n    &:focus {\n        outline: 0;\n    }\n\n    & + & {\n        margin-top: -1px;\n    }\n}"
          }
        ]
      },
      {
        "docs": {
          "header": true,
          "label": "Variables",
          "slug": "variables"
        },
        "code": [
          {
            "filename": "doxray-variables.less",
            "type": ".less",
            "code": ""
          }
        ]
      },
      {
        "docs": {
          "label": "Fonts",
          "category": "helper",
          "notes": [
            "`Open Sans` is a Google font.\n",
            "`<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600\">`\n"
          ],
          "slug": "fonts"
        },
        "code": [
          {
            "filename": "doxray-variables.less",
            "type": ".less",
            "code": "@doxray-font-family-default:    \"Open Sans\", \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial;\n@doxray-font-family-code:       \"Lucida Sans Typewriter\", \"Lucida Console\", monaco, \"Bitstream Vera Sans Mono\", monospace;\n\n@doxray-font-weight-light:      300;\n@doxray-font-weight-normal:     400;\n@doxray-font-weight-demi:       600;\n\n@doxray-font-size-sm:           12px;\n@doxray-font-size-md:           18px;\n@doxray-font-size-lg:           30px;\n@doxray-font-size-xlg:          42px;"
          }
        ]
      },
      {
        "docs": {
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
          "slug": "colors"
        },
        "code": [
          {
            "filename": "doxray-variables.less",
            "type": ".less",
            "code": "@doxray-color-clean-white:      #ffffff;\n@doxray-color-paper-white:      #fdfdfd;\n@doxray-color-dirty-white:      #f8f8f8;\n@doxray-color-dirtier-white:    #f0f0f0;\n@doxray-color-shadow:           #6e6c6c;\n@doxray-color-gray:             #474646;\n@doxray-color-blue:             #5b7489;"
          }
        ]
      },
      {
        "docs": {
          "label": "Dimension and spacing",
          "slug": "dimension-and-spacing"
        },
        "code": [
          {
            "filename": "doxray-variables.less",
            "type": ".less",
            "code": "@doxray-nav-width:      260px;\n\n@doxray-margin:         18px;\n@doxray-margin-large:   72px;"
          }
        ]
      },
      {
        "docs": {
          "header": true,
          "label": ".doxray-docs",
          "slug": "doxray-docs"
        },
        "code": [
          {
            "filename": "doxray-docs.less",
            "type": ".less",
            "code": ""
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-docs_nav",
          "slug": "doxray-docs_nav"
        },
        "code": [
          {
            "filename": "doxray-docs.less",
            "type": ".less",
            "code": ".doxray-docs_nav {\n    box-sizing: border-box;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: @doxray-nav-width;\n    padding: 0 0 60px 0;\n    background: @doxray-color-paper-white;\n    overflow-y: auto;\n    z-index: 0;\n}"
          }
        ]
      },
      {
        "docs": {
          "label": ".doxray-docs_patterns",
          "slug": "doxray-docs_patterns"
        },
        "code": [
          {
            "filename": "doxray-docs.less",
            "type": ".less",
            "code": ".doxray-docs_patterns {\n    position: relative;\n    margin-left: @doxray-nav-width;\n    background: @doxray-color-clean-white;\n    box-shadow: 0 0 4px @doxray-color-shadow;\n    z-index: 1;\n}"
          }
        ]
      }
    ]
  ],
  "filemap": {
    "doxray-template.less": 0
  },
  "getFile": function (file) {
    var map = this.filemap[file];
    return this.files[map];
  },
  "slugmap": {
    "doxray": [
      0,
      0
    ],
    "the-rest-of-the-patterns": [
      0,
      1
    ],
    "doxray-icon-file": [
      0,
      2
    ],
    "doxray-icon-pattern": [
      0,
      3
    ],
    "doxray-toc_masthead": [
      0,
      4
    ],
    "doxray-toc_body": [
      0,
      5
    ],
    "doxray-toc_collapsed-view-btn": [
      0,
      6
    ],
    "doxray-toc_file-list": [
      0,
      8
    ],
    "doxray-link": [
      0,
      9
    ],
    "doxray-link__file": [
      0,
      10
    ],
    "doxray-link__header": [
      0,
      11
    ],
    "doxray-link-hr": [
      0,
      12
    ],
    "doxray-doc": [
      0,
      13
    ],
    "doxray-doc-label": [
      0,
      14
    ],
    "doxray-doc-label_link": [
      0,
      15
    ],
    "doxray-doc-label__header": [
      0,
      16
    ],
    "doxray-doc-tag": [
      0,
      17
    ],
    "doxray-doc-description": [
      0,
      18
    ],
    "doxray-doc-note": [
      0,
      19
    ],
    "doxray-doc-reference": [
      0,
      20
    ],
    "doxray-doc-markup": [
      0,
      21
    ],
    "doxray-doc-markup_rendered": [
      0,
      22
    ],
    "doxray-doc-markup_rendered__block": [
      0,
      23
    ],
    "doxray-doc-markup-theme": [
      0,
      24
    ],
    "doxray-doc-markup-theme_label": [
      0,
      25
    ],
    "doxray-doc-code": [
      0,
      26
    ],
    "doxray-doc-code_text": [
      0,
      27
    ],
    "doxray-doc-code-expander": [
      0,
      28
    ],
    "doxray-doc-code-expander_body": [
      0,
      29
    ],
    "doxray-doc-code-expander_btn": [
      0,
      30
    ],
    "doxray-doc-color-palette": [
      0,
      31
    ],
    "doxray-doc-color-palette_color": [
      0,
      32
    ],
    "doxray-doc-color-palette_input": [
      0,
      33
    ],
    "variables": [
      0,
      34
    ],
    "fonts": [
      0,
      35
    ],
    "colors": [
      0,
      36
    ],
    "dimension-and-spacing": [
      0,
      37
    ],
    "doxray-docs": [
      0,
      38
    ],
    "doxray-docs_nav": [
      0,
      39
    ],
    "doxray-docs_patterns": [
      0,
      40
    ]
  },
  "getSlug": function (slug) {
    var map = this.slugmap[slug];
    if (map && map.length === 2) {
      return this.files[map[0]][map[1]].docs;
    } else if (map && map.length === 3) {
      return this.files[map[0]][map[1]].docs[map[2]];
    }
    return undefined;
  }
};