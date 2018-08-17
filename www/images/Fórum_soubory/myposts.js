(function(){var el = document.createElement('style'); el.className='tracy-debug'; el.textContent="\/** * This file is part of the Tracy (https:\/\/tracy.nette.org) *\/ \/* common styles *\/ #tracy-debug { display: none; direction: ltr; line-height: 1.5; } body#tracy-debug { \/* in popup window *\/ margin: 0; display: block; } #tracy-debug:not(body) { position: absolute; bottom: 0; right: 0; } #tracy-debug * { font: inherit; line-height: inherit; color: inherit; background: transparent; margin: 0; padding: 0; border: none; text-align: inherit; list-style: inherit; opacity: 1; border-radius: 0; box-shadow: none; text-shadow: none; box-sizing: border-box; text-decoration: none; text-transform: inherit; white-space: inherit; float: none; clear: none; } #tracy-debug *:before, #tracy-debug *:after { all: unset; } #tracy-debug b, #tracy-debug strong { font-weight: bold; } #tracy-debug i, #tracy-debug em { font-style: italic; } #tracy-debug a { color: #125EAE; text-decoration: none; } #tracy-debug a:hover, #tracy-debug a:focus { background-color: #125EAE; color: white; } #tracy-debug h2, #tracy-debug h3, #tracy-debug p { margin: .4em 0; } #tracy-debug table { border-collapse: collapse; background: #FDF5CE; } #tracy-debug tr:nth-child(2n) td { background: #F7F0CB; } #tracy-debug td, #tracy-debug th { border: 1px solid #E6DFBF; padding: 2px 5px; vertical-align: top; text-align: left; } #tracy-debug th { background: #F4F3F1; color: #655E5E; font-size: 90%; font-weight: bold; } #tracy-debug pre, #tracy-debug code { font: 9pt\/1.5 Consolas, monospace; } #tracy-debug pre { white-space: pre; } #tracy-debug table .tracy-right { text-align: right; } #tracy-debug svg { display: inline; } \/* bar *\/ #tracy-debug-bar { font: normal normal 13px\/1.55 Tahoma, sans-serif; color: #333; border: 1px solid #c9c9c9; background: #EDEAE0 url('data:image\/png;base64,R0lGODlhAQAUALMAAOzq4e\/t5e7s4\/Dt5vDu5e3r4vDu5uvp4O\/t5AAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAABABQAAAQM0EgySEAYi1LA+UcEADs=') top; background-size: 1em; position: fixed; right: 0; bottom: 0; min-width: 50px; white-space: nowrap; z-index: 30000; opacity: .9; transition: opacity 0.2s; will-change: opacity, right, bottom; border-radius: 3px; box-shadow: 1px 1px 10px rgba(0, 0, 0, .15); } #tracy-debug-bar:hover { opacity: 1; transition: opacity 0.1s; } #tracy-debug-bar ul { list-style: none none; display: flex; flex-wrap: wrap; } #tracy-debug-bar ul:not(:first-child) li { opacity: .6; background: #F5F3EE; } #tracy-debug-bar ul:not(:first-child) li:first-child { width: 4.1em; text-align: center; } #tracy-debug-bar img { vertical-align: bottom; position: relative; top: -2px; } #tracy-debug-bar svg { vertical-align: bottom; width: 1.23em; height: 1.55em; } #tracy-debug-bar .tracy-label { margin-left: .2em; } #tracy-debug-bar li > a, #tracy-debug-bar li > span { color: #000; display: block; padding: 0 .4em; } #tracy-debug-bar li > a:hover { color: black; background: #c3c1b8; } #tracy-debug-bar li:first-child { cursor: move; } #tracy-debug-logo svg { width: 3.4em; margin: 0 .2em 0 .5em; } \/* panels *\/ #tracy-debug .tracy-panel { display: none; font: normal normal 12px\/1.5 sans-serif; background: white; color: #333; text-align: left; z-index: 20001; } body#tracy-debug .tracy-panel { \/* in popup window *\/ display: block; } #tracy-debug h1 { font: normal normal 23px\/1.4 Tahoma, sans-serif; color: #575753; margin: -5px -5px 5px; padding: 0 25px 0 5px; max-width: 700px; word-wrap: break-word; } #tracy-debug .tracy-mode-peek .tracy-inner, #tracy-debug .tracy-mode-float .tracy-inner { max-width: 700px; max-height: 500px; overflow: auto; } @media (max-height: 555px) { #tracy-debug .tracy-mode-peek .tracy-inner, #tracy-debug .tracy-mode-float .tracy-inner { max-height: calc(100vh - 55px); } } #tracy-debug .tracy-panel .tracy-icons { display: none; } #tracy-debug .tracy-mode-peek, #tracy-debug .tracy-mode-float { position: fixed; right: 0; bottom: 0; padding: 10px; min-width: 150px; min-height: 50px; border-radius: 5px; box-shadow: 1px 1px 20px rgba(102, 102, 102, 0.36); border: 1px solid rgba(0, 0, 0, 0.1); } #tracy-debug .tracy-mode-peek h1 { cursor: move; } #tracy-debug .tracy-mode-float { display: block; opacity: .95; transition: opacity 0.2s; will-change: opacity, right, bottom; } #tracy-debug .tracy-focused { display: block; opacity: 1; transition: opacity 0.1s; } #tracy-debug .tracy-mode-float h1 { cursor: move; } #tracy-debug .tracy-mode-float .tracy-icons { display: block; position: absolute; top: 0; right: 5px; font-size: 18px; } #tracy-debug .tracy-mode-window { padding: 10px; } #tracy-debug .tracy-icons a { color: #575753; } #tracy-debug .tracy-icons a:hover { color: white; } \/* dump *\/ #tracy-debug pre.tracy-dump div { padding-left: 3ex; } #tracy-debug pre.tracy-dump div div { border-left: 1px solid rgba(0, 0, 0, .1); margin-left: .5ex; } #tracy-debug pre.tracy-dump { background: #FDF5CE; padding: .4em .7em; border: 1px dotted silver; overflow: auto; } #tracy-debug table pre.tracy-dump { padding: 0; margin: 0; border: none; } #tracy-debug .tracy-dump-array, #tracy-debug .tracy-dump-object { color: #C22; } #tracy-debug .tracy-dump-string { color: #35D; } #tracy-debug .tracy-dump-number { color: #090; } #tracy-debug .tracy-dump-null, #tracy-debug .tracy-dump-bool { color: #850; } #tracy-debug .tracy-dump-visibility, #tracy-debug .tracy-dump-hash { font-size: 85%; color: #999; } #tracy-debug .tracy-dump-indent { display: none; } \/* toggle *\/ #tracy-debug .tracy-toggle:after { content: \"\\A0\\25BC\"; opacity: .4; } #tracy-debug .tracy-toggle.tracy-collapsed:after { content: \"\\A0\\25BA\"; } @media print { #tracy-debug * { display: none; } } \/** * This file is part of the Tracy (https:\/\/tracy.nette.org) *\/ .tracy-collapsed { display: none; } .tracy-toggle.tracy-collapsed { display: inline; } .tracy-toggle { cursor: pointer; } .tracy-toggle:after { content: \"\\A0\\25BC\"; opacity: .4; } .tracy-toggle.tracy-collapsed:after { content: \"\\A0\\25BA\"; } \/** * This file is part of the Tracy (https:\/\/tracy.nette.org) *\/ pre.tracy-dump { text-align: left; color: #444; background: white; } pre.tracy-dump div { padding-left: 3ex; } pre.tracy-dump div div { border-left: 1px solid rgba(0, 0, 0, .1); margin-left: .5ex; } pre.tracy-dump a { color: #125EAE; text-decoration: none; } pre.tracy-dump a:hover, pre.tracy-dump a:focus { background-color: #125EAE; color: white; } .tracy-dump-array, .tracy-dump-object { color: #C22; } .tracy-dump-string { color: #35D; } .tracy-dump-number { color: #090; } .tracy-dump-null, .tracy-dump-bool { color: #850; } .tracy-dump-visibility, .tracy-dump-hash { font-size: 85%; color: #999; } .tracy-dump-indent { display: none; } span[data-tracy-href] { border-bottom: 1px dotted rgba(0, 0, 0, .2); } \/** * This file is part of the Tracy (https:\/\/tracy.nette.org) *\/ #tracy-bs { font: 9pt\/1.5 Verdana, sans-serif; background: white; color: #333; position: absolute; z-index: 20000; left: 0; top: 0; width: 100%; text-align: left; } #tracy-bs * { font: inherit; color: inherit; background: transparent; border: none; margin: 0; padding: 0; text-align: inherit; text-indent: 0; } #tracy-bs *:before, #tracy-bs *:after { all: unset; } #tracy-bs b { font-weight: bold; } #tracy-bs i { font-style: italic; } #tracy-bs a { text-decoration: none; color: #328ADC; padding: 2px 4px; margin: -2px -4px; } #tracy-bs a:hover, #tracy-bs a:focus { color: #085AA3; } #tracy-bs-toggle { position: absolute; right: .5em; top: .5em; text-decoration: none; background: #CD1818; color: white !important; padding: 3px; } #tracy-bs-error { background: #CD1818; color: white; font: 13pt\/1.5 Verdana, sans-serif !important; } #tracy-bs-error a { color: white !important; opacity: 0; font-size: .7em; } #tracy-bs-error:hover a { opacity: .6; } #tracy-bs-error a:hover { opacity: 1; } #tracy-bs-ie-warning { background: black; margin: 1em; padding: .5em; text-align: center; } #tracy-bs h1 { font-size: 15pt; font-weight: normal; text-shadow: 1px 1px 2px rgba(0, 0, 0, .3); margin: .7em 0; } #tracy-bs h1 span { white-space: pre-wrap; } #tracy-bs h2 { font: 14pt\/1.5 sans-serif !important; margin: .6em 0; } #tracy-bs h3 { font: bold 10pt\/1.5 Verdana, sans-serif !important; margin: 1em 0; padding: 0; } #tracy-bs p, #tracy-bs pre { margin: .8em 0 } #tracy-bs pre, #tracy-bs code, #tracy-bs table { font: 9pt\/1.5 Consolas, monospace !important; } #tracy-bs pre, #tracy-bs table { background: #FDF5CE; padding: .4em .7em; border: 1px dotted silver; overflow: auto; } #tracy-bs table pre { padding: 0; margin: 0; border: none; } #tracy-bs table { border-collapse: collapse; width: 100%; } #tracy-bs td, #tracy-bs th { vertical-align: top; text-align: left; padding: 2px 6px; border: 1px solid #e6dfbf; } #tracy-bs th { font-weight: bold; } #tracy-bs tr > :first-child { width: 20%; } #tracy-bs tr:nth-child(2n), #tracy-bs tr:nth-child(2n) pre { background-color: #F7F0CB; } #tracy-bs ol { margin: 1em 0; padding-left: 2.5em; } #tracy-bs ul { font: 7pt\/1.5 Verdana, sans-serif !important; padding: 2em 4em; margin: 1em 0 0; color: #777; background: #F6F5F3; border-top: 1px solid #DDD; } #tracy-bs-logo a { position: absolute; bottom: 0; right: 0; width: 100px; height: 50px; background: url('data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAUBAMAAAD\/1DctAAAAMFBMVEWupZzj39rEvbTy8O3X0sz9\/PvGwLu8tavQysHq6OS0rKP5+Pbd2dT29fPMxbzPx8DKErMJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVQoFX3TQWgTQRQA0MWLIJJDYehBTykhG5ERTx56K1u8eEhCYtomE7x5L4iLh0ViF7egewuFFqSIYE6hIHsIYQ6CQSg9CDKn4QsNCRlB59C74J\/ZNHW1+An5+bOPyf6\/s46oz2P+A0yIeZZ2ieEHi6TOnLKTxvWq+b52mxlVO3xnM1s7xLX1504XQH65OnW2dBqn7cCkYsFsfYsWpyY\/2salmFTpEyzeR8zosYqMdiPDXdyU52K1wgEa\/SjGpdEwUAxqvRfckQCDOyFearsEHe2grvkh\/cFAHKvdtI3lcVceKQIOFpv+FOZaNPQBwJZLPp+hfrvT5JZXaUFsR8zqQc9qSgAharkfS5M\/5F6nGJJAtXq\/eLr3ucZpHccSxOOIPaQhtHohpCH2Xu6rLmQ0djnr4\/+J3C6v+AW8\/XWYxwYNdlhWj\/P5fPSTQwVr0T9lGxdaBCqErNZaqYnEwbkjEB3NasGF3lPdrHa1nnxNOMgj0+neePUPjd2v\/qVvUv29ifvc19huQ48qwXShy\/9o8o3OSk0cs37mOFd0Ydgvsf\/oZEnPVtggfd66lORn9mDyyzXU13SRtH2L6aR5T\/snGAcZPfAXz5J1YlJWBEuxdMYqQecpBrlM49xAbmqyHA+xlA1FxBtqT2xmJoNXZlIt74ZBLeJ9ZGDqByNI7p543idzJ23vXEv7IgnsxiS+eNtwNbFdLq7+Bi4wQ0I4SVb9AAAAAElFTkSuQmCC') no-repeat; opacity: .6; padding: 0; margin: 0; } #tracy-bs-logo a:hover, #tracy-bs-logo a:focus { opacity: 1; transition: opacity 0.1s; } #tracy-bs div.panel { padding: 1px 25px; } #tracy-bs div.inner { background: #F4F3F1; padding: .1em 1em 1em; border-radius: 8px; } #tracy-bs .outer { overflow: auto; } \/* source code *\/ #tracy-bs pre.code > div { min-width: 100%; float: left; white-space: pre; } #tracy-bs .highlight { background: #CD1818; color: white; font-weight: bold; font-style: normal; display: block; padding: 0 .4em; margin: 0 -.4em; } #tracy-bs .line { color: #9F9C7F; font-weight: normal; font-style: normal; } #tracy-bs pre:hover span[title] { border-bottom: 1px solid rgba(0, 0, 0, 0.2); } #tracy-bs a[href^=editor\\:] { color: inherit; border-bottom: 1px dotted rgba(0, 0, 0, .3); } #tracy-bs span[data-tracy-href] { border-bottom: 1px dotted rgba(0, 0, 0, .3); } \/* toggle *\/ html.tracy-js #tracy-bs .tracy-collapsed { display: none; } html.tracy-js #tracy-bs .tracy-toggle.tracy-collapsed { display: inline; } #tracy-bs .tracy-toggle { cursor: pointer; } #tracy-bs .tracy-toggle:after { content: \"\\A0\\25BC\"; opacity: .4; } #tracy-bs .tracy-toggle.tracy-collapsed:after { content: \"\\A0\\25BA\"; opacity: .4; } \/* dump *\/ #tracy-bs .tracy-dump-array, #tracy-bs .tracy-dump-object { color: #C22; } #tracy-bs .tracy-dump-string { color: #35D; } #tracy-bs .tracy-dump-number { color: #090; } #tracy-bs .tracy-dump-null, #tracy-bs .tracy-dump-bool { color: #850; } #tracy-bs .tracy-dump-visibility, #tracy-bs .tracy-dump-hash { font-size: 85%; color: #998; } #tracy-bs .tracy-dump-indent { display: none; } #tracy-bs pre.tracy-dump div { padding-left: 3ex; } #tracy-bs pre.tracy-dump div div { border-left: 1px solid rgba(0, 0, 0, .1); margin-left: .5ex; } #tracy-bs .caused { float: right; padding: .3em .6em; background: #df8075; border-radius: 0 0 0 8px; white-space: nowrap; } #tracy-bs .caused a { color: white; } "; document.head.appendChild(el);})();
/**
 * This file is part of the Tracy (https://tracy.nette.org)
 */

