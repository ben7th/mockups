﻿$axure.loadCurrentPage({
  "url":"home.html",
  "generationDate":new Date(1428494663918.36),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"0078007c619844e990f6e381ab28c426",
    "type":"Axure:Page",
    "name":"Home",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"center",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"01f8c12bc9ef4c489f1b505a278275bb",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":90,
              "y":62},
            "size":{
              "width":1200,
              "height":750},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFCCCCCC}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"000654537cbe4d6cb890dcc55205436e",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":90,
                  "y":62},
                "size":{
                  "width":1200,
                  "height":750},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/home/u0.png"}},
{
          "id":"1d710e494f9a4cfd8e4e62e89748ebf8",
          "label":"",
          "type":"buttonShape",
          "styleType":"h1",
          "visible":true,
          "style":{
            "fontName":"'Futura Condensed Bold', 'Futura'",
            "fontSize":"128px",
            "fontWeight":"700",
            "fontStyle":"normal",
            "horizontalAlignment":"center",
            "location":{
              "x":520,
              "y":172},
            "size":{
              "width":340,
              "height":163}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"95d201099bfb450ab108b5f3ce440303",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Futura Condensed Bold', 'Futura'",
                "fontSize":"128px",
                "fontWeight":"700",
                "fontStyle":"normal",
                "horizontalAlignment":"center",
                "location":{
                  "x":520,
                  "y":172},
                "size":{
                  "width":340,
                  "height":163}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"c794dd7813c44f4495d6756435769362",
          "label":"weibo login",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":575,
              "y":380},
            "size":{
              "width":230,
              "height":52}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 个人首页-无图片",
                      "target":{
                        "targetType":"page",
                        "url":"个人首页-无图片.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]},
            "onMouseOver":{
              "description":"OnMouseOver",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setPanelState",
                      "description":"设置 weibo login to green",
                      "panelsToStates":[{
                          "panelPath":["c794dd7813c44f4495d6756435769362"],
                          "stateInfo":{
                            "setStateType":"diagram",
                            "stateNumber":2,
                            "stateValue":{
                              "exprType":"stringLiteral",
                              "value":"1",
                              "stos":[]},
                            "loop":false,
                            "showWhenSet":false,
                            "options":{
                              "compress":false}}}]}]}]},
            "onMouseOut":{
              "description":"OnMouseOut",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setPanelState",
                      "description":"设置 weibo login to white",
                      "panelsToStates":[{
                          "panelPath":["c794dd7813c44f4495d6756435769362"],
                          "stateInfo":{
                            "setStateType":"diagram",
                            "stateNumber":1,
                            "stateValue":{
                              "exprType":"stringLiteral",
                              "value":"1",
                              "stos":[]},
                            "loop":false,
                            "showWhenSet":false,
                            "options":{
                              "compress":false}}}]}]}]}},
          "tabbable":true,
          "scrollbars":"none",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"dd3d2deeeb67466b8be375dca6fb04a8",
              "label":"white",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"dbd3893d556843a39139f387300eb21c",
                  "label":"",
                  "parentDynamicPanel":"c794dd7813c44f4495d6756435769362",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFF555555,
                      "opacity":1},
                    "size":{
                      "width":230,
                      "height":52},
                    "cornerRadiusTopLeft":"5"},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"fb2bf3acaa7d475bb8096039d3b06d6b",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"c794dd7813c44f4495d6756435769362",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "foreGroundFill":{
                          "fillType":"solid",
                          "color":0xFF555555,
                          "opacity":1},
                        "size":{
                          "width":230,
                          "height":52},
                        "cornerRadiusTopLeft":"5"},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/home/u5.png"}},
{
                  "id":"47d3c1f018ce4a9a9ca276356512687d",
                  "label":"",
                  "parentDynamicPanel":"c794dd7813c44f4495d6756435769362",
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFF555555,
                      "opacity":1},
                    "location":{
                      "x":32,
                      "y":11},
                    "size":{
                      "width":30,
                      "height":30}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"1573f9f0941744cd9de8a29d4bba425d",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"c794dd7813c44f4495d6756435769362",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "foreGroundFill":{
                          "fillType":"solid",
                          "color":0xFF555555,
                          "opacity":1},
                        "location":{
                          "x":32,
                          "y":11},
                        "size":{
                          "width":30,
                          "height":30}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/home/u7.png"}},
{
                  "id":"63f8f79850824ef7991278038c098040",
                  "label":"",
                  "parentDynamicPanel":"c794dd7813c44f4495d6756435769362",
                  "type":"buttonShape",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "fontName":"'微软雅黑 Bold', '微软雅黑'",
                    "fontSize":"16px",
                    "fontWeight":"700",
                    "location":{
                      "x":69,
                      "y":16},
                    "size":{
                      "width":129,
                      "height":21}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"e42adfc70cdc47ad97a66b5309c3234d",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"c794dd7813c44f4495d6756435769362",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "fontName":"'微软雅黑 Bold', '微软雅黑'",
                        "fontSize":"16px",
                        "fontWeight":"700",
                        "location":{
                          "x":69,
                          "y":16},
                        "size":{
                          "width":129,
                          "height":21}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"resources/images/transparent.gif"}}]},
{
              "id":"77b5101a8902460cbdc8e12fa60bbc41",
              "label":"green",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"4e71779e1b754978974baef32b762e6c",
                  "label":"",
                  "parentDynamicPanel":"c794dd7813c44f4495d6756435769362",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFF555555,
                      "opacity":1},
                    "fill":{
                      "fillType":"solid",
                      "color":0xFF7DB500},
                    "size":{
                      "width":230,
                      "height":52},
                    "borderFill":{
                      "fillType":"solid",
                      "color":0xFF7DB500},
                    "cornerRadiusTopLeft":"5"},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"5fe9826014374e73831c12dca4e00074",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"c794dd7813c44f4495d6756435769362",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "foreGroundFill":{
                          "fillType":"solid",
                          "color":0xFF555555,
                          "opacity":1},
                        "fill":{
                          "fillType":"solid",
                          "color":0xFF7DB500},
                        "size":{
                          "width":230,
                          "height":52},
                        "borderFill":{
                          "fillType":"solid",
                          "color":0xFF7DB500},
                        "cornerRadiusTopLeft":"5"},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/home/u11.png"}},
{
                  "id":"92828b71fa984388a25e1fc0faefb430",
                  "label":"",
                  "parentDynamicPanel":"c794dd7813c44f4495d6756435769362",
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFF555555,
                      "opacity":1},
                    "location":{
                      "x":32,
                      "y":11},
                    "size":{
                      "width":30,
                      "height":30}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"4a5b6382ca9340c48b9d15d5a8b1c137",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"c794dd7813c44f4495d6756435769362",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "foreGroundFill":{
                          "fillType":"solid",
                          "color":0xFF555555,
                          "opacity":1},
                        "location":{
                          "x":32,
                          "y":11},
                        "size":{
                          "width":30,
                          "height":30}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/home/u13.png"}},
{
                  "id":"317a21b179d249038e5e52ca1ecde644",
                  "label":"",
                  "parentDynamicPanel":"c794dd7813c44f4495d6756435769362",
                  "type":"buttonShape",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "fontName":"'微软雅黑 Bold', '微软雅黑'",
                    "fontSize":"16px",
                    "fontWeight":"700",
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFFFFFFF,
                      "opacity":1},
                    "location":{
                      "x":69,
                      "y":16},
                    "size":{
                      "width":129,
                      "height":21}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"e9504b2e2d5f43dc9771f548839342dc",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"c794dd7813c44f4495d6756435769362",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "fontName":"'微软雅黑 Bold', '微软雅黑'",
                        "fontSize":"16px",
                        "fontWeight":"700",
                        "foreGroundFill":{
                          "fillType":"solid",
                          "color":0xFFFFFFFF,
                          "opacity":1},
                        "location":{
                          "x":69,
                          "y":16},
                        "size":{
                          "width":129,
                          "height":21}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"resources/images/transparent.gif"}}]}]}]}},
  "masters":{
},
  "objectPaths":{
    "01f8c12bc9ef4c489f1b505a278275bb":{
      "scriptId":"u0"},
    "000654537cbe4d6cb890dcc55205436e":{
      "scriptId":"u1"},
    "1d710e494f9a4cfd8e4e62e89748ebf8":{
      "scriptId":"u2"},
    "95d201099bfb450ab108b5f3ce440303":{
      "scriptId":"u3"},
    "c794dd7813c44f4495d6756435769362":{
      "scriptId":"u4"},
    "dbd3893d556843a39139f387300eb21c":{
      "scriptId":"u5"},
    "fb2bf3acaa7d475bb8096039d3b06d6b":{
      "scriptId":"u6"},
    "47d3c1f018ce4a9a9ca276356512687d":{
      "scriptId":"u7"},
    "1573f9f0941744cd9de8a29d4bba425d":{
      "scriptId":"u8"},
    "63f8f79850824ef7991278038c098040":{
      "scriptId":"u9"},
    "e42adfc70cdc47ad97a66b5309c3234d":{
      "scriptId":"u10"},
    "4e71779e1b754978974baef32b762e6c":{
      "scriptId":"u11"},
    "5fe9826014374e73831c12dca4e00074":{
      "scriptId":"u12"},
    "92828b71fa984388a25e1fc0faefb430":{
      "scriptId":"u13"},
    "4a5b6382ca9340c48b9d15d5a8b1c137":{
      "scriptId":"u14"},
    "317a21b179d249038e5e52ca1ecde644":{
      "scriptId":"u15"},
    "e9504b2e2d5f43dc9771f548839342dc":{
      "scriptId":"u16"}}});