define("ace/mode/python_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";function r(){var e=this.createKeywordMapper({"invalid.deprecated":"debugger","support.function":"abs|divmod|input|open|staticmethod|all|enumerate|int|ord|str|any|eval|isinstance|pow|sum|basestring|execfile|issubclass|print|super|binfile|bin|iter|property|tuple|bool|filter|len|range|type|bytearray|float|list|raw_input|unichr|callable|format|locals|reduce|unicode|chr|frozenset|long|reload|vars|classmethod|getattr|map|repr|xrange|cmp|globals|max|reversed|zip|compile|hasattr|memoryview|round|__import__|complex|hash|min|apply|delattr|help|next|setattr|set|buffer|dict|hex|object|slice|coerce|dir|id|oct|sorted|intern|ascii|breakpoint|bytes","variable.language":"self|cls","constant.language":"True|False|None|NotImplemented|Ellipsis|__debug__",keyword:"and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|while|with|yield|async|await|nonlocal"},"identifier"),t="[uU]?",n="[rR]",r="[fF]",i="(?:[rR][fF]|[fF][rR])",s="(?:(?:(?:[1-9]\\d*)|(?:0))|(?:0[oO]?[0-7]+)|(?:0[xX][\\dA-Fa-f]+)|(?:0[bB][01]+))",o="(?:(?:(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))|(?:\\d+))(?:[eE][+-]?\\d+))|"+(o="(?:(?:"+(o="(?:\\d+)")+"?(?:\\.\\d+))|(?:"+o+"\\.))")+")",g="\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'\"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})";this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"string",regex:t+'"{3}',next:"qqstring3"},{token:"string",regex:t+'"(?=.)',next:"qqstring"},{token:"string",regex:t+"'{3}",next:"qstring3"},{token:"string",regex:t+"'(?=.)",next:"qstring"},{token:"string",regex:n+'"{3}',next:"rawqqstring3"},{token:"string",regex:n+'"(?=.)',next:"rawqqstring"},{token:"string",regex:n+"'{3}",next:"rawqstring3"},{token:"string",regex:n+"'(?=.)",next:"rawqstring"},{token:"string",regex:r+'"{3}',next:"fqqstring3"},{token:"string",regex:r+'"(?=.)',next:"fqqstring"},{token:"string",regex:r+"'{3}",next:"fqstring3"},{token:"string",regex:r+"'(?=.)",next:"fqstring"},{token:"string",regex:i+'"{3}',next:"rfqqstring3"},{token:"string",regex:i+'"(?=.)',next:"rfqqstring"},{token:"string",regex:i+"'{3}",next:"rfqstring3"},{token:"string",regex:i+"'(?=.)",next:"rfqstring"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|%|@|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"punctuation",regex:",|:|;|\\->|\\+=|\\-=|\\*=|\\/=|\\/\\/=|%=|@=|&=|\\|=|^=|>>=|<<=|\\*\\*="},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]\\)\\}]"},{token:["keyword","text","entity.name.function"],regex:"(def|class)(\\s+)([\\u00BF-\\u1FFF\\u2C00-\\uD7FF\\w]+)"},{token:"text",regex:"\\s+"},{include:"constants"}],qqstring3:[{token:"constant.language.escape",regex:g},{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],qstring3:[{token:"constant.language.escape",regex:g},{token:"string",regex:"'{3}",next:"start"},{defaultToken:"string"}],qqstring:[{token:"constant.language.escape",regex:g},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:g},{token:"string",regex:"\\\\$",next:"qstring"},{token:"string",regex:"'|$",next:"start"},{defaultToken:"string"}],rawqqstring3:[{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],rawqstring3:[{token:"string",regex:"'{3}",next:"start"},{defaultToken:"string"}],rawqqstring:[{token:"string",regex:"\\\\$",next:"rawqqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],rawqstring:[{token:"string",regex:"\\\\$",next:"rawqstring"},{token:"string",regex:"'|$",next:"start"},{defaultToken:"string"}],fqqstring3:[{token:"constant.language.escape",regex:g},{token:"string",regex:'"{3}',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstring3:[{token:"constant.language.escape",regex:g},{token:"string",regex:"'{3}",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqqstring:[{token:"constant.language.escape",regex:g},{token:"string",regex:"\\\\$",next:"fqqstring"},{token:"string",regex:'"|$',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstring:[{token:"constant.language.escape",regex:g},{token:"string",regex:"'|$",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqqstring3:[{token:"string",regex:'"{3}',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqstring3:[{token:"string",regex:"'{3}",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqqstring:[{token:"string",regex:"\\\\$",next:"rfqqstring"},{token:"string",regex:'"|$',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqstring:[{token:"string",regex:"'|$",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstringParRules:[{token:"paren.lparen",regex:"[\\[\\(]"},{token:"paren.rparen",regex:"[\\]\\)]"},{token:"string",regex:"\\s+"},{token:"string",regex:"'[^']*'"},{token:"string",regex:'"[^"]*"'},{token:"function.support",regex:"(!s|!r|!a)"},{include:"constants"},{token:"paren.rparen",regex:"}",next:"pop"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"}],constants:[{token:"constant.numeric",regex:"(?:"+o+"|\\d+)[jJ]\\b"},{token:"constant.numeric",regex:o},{token:"constant.numeric",regex:s+"[lL]\\b"},{token:"constant.numeric",regex:s+"\\b"},{token:["punctuation","function.support"],regex:"(\\.)([a-zA-Z_]+)\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}]},this.normalizeRules()}var i=e("../lib/oop"),e=e("./text_highlight_rules").TextHighlightRules;i.inherits(r,e),t.PythonHighlightRules=r}),define("ace/mode/folding/pythonic",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop"),e=e("./fold_mode").FoldMode,t=t.FoldMode=function(e){this.foldingStartMarker=new RegExp("([\\[{])(?:\\s*)$|("+e+")(?:\\s*)(?:#.*)?$")};r.inherits(t,e),function(){this.getFoldWidgetRange=function(e,t,n){var r=e.getLine(n).match(this.foldingStartMarker);if(r)return r[1]?this.openingBracketBlock(e,r[1],n,r.index):r[2]?this.indentationBlock(e,n,r.index+r[2].length):this.indentationBlock(e,n)}}.call(t.prototype)}),define("ace/mode/python",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/python_highlight_rules","ace/mode/folding/pythonic","ace/range"],function(e,t,n){"use strict";function r(){this.HighlightRules=o,this.foldingRules=new g("\\:"),this.$behaviour=this.$defaultBehaviour}var i=e("../lib/oop"),s=e("./text").Mode,o=e("./python_highlight_rules").PythonHighlightRules,g=e("./folding/pythonic").FoldMode,a=e("../range").Range;i.inherits(r,s),function(){this.lineCommentStart="#",this.$pairQuotesAfter={"'":/[ruf]/i,'"':/[ruf]/i},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e).tokens;return i.length&&"comment"==i[i.length-1].type||"start"==e&&t.match(/^.*[\{\(\[:]\s*$/)&&(r+=n),r};var s={pass:1,return:1,raise:1,break:1,continue:1};this.checkOutdent=function(e,t,n){if("\r\n"!==n&&"\r"!==n&&"\n"!==n)return!1;var r=this.getTokenizer().getLineTokens(t.trim(),e).tokens;if(!r)return!1;do{var i=r.pop()}while(i&&("comment"==i.type||"text"==i.type&&i.value.match(/^\s+$/)));return!!i&&("keyword"==i.type&&s[i.value])},this.autoOutdent=function(e,t,n){var r=this.$getIndent(t.getLine(n+=1)),i=t.getTabString();r.slice(-i.length)==i&&t.remove(new a(n,r.length-i.length,n,r.length))},this.$id="ace/mode/python",this.snippetFileId="ace/snippets/python"}.call(r.prototype),t.Mode=r}),window.require(["ace/mode/python"],function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)});