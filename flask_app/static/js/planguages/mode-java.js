define("ace/mode/jsdoc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";function r(){this.$rules={start:[{token:["comment.doc.tag","comment.doc.text","lparen.doc"],regex:"(@(?:param|member|typedef|property|namespace|var|const|callback))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:["rparen.doc","text.doc","variable.parameter.doc","lparen.doc","variable.parameter.doc","rparen.doc"],regex:/(})(\s*)(?:([\w=:\/\.]+)|(?:(\[)([\w=:\/\.\-\'\" ]+)(\])))/,next:"pop"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","lparen.doc"],regex:"(@(?:returns?|yields|type|this|suppress|public|protected|private|package|modifies|implements|external|exception|throws|enum|define|extends))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:'(@(?:alias|memberof|instance|module|name|lends|namespace|external|this|template|requires|param|implements|function|extends|typedef|mixes|constructor|var|memberof\\!|event|listens|exports|class|constructs|interface|emits|fires|throws|const|callback|borrows|augments))(\\s+)(\\w[\\w#.:/~"\\-]*)?'},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:"(@method)(\\s+)(\\w[\\w.\\(\\)]*)"},{token:"comment.doc.tag",regex:"@access\\s+(?:private|public|protected)"},{token:"comment.doc.tag",regex:"@kind\\s+(?:class|constant|event|external|file|function|member|mixin|module|namespace|typedef)"},{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},r.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}],"doc-syntax":[{token:"operator.doc",regex:/[|:]/},{token:"paren.doc",regex:/[\[\]]/}]},this.normalizeRules()}var o=e("../lib/oop"),e=e("./text_highlight_rules").TextHighlightRules;o.inherits(r,e),r.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},r.getStartRule=function(e){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:e}},r.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.JsDocCommentHighlightRules=r}),define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/jsdoc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";function a(e){return[{token:"comment",regex:/\/\*/,next:[i.getTagRule(),{token:"comment",regex:"\\*\\/",next:e||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[i.getTagRule(),{token:"comment",regex:"$|^",next:e||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}function r(e){var t={"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Symbol|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static|constructor","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},n=this.createKeywordMapper(t,"identifier"),r="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)",o="(function)(\\s*)(\\*?)",t={token:["identifier","text","paren.lparen"],regex:"(\\b(?!"+Object.values(t).join("|")+"\\b)"+s+")(\\s*)(\\()"};this.$rules={no_regex:[i.getStartRule("doc-start"),a("no_regex"),t,{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\s*)(=)(\\s*)"+o+"(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","storage.type","text","text","entity.name.function","text","paren.lparen"],regex:"(function)(?:(?:(\\s*)(\\*)(\\s*))|(\\s+))("+s+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\s*)(:)(\\s*)"+o+"(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)"+o+"(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:"from(?=\\s*('|\"))"},{token:"keyword",regex:"(?:case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void)\\b",next:"start"},{token:"support.constant",regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|debug|time|trace|timeEnd|assert)\b/},{token:n,regex:s},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:"keyword.operator",regex:/=/},{token:["storage.type","text","storage.type","text","paren.lparen"],regex:o+"(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","storage.type","text","text","entity.name.function","text","paren.lparen"],regex:"(function)(?:(?:(\\s*)(\\*)(\\s*))|(\\s+))(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:"prototype"},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|lter|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward|rEach)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:s},{regex:"",token:"empty",next:"no_regex"}],start:[i.getStartRule("doc-start"),a("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],default_parameter:[{token:"string",regex:"'(?=.)",push:[{token:"string",regex:"'|$",next:"pop"},{include:"qstring"}]},{token:"string",regex:'"(?=.)',push:[{token:"string",regex:'"|$',next:"pop"},{include:"qqstring"}]},{token:"constant.language",regex:"null|Infinity|NaN|undefined"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:"punctuation.operator",regex:",",next:"function_arguments"},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],function_arguments:[a("function_arguments"),{token:"variable.parameter",regex:s},{token:"punctuation.operator",regex:","},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:r},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:r},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},e&&e.noES6||(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(e,t,n){if(this.next="{"==e?this.nextState:"","{"==e&&n.length)n.unshift("start",t);else if("}"==e&&n.length&&(n.shift(),this.next=n.shift(),-1!=this.next.indexOf("string")||-1!=this.next.indexOf("jsx")))return"paren.quasi.end";return"{"==e?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:r},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]},{token:["variable.parameter","text"],regex:"("+s+")(\\s*)(?=\\=>)"},{token:"paren.lparen",regex:"(\\()(?=[^\\(]+\\s*=>)",next:"function_arguments"},{token:"variable.language",regex:"(?:(?:(?:Weak)?(?:Set|Map))|Promise)\\b"}),this.$rules.function_arguments.unshift({token:"keyword.operator",regex:"=",next:"default_parameter"},{token:"keyword.operator",regex:"\\.{3}"}),this.$rules.property.unshift({token:"support.function",regex:"(findIndex|repeat|startsWith|endsWith|includes|isSafeInteger|trunc|cbrt|log2|log10|sign|then|catch|finally|resolve|reject|race|any|all|allSettled|keys|entries|isInteger)\\b(?=\\()"},{token:"constant.language",regex:"(?:MAX_SAFE_INTEGER|MIN_SAFE_INTEGER|EPSILON)\\b"}),e&&0==e.jsx||function(){var e=s.replace("\\d","\\d\\-"),t={onMatch:function(e,t,n){var r="/"==e.charAt(1)?2:1;return 1==r?(t!=this.nextState?n.unshift(this.next,this.nextState,0):n.unshift(this.next),n[2]++):2==r&&t==this.nextState&&(n[1]--,(!n[1]||n[1]<0)&&(n.shift(),n.shift())),[{type:"meta.tag.punctuation."+(1==r?"":"end-")+"tag-open.xml",value:e.slice(0,r)},{type:"meta.tag.tag-name.xml",value:e.substr(r)}]},regex:"</?(?:"+e+"|(?=>))",next:"jsxAttributes",nextState:"jsx"},n=(this.$rules.start.unshift(t),{regex:"{",token:"paren.quasi.start",push:"start"});this.$rules.jsx=[n,t,{include:"reference"},{defaultToken:"string.xml"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(e,t,n){return t==n[0]&&n.shift(),2==e.length&&(n[0]==this.nextState&&n[1]--,(!n[1]||n[1]<0)&&n.splice(0,2)),this.next=n[0]||"start",[{type:this.token,value:e}]},nextState:"jsx"},n,a("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:e},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},t],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}.call(this)),this.embedRules(i,"doc-",[i.getEndRule("no_regex")]),this.normalizeRules()}var o=e("../lib/oop"),i=e("./jsdoc_comment_highlight_rules").JsDocCommentHighlightRules,e=e("./text_highlight_rules").TextHighlightRules,s="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*";o.inherits(r,e),t.JavaScriptHighlightRules=r}),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";function r(){}var o=e("../range").Range;(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var n=n[1].length,r=e.findMatchingBracket({row:t,column:n});if(!r||r.row==t)return 0;r=this.$getIndent(e.getLine(r.row));e.replace(new o(t,0,t,n-1),r)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(r.prototype),t.MatchingBraceOutdent=r}),define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator"],function(e,t,n){"use strict";function g(e,t){return e&&-1<e.type.lastIndexOf(t+".xml")}function r(){this.add("string_dquotes","insertion",function(e,t,n,r,o){if('"'==o||"'"==o){var a=r.doc.getTextRange(n.getSelectionRange());if(""!==a&&"'"!==a&&'"'!=a&&n.getWrapBehavioursEnabled())return{text:o+a+o,selection:!1};var a=n.getCursorPosition(),n=r.doc.getLine(a.row).substring(a.column,a.column+1),i=new c(r,a.row,a.column),s=i.getCurrentToken();if(n==o&&(g(s,"attribute-value")||g(s,"string")))return{text:"",selection:[1,1]};if(s=s||i.stepBackward()){for(;g(s,"tag-whitespace")||g(s,"whitespace");)s=i.stepBackward();r=!n||n.match(/\s/);return g(s,"attribute-equals")&&(r||">"==n)||g(s,"decl-attribute-equals")&&(r||"?"==n)?{text:o+o,selection:[1,1]}:void 0}}}),this.add("string_dquotes","deletion",function(e,t,n,r,o){var a=r.doc.getTextRange(o);if(!o.isMultiLine()&&('"'==a||"'"==a)&&r.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)==a)return o.end.column++,o}),this.add("autoclosing","insertion",function(e,t,n,r,o){if(">"==o){var o=n.getSelectionRange().start,a=new c(r,o.row,o.column),i=a.getCurrentToken()||a.stepBackward();if(i&&(g(i,"tag-name")||g(i,"tag-whitespace")||g(i,"attribute-name")||g(i,"attribute-equals")||g(i,"attribute-value"))&&!g(i,"reference.attribute-value")){if(g(i,"attribute-value")){n=a.getCurrentTokenColumn()+i.value.length;if(o.column<n)return;if(o.column==n){n=a.stepForward();if(n&&g(n,"attribute-value"))return;a.stepBackward()}}if(!/^\s*>/.test(r.getLine(o.row).slice(o.column))){for(;!g(i,"tag-name");)if("<"==(i=a.stepBackward()).value){i=a.stepForward();break}n=a.getCurrentTokenRow(),r=a.getCurrentTokenColumn();if(!g(a.stepBackward(),"end-tag-open")){var s=i.value;if(n==o.row&&(s=s.substring(0,o.column-r)),!this.voidElements||!this.voidElements.hasOwnProperty(s.toLowerCase()))return{text:"></"+s+">",selection:[1,1]}}}}}}),this.add("autoindent","insertion",function(e,t,n,r,o){if("\n"==o){var o=n.getCursorPosition(),n=r.getLine(o.row),a=new c(r,o.row,o.column),i=a.getCurrentToken();if(g(i,"")&&-1!==i.type.indexOf("tag-close")&&"/>"!=i.value){for(;i&&-1===i.type.indexOf("tag-name");)i=a.stepBackward();if(i){var s=i.value,l=a.getCurrentTokenRow();if((i=a.stepBackward())&&-1===i.type.indexOf("end-tag"))return this.voidElements&&!this.voidElements[s]||!this.voidElements?(s=r.getTokenAt(o.row,o.column+1),n=r.getLine(l),l=(o=this.$getIndent(n))+r.getTabString(),s&&"</"===s.value?{text:"\n"+l+"\n"+o,selection:[1,l.length,1,l.length]}:{text:"\n"+l}):void 0}}}})}var o=e("../../lib/oop"),a=e("../behaviour").Behaviour,c=e("../../token_iterator").TokenIterator;o.inherits(r,a),t.XmlBehaviour=r}),define("ace/mode/behaviour/javascript",["require","exports","module","ace/lib/oop","ace/token_iterator","ace/mode/behaviour/cstyle","ace/mode/behaviour/xml"],function(e,t,n){"use strict";function r(){var e=new s({closeCurlyBraces:!0}).getBehaviours();this.addBehaviours(e),this.inherit(i),this.add("autoclosing-fragment","insertion",function(e,t,n,r,o){if(">"==o){o=n.getSelectionRange().start,n=new a(r,o.row,o.column),r=n.getCurrentToken()||n.stepBackward();if(r)return"<"==r.value?{text:"></>",selection:[1,1]}:void 0}})}var o=e("../../lib/oop"),a=e("../../token_iterator").TokenIterator,i=e("../behaviour/cstyle").CstyleBehaviour,s=e("../behaviour/xml").XmlBehaviour;o.inherits(r,i),t.JavaScriptBehaviour=r}),define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";function l(e,t){return-1<e.type.lastIndexOf(t+".xml")}function i(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}}var r=e("../../lib/oop"),o=e("../../range").Range,a=e("./fold_mode").FoldMode,e=t.FoldMode=function(e,t){a.call(this),this.voidElements=e||{},this.optionalEndTags=r.mixin({},this.voidElements),t&&r.mixin(this.optionalEndTags,t)};r.inherits(e,a);!function(){this.getFoldWidget=function(e,t,n){var r=this._getFirstTagInLine(e,n);return r?r.closing||!r.tagName&&r.selfClosing?"markbeginend"===t?"end":"":!r.tagName||r.selfClosing||this.voidElements.hasOwnProperty(r.tagName.toLowerCase())||this._findEndTagInLine(e,n,r.tagName,r.end.column)?"":"start":this.getCommentFoldWidget(e,n)},this.getCommentFoldWidget=function(e,t){return/comment/.test(e.getState(t))&&/<!-/.test(e.getLine(t))?"start":""},this._getFirstTagInLine=function(e,t){for(var n=e.getTokens(t),r=new i,o=0;o<n.length;o++){var a=n[o];if(l(a,"tag-open")){if(r.end.column=r.start.column+a.value.length,r.closing=l(a,"end-tag-open"),!(a=n[++o]))return null;if(r.tagName=a.value,""===a.value){if(!(a=n[++o]))return null;r.tagName=a.value}for(r.end.column+=a.value.length,o++;o<n.length;o++)if(a=n[o],r.end.column+=a.value.length,l(a,"tag-close")){r.selfClosing="/>"==a.value;break}return r}if(l(a,"tag-close"))return r.selfClosing="/>"==a.value,r;r.start.column+=a.value.length}return null},this._findEndTagInLine=function(e,t,n,r){for(var o=e.getTokens(t),a=0,i=0;i<o.length;i++){var s=o[i];if(!((a+=s.value.length)<r-1)&&(l(s,"end-tag-open")&&(s=l(s=o[i+1],"tag-name")&&""===s.value?o[i+2]:s)&&s.value==n))return!0}return!1},this.getFoldWidgetRange=function(e,t,n){if(!this._getFirstTagInLine(e,n))return this.getCommentFoldWidget(e,n)&&e.getCommentFoldRange(n,e.getLine(n).length);e=e.getMatchingTags({row:n,column:0});return e?new o(e.openTag.end.row,e.openTag.end.column,e.closeTag.start.row,e.closeTag.start.column):void 0}}.call(e.prototype)}),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop"),c=e("../../range").Range,e=e("./fold_mode").FoldMode,t=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(t,e),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";e=this._getFoldWidgetBase(e,t,n);return!e&&this.startRegionRe.test(r)?"start":e},this.getFoldWidgetRange=function(e,t,n,r){var o=e.getLine(n);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,n);var a=o.match(this.foldingStartMarker);if(a){var i=a.index;if(a[1])return this.openingBracketBlock(e,a[1],n,i);var s=e.getCommentFoldRange(n,i+a[0].length,1);return s&&!s.isMultiLine()&&(r?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}if("markbegin"!==t)return(a=o.match(this.foldingStopMarker))?(i=a.index+a[0].length,a[1]?this.closingBracketBlock(e,a[1],n,i):e.getCommentFoldRange(n,i,-1)):void 0},this.getSectionRange=function(e,t){for(var n=(s=e.getLine(t)).search(/\S/),r=t,o=s.length,a=t+=1,i=e.getLength();++t<i;){var s,l=(s=e.getLine(t)).search(/\S/);if(-1!==l){if(l<n)break;var g=this.getFoldWidgetRange(e,"all",t);if(g){if(g.start.row<=r)break;if(g.isMultiLine())t=g.end.row;else if(n==l)break}a=t}}return new c(r,o,a,e.getLine(a).length)},this.getCommentRegionBlock=function(e,t,n){for(var r=t.search(/\s*$/),o=e.getLength(),a=n,i=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++n<o;){t=e.getLine(n);var l=i.exec(t);if(l&&(l[1]?s--:s++,!s))break}if(a<n)return new c(a,r,n,t.length)}}.call(t.prototype)}),define("ace/mode/folding/javascript",["require","exports","module","ace/lib/oop","ace/mode/folding/xml","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var r=e("../../lib/oop"),o=e("./xml").FoldMode,e=e("./cstyle").FoldMode,t=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end))),this.xmlFoldMode=new o};r.inherits(t,e),function(){this.getFoldWidgetRangeBase=this.getFoldWidgetRange,this.getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=this.getFoldWidgetBase(e,t,n);return r||this.xmlFoldMode.getFoldWidget(e,t,n)},this.getFoldWidgetRange=function(e,t,n,r){r=this.getFoldWidgetRangeBase(e,t,n,r);return r||this.xmlFoldMode.getFoldWidgetRange(e,t,n)}}.call(t.prototype)}),define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/javascript","ace/mode/folding/javascript"],function(e,t,n){"use strict";function r(){this.HighlightRules=i,this.$outdent=new s,this.$behaviour=new g,this.foldingRules=new c}var o=e("../lib/oop"),a=e("./text").Mode,i=e("./javascript_highlight_rules").JavaScriptHighlightRules,s=e("./matching_brace_outdent").MatchingBraceOutdent,l=e("../worker/worker_client").WorkerClient,g=e("./behaviour/javascript").JavaScriptBehaviour,c=e("./folding/javascript").FoldMode;o.inherits(r,a),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),o=this.getTokenizer().getLineTokens(t,e),a=o.tokens,o=o.state;if(a.length&&"comment"==a[a.length-1].type)return r;if("start"==e||"no_regex"==e)t.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/)&&(r+=n);else if("doc-start"==e&&("start"==o||"no_regex"==o))return"";return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(t){var e=new l(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return e.attachToDocument(t.getDocument()),e.on("annotate",function(e){t.setAnnotations(e.data)}),e.on("terminate",function(){t.clearAnnotations()}),e},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(r.prototype),t.Mode=r}),define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";function r(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},r.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}}var o=e("../lib/oop"),e=e("./text_highlight_rules").TextHighlightRules;o.inherits(r,e),r.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},r.getStartRule=function(e){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:e}},r.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=r}),define("ace/mode/java_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";function r(){var e="[a-zA-Z_$][a-zA-Z0-9_$]*",t=this.createKeywordMapper({"variable.language":"this","constant.language":"null|Infinity|NaN|undefined","support.function":"AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object"},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},a.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{include:"multiline-strings"},{include:"strings"},{include:"constants"},{regex:"(open(?:\\s+))?module(?=\\s*\\w)",token:"keyword",next:[{regex:"{",token:"paren.lparen",next:[{regex:"}",token:"paren.rparen",next:"start"},{regex:"\\b(requires|transitive|exports|opens|to|uses|provides|with)\\b",token:"keyword"}]},{token:"text",regex:"\\s+"},{token:"identifier",regex:"\\w+"},{token:"punctuation.operator",regex:"."},{token:"text",regex:"\\s+"},{regex:"",next:"start"}]},{include:"statements"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],strings:[{token:["punctuation","string"],regex:/(\.)(")/,push:[{token:"lparen",regex:/\\\{/,push:[{token:"text",regex:/$/,next:"start"},{token:"rparen",regex:/}/,next:"pop"},{include:"strings"},{include:"constants"},{include:"statements"}]},{token:"string",regex:/"/,next:"pop"},{defaultToken:"string"}]},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"}],"multiline-strings":[{token:["punctuation","string"],regex:/(\.)(""")/,push:[{token:"string",regex:'"""',next:"pop"},{token:"lparen",regex:/\\\{/,push:[{token:"text",regex:/$/,next:"start"},{token:"rparen",regex:/}/,next:"pop"},{include:"multiline-strings"},{include:"strings"},{include:"constants"},{include:"statements"}]},{token:"constant.language.escape",regex:/\\./},{defaultToken:"string"}]},{token:"string",regex:'"""',push:[{token:"string",regex:'"""',next:"pop"},{token:"constant.language.escape",regex:/\\./},{defaultToken:"string"}]}],constants:[{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/},{token:"constant.numeric",regex:/[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/},{token:"constant.language.boolean",regex:"(?:true|false)\\b"}],statements:[{token:["keyword","text","identifier"],regex:"(record)(\\s+)("+e+")\\b"},{token:"keyword",regex:"(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|exports|opens|requires|uses|yield|module|permits|(?:non\\-)?sealed|var|provides|to|when|open|record|transitive|with)\\b"},{token:"storage.type.annotation",regex:"@"+e+"\\b"},{token:"entity.name.function",regex:e+"(?=\\()"},{token:t,regex:e+"\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\||\\^|\\*|\\/|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?|\\:|\\*=|\\/=|%=|\\+=|\\-=|&=|\\|=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}]},this.embedRules(a,"doc-",[a.getEndRule("start")]),this.normalizeRules()}var o=e("../lib/oop"),a=e("./doc_comment_highlight_rules").DocCommentHighlightRules,e=e("./text_highlight_rules").TextHighlightRules;o.inherits(r,e),t.JavaHighlightRules=r}),define("ace/mode/folding/java",["require","exports","module","ace/lib/oop","ace/mode/folding/cstyle","ace/range"],function(e,t,n){"use strict";var r=e("../../lib/oop"),o=e("./cstyle").FoldMode,l=e("../../range").Range,e=t.FoldMode=function(){};r.inherits(e,o),function(){this.importRegex=/^import /,this.getCStyleFoldWidget=this.getFoldWidget,this.getFoldWidget=function(e,t,n){if("markbegin"===t){var r=e.getLine(n);if(this.importRegex.test(r)&&(0==n||!this.importRegex.test(e.getLine(n-1))))return"start"}return this.getCStyleFoldWidget(e,t,n)},this.getCstyleFoldWidgetRange=this.getFoldWidgetRange,this.getFoldWidgetRange=function(e,t,n,r){var o=(s=e.getLine(n)).match(this.importRegex);if(!o||"markbegin"!==t)return this.getCstyleFoldWidgetRange(e,t,n,r);for(var t=o[0].length,a=e.getLength(),r=n,i=n;++n<a;){var s=e.getLine(n);if(!s.match(/^\s*$/)){if(!s.match(this.importRegex))break;i=n}}return r<i?(o=e.getLine(i).length,new l(r,t,i,o)):void 0}}.call(e.prototype)}),define("ace/mode/java",["require","exports","module","ace/lib/oop","ace/mode/javascript","ace/mode/java_highlight_rules","ace/mode/folding/java"],function(e,t,n){"use strict";function r(){a.call(this),this.HighlightRules=i,this.foldingRules=new s,this.$behaviour=this.$defaultBehaviour}var o=e("../lib/oop"),a=e("./javascript").Mode,i=e("./java_highlight_rules").JavaHighlightRules,s=e("./folding/java").FoldMode;o.inherits(r,a),function(){this.createWorker=function(e){return null},this.$id="ace/mode/java",this.snippetFileId="ace/snippets/java"}.call(r.prototype),t.Mode=r}),window.require(["ace/mode/java"],function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)});