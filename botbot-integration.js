(function(win, doc) {
	const rootEl = doc.getElementById('botbot-chat-window');
	if (!rootEl) {
		return;
	}

	// inject style
	const style = '.botbot-chat-window .msg-button{width:60px;height:60px;border-radius:50%;display:block;padding:15px;border:0;box-shadow:0 4px 5px #ddd,4px 0 5px #ddd;cursor:pointer;outline:none}.botbot-chat-window .msg-button img{max-width:100%}.botbot-chat-window .msg-button:hover{opacity:.9}.botbot-chat-window .chat-widget{position:fixed;bottom:20px;right:20px}.botbot-chat-window .chat-widget.show .chat-content{display:block}.botbot-chat-window .chat-widget.show .msg-button{background:#f5f5f5}.botbot-chat-window .chat-content{display:none;position:absolute;bottom:calc(100% + 20px);right:0;box-shadow:0 4px 5px #ddd;background-image:url(https://loading.io/spinners/coolors/lg.palette-rotating-ring-loader.gif);background-size:80px;background-repeat:no-repeat;background-position:center}.botbot-chat-window .chat-content iframe{width:360px;height:440px}';

	const styleTag = doc.createElement('style');
	styleTag.innerHTML = style;
	doc.head.appendChild(styleTag);

	rootEl.classList.add('botbot-chat-window');
	const botUrl = rootEl.getAttribute('data-bot-url') || '';
	const buttonEl = doc.createElement('button');
	const chatWidget = doc.createElement('div');
	const chatContent = doc.createElement('div');
	const iframe = doc.createElement('iframe');
	const icon = doc.createElement('img');

	chatWidget.classList.add('chat-widget');
	chatContent.classList.add('chat-content');
	buttonEl.classList.add('msg-button');
	icon.setAttribute(
		'src',
		'https://dashboard.botbot.ai/assets/d16f4ba438e1cab71d86520c31ea1a29.png'
	);

	buttonEl.appendChild(icon);
	iframe.setAttribute('src', botUrl);

	chatContent.appendChild(iframe);
	chatWidget.appendChild(chatContent);
	chatWidget.appendChild(buttonEl);

	rootEl.appendChild(chatWidget);

	buttonEl.addEventListener('click', handleToggleChatWidget);
	iframe.onload = function() {
		chatContent.style.backgroundImage = 'none';
	};

	function handleToggleChatWidget() {
		const chatWidget = doc.querySelector('#botbot-chat-window .chat-widget')[0];
		const expanded = chatWidget.getAttribute('aria-expanded');

		if (expanded === 'true') {
			chatWidget.classList.remove('show');
			chatWidget.setAttribute('aria-expanded', false);
		} else {
			chatWidget.classList.add('show');
			chatWidget.setAttribute('aria-expanded', true);
		}
	}
})(window, document);