(function(){
	Tracy = window.Tracy || {};

	if (document.currentScript) {
		var nonce = document.currentScript.getAttribute('nonce');
		var contentId = document.currentScript.dataset.id;
	}

	Tracy.getAjaxHeader = function() {
		return contentId;
	};

	var Panel = Tracy.DebugPanel = function(id) {
		this.id = id;
		this.elem = document.getElementById(this.id);
		this.elem.Tracy = this.elem.Tracy || {};
	};

	Panel.PEEK = 'tracy-mode-peek';
	Panel.FLOAT = 'tracy-mode-float';
	Panel.WINDOW = 'tracy-mode-window';
	Panel.FOCUSED = 'tracy-focused';
	Panel.zIndex = 20000;

	Panel.prototype.init = function() {
		var _this = this, elem = this.elem;

		elem.innerHTML = elem.dataset.tracyContent;
		Tracy.Dumper.init(this.dumps, elem);
		delete elem.dataset.tracyContent;
		delete this.dumps;
		evalScripts(elem);

		draggable(elem, {
			handles: elem.querySelectorAll('h1'),
			start: function() {
				_this.toFloat();
			}
		});

		elem.addEventListener('mouseover', function(e) {
			if (isTargetChanged(e.relatedTarget, this)) {
				_this.focus();
			}
		});

		elem.addEventListener('mouseout', function(e) {
			if (isTargetChanged(e.relatedTarget, this)) {
				_this.blur();
			}
		});

		elem.addEventListener('click', function() {
			_this.oldPosition = getPosition(elem);
		});

		elem.addEventListener('tracy-toggle', function() {
			if (_this.oldPosition) {
				var pos = getPosition(elem);
				setPosition(elem, {
					right: pos.right - pos.width + _this.oldPosition.width,
					bottom: pos.bottom - pos.height + _this.oldPosition.height
				});
				_this.oldPosition = null;
			}
		});

		forEach(elem.querySelectorAll('.tracy-icons a'), function(a) {
			a.addEventListener('click', function(e) {
				clearTimeout(elem.Tracy.displayTimeout);
				if (this.rel === 'close') {
					_this.toPeek();
				} else {
					_this.toWindow();
				}
				e.preventDefault();
			});
		});

		if (!this.is('tracy-ajax')) {
			Tracy.Toggle.persist(elem);
		}
	};

	Panel.prototype.is = function(mode) {
		return this.elem.classList.contains(mode);
	};

	Panel.prototype.focus = function(callback) {
		var elem = this.elem;
		if (this.is(Panel.WINDOW)) {
			elem.Tracy.window.focus();
		} else {
			clearTimeout(elem.Tracy.displayTimeout);
			elem.Tracy.displayTimeout = setTimeout(function() {
				elem.classList.add(Panel.FOCUSED);
				elem.style.zIndex = Panel.zIndex++;
				if (callback) {
					callback();
				}
			}, 50);
		}
	};

	Panel.prototype.blur = function() {
		var elem = this.elem;
		if (this.is(Panel.PEEK)) {
			clearTimeout(elem.Tracy.displayTimeout);
			elem.Tracy.displayTimeout = setTimeout(function() {
				elem.classList.remove(Panel.FOCUSED);
			}, 50);
		}
	};

	Panel.prototype.toFloat = function() {
		this.elem.classList.remove(Panel.WINDOW);
		this.elem.classList.remove(Panel.PEEK);
		this.elem.classList.add(Panel.FLOAT);
		this.reposition();
	};

	Panel.prototype.toPeek = function() {
		this.elem.classList.remove(Panel.WINDOW);
		this.elem.classList.remove(Panel.FLOAT);
		this.elem.classList.remove(Panel.FOCUSED);
		this.elem.classList.add(Panel.PEEK);
	};

	Panel.prototype.toWindow = function() {
		var offset = getOffset(this.elem);
		offset.left += typeof window.screenLeft === 'number' ? window.screenLeft : (window.screenX + 10);
		offset.top += typeof window.screenTop === 'number' ? window.screenTop : (window.screenY + 50);

		var win = window.open('', this.id.replace(/-/g, '_'), 'left=' + offset.left + ',top=' + offset.top
			+ ',width=' + this.elem.offsetWidth + ',height=' + this.elem.offsetHeight + ',resizable=yes,scrollbars=yes');
		if (!win) {
			return false;
		}

		var doc = win.document;
		doc.write('<!DOCTYPE html><meta charset="utf-8">'
			+ '<script src="?_tracy_bar=js&amp;XDEBUG_SESSION_STOP=1" onload="Tracy.Dumper.init()" async></script>'
			+ '<body id="tracy-debug">'
		);
		doc.body.innerHTML = '<div class="tracy-panel tracy-mode-window" id="' + this.elem.id + '">' + this.elem.innerHTML + '</div>';
		evalScripts(doc.body);
		if (this.elem.querySelector('h1')) {
			doc.title = this.elem.querySelector('h1').textContent;
		}

		var _this = this;
		win.addEventListener('beforeunload', function() {
			_this.toPeek();
			win.close(); // forces closing, can be invoked by F5
		});

		doc.addEventListener('keyup', function(e) {
			if (e.keyCode === 27 && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) {
				win.close();
			}
		});

		this.elem.classList.remove(Panel.FLOAT);
		this.elem.classList.remove(Panel.PEEK);
		this.elem.classList.remove(Panel.FOCUSED);
		this.elem.classList.add(Panel.WINDOW);
		this.elem.Tracy.window = win;
		return true;
	};

	Panel.prototype.reposition = function() {
		var pos = getPosition(this.elem);
		if (pos.width) { // is visible?
			setPosition(this.elem, {right: pos.right, bottom: pos.bottom});
		}
	};

	Panel.prototype.savePosition = function() {
		var pos = getPosition(this.elem);
		if (this.is(Panel.WINDOW)) {
			localStorage.setItem(this.id, JSON.stringify({window: true}));
		} else if (pos.width) {
			localStorage.setItem(this.id, JSON.stringify({right: pos.right, bottom: pos.bottom}));
		} else {
			localStorage.removeItem(this.id);
		}
	};

	Panel.prototype.restorePosition = function() {
		var pos = JSON.parse(localStorage.getItem(this.id));
		if (!pos) {
			this.elem.classList.add(Panel.PEEK);
		} else if (pos.window) {
			this.init();
			this.toWindow() || this.toFloat();
		} else if (this.elem.dataset.tracyContent) {
			this.init();
			this.toFloat();
			setPosition(this.elem, pos);
		}
	};


	var Bar = Tracy.DebugBar = function() {
	};

	Bar.prototype.id = 'tracy-debug-bar';

	Bar.prototype.init = function() {
		this.elem = document.getElementById(this.id);

		draggable(this.elem, {
			handles: this.elem.querySelectorAll('li:first-child'),
			draggedClass: 'tracy-dragged'
		});

		this.elem.addEventListener('mousedown', function(e) {
			e.preventDefault();
		});

		this.initTabs(this.elem);
		this.restorePosition();
	};

	Bar.prototype.initTabs = function(elem) {
		var _this = this;

		forEach(elem.getElementsByTagName('a'), function(a) {
			a.addEventListener('click', function(e) {
				if (this.rel === 'close') {
					_this.close();

				} else if (this.rel) {
					var panel = Debug.panels[this.rel];
					if (panel.elem.dataset.tracyContent) {
						panel.init();
					}

					if (e.shiftKey) {
						panel.toFloat();
						panel.toWindow();

					} else if (panel.is(Panel.FLOAT)) {
						panel.toPeek();

					} else {
						panel.toFloat();
						setPosition(panel.elem, {
							right: getPosition(panel.elem).right + Math.round(Math.random() * 100) + 20,
							bottom: getPosition(panel.elem).bottom + Math.round(Math.random() * 100) + 20
						});
					}
				}
				e.preventDefault();
			});

			a.addEventListener('mouseover', function(e) {
				if (isTargetChanged(e.relatedTarget, this) && this.rel && this.rel !== 'close' && !elem.classList.contains('tracy-dragged')) {
					var panel = Debug.panels[this.rel], link = this;
					panel.focus(function() {
						if (panel.is(Panel.PEEK)) {
							if (panel.elem.dataset.tracyContent) {
								panel.init();
							}

							var pos = getPosition(panel.elem);
							setPosition(panel.elem, {
								right: pos.right - getOffset(link).left + pos.width - getPosition(link).width - 4 + getOffset(panel.elem).left,
								bottom: pos.bottom - getOffset(elem).top + pos.height + 4 + getOffset(panel.elem).top
							});
						}
					});
				}
			});

			a.addEventListener('mouseout', function(e) {
				if (isTargetChanged(e.relatedTarget, this) && this.rel && this.rel !== 'close' && !elem.classList.contains('tracy-dragged')) {
					Debug.panels[this.rel].blur();
				}
			});
		});
		this.autoHideLabels();
	};

	Bar.prototype.autoHideLabels = function() {
		forEach(this.elem.children, function (ul) {
			var labels = ul.querySelectorAll('.tracy-label');
			for (var i = labels.length - 1; i >= 0 && ul.clientHeight >= 40; i--) { // row height = 1em (cca 20px)
				labels.item(i).hidden = true;
			}
		});
	};

	Bar.prototype.close = function() {
		document.getElementById('tracy-debug').style.display = 'none';
	};

	Bar.prototype.savePosition = function() {
		var pos = getPosition(document.getElementById(this.id));
		localStorage.setItem(this.id, JSON.stringify({right: pos.right, bottom: pos.bottom}));
	};

	Bar.prototype.restorePosition = function() {
		var pos = JSON.parse(localStorage.getItem(this.id));
		if (pos) {
			setPosition(document.getElementById(this.id), pos);
		}
	};


	var Debug = Tracy.Debug = {};

	Debug.bar = new Bar;

	Debug.panels = {};

	Debug.init = function(content, dumps) {
		if (!document.documentElement.dataset) {
			throw new Error('Tracy requires IE 11+');
		}

		Debug.layer = document.createElement('div');
		Debug.layer.setAttribute('id', 'tracy-debug');
		Debug.layer.innerHTML = content;
		document.documentElement.appendChild(Debug.layer);
		evalScripts(Debug.layer);
		Tracy.Dumper.init();
		Debug.layer.style.display = 'block';
		Debug.bar.init();

		forEach(document.querySelectorAll('.tracy-panel'), function(panel) {
			Debug.panels[panel.id] = new Panel(panel.id);
			Debug.panels[panel.id].dumps = dumps;
			Debug.panels[panel.id].restorePosition();
		});

		Debug.captureWindow();
		Debug.captureAjax();
	};

	Debug.loadAjax = function(content, dumps) {
		forEach(Debug.layer.querySelectorAll('.tracy-panel.tracy-ajax'), function(panel) {
			Debug.panels[panel.id].savePosition();
			delete Debug.panels[panel.id];
			panel.parentNode.removeChild(panel);
		});

		var ajaxBar = document.getElementById('tracy-ajax-bar');
		if (ajaxBar) {
			ajaxBar.parentNode.removeChild(ajaxBar);
		}

		Debug.layer.insertAdjacentHTML('beforeend', content);
		evalScripts(Debug.layer);
		ajaxBar = document.getElementById('tracy-ajax-bar');
		document.getElementById(Bar.prototype.id).appendChild(ajaxBar);

		forEach(document.querySelectorAll('.tracy-panel'), function(panel) {
			if (!Debug.panels[panel.id]) {
				Debug.panels[panel.id] = new Panel(panel.id);
				Debug.panels[panel.id].dumps = dumps;
				Debug.panels[panel.id].restorePosition();
			}
		});

		Debug.bar.initTabs(ajaxBar);
	};

	Debug.captureWindow = function() {
		window.addEventListener('resize', function() {
			var bar = document.getElementById(Bar.prototype.id);
			setPosition(bar, {right: getPosition(bar).right, bottom: getPosition(bar).bottom});
			for (var id in Debug.panels) {
				Debug.panels[id].reposition();
			}
		});

		window.addEventListener('unload', function() {
			Debug.bar.savePosition();
			for (var id in Debug.panels) {
				Debug.panels[id].savePosition();
			}
		});
	};

	Debug.captureAjax = function() {
		var header = Tracy.getAjaxHeader();
		if (!header) {
			return;
		}
		var oldOpen = XMLHttpRequest.prototype.open;

		XMLHttpRequest.prototype.open = function() {
			oldOpen.apply(this, arguments);
			if (window.TracyAutoRefresh !== false && arguments[1].indexOf('//') <= 0 || arguments[1].indexOf(location.origin + '/') === 0) {
				this.setRequestHeader('X-Tracy-Ajax', header);
				this.addEventListener('load', function() {
					if (this.getAllResponseHeaders().match(/^X-Tracy-Ajax: 1/mi)) {
						Debug.loadScript('?_tracy_bar=content-ajax.' + header + '&XDEBUG_SESSION_STOP=1&v=' + Math.random());
					}
				});
			}
		};

		if (window.fetch) {
			var oldFetch = window.fetch;
			window.fetch = function(request, options) {
				options = options || {};
				options.headers = new Headers(options.headers || {});
				var url = request instanceof Request ? request.url : request;

				if (window.TracyAutoRefresh !== false && url.indexOf('//') <= 0 || url.indexOf(location.origin + '/') === 0) {
					options.headers.set('X-Tracy-Ajax', header);
					options.credentials = (request instanceof Request && request.credentials) || options.credentials || 'same-origin';

					return oldFetch(request, options).then(function (response) {
						if (response.headers.has('X-Tracy-Ajax') && response.headers.get('X-Tracy-Ajax')[0] === '1') {
							Debug.loadScript('?_tracy_bar=content-ajax.' + header + '&XDEBUG_SESSION_STOP=1&v=' + Math.random());
						}

						return response;
					});
				}

				return oldFetch(request, options);
			};
		}
	};

	Debug.loadScript = function(url) {
		if (Debug.scriptElem) {
			Debug.scriptElem.parentNode.removeChild(Debug.scriptElem);
		}
		Debug.scriptElem = document.createElement('script');
		Debug.scriptElem.src = url;
		Debug.scriptElem.setAttribute('nonce', nonce);
		document.documentElement.appendChild(Debug.scriptElem);
	};

	function evalScripts(elem) {
		forEach(elem.getElementsByTagName('script'), function(script) {
			if ((!script.hasAttribute('type') || script.type === 'text/javascript' || script.type === 'application/javascript') && !script.tracyEvaluated) {
				var dolly = script.ownerDocument.createElement('script');
				dolly.textContent = script.textContent;
				dolly.setAttribute('nonce', nonce);
				script.ownerDocument.documentElement.appendChild(dolly);
				script.tracyEvaluated = true;
			}
		});
	}

	// emulate mouseenter & mouseleave
	function isTargetChanged(target, dest) {
		while (target) {
			if (target === dest) {
				return;
			}
			target = target.parentNode;
		}
		return true;
	}


	var dragging;

	function draggable(elem, options) {
		var dE = document.documentElement, started, deltaX, deltaY, clientX, clientY;
		options = options || {};

		var redraw = function () {
			if (dragging) {
				setPosition(elem, {right: deltaX - clientX, bottom: deltaY - clientY});
				requestAnimationFrame(redraw);
			}
		};

		var onMove = function(e) {
			if (e.buttons === 0) {
				return onEnd(e);
			}
			if (!started) {
				if (options.draggedClass) {
					elem.classList.add(options.draggedClass);
				}
				if (options.start) {
					options.start(e, elem);
				}
				started = true;
			}

			clientX = e.touches ? e.touches[0].clientX : e.clientX;
			clientY = e.touches ? e.touches[0].clientY : e.clientY;
			return false;
		};

		var onEnd = function(e) {
			if (started) {
				if (options.draggedClass) {
					elem.classList.remove(options.draggedClass);
				}
				if (options.stop) {
					options.stop(e, elem);
				}
			}
			dragging = null;
			dE.removeEventListener('mousemove', onMove);
			dE.removeEventListener('mouseup', onEnd);
			dE.removeEventListener('touchmove', onMove);
			dE.removeEventListener('touchend', onEnd);
			return false;
		};

		var onStart = function(e) {
			e.preventDefault();
			e.stopPropagation();

			if (dragging) { // missed mouseup out of window?
				return onEnd(e);
			}

			var pos = getPosition(elem);
			clientX = e.touches ? e.touches[0].clientX : e.clientX;
			clientY = e.touches ? e.touches[0].clientY : e.clientY;
			deltaX = pos.right + clientX;
			deltaY = pos.bottom + clientY;
			dragging = true;
			started = false;
			dE.addEventListener('mousemove', onMove);
			dE.addEventListener('mouseup', onEnd);
			dE.addEventListener('touchmove', onMove);
			dE.addEventListener('touchend', onEnd);
			requestAnimationFrame(redraw);
			if (options.start) {
				options.start(e, elem);
			}
		};

		forEach(options.handles, function (handle) {
			handle.addEventListener('mousedown', onStart);
			handle.addEventListener('touchstart', onStart);

			handle.addEventListener('click', function(e) {
				if (started) {
					e.stopImmediatePropagation();
				}
			});
		});
	}

	// returns total offset for element
	function getOffset(elem) {
		var res = {left: elem.offsetLeft, top: elem.offsetTop};
		while (elem = elem.offsetParent) { // eslint-disable-line no-cond-assign
			res.left += elem.offsetLeft; res.top += elem.offsetTop;
		}
		return res;
	}

	// move to new position
	function setPosition(elem, coords) {
		var dE = document.documentElement,
			height = document.compatMode === 'BackCompat' ? window.innerHeight : dE.clientHeight;
		elem.style.right = Math.min(Math.max(coords.right, 0), dE.clientWidth - elem.offsetWidth) + 'px';
		elem.style.bottom = Math.min(Math.max(coords.bottom, 0), height - elem.offsetHeight) + 'px';
	}

	// returns current position
	function getPosition(elem) {
		return {
			left: elem.offsetLeft,
			top: elem.offsetTop,
			right: elem.style.right ? parseInt(elem.style.right, 10) : 0,
			bottom: elem.style.bottom ? parseInt(elem.style.bottom, 10) : 0,
			width: elem.offsetWidth,
			height: elem.offsetHeight
		};
	}

	function forEach(arr, cb) {
		Array.prototype.forEach.call(arr, cb);
	}

})();
/**
 * This file is part of the Tracy (https://tracy.nette.org)
 */

(function() {
	Tracy = window.Tracy || {};

	Tracy.Toggle = Tracy.Toggle || {};

	// enables <a class="tracy-toggle" href="#"> or <span data-tracy-ref="#"> toggling
	Tracy.Toggle.init = function() {
		document.documentElement.addEventListener('click', function(e) {
			var el = Tracy.closest(e.target, '.tracy-toggle');
			if (el && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) {
				Tracy.Toggle.toggle(el);
			}
		});
		this.init = function() {};
	};


	// changes element visibility
	Tracy.Toggle.toggle = function(el, show) {
		var collapsed = el.classList.contains('tracy-collapsed'),
			ref = el.getAttribute('data-tracy-ref') || el.getAttribute('href', 2),
			dest = el;

		if (typeof show === 'undefined') {
			show = collapsed;
		} else if (!show === collapsed) {
			return;
		}

		if (!ref || ref === '#') {
			ref = '+';
		} else if (ref.substr(0, 1) === '#') {
			dest = document;
		}
		ref = ref.match(/(\^\s*([^+\s]*)\s*)?(\+\s*(\S*)\s*)?(.*)/);
		dest = ref[1] ? Tracy.closest(dest.parentNode, ref[2]) : dest;
		dest = ref[3] ? Tracy.closest(dest.nextElementSibling, ref[4], 'nextElementSibling') : dest;
		dest = ref[5] ? dest.querySelector(ref[5]) : dest;

		el.classList.toggle('tracy-collapsed', !show);
		dest.classList.toggle('tracy-collapsed', !show);

		if (typeof window.Event === 'function') {
			var toggleEvent = new Event('tracy-toggle', {bubbles: true});
		} else {
			toggleEvent = document.createEvent('Event');
			toggleEvent.initEvent('tracy-toggle', true, false);
		}
		el.dispatchEvent(toggleEvent);
	};


	// save & restore toggles
	Tracy.Toggle.persist = function(baseEl, restore) {
		var saved = [];
		baseEl.addEventListener('tracy-toggle', function(e) {
			if (saved.indexOf(e.target) < 0) {
				saved.push(e.target);
			}
		});

		var toggles = JSON.parse(sessionStorage.getItem('tracy-toggles-' + baseEl.id));
		if (toggles && restore !== false) {
			toggles.forEach(function(item) {
				var el = baseEl;
				for (var i in item.path) {
					if (!(el = el.children[item.path[i]])) {
						return;
					}
				}
				if (el.textContent === item.text) {
					Tracy.Toggle.toggle(el, item.show);
				}
			});
		}

		window.addEventListener('unload', function() {
			toggles = [].map.call(saved, function(el) {
				var item = {path: [], text: el.textContent, show: !el.classList.contains('tracy-collapsed')};
				do {
					item.path.unshift([].indexOf.call(el.parentNode.children, el));
					el = el.parentNode;
				} while (el && el !== baseEl);
				return item;
			});
			sessionStorage.setItem('tracy-toggles-' + baseEl.id, JSON.stringify(toggles));
		});
	};


	// finds closing maching element
	Tracy.closest = function(el, selector, func) {
		var matches = el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector;
		while (el && selector && !(el.nodeType === 1 && matches.call(el, selector))) {
			el = el[func || 'parentNode'];
		}
		return el;
	};

})();
/**
 * This file is part of the Tracy (https://tracy.nette.org)
 */

(function() {
	var COLLAPSE_COUNT = 7,
		COLLAPSE_COUNT_TOP = 14;

	Tracy = window.Tracy || {};

	Tracy.Dumper = Tracy.Dumper || {};

	Tracy.Dumper.init = function(repository, context) {
		if (repository) {
			[].forEach.call((context || document).querySelectorAll('.tracy-dump[data-tracy-dump]'), function(el) {
				try {
					el.appendChild(build(JSON.parse(el.getAttribute('data-tracy-dump')), repository, el.classList.contains('tracy-collapsed')));
					el.classList.remove('tracy-collapsed');
					el.removeAttribute('data-tracy-dump');
				} catch (e) {
					if (!(e instanceof UnknownEntityException)) {
						throw e;
					}
				}
			});
		}

		if (this.inited) {
			return;
		}
		this.inited = true;

		// enables <span data-tracy-href=""> & ctrl key
		document.documentElement.addEventListener('click', function(e) {
			var el;
			if (e.ctrlKey && (el = Tracy.closest(e.target, '[data-tracy-href]'))) {
				location.href = el.getAttribute('data-tracy-href');
				return false;
			}
		});

		Tracy.Toggle.init();
	};


	var build = function(data, repository, collapsed, parentIds) {
		var type = data === null ? 'null' : typeof data,
			collapseCount = typeof collapsed === 'undefined' ? COLLAPSE_COUNT_TOP : COLLAPSE_COUNT;

		if (type === 'null' || type === 'string' || type === 'number' || type === 'boolean') {
			data = type === 'string' ? '"' + data + '"' : (data + '');
			return createEl(null, null, [
				createEl(
					'span',
					{'class': 'tracy-dump-' + type.replace('ean', '')},
					[data + '\n']
				)
			]);

		} else if (Array.isArray(data)) {
			return buildStruct(
				[
					createEl('span', {'class': 'tracy-dump-array'}, ['array']),
					' (' + (data[0] && data.length || '') + ')'
				],
				' [ ... ]',
				data[0] === null ? null : data,
				collapsed === true || data.length >= collapseCount,
				repository,
				parentIds
			);

		} else if (type === 'object' && data.number) {
			return createEl(null, null, [
				createEl('span', {'class': 'tracy-dump-number'}, [data.number + '\n'])
			]);

		} else if (type === 'object' && data.type) {
			return createEl(null, null, [
				createEl('span', null, [data.type + '\n'])
			]);

		} else if (type === 'object') {
			var id = data.object || data.resource,
				object = repository[id];

			if (!object) {
				throw new UnknownEntityException;
			}
			parentIds = parentIds || [];
			var recursive = parentIds.indexOf(id) > -1;
			parentIds.push(id);

			return buildStruct(
				[
					createEl('span', {
						'class': data.object ? 'tracy-dump-object' : 'tracy-dump-resource',
						title: object.editor ? 'Declared in file ' + object.editor.file + ' on line ' + object.editor.line : null,
						'data-tracy-href': object.editor ? object.editor.url : null
					}, [object.name]),
					' ',
					createEl('span', {'class': 'tracy-dump-hash'}, ['#' + id])
				],
				' { ... }',
				object.items,
				collapsed === true || recursive || (object.items && object.items.length >= collapseCount),
				repository,
				parentIds
			);
		}
	};


	var buildStruct = function(span, ellipsis, items, collapsed, repository, parentIds) {
		var res, toggle, div, handler;

		if (!items || !items.length) {
			span.push(!items || items.length ? ellipsis + '\n' : '\n');
			return createEl(null, null, span);
		}

		res = createEl(null, null, [
			toggle = createEl('span', {'class': collapsed ? 'tracy-toggle tracy-collapsed' : 'tracy-toggle'}, span),
			'\n',
			div = createEl('div', {'class': collapsed ? 'tracy-collapsed' : ''})
		]);

		if (collapsed) {
			toggle.addEventListener('tracy-toggle', handler = function() {
				toggle.removeEventListener('tracy-toggle', handler);
				createItems(div, items, repository, parentIds);
			});
		} else {
			createItems(div, items, repository, parentIds);
		}
		return res;
	};


	var createEl = function(el, attrs, content) {
		if (!(el instanceof Node)) {
			el = el ? document.createElement(el) : document.createDocumentFragment();
		}
		for (var id in attrs || {}) {
			if (attrs[id] !== null) {
				el.setAttribute(id, attrs[id]);
			}
		}
		content = content || [];
		for (id = 0; id < content.length; id++) {
			var child = content[id];
			if (child !== null) {
				el.appendChild(child instanceof Node ? child : document.createTextNode(child));
			}
		}
		return el;
	};


	var createItems = function(el, items, repository, parentIds) {
		for (var i = 0; i < items.length; i++) {
			var vis = items[i][2];
			createEl(el, null, [
				createEl('span', {'class': 'tracy-dump-key'}, [items[i][0]]),
				vis ? ' ' : null,
				vis ? createEl('span', {'class': 'tracy-dump-visibility'}, [vis === 1 ? 'protected' : 'private']) : null,
				' => ',
				build(items[i][1], repository, null, parentIds)
			]);
		}
	};

	var UnknownEntityException = function() {};

})();
/**
 * This file is part of the Tracy (https://tracy.nette.org)
 */

