$(function () {
	// ⭐変数
	count = "global";
	count = 0;
	iconClass = "global";
	iconClass = [];
	let clipboard = new Clipboard('.iconlist > .column');
	key1 = "global";
	key1 = true;
	key2 = "global";
	key2 = true;
	key3 = "global";
	key3 = true;
	key4 = "global";
	key4 = true;

	refresh();

	// ⭐アイコン
	function refresh() {
		count = 0
		iconClass = [];
		$('.column > .icon').each(function () {
			iconClass.push($(this).attr('class'));
			count++;
		});

		// ⭐カラム
		count = 0;
		$('.iconlist > .column').each(function () {
			$(this).attr('data-tooltip', iconClass[count]);
			$(this).attr('data-inverted', "");
			$(this).attr('data-position', "top right");
			//重要:コピーされるもの
			//$(this).attr('data-clipboard-text', iconClass[count]);	//クラス名だけ
			$(this).attr('data-clipboard-text', '<i class=\"' + iconClass[count] + '\"></i>'); //Tag + クラス名
			count++;
		});
	}
});

//⭐カラムクリック
$('.iconlist > .column').on('click', function () {
	var em = $(this);
	$(this).addClass('disabled');
	var bak = null;
	bak = $(this).attr('data-tooltip'); //dtをバックアップ
	$(this).attr('data-tooltip', 'Copied!'); //copydを表示
	// 0.5秒後に実行
	setTimeout(function () {
		$(em).attr('data-tooltip', bak); //bakから元に戻す
	}, 500);
});

//⭐Loadingチェックボックス
$('.c1').change(function () {
	if (key1 == true) {
		count = 0;
		$('.column > .icon').each(function () {
			$(this).addClass('loading');
			count++;
		});
		key1 = false;
		refresh();
	} else if (key1 == false) {
		$('.column > .icon').each(function () {
			$(this).removeClass('loading');
			count++;
		});
		key1 = true;
		refresh();
	}
});

//⭐Flipチェックボックス
$('.c2').change(function () {
	if (key2 == true) {
		count = 0;
		$('.column > .icon').each(function () {
			$(this).addClass('flipped');
			count++;
		});
		key2 = false;
		refresh();
	} else if (key2 == false) {
		$('.column > .icon').each(function () {
			$(this).removeClass('flipped');
			count++;
		});
		key2 = true;
		refresh();
	}
});

//⭐Rotateチェックボックス
$('.c3').change(function () {
	if (key3 == true) {
		count = 0;
		$('.column > .icon').each(function () {
			$(this).addClass('rotated');
			count++;
		});
		key3 = false;
		refresh();
	} else if (key3 == false) {
		$('.column > .icon').each(function () {
			$(this).removeClass('rotated');
			count++;
		});
		key3 = true;
		refresh();
	}
});
//⭐Disableチェックボックス
$('.c4').change(function () {
	if (key4 == true) {
		count = 0;
		$('.column > .icon').each(function () {
			$(this).addClass('disabled');
			count++;
		});
		key4 = false;
		refresh();
	} else if (key4 == false) {
		$('.column > .icon').each(function () {
			$(this).removeClass('disabled');
			count++;
		});
		key4 = true;
		refresh();
	}
});
//⭐Red Label
$('.red.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('orange yellow olive green teal blue violet purple pink brown grey inverted');
		$(this).addClass('red');
		count++;
	});
	refresh();
});
//⭐Orange Label
$('.orange.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red yellow olive green teal blue violet purple pink brown grey inverted');
		$(this).addClass('orange');
		count++;
	});
	refresh();
});
//⭐Yellow Label
$('.yellow.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red orange olive green teal blue violet purple pink brown grey inverted');
		$(this).addClass('yellow');
		count++;
	});
	refresh();
});
//⭐Olive Label
$('.olive.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red orange yellow green teal blue violet purple pink brown grey inverted');
		$(this).addClass('olive');
		count++;
	});
	refresh();
});
//⭐green Label
$('.green.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red orange yellow olive teal blue violet purple pink brown grey inverted');
		$(this).addClass('green');
		count++;
	});
	refresh();
});
//⭐teal Label
$('.teal.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red orange yellow olive green blue violet purple pink brown grey inverted');
		$(this).addClass('teal');
		count++;
	});
	refresh();
});
//⭐blue Label
$('.blue.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red orange yellow olive green teal violet purple pink brown grey inverted');
		$(this).addClass('blue');
		count++;
	});
	refresh();
});
//⭐violet Label
$('.violet.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red orange yellow olive green teal blue purple pink brown grey inverted');
		$(this).addClass('violet');
		count++;
	});
	refresh();
});
//⭐purple Label
$('.purple.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red orange yellow olive green teal blue violet pink brown grey inverted');
		$(this).addClass('purple');
		count++;
	});
	refresh();
});
//⭐pink Label
$('.pink.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red orange yellow olive green teal blue violet purple brown grey inverted');
		$(this).addClass('pink');
		count++;
	});
	refresh();
});
//⭐brown Label
$('.brown.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red orange yellow olive green teal blue violet purple pink grey inverted');
		$(this).addClass('brown');
		count++;
	});
	refresh();
});
//⭐grey Label
$('.grey.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red orange yellow olive green teal blue violet purple pink brown inverted');
		$(this).addClass('grey');
		count++;
	});
	refresh();
});
//⭐blackLabel
$('.black.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red orange yellow olive green teal blue violet purple pink brown grey inverted');
		count++;
	});
	refresh();
});
//⭐inverted Label
$('.white.circular.label').on('click', function () {
	count = 0;
	$('.column > .icon').each(function () {
		$(this).removeClass('red orange yellow olive green teal blue violet purple pink brown grey');
		$(this).addClass('inverted');
		count++;
	});
	refresh();
});
//⭐white segment
$('.wseg').on('click', function () {
	$('.iconlist').removeClass('blackco');
	$('.ui.top.attached.header').removeClass('blackco');
});
//⭐black segment
$('.bseg').on('click', function () {
	$('.iconlist').addClass('blackco');
	$('.ui.top.attached.header').addClass('blackco');
});

function refresh() {
	count = 0
	iconClass = [];
	$('.column > .icon').each(function () {
		iconClass.push($(this).attr('class'));
		count++;
	});

	// ⭐カラム
	count = 0;
	$('.iconlist > .column').each(function () {
		$(this).attr('data-tooltip', iconClass[count]);
		$(this).attr('data-inverted', "");
		$(this).attr('data-position', "top right");
		//重要:コピーされるもの
		//$(this).attr('data-clipboard-text', iconClass[count]);	//クラス名だけ
		$(this).attr('data-clipboard-text', '<i class=\"' + iconClass[count] + '\"></i>'); //Tag + クラス名
		count++;
	});
}