(function(){
	Tracy = window.Tracy || {};

	var BlueScreen = Tracy.BlueScreen = {},
		inited;

	BlueScreen.init = function(ajax) {
		var blueScreen = document.getElementById('tracy-bs');

		for (var i = 0, styles = []; i < document.styleSheets.length; i++) {
			var style = document.styleSheets[i];
			if (!style.ownerNode.classList.contains('tracy-debug')) {
				style.oldDisabled = style.disabled;
				style.disabled = true;
				styles.push(style);
			}
		}

		document.getElementById('tracy-bs-toggle').addEventListener('tracy-toggle', function() {
			var collapsed = this.classList.contains('tracy-collapsed');
			for (i = 0; i < styles.length; i++) {
				styles[i].disabled = collapsed ? styles[i].oldDisabled : true;
			}
		});

		if (!ajax) {
			document.body.appendChild(blueScreen);
			var id = location.href + document.getElementById('tracy-bs-error').textContent;
			Tracy.Toggle.persist(blueScreen, sessionStorage.getItem('tracy-toggles-bskey') === id);
			sessionStorage.setItem('tracy-toggles-bskey', id);
		}

		if (inited) {
			return;
		}
		inited = true;

		// enables toggling via ESC
		document.addEventListener('keyup', function(e) {
			if (e.keyCode === 27 && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) { // ESC
				Tracy.Toggle.toggle(document.getElementById('tracy-bs-toggle'));
			}
		});
	};

	BlueScreen.loadAjax = function(content, dumps) {
		var ajaxBs = document.getElementById('tracy-bs');
		if (ajaxBs) {
			ajaxBs.parentNode.removeChild(ajaxBs);
		}
		document.body.insertAdjacentHTML('beforeend', content);
		ajaxBs = document.getElementById('tracy-bs');
		Tracy.Dumper.init(dumps, ajaxBs);
		BlueScreen.init(true);
		window.scrollTo(0, 0);
	};

})();
Tracy.Debug.init("\t\t<div class=\"tracy-panel \" id=\"tracy-debug-panel-Tracy-info\" data-tracy-content=\"&lt;style class=&quot;tracy-debug&quot;&gt;\n\t#tracy-debug .tracy-InfoPanel td {\n\t\twhite-space: nowrap;\n\t}\n\t#tracy-debug .tracy-InfoPanel td:nth-child(2) {\n\t\tfont-weight: bold;\n\t}\n\t#tracy-debug .tracy-InfoPanel td[colspan=&#039;2&#039;] b {\n\t\tfloat: right;\n\t\tmargin-left: 2em;\n\t}\n&lt;\/style&gt;\n\n&lt;h1&gt;System info&lt;\/h1&gt;\n\n&lt;div class=&quot;tracy-inner tracy-InfoPanel&quot;&gt;\n&lt;table&gt;\n&lt;tr&gt;\n\t&lt;td&gt;Execution time&lt;\/td&gt;&lt;td&gt;171.9\u202fms&lt;\/td&gt;\n&lt;\/tr&gt;\n&lt;tr&gt;\n\t&lt;td&gt;CPU usage user + system&lt;\/td&gt;&lt;td&gt;41\u202f% + 19\u202f%&lt;\/td&gt;\n&lt;\/tr&gt;\n&lt;tr&gt;\n\t&lt;td&gt;Peak of allocated memory&lt;\/td&gt;&lt;td&gt;4.41\u202fMB&lt;\/td&gt;\n&lt;\/tr&gt;\n&lt;tr&gt;\n\t&lt;td&gt;Included files&lt;\/td&gt;&lt;td&gt;136&lt;\/td&gt;\n&lt;\/tr&gt;\n&lt;tr&gt;\n\t&lt;td&gt;Classes + interfaces + traits&lt;\/td&gt;&lt;td&gt;271 + 47 + 3&lt;\/td&gt;\n&lt;\/tr&gt;\n&lt;tr&gt;\n\t&lt;td&gt;Your IP&lt;\/td&gt;&lt;td&gt;::1&lt;\/td&gt;\n&lt;\/tr&gt;\n&lt;tr&gt;\n\t&lt;td&gt;Server IP&lt;\/td&gt;&lt;td&gt;::1&lt;\/td&gt;\n&lt;\/tr&gt;\n&lt;tr&gt;\n\t&lt;td&gt;HTTP method \/ response code&lt;\/td&gt;&lt;td&gt;GET \/ 200&lt;\/td&gt;\n&lt;\/tr&gt;\n&lt;tr&gt;\n\t&lt;td&gt;PHP&lt;\/td&gt;&lt;td&gt;7.1.8&lt;\/td&gt;\n&lt;\/tr&gt;\n&lt;tr&gt;\n\t&lt;td&gt;Tracy&lt;\/td&gt;&lt;td&gt;2.4.9&lt;\/td&gt;\n&lt;\/tr&gt;\n&lt;tr&gt;\n\t&lt;td colspan=2&gt;Server &lt;b&gt;Apache\/2.2.32 (Unix) mod_wsgi\/3.5 Python\/2.7.13 PHP\/7.1.8 mod_ssl\/2.2.32 OpenSSL\/1.0.2j DAV\/2 mod_fastcgi\/2.4.6 mod_perl\/2.0.9 Perl\/v5.24.0&lt;\/b&gt;&lt;\/td&gt;\n&lt;\/tr&gt;\n&lt;\/table&gt;\n&lt;\/div&gt;\n\n\n\t&lt;div class=&quot;tracy-icons&quot;&gt;\n\t\t&lt;a href=&quot;#&quot; title=&quot;open in window&quot;&gt;&amp;curren;&lt;\/a&gt;\n\t\t&lt;a href=&quot;#&quot; rel=&quot;close&quot; title=&quot;close window&quot;&gt;&amp;times;&lt;\/a&gt;\n\t&lt;\/div&gt;\n\"><\/div>\t\t<div class=\"tracy-panel \" id=\"tracy-debug-panel-Tracy-errors\" data-tracy-content=\"\"><\/div>\t\t<div class=\"tracy-panel \" id=\"tracy-debug-panel-Nette-Bridges-DITracy-ContainerPanel\" data-tracy-content=\"&lt;style class=&quot;tracy-debug&quot;&gt;\n\n\t#tracy-debug .nette-ContainerPanel .tracy-inner {\n\t\twidth: 700px;\n\t}\n\n\t#tracy-debug .nette-ContainerPanel table {\n\t\twidth: 100%;\n\t\twhite-space: nowrap;\n\t}\n\n\t#tracy-debug .nette-ContainerPanel .created {\n\t\tfont-weight: bold;\n\t}\n\n\t#tracy-debug .nette-ContainerPanel .yes {\n\t\tcolor: green;\n\t\tfont-weight: bold;\n\t}\n\n&lt;\/style&gt;\n\n&lt;div class=&quot;nette-ContainerPanel&quot;&gt;\n&lt;h1&gt;Container_dc08bd2b06&lt;\/h1&gt;\n\n&lt;div class=&quot;tracy-inner&quot;&gt;\n\t&lt;h2&gt;Services&lt;\/h2&gt;\n\n\t&lt;table&gt;\n\t\t&lt;thead&gt;\n\t\t&lt;tr&gt;\n\t\t\t&lt;th&gt;Name&lt;\/th&gt;\n\t\t\t&lt;th&gt;Autowired&lt;\/th&gt;\n\t\t\t&lt;th&gt;Service&lt;\/th&gt;\n\t\t\t&lt;th&gt;Tags&lt;\/th&gt;\n\t\t&lt;\/tr&gt;\n\t\t&lt;\/thead&gt;\n\t\t&lt;tbody&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;24_App_Forms_FormFactory&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;App\\Forms\\FormFactory&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;25_App_Model_UserManager&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;01&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;application.1&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;App\\Presenters\\Error4xxPresenter&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;pre class=&quot;tracy-dump&quot;&gt;&lt;span class=&quot;tracy-toggle tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-array&quot;&gt;array&lt;\/span&gt; (2)&lt;\/span&gt;\n&lt;div class=&quot;tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;inject&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-bool&quot;&gt;true&lt;\/span&gt;\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;&quot;nette.presenter&quot;&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-string&quot;&gt;&quot;App\\Presenters\\Error4xxPresenter&quot;&lt;\/span&gt; (32)\n&lt;\/div&gt;&lt;\/pre&gt;\n&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;application.2&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;App\\Presenters\\ErrorPresenter&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;pre class=&quot;tracy-dump&quot;&gt;&lt;span class=&quot;tracy-toggle tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-array&quot;&gt;array&lt;\/span&gt; (2)&lt;\/span&gt;\n&lt;div class=&quot;tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;inject&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-bool&quot;&gt;true&lt;\/span&gt;\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;&quot;nette.presenter&quot;&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-string&quot;&gt;&quot;App\\Presenters\\ErrorPresenter&quot;&lt;\/span&gt; (29)\n&lt;\/div&gt;&lt;\/pre&gt;\n&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;application.3&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;App\\Presenters\\ForumPresenter&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;pre class=&quot;tracy-dump&quot;&gt;&lt;span class=&quot;tracy-toggle tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-array&quot;&gt;array&lt;\/span&gt; (2)&lt;\/span&gt;\n&lt;div class=&quot;tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;inject&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-bool&quot;&gt;true&lt;\/span&gt;\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;&quot;nette.presenter&quot;&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-string&quot;&gt;&quot;App\\Presenters\\ForumPresenter&quot;&lt;\/span&gt; (29)\n&lt;\/div&gt;&lt;\/pre&gt;\n&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;application.4&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;App\\Presenters\\HomepagePresenter&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;pre class=&quot;tracy-dump&quot;&gt;&lt;span class=&quot;tracy-toggle tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-array&quot;&gt;array&lt;\/span&gt; (2)&lt;\/span&gt;\n&lt;div class=&quot;tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;inject&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-bool&quot;&gt;true&lt;\/span&gt;\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;&quot;nette.presenter&quot;&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-string&quot;&gt;&quot;App\\Presenters\\HomepagePresenter&quot;&lt;\/span&gt; (32)\n&lt;\/div&gt;&lt;\/pre&gt;\n&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;application.5&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;App\\Presenters\\PostPresenter&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;pre class=&quot;tracy-dump&quot;&gt;&lt;span class=&quot;tracy-toggle tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-array&quot;&gt;array&lt;\/span&gt; (2)&lt;\/span&gt;\n&lt;div class=&quot;tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;inject&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-bool&quot;&gt;true&lt;\/span&gt;\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;&quot;nette.presenter&quot;&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-string&quot;&gt;&quot;App\\Presenters\\PostPresenter&quot;&lt;\/span&gt; (28)\n&lt;\/div&gt;&lt;\/pre&gt;\n&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;application.6&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;App\\Presenters\\ProfilePresenter&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;pre class=&quot;tracy-dump&quot;&gt;&lt;span class=&quot;tracy-toggle tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-array&quot;&gt;array&lt;\/span&gt; (2)&lt;\/span&gt;\n&lt;div class=&quot;tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;inject&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-bool&quot;&gt;true&lt;\/span&gt;\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;&quot;nette.presenter&quot;&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-string&quot;&gt;&quot;App\\Presenters\\ProfilePresenter&quot;&lt;\/span&gt; (31)\n&lt;\/div&gt;&lt;\/pre&gt;\n&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;application.7&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;App\\Presenters\\SignPresenter&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;pre class=&quot;tracy-dump&quot;&gt;&lt;span class=&quot;tracy-toggle tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-array&quot;&gt;array&lt;\/span&gt; (2)&lt;\/span&gt;\n&lt;div class=&quot;tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;inject&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-bool&quot;&gt;true&lt;\/span&gt;\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;&quot;nette.presenter&quot;&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-string&quot;&gt;&quot;App\\Presenters\\SignPresenter&quot;&lt;\/span&gt; (28)\n&lt;\/div&gt;&lt;\/pre&gt;\n&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;application.8&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;NetteModule\\ErrorPresenter&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;pre class=&quot;tracy-dump&quot;&gt;&lt;span class=&quot;tracy-toggle tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-array&quot;&gt;array&lt;\/span&gt; (2)&lt;\/span&gt;\n&lt;div class=&quot;tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;inject&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-bool&quot;&gt;true&lt;\/span&gt;\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;&quot;nette.presenter&quot;&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-string&quot;&gt;&quot;NetteModule\\ErrorPresenter&quot;&lt;\/span&gt; (26)\n&lt;\/div&gt;&lt;\/pre&gt;\n&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;application.9&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;NetteModule\\MicroPresenter&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;pre class=&quot;tracy-dump&quot;&gt;&lt;span class=&quot;tracy-toggle tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-array&quot;&gt;array&lt;\/span&gt; (2)&lt;\/span&gt;\n&lt;div class=&quot;tracy-collapsed&quot;&gt;&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;inject&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-bool&quot;&gt;true&lt;\/span&gt;\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;&quot;nette.presenter&quot;&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-string&quot;&gt;&quot;NetteModule\\MicroPresenter&quot;&lt;\/span&gt; (26)\n&lt;\/div&gt;&lt;\/pre&gt;\n&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;application.application&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;012&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;application.linkGenerator&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;Nette\\Application\\LinkGenerator&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;application.presenterFactory&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;028&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;cache.journal&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;011&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;cache.storage&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;09&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;container&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;Nette\\DI\\Container&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;database.default.connection&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;03&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;database.default.context&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;02&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;database.default.conventions&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;010&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;database.default.structure&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;07&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;http.context&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;Nette\\Http\\Context&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;http.request&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;025&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;http.requestFactory&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;024&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;http.response&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;023&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;latte.latteFactory&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;no&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;033&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;latte.templateFactory&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;034&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;&quot;&gt;mail.mailer&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;code&gt;Nette\\Mail\\IMailer&lt;\/code&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;routing.router&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;029&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;security.user&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;032&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;security.userStorage&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;031&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;session.session&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;026&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;tracy.bar&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;022&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;tracy.blueScreen&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;030&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t&lt;td class=&quot;created&quot;&gt;tracy.logger&lt;\/td&gt;\n\t\t\t&lt;td class=&quot;yes&quot;&gt;yes&lt;\/td&gt;\n\t\t\t&lt;td&gt;\n\t\t\t\t\t\t\t\t\t&lt;pre class=&quot;tracy-dump tracy-collapsed&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;027&quot;}&#039;&gt;&lt;\/pre&gt;\n\t\t\t\t\t\t\t&lt;\/td&gt;\n\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t&lt;\/tbody&gt;\n\t&lt;\/table&gt;\n\n\t&lt;h2&gt;Parameters&lt;\/h2&gt;\n\n\t&lt;div class=&quot;nette-ContainerPanel-parameters&quot;&gt;\n\t\t&lt;pre class=&quot;tracy-dump&quot;&gt;&lt;span class=&quot;tracy-toggle&quot;&gt;&lt;span class=&quot;tracy-dump-array&quot;&gt;array&lt;\/span&gt; (6)&lt;\/span&gt;\n&lt;div&gt;&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;appDir&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-string&quot;&gt;&quot;\/Applications\/MAMP\/htdocs\/test\/app&quot;&lt;\/span&gt; (34)\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;wwwDir&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-string&quot;&gt;&quot;\/Applications\/MAMP\/htdocs\/test\/www&quot;&lt;\/span&gt; (34)\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;debugMode&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-bool&quot;&gt;true&lt;\/span&gt;\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;productionMode&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-bool&quot;&gt;false&lt;\/span&gt;\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;consoleMode&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-bool&quot;&gt;false&lt;\/span&gt;\n&lt;span class=&quot;tracy-dump-indent&quot;&gt;   &lt;\/span&gt;&lt;span class=&quot;tracy-dump-key&quot;&gt;tempDir&lt;\/span&gt; =&gt; &lt;span class=&quot;tracy-dump-string&quot;&gt;&quot;\/Applications\/MAMP\/htdocs\/test\/app\/..\/temp&quot;&lt;\/span&gt; (42)\n&lt;\/div&gt;&lt;\/pre&gt;\n\t&lt;\/div&gt;\n\n\t&lt;p&gt;Source: &lt;a href=&quot;editor:\/\/open\/?file=%2FApplications%2FMAMP%2Fhtdocs%2Ftest%2Ftemp%2Fcache%2FNette.Configurator%2FContainer_dc08bd2b06.php&amp;amp;line=1&quot; title=&quot;...\/cache\/Nette.Configurator\/Container_dc08bd2b06.php&quot;&gt;...\/cache\/Nette.Configurator\/&lt;b&gt;Container_dc08bd2b06.php&lt;\/b&gt;&lt;\/a&gt;&lt;\/p&gt;\n&lt;\/div&gt;\n&lt;\/div&gt;\n\n\n\t&lt;div class=&quot;tracy-icons&quot;&gt;\n\t\t&lt;a href=&quot;#&quot; title=&quot;open in window&quot;&gt;&amp;curren;&lt;\/a&gt;\n\t\t&lt;a href=&quot;#&quot; rel=&quot;close&quot; title=&quot;close window&quot;&gt;&amp;times;&lt;\/a&gt;\n\t&lt;\/div&gt;\n\"><\/div>\t\t<div class=\"tracy-panel \" id=\"tracy-debug-panel-Nette-Bridges-ApplicationTracy-RoutingPanel\" data-tracy-content=\"&lt;style class=&quot;tracy-debug&quot;&gt;\n\n\t#tracy-debug .nette-RoutingPanel table {\n\t\tfont: 9pt\/1.5 Consolas, monospace;\n\t}\n\n\t#tracy-debug .nette-RoutingPanel .yes td {\n\t\tbackground: #BDE678 !important;\n\t}\n\n\t#tracy-debug .nette-RoutingPanel .may td {\n\t\tbackground: #C1D3FF !important;\n\t}\n\n\t#tracy-debug .nette-RoutingPanel pre, #tracy-debug .nette-RoutingPanel code {\n\t\tdisplay: inline;\n\t\tbackground: transparent;\n\t}\n\n&lt;\/style&gt;\n\n&lt;div class=&quot;nette-RoutingPanel&quot;&gt;\n&lt;h1&gt;\n\tProfile:myposts&lt;\/h1&gt;\n\n&lt;div class=&quot;tracy-inner&quot;&gt;\n\t&lt;table&gt;\n\t&lt;thead&gt;\n\t&lt;tr&gt;\n\t\t&lt;th&gt;&lt;\/th&gt;\n\t\t&lt;th&gt;Mask \/ Class&lt;\/th&gt;\n\t\t&lt;th&gt;Defaults&lt;\/th&gt;\n\t\t\t\t&lt;th&gt;Matched as&lt;\/th&gt;\n\t&lt;\/tr&gt;\n\t&lt;\/thead&gt;\n\n\t&lt;tbody&gt;\n\t\t&lt;tr class=&quot;yes&quot;&gt;\n\t\t&lt;td&gt;\u2713&lt;\/td&gt;\n\n\t\t&lt;td&gt;&lt;code title=&quot;Nette\\Application\\Routers\\Route&quot;&gt;&amp;lt;presenter&amp;gt;\/&amp;lt;action&amp;gt;&lt;\/code&gt;&lt;\/td&gt;\n\n\t\t&lt;td&gt;&lt;code&gt;\n\t\t\t\t\tpresenter&amp;nbsp;=&amp;nbsp;Homepage&lt;br \/&gt;\t\t\t\t\taction&amp;nbsp;=&amp;nbsp;default&lt;br \/&gt;\t\t\t\t&lt;\/code&gt;&lt;\/td&gt;\n\n\t\t\n\t\t&lt;td&gt;&lt;code&gt;\n\t\t\t\t&lt;strong&gt;Profile:myposts&lt;\/strong&gt;&lt;br \/&gt;\n\t\t\t\t\t\t&lt;\/code&gt;&lt;\/td&gt;\n\t&lt;\/tr&gt;\n\t\t&lt;\/tbody&gt;\n\t&lt;\/table&gt;\n\n\t&lt;p&gt;&lt;code&gt;GET&lt;\/code&gt;\n\t&lt;code&gt;http:\/\/localhost:8888\/test\/www\/&lt;span style=&quot;background:#eee; white-space:nowrap&quot;&gt;profile\/myposts&lt;\/span&gt;&lt;\/code&gt;&lt;\/p&gt;\n\n\t\t&lt;p&gt;&lt;a href=&quot;editor:\/\/open\/?file=%2FApplications%2FMAMP%2Fhtdocs%2Ftest%2Fapp%2Fpresenters%2FProfilePresenter.php&amp;amp;line=29&quot;&gt;App\\Presenters\\ProfilePresenter::renderMyPosts()&lt;\/a&gt;&lt;\/p&gt;\n\t&lt;\/div&gt;\n&lt;\/div&gt;\n\n\n\t&lt;div class=&quot;tracy-icons&quot;&gt;\n\t\t&lt;a href=&quot;#&quot; title=&quot;open in window&quot;&gt;&amp;curren;&lt;\/a&gt;\n\t\t&lt;a href=&quot;#&quot; rel=&quot;close&quot; title=&quot;close window&quot;&gt;&amp;times;&lt;\/a&gt;\n\t&lt;\/div&gt;\n\"><\/div>\t\t<div class=\"tracy-panel \" id=\"tracy-debug-panel-Nette-Bridges-DatabaseTracy-ConnectionPanel\" data-tracy-content=\"&lt;style class=&quot;tracy-debug&quot;&gt;\n\t#tracy-debug td.nette-DbConnectionPanel-sql { background: white !important }\n\t#tracy-debug .nette-DbConnectionPanel-source { color: #BBB !important }\n\t#tracy-debug .nette-DbConnectionPanel-explain td { white-space: pre }\n&lt;\/style&gt;\n\n&lt;h1 title=&quot;mysql:host=127.0.0.1;dbname=users;port=8889&quot;&gt;Queries: 2, time: 3.184 ms, default&lt;\/h1&gt;\n\n&lt;div class=&quot;tracy-inner&quot;&gt;\n\t&lt;table&gt;\n\t\t&lt;tr&gt;&lt;th&gt;Time&amp;nbsp;ms&lt;\/th&gt;&lt;th&gt;SQL Query&lt;\/th&gt;&lt;th&gt;Rows&lt;\/th&gt;&lt;\/tr&gt;\n\t\t\t\t&lt;tr&gt;\n\t\t&lt;td&gt;\n\t\t0.524\t\t\t\t&lt;\/td&gt;\n\t\t&lt;td class=&quot;nette-DbConnectionPanel-sql&quot;&gt;&lt;pre class=&quot;dump&quot;&gt;&lt;strong style=&quot;color:blue&quot;&gt;SET&lt;\/strong&gt; NAMES &#039;utf8mb4&#039;&lt;\/pre&gt;\n\t\t\t\t&lt;a class=&quot;nette-DbConnectionPanel-source&quot; href=&quot;editor:\/\/open\/?file=%2FApplications%2FMAMP%2Fhtdocs%2Ftest%2Fapp%2Fpresenters%2FProfilePresenter.php&amp;amp;line=32&quot; title=&quot;...\/htdocs\/test\/app\/presenters\/ProfilePresenter.php:32&quot;&gt;...\/htdocs\/test\/app\/presenters\/&lt;b&gt;ProfilePresenter.php&lt;\/b&gt;:32&lt;\/a&gt;\t\t&lt;\/td&gt;\n\t\t&lt;td&gt;0&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t\t&lt;tr&gt;\n\t\t&lt;td&gt;\n\t\t2.660\t\t\t\t\t&lt;br \/&gt;&lt;a class=&quot;tracy-toggle tracy-collapsed&quot; data-tracy-ref=&quot;^tr .nette-DbConnectionPanel-explain&quot;&gt;explain&lt;\/a&gt;\n\t\t\t\t&lt;\/td&gt;\n\t\t&lt;td class=&quot;nette-DbConnectionPanel-sql&quot;&gt;&lt;pre class=&quot;dump&quot;&gt;&lt;strong style=&quot;color:blue&quot;&gt;SELECT&lt;\/strong&gt; `post_id`, `post_name`, `post_description`, `post_date` \n&lt;strong style=&quot;color:blue&quot;&gt;FROM&lt;\/strong&gt; `posts` \n&lt;strong style=&quot;color:blue&quot;&gt;WHERE&lt;\/strong&gt; (`post_creator_id` = 57) \n&lt;strong style=&quot;color:blue&quot;&gt;ORDER BY&lt;\/strong&gt; `post_id` DESC&lt;\/pre&gt;\n\t\t\t\t\t&lt;table class=&quot;tracy-collapsed nette-DbConnectionPanel-explain&quot;&gt;\n\t\t\t&lt;tr&gt;\n\t\t\t\t\t\t\t&lt;th&gt;id&lt;\/th&gt;\n\t\t\t\t\t\t\t&lt;th&gt;select_type&lt;\/th&gt;\n\t\t\t\t\t\t\t&lt;th&gt;table&lt;\/th&gt;\n\t\t\t\t\t\t\t&lt;th&gt;type&lt;\/th&gt;\n\t\t\t\t\t\t\t&lt;th&gt;possible_keys&lt;\/th&gt;\n\t\t\t\t\t\t\t&lt;th&gt;key&lt;\/th&gt;\n\t\t\t\t\t\t\t&lt;th&gt;key_len&lt;\/th&gt;\n\t\t\t\t\t\t\t&lt;th&gt;ref&lt;\/th&gt;\n\t\t\t\t\t\t\t&lt;th&gt;rows&lt;\/th&gt;\n\t\t\t\t\t\t\t&lt;th&gt;Extra&lt;\/th&gt;\n\t\t\t\t\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;tr&gt;\n\t\t\t\t\t\t\t&lt;td&gt;1&lt;\/td&gt;\n\t\t\t\t\t\t\t&lt;td&gt;SIMPLE&lt;\/td&gt;\n\t\t\t\t\t\t\t&lt;td&gt;posts&lt;\/td&gt;\n\t\t\t\t\t\t\t&lt;td&gt;index&lt;\/td&gt;\n\t\t\t\t\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t\t\t\t\t\t&lt;td&gt;PRIMARY&lt;\/td&gt;\n\t\t\t\t\t\t\t&lt;td&gt;4&lt;\/td&gt;\n\t\t\t\t\t\t\t&lt;td&gt;&lt;\/td&gt;\n\t\t\t\t\t\t\t&lt;td&gt;6&lt;\/td&gt;\n\t\t\t\t\t\t\t&lt;td&gt;Using where&lt;\/td&gt;\n\t\t\t\t\t\t&lt;\/tr&gt;\n\t\t\t\t\t\t&lt;\/table&gt;\n\t\t\t\t&lt;a class=&quot;nette-DbConnectionPanel-source&quot; href=&quot;editor:\/\/open\/?file=%2FApplications%2FMAMP%2Fhtdocs%2Ftest%2Ftemp%2Fcache%2Flatte%2Ftemplates-Profile-myposts.latte--89b98e54f1.php&amp;amp;line=83&quot; title=&quot;...\/templates-Profile-myposts.latte--89b98e54f1.php:83&quot;&gt;...\/&lt;b&gt;templates-Profile-myposts.latte--89b98e54f1.php&lt;\/b&gt;:83&lt;\/a&gt;\t\t&lt;\/td&gt;\n\t\t&lt;td&gt;0&lt;\/td&gt;\n\t\t&lt;\/tr&gt;\n\t\t\t&lt;\/table&gt;\n\t&lt;\/div&gt;\n\n\n\t&lt;div class=&quot;tracy-icons&quot;&gt;\n\t\t&lt;a href=&quot;#&quot; title=&quot;open in window&quot;&gt;&amp;curren;&lt;\/a&gt;\n\t\t&lt;a href=&quot;#&quot; rel=&quot;close&quot; title=&quot;close window&quot;&gt;&amp;times;&lt;\/a&gt;\n\t&lt;\/div&gt;\n\"><\/div>\t\t<div class=\"tracy-panel \" id=\"tracy-debug-panel-Nette-Bridges-SecurityTracy-UserPanel\" data-tracy-content=\"&lt;div class=&quot;nette-UserPanel&quot;&gt;\n\t&lt;h1&gt;Logged in&lt;\/h1&gt;\n\n\t&lt;pre class=&quot;tracy-dump&quot; data-tracy-dump=&#039;{&quot;object&quot;:&quot;044&quot;}&#039;&gt;&lt;\/pre&gt;\n&lt;\/div&gt;\n\n\n\t&lt;div class=&quot;tracy-icons&quot;&gt;\n\t\t&lt;a href=&quot;#&quot; title=&quot;open in window&quot;&gt;&amp;curren;&lt;\/a&gt;\n\t\t&lt;a href=&quot;#&quot; rel=&quot;close&quot; title=&quot;close window&quot;&gt;&amp;times;&lt;\/a&gt;\n\t&lt;\/div&gt;\n\"><\/div>\n<div id=\"tracy-debug-bar\">\n\t<ul>\n\t\t<li id=\"tracy-debug-logo\" title=\"Tracy Debugger 2.4.9 \nhttps:\/\/tracy.nette.org\">\n\t\t\t<svg viewBox=\"0 -10 1561 333\"><path fill=\"#585755\" d=\"m176 327h-57v-269h-119v-57h291v57h-115v269zm208-191h114c50 0 47-78 0-78h-114v78zm106-135c17 0 33 2 46 7 75 30 75 144 1 175-13 6-29 8-47 8h-27l132 74v68l-211-128v122h-57v-326h163zm300 57c-5 0-9 3-11 9l-56 156h135l-55-155c-2-7-6-10-13-10zm-86 222l-17 47h-61l102-285c20-56 107-56 126 0l102 285h-61l-17-47h-174zm410 47c-98 0-148-55-148-163v-2c0-107 50-161 149-161h118v57h-133c-26 0-45 8-58 25-12 17-19 44-19 81 0 71 26 106 77 106h133v57h-119zm270-145l-121-181h68l81 130 81-130h68l-121 178v148h-56v-145z\"\/><\/svg>\n\t\t<\/li>\n\t\t\t\t<li><a href=\"#\" rel=\"tracy-debug-panel-Tracy-info\"><span title=\"Execution time\">\n<svg viewBox=\"0 0 2048 2048\"><path fill=\"#86bbf0\" d=\"m640 1153.6v639.3h-256v-639.3z\"\/><path fill=\"#6ba9e6\" d=\"m1024 254.68v1538.2h-256v-1538.2z\"\/><path fill=\"#4f96dc\" d=\"m1408 897.57v894.3h-256v-894.3z\"\/><path fill=\"#3987d4\" d=\"m1792 513.08v1279.8h-256v-1279.8z\"\/>\n<\/svg><span class=\"tracy-label\">171.9\u202fms<\/span>\n<\/span><\/a><\/li>\t\t<li><a href=\"#\" rel=\"tracy-debug-panel-Nette-Bridges-DITracy-ContainerPanel\"><span title=\"Dependency Injection Container\">\n<svg viewBox=\"0 0 2048 2048\"><path fill=\"#ae7c21\" d=\"m1675 690.55v-125c0-36-4-60-13-71-9-12-26-18-52-18s-43 6-52 17c-8 11-12 36-12 72v910.62c0 37 4 61 12 72 9 11 26 17 52 17s44-6 52-17c9-12 13-36 13-72v-207h243v165c0 86-4 148-12 187-8 38-21 70-39 96-20 28-45 48-77 59-31 11-87 16-170 16-96 0-161-5-196-16-34-11-63-31-86-59-21-26-36-59-45-97-9-39-14-101-14-186v-826.62c0-85 4-147 13-185s25-71 46-97c23-29 54-49 92-60s102-17 189-17c75 0 130 6 164 17s61 30 81 59c19 26 33 59 41 99 8 39 12 101 12 185v84zm-524 1086.6h-254v-1514.6h254zm-1025 0v-1514.6h316c127 0 212 27 257 81 44 53 66 159 66 316v721.62c0 157-22 263-66 317-44 53-130 80-257 80zm388-314v-884.62c0-35-4-58-13-70-9-11-26-17-53-17h-66v1058.6h66c26 0 44-6 53-17 9-12 14-35 14-70z\"\/>\n<\/svg><span class=\"tracy-label\"><\/span>\n<\/span><\/a><\/li>\t\t<li><a href=\"#\" rel=\"tracy-debug-panel-Nette-Bridges-ApplicationTracy-RoutingPanel\"><span title=\"Router\">\n<svg viewBox=\"0 0 2048 2048\">\n<path fill=\"#d86b01\" d=\"m1559.7 1024c0 17-6 32-19 45l-670 694.48c-13 13-28 19-45 19s-32-6-45-19-19-28-19-45v-306.48h-438.52c-17 0-32-6-45-19s-19-28-19-45v-642c0-17 6-32 19-45s28-19 45-19h438.52v-309.41c0-17 6-32 19-45s28-19 45-19 32 6 45 19l670 691.41c13 13 19 28 19 45z\"\/>\n<path d=\"m1914.7 1505c0 79-31 147-87 204-56 56-124 85-203 85h-320c-9 0-16-3-22-9-14-23-21-90 3-110 5-4 12-6 21-6h320c44 0 82-16 113-47s47-69 47-113v-962c0-44-16-82-47-113s-69-47-113-47h-312c-11 0-21-3-30-9-15-25-21-90 3-110 5-4 12-6 21-6h320c79 0 147 28 204 85 56 56 82 124 82 204-9 272 9 649 0 954z\" fill-opacity=\".5\" fill=\"#d86b01\"\/>\n<\/svg><span class=\"tracy-label\">Profile:myposts<\/span>\n<\/span><\/a><\/li>\t\t<li><a href=\"#\" rel=\"tracy-debug-panel-Nette-Bridges-DatabaseTracy-ConnectionPanel\"><span title=\"Nette\\Database default\">\n<svg viewBox=\"0 0 2048 2048\"><path fill=\"#b079d6\" d=\"M1024 896q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0-384q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0-1152q208 0 385 34.5t280 93.5 103 128v128q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-128q0-69 103-128t280-93.5 385-34.5z\"\/>\n<\/svg><span class=\"tracy-label\">3.2\u202fms\u202f\/\u202f2<\/span>\n<\/span><\/a><\/li>\t\t<li><a href=\"#\" rel=\"tracy-debug-panel-Nette-Bridges-SecurityTracy-UserPanel\"><span title=\"Logged in\">\n<svg viewBox=\"0 -50 2048 2048\"><path fill=\"#61A519\" d=\"m1615 1803.5c-122 17-246 7-369 8-255 1-510 3-765-1-136-2-266-111-273-250-11-192 11-290.5 115-457.5 62-100 192-191 303-147 110 44 201 130 321 149 160 25 317-39 446-130 82-58 200-9 268 51 157 173 186.8 275.49 184 484.49-1.9692 147.11-108.91 271.41-230 293zm-144-1226.5c0 239-208 447-447 447s-447-208-447-447 208-447 447-447c240 1 446 207 447 447z\"\/><\/svg>\n<\/span><\/a><\/li>\t\t<li><a href=\"#\" rel=\"close\" title=\"close debug bar\">&times;<\/a><\/li>\n\t<\/ul>\n\n<\/div>", {"01":{"name":"App\\Model\\UserManager","editor":null,"items":[["database",{"object":"02"},2]]},"02":{"name":"Nette\\Database\\Context","editor":null,"items":[["connection",{"object":"03"},2],["structure",{"object":"07"},2],["conventions",{"object":"010"},2],["cacheStorage",{"object":"09"},2]]},"03":{"name":"Nette\\Database\\Connection","editor":null,"items":[["onConnect",null,0],["onQuery",[[0,[[0,{"object":"045"}],[1,"logQuery"]]]],0],["params",[[0,"mysql:host=127.0.0.1;dbname=users;port=8889"],[1,"root"],[2,"root"]],2],["options",[["lazy",true]],2],["driver",{"object":"04"},2],["preprocessor",{"object":"05"},2],["pdo",{"object":"06"},2]]},"04":{"name":"Nette\\Database\\Drivers\\MySqlDriver","editor":null,"items":[["connection",{"object":"03"},2]]},"05":{"name":"Nette\\Database\\SqlPreprocessor","editor":null,"items":[["connection",{"object":"03"},2],["driver",{"object":"04"},2],["params",[[0,"SELECT `post_id`, `post_name`, `post_description`, `post_date` FROM `posts` WHERE (`post_creator_id` = ?) ORDER BY `post_id` DESC"],[1,57]],2],["remaining",[],2],["counter",2,2],["arrayMode",null,2]]},"06":{"name":"PDO","editor":null,"items":[]},"07":{"name":"Nette\\Database\\Structure","editor":null,"items":[["connection",{"object":"03"},1],["cache",{"object":"08"},1],["structure",[["tables",[[0,[["name","admin"],["view",false]]],[1,[["name","categories"],["view",false]]],[2,[["name","comments"],["view",false]]],[3,[["name","posts"],["view",false]]],[4,[["name","topics"],["view",false]]],[5,[["name","users"],["view",false]]]]],["columns",[["admin",[[0,[null]],[1,[null]],[2,[null]]]],["categories",[[0,[null]],[1,[null]]]],["comments",[[0,[null]],[1,[null]],[2,[null]],[3,[null]],[4,[null]],[5,[null]],[6,[null]],[7,[null]]]],["posts",[[0,[null]],[1,[null]],[2,[null]],[3,[null]],[4,[null]],[5,[null]],[6,[null]],[7,[null]],[8,[null]]]],["topics",[[0,[null]],[1,[null]],[2,[null]],[3,[null]],[4,[null]],[5,[null]],[6,[null]]]],["users",[[0,[null]],[1,[null]],[2,[null]],[3,[null]],[4,[null]],[5,[null]],[6,[null]],[7,[null]],[8,[null]],[9,[null]],[10,[null]]]]]],["primary",[["admin","id"],["categories","id"],["comments","id"],["posts","post_id"],["topics","topic_id"],["users","user_id"]]]],1],["isRebuilt",false,1]]},"08":{"name":"Nette\\Caching\\Cache","editor":null,"items":[["storage",{"object":"09"},2],["namespace","Nette.Database.Structure.18cba910a15c37edfb270509785c9ec0\\x00",2]]},"09":{"name":"Nette\\Caching\\Storages\\FileStorage","editor":null,"items":[["dir","\/Applications\/MAMP\/htdocs\/test\/app\/..\/temp\/cache",2],["useDirs",true,2],["journal",{"object":"011"},2],["locks",null,2]]},"010":{"name":"Nette\\Database\\Conventions\\DiscoveredConventions","editor":null,"items":[["structure",{"object":"07"},1]]},"011":{"name":"Nette\\Caching\\Storages\\SQLiteJournal","editor":null,"items":[["path","\/Applications\/MAMP\/htdocs\/test\/app\/..\/temp\/cache\/journal.s3db",2],["pdo",null,2]]},"012":{"name":"Nette\\Application\\Application","editor":null,"items":[["catchExceptions",false,0],["errorPresenter","Error",0],["onStartup",null,0],["onShutdown",null,0],["onRequest",null,0],["onPresenter",null,0],["onResponse",null,0],["onError",null,0],["requests",[[0,{"object":"013"}]],2],["presenter",{"object":"014"},2],["httpRequest",{"object":"025"},2],["httpResponse",{"object":"023"},2],["presenterFactory",{"object":"028"},2],["router",{"object":"029"},2]]},"013":{"name":"Nette\\Application\\Request","editor":null,"items":[["method","GET",2],["flags",[["secured",false]],2],["name","Profile",2],["params",[["action","myposts"]],2],["post",[],2],["files",[],2]]},"014":{"name":"App\\Presenters\\ProfilePresenter","editor":null,"items":[["database",{"object":"02"},2],["invalidLinkMode",5,0],["onShutdown",null,0],["autoCanonicalize",true,0],["absoluteUrls",false,0],["request",{"object":"015"},2],["response",{"object":"016"},2],["globalParams",[],2],["globalState",[],2],["globalStateSinces",[],2],["action","myposts",2],["view","myposts",2],["layout",null,2],["payload",{"object":"019"},2],["signalReceiver","",2],["signal",null,2],["ajaxMode",false,2],["startupCheck",true,2],["lastCreatedRequest",{"object":"020"},2],["lastCreatedRequestFlag",[["current",false]],2],["context",{"object":"021"},2],["httpRequest",{"object":"025"},2],["httpResponse",{"object":"023"},2],["session",{"object":"026"},2],["presenterFactory",{"object":"028"},2],["router",{"object":"029"},2],["user",{"object":"032"},2],["templateFactory",{"object":"034"},2],["refUrlCache",{"object":"040"},2],["snippetMode",null,0],["template",{"object":"017"},2],["invalidSnippets",[],2],["onAnchor",null,0],["params",[["action","myposts"]],1],["components",[],2],["cloning",null,2],["parent",null,2],["name","Profile",2],["monitors",[],2],["database",null,2],["templateFactory",null,2]]},"015":{"name":"Nette\\Application\\Request","editor":null,"items":[["method","GET",2],["flags",[["secured",false]],2],["name","Profile",2],["params",[["action","myposts"]],2],["post",[],2],["files",[],2]]},"016":{"name":"Nette\\Application\\Responses\\TextResponse","editor":null,"items":[["source",{"object":"017"},2]]},"017":{"name":"Nette\\Bridges\\ApplicationLatte\\Template","editor":null,"items":[["latte",{"object":"018"},2],["file","\/Applications\/MAMP\/htdocs\/test\/app\/presenters\/templates\/Profile\/myposts.latte",2],["params",[["user",{"object":"032"}],["baseUrl","http:\/\/localhost:8888\/test\/www"],["baseUri","http:\/\/localhost:8888\/test\/www"],["basePath","\/test\/www"],["flashes",[null]],["control",{"object":"014"}],["presenter",{"object":"014"}],["_control",{"object":"014"}],["_presenter",{"object":"014"}],["netteCacheStorage",{"object":"09"}],["loggedin_name",null],["loggedin_image",null],["loggedin_role","owner"],["posts",{"object":"043"}],["currentuser",{"object":"044"}]],2]]},"018":{"name":"Latte\\Engine","editor":null,"items":[["onCompile",[null],0],["parser",null,2],["compiler",null,2],["loader",{"object":"041"},2],["filters",{"object":"042"},2],["providers",[null],2],["contentType","html",2],["tempDirectory","\/Applications\/MAMP\/htdocs\/test\/app\/..\/temp\/cache\/latte",2],["autoRefresh",true,2]]},"019":{"name":"stdClass","editor":null,"items":[]},"020":{"name":"Nette\\Application\\Request","editor":null,"items":[["method","FORWARD",2],["flags",[],2],["name","Sign",2],["params",[["action","out"]],2],["post",[],2],["files",[],2]]},"021":{"name":"Container_dc08bd2b06","editor":null,"items":[["meta",[["types",[["\"Nette\\Application\\Application\"",[null]],["\"Nette\\Application\\IPresenterFactory\"",[null]],["\"Nette\\Application\\LinkGenerator\"",[null]],["\"Nette\\Caching\\Storages\\IJournal\"",[null]],["\"Nette\\Caching\\IStorage\"",[null]],["\"Nette\\Database\\Connection\"",[null]],["\"Nette\\Database\\IStructure\"",[null]],["\"Nette\\Database\\Structure\"",[null]],["\"Nette\\Database\\IConventions\"",[null]],["\"Nette\\Database\\Conventions\\DiscoveredConventions\"",[null]],["\"Nette\\Database\\Context\"",[null]],["\"Nette\\Http\\RequestFactory\"",[null]],["\"Nette\\Http\\IRequest\"",[null]],["\"Nette\\Http\\Request\"",[null]],["\"Nette\\Http\\IResponse\"",[null]],["\"Nette\\Http\\Response\"",[null]],["\"Nette\\Http\\Context\"",[null]],["\"Nette\\Bridges\\ApplicationLatte\\ILatteFactory\"",[null]],["\"Nette\\Application\\UI\\ITemplateFactory\"",[null]],["\"Nette\\Mail\\IMailer\"",[null]],["\"Nette\\Application\\IRouter\"",[null]],["\"Nette\\Security\\IUserStorage\"",[null]],["\"Nette\\Security\\User\"",[null]],["\"Nette\\Http\\Session\"",[null]],["\"Tracy\\ILogger\"",[null]],["\"Tracy\\BlueScreen\"",[null]],["\"Tracy\\Bar\"",[null]],["\"App\\Forms\\FormFactory\"",[null]],["\"Nette\\Security\\IAuthenticator\"",[null]],["\"App\\Model\\UserManager\"",[null]],["\"App\\Presenters\\BasePresenter\"",[null]],["\"Nette\\Application\\UI\\Presenter\"",[null]],["\"Nette\\Application\\UI\\Control\"",[null]],["\"Nette\\Application\\UI\\Component\"",[null]],["\"Nette\\ComponentModel\\Container\"",[null]],["\"Nette\\ComponentModel\\Component\"",[null]],["\"Nette\\Application\\UI\\IRenderable\"",[null]],["\"Nette\\ComponentModel\\IContainer\"",[null]],["\"Nette\\ComponentModel\\IComponent\"",[null]],["\"Nette\\Application\\UI\\ISignalReceiver\"",[null]],["\"Nette\\Application\\UI\\IStatePersistent\"",[null]],["ArrayAccess",[null]],["\"Nette\\Application\\IPresenter\"",[null]],["\"App\\Presenters\\Error4xxPresenter\"",[null]],["\"App\\Presenters\\ErrorPresenter\"",[null]],["\"App\\Presenters\\ForumPresenter\"",[null]],["\"App\\Presenters\\HomepagePresenter\"",[null]],["\"App\\Presenters\\PostPresenter\"",[null]],["\"App\\Presenters\\ProfilePresenter\"",[null]],["\"App\\Presenters\\SignPresenter\"",[null]],["\"NetteModule\\ErrorPresenter\"",[null]],["\"NetteModule\\MicroPresenter\"",[null]],["\"Nette\\DI\\Container\"",[null]]]],["services",[["24_App_Forms_FormFactory","App\\Forms\\FormFactory"],["25_App_Model_UserManager","App\\Model\\UserManager"],["\"application.1\"","App\\Presenters\\Error4xxPresenter"],["\"application.2\"","App\\Presenters\\ErrorPresenter"],["\"application.3\"","App\\Presenters\\ForumPresenter"],["\"application.4\"","App\\Presenters\\HomepagePresenter"],["\"application.5\"","App\\Presenters\\PostPresenter"],["\"application.6\"","App\\Presenters\\ProfilePresenter"],["\"application.7\"","App\\Presenters\\SignPresenter"],["\"application.8\"","NetteModule\\ErrorPresenter"],["\"application.9\"","NetteModule\\MicroPresenter"],["\"application.application\"","Nette\\Application\\Application"],["\"application.linkGenerator\"","Nette\\Application\\LinkGenerator"],["\"application.presenterFactory\"","Nette\\Application\\IPresenterFactory"],["\"cache.journal\"","Nette\\Caching\\Storages\\IJournal"],["\"cache.storage\"","Nette\\Caching\\IStorage"],["container","Nette\\DI\\Container"],["\"database.default.connection\"","Nette\\Database\\Connection"],["\"database.default.context\"","Nette\\Database\\Context"],["\"database.default.conventions\"","Nette\\Database\\Conventions\\DiscoveredConventions"],["\"database.default.structure\"","Nette\\Database\\Structure"],["\"http.context\"","Nette\\Http\\Context"],["\"http.request\"","Nette\\Http\\Request"],["\"http.requestFactory\"","Nette\\Http\\RequestFactory"],["\"http.response\"","Nette\\Http\\Response"],["\"latte.latteFactory\"","Latte\\Engine"],["\"latte.templateFactory\"","Nette\\Application\\UI\\ITemplateFactory"],["\"mail.mailer\"","Nette\\Mail\\IMailer"],["\"routing.router\"","Nette\\Application\\IRouter"],["\"security.user\"","Nette\\Security\\User"],["\"security.userStorage\"","Nette\\Security\\IUserStorage"],["\"session.session\"","Nette\\Http\\Session"],["\"tracy.bar\"","Tracy\\Bar"],["\"tracy.blueScreen\"","Tracy\\BlueScreen"],["\"tracy.logger\"","Tracy\\ILogger"]]],["tags",[["inject",[null]],["\"nette.presenter\"",[null]]]],["aliases",[["application","application.application"],["cacheStorage","cache.storage"],["\"database.default\"","database.default.connection"],["httpRequest","http.request"],["httpResponse","http.response"],["\"nette.cacheJournal\"","cache.journal"],["\"nette.database.default\"","database.default"],["\"nette.database.default.context\"","database.default.context"],["\"nette.httpContext\"","http.context"],["\"nette.httpRequestFactory\"","http.requestFactory"],["\"nette.latteFactory\"","latte.latteFactory"],["\"nette.mailer\"","mail.mailer"],["\"nette.presenterFactory\"","application.presenterFactory"],["\"nette.templateFactory\"","latte.templateFactory"],["\"nette.userStorage\"","security.userStorage"],["router","routing.router"],["session","session.session"],["user","security.user"]]]],1],["parameters",[["appDir","\/Applications\/MAMP\/htdocs\/test\/app"],["wwwDir","\/Applications\/MAMP\/htdocs\/test\/www"],["debugMode",true],["productionMode",false],["consoleMode",false],["tempDir","\/Applications\/MAMP\/htdocs\/test\/app\/..\/temp"]],0],["registry",[["\"tracy.bar\"",{"object":"022"}],["\"http.response\"",{"object":"023"}],["\"http.requestFactory\"",{"object":"024"}],["\"http.request\"",{"object":"025"}],["\"session.session\"",{"object":"026"}],["\"tracy.logger\"",{"object":"027"}],["\"application.presenterFactory\"",{"object":"028"}],["\"routing.router\"",{"object":"029"}],["\"application.application\"",{"object":"012"}],["\"tracy.blueScreen\"",{"object":"030"}],["\"database.default.connection\"",{"object":"03"}],["\"cache.journal\"",{"object":"011"}],["\"cache.storage\"",{"object":"09"}],["\"database.default.structure\"",{"object":"07"}],["\"database.default.conventions\"",{"object":"010"}],["\"database.default.context\"",{"object":"02"}],["\"security.userStorage\"",{"object":"031"}],["25_App_Model_UserManager",{"object":"01"}],["\"security.user\"",{"object":"032"}],["\"latte.latteFactory\"",{"object":"033"}],["\"latte.templateFactory\"",{"object":"034"}]],2],["creating",[],2]]},"022":{"name":"Tracy\\Bar","editor":null,"items":[["panels",[["\"Tracy:info\"",{"object":"046"}],["\"Tracy:errors\"",{"object":"047"}],["\"Nette\\Bridges\\DITracy\\ContainerPanel\"",{"object":"048"}],["\"Nette\\Bridges\\ApplicationTracy\\RoutingPanel\"",{"object":"049"}],["\"Nette\\Bridges\\DatabaseTracy\\ConnectionPanel\"",{"object":"045"}],["\"Nette\\Bridges\\SecurityTracy\\UserPanel\"",{"object":"050"}]],2],["useSession",true,2],["contentId",null,2]]},"023":{"name":"Nette\\Http\\Response","editor":null,"items":[["cookieDomain","",0],["cookiePath","\/",0],["cookieSecure",false,0],["cookieHttpOnly",true,0],["warnOnBuffer",true,0],["code",200,2]]},"024":{"name":"Nette\\Http\\RequestFactory","editor":null,"items":[["urlFilters",[["path",[["\"#\/{2,}#\"","\/"]]],["url",[]]],0],["binary",false,2],["proxies",[],2]]},"025":{"name":"Nette\\Http\\Request","editor":null,"items":[["method","GET",2],["url",{"object":"035"},2],["post",[],2],["files",[],2],["cookies",[["PHPSESSID","029eb2dbbeb3136cd3407ce7394780d6"]],2],["headers",[["host","localhost:8888"],["\"user-agent\"","Mozilla\/5.0 (Macintosh; Intel Mac OS X 10.12; rv:60.0) Gecko\/20100101 Firefox\/60.0"],["accept","text\/html,application\/xhtml+xml,application\/xml;q=0.9,*\/*;q=0.8"],["\"accept-language\"","cs,sk;q=0.8,en-US;q=0.5,en;q=0.3"],["\"accept-encoding\"","gzip, deflate"],["cookie","PHPSESSID=029eb2dbbeb3136cd3407ce7394780d6"],["connection","keep-alive"],["\"upgrade-insecure-requests\"","1"]],2],["remoteAddress","::1",2],["remoteHost",null,2],["rawBodyCallback",{"object":"036"},2]]},"026":{"name":"Nette\\Http\\Session","editor":null,"items":[["regenerated",false,2],["options",[["gc_maxlifetime",1209600],["cookie_lifetime",1209600],["referer_check",""],["use_cookies",1],["use_only_cookies",1],["use_trans_sid",0],["cookie_path","\/"],["cookie_domain",""],["cookie_secure",false],["cookie_httponly",true]],2],["request",{"object":"025"},2],["response",{"object":"023"},2],["handler",null,2]]},"027":{"name":"Tracy\\Logger","editor":null,"items":[["directory","\/Applications\/MAMP\/htdocs\/test\/app\/..\/log",0],["email",null,0],["fromEmail",null,0],["emailSnooze","2 days",0],["mailer",[[0,{"object":"027"}],[1,"defaultMailer"]],0],["blueScreen",{"object":"030"},2]]},"028":{"name":"Nette\\Application\\PresenterFactory","editor":null,"items":[["mapping",[["\"*\"",[[0,"App\\"],[1,"*Module\\"],[2,"Presenters\\*Presenter"]]],["Nette",[[0,"NetteModule\\"],[1,"*\\"],[2,"*Presenter"]]]],2],["cache",[["Profile","App\\Presenters\\ProfilePresenter"],["Homepage","App\\Presenters\\HomepagePresenter"],["Forum","App\\Presenters\\ForumPresenter"],["Sign","App\\Presenters\\SignPresenter"]],2],["factory",{"object":"037"},2]]},"029":{"name":"Nette\\Application\\Routers\\RouteList","editor":null,"items":[["cachedRoutes",[["\"*\"",[[0,{"object":"038"}]]]],2],["module","",2],["list",[[0,{"object":"038"}]],2]]},"030":{"name":"Tracy\\BlueScreen","editor":null,"items":[["info",[[0,"PHP 7.1.8"],[1,"Apache\/2.2.32 (Unix) mod_wsgi\/3.5 Python\/2.7.13 PHP\/7.1.8 mod_ssl\/2.2.32 OpenSSL\/1.0.2j DAV\/2 mod_fastcgi\/2.4.6 mod_perl\/2.0.9 Perl\/v5.24.0"],[2,"Tracy 2.4.9"]],0],["collapsePaths",[[0,"\/Applications\/MAMP\/htdocs\/test\/vendor"]],0],["maxDepth",3,0],["maxLength",150,0],["panels",[[0,{"object":"051"}],[1,{"object":"052"}],[2,{"object":"053"}],[3,"Nette\\Bridges\\DatabaseTracy\\ConnectionPanel::renderException"]],2]]},"031":{"name":"Nette\\Http\\UserStorage","editor":null,"items":[["namespace","",2],["sessionHandler",{"object":"026"},2],["sessionSection",{"object":"039"},2]]},"032":{"name":"Nette\\Security\\User","editor":null,"items":[["guestRole","guest",0],["authenticatedRole","authenticated",0],["onLoggedIn",null,0],["onLoggedOut",null,0],["storage",{"object":"031"},2],["authenticator",{"object":"01"},2],["authorizator",null,2]]},"033":{"name":"class@anonymous","editor":null,"items":[["container",{"object":"021"},2]]},"034":{"name":"Nette\\Bridges\\ApplicationLatte\\TemplateFactory","editor":null,"items":[["latteFactory",{"object":"033"},2],["httpRequest",{"object":"025"},2],["user",{"object":"032"},2],["cacheStorage",{"object":"09"},2],["templateClass","Nette\\Bridges\\ApplicationLatte\\Template",2]]},"035":{"name":"Nette\\Http\\UrlScript","editor":null,"items":[["scriptPath","\/test\/www\/",2],["scheme","http",2],["user","",2],["password","",2],["host","localhost",2],["port",8888,2],["path","\/test\/www\/profile\/myposts",2],["query",[],2],["fragment","",2]]},"036":{"name":"Closure","editor":null,"items":[["file","\/Applications\/MAMP\/htdocs\/test\/vendor\/nette\/http\/src\/Http\/RequestFactory.php",0],["line",276,0],["variables",[],0],["parameters","",0]]},"037":{"name":"Nette\\Bridges\\ApplicationDI\\PresenterFactoryCallback","editor":null,"items":[["container",{"object":"021"},2],["invalidLinkMode",5,2],["touchToRefresh","\/Applications\/MAMP\/htdocs\/test\/app\/..\/temp\/cache\/Nette%5CBridges%5CApplicationDI%5CApplicationExtension",2]]},"038":{"name":"Nette\\Application\\Routers\\Route","editor":null,"items":[["mask","<presenter>\/<action>",2],["sequence",[[0,""],[1,"presenter"],[2,"\/"],[3,"action"],[4,""]],2],["re","#(?:(?P<p0>(?U)[a-z][a-z0-9.-]*)\/(?:(?P<p4>(?U)[a-z][a-z0-9-]*))?)?\/?\\z#A",2],["aliases",[["p4","action"],["p0","presenter"]],2],["metadata",[["presenter",[null]],["action",[null]]],2],["xlat",[],2],["type",3,2],["scheme",null,2],["flags",0,2],["lastRefUrl",{"object":"040"},2],["lastBaseUrl","http:\/\/localhost:8888\/test\/www\/",2]]},"039":{"name":"Nette\\Http\\SessionSection","editor":null,"items":[["warnOnUndefined",false,0],["session",{"object":"026"},2],["name","Nette.Http.UserStorage\/",2],["data",[["authenticated",true],["identity",{"object":"044"}],["reason",null],["authTime",1534501986],["expireDelta",null]],2],["meta",null,2]]},"040":{"name":"Nette\\Http\\Url","editor":null,"items":[["scheme","http",2],["user","",2],["password","",2],["host","localhost",2],["port",8888,2],["path","\/test\/www\/",2],["query",[],2],["fragment","",2]]},"041":{"name":"Nette\\Bridges\\ApplicationLatte\\Loader","editor":null},"042":{"name":"Latte\\Runtime\\FilterExecutor","editor":null},"043":{"name":"Nette\\Database\\Table\\Selection","editor":null},"044":{"name":"Nette\\Security\\Identity","editor":null,"items":[["id",57,2],["roles",[[0,"owner"]],2],["data",[["user_id",57],["user_email","jakub.schneller@gmail.com"],["date_created",{"object":"054"}],["first_name","Jakub"],["last_name","Schneller"],["role","owner"],["last_updated",null],["user_name",null],["image",null]],2]]},"045":{"name":"Nette\\Bridges\\DatabaseTracy\\ConnectionPanel","editor":null,"items":[["maxQueries",100,0],["name","default",0],["explain",true,0],["disabled",false,0],["totalTime",0.0031840801239013671875,2],["count",2,2],["queries",[[0,[null]],[1,[null]]],2]]},"046":{"name":"Tracy\\DefaultBarPanel","editor":null,"items":[["data",null,0],["id","info",2],["cpuUsage",[["ru_oublock",-2],["ru_inblock",-16],["ru_msgsnd",-3],["ru_msgrcv",-9],["ru_maxrss",0],["ru_ixrss",0],["ru_idrss",0],["ru_minflt",-214],["ru_majflt",-203],["ru_nsignals",0],["ru_nvcsw",-23],["ru_nivcsw",-256],["ru_nswap",0],["\"ru_utime.tv_usec\"",-70490],["\"ru_utime.tv_sec\"",0],["\"ru_stime.tv_usec\"",-32914],["\"ru_stime.tv_sec\"",0]],0],["time",0.171947002410888671875,0]]},"047":{"name":"Tracy\\DefaultBarPanel","editor":null,"items":[["data",null,0],["id","errors",2]]},"048":{"name":"Nette\\Bridges\\DITracy\\ContainerPanel","editor":null,"items":[["container",{"object":"021"},2],["elapsedTime",null,2]]},"049":{"name":"Nette\\Bridges\\ApplicationTracy\\RoutingPanel","editor":null,"items":[["router",{"object":"029"},2],["httpRequest",{"object":"025"},2],["presenterFactory",{"object":"028"},2],["routers",[],2],["request",null,2],["source",null,2]]},"050":{"name":"Nette\\Bridges\\SecurityTracy\\UserPanel","editor":null,"items":[["user",{"object":"032"},2]]},"051":{"name":"Closure","editor":null,"items":[["file","\/Applications\/MAMP\/htdocs\/test\/vendor\/nette\/bootstrap\/src\/Bridges\/Framework\/TracyBridge.php",0],["line",35,0],["variables",[],0],["parameters","$e",0]]},"052":{"name":"Closure","editor":null,"items":[["file","\/Applications\/MAMP\/htdocs\/test\/vendor\/nette\/bootstrap\/src\/Bridges\/Framework\/TracyBridge.php",0],["line",53,0],["variables",[],0],["parameters","$e",0]]},"053":{"name":"Closure","editor":null,"items":[["file","\/Applications\/MAMP\/htdocs\/test\/vendor\/nette\/application\/src\/Bridges\/ApplicationTracy\/RoutingPanel.php",0],["line",45,0],["variables",[["application",{"object":"012"}]],0],["parameters","$e",0]]},"054":{"name":"Nette\\Utils\\DateTime","editor":null,"items":[["date","2018-08-15 18:31:36.000000",0],["timezone_type",3,0],["timezone","Europe\/Prague",0]]}});