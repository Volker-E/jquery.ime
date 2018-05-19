( function ( $ ) {
	'use strict';

	var asRodali = {
		id: 'as-rodali',
		name: 'ৰ\'দালি',
		description: 'Rodali Keyboard',
		date: '2015-07-26',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Gunadeep Chetia, Subhashish Panigrahi',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 4,
		maxKeyLength: 5,
		patterns: [
			[ '([ক-হড়ঢ়য়])্?ৰৰi', '[^a`]', '$1ৃ' ],
			[ 'ৰৰi', '[^a`]', 'ঋ' ],
			[ '(([ক-হড়ঢ়ৰৱয়]))a', '[^a`]', '$1' ],
			[ '([ক-হড়ঢ়ৰৱয়])a', 'a', '$1া' ],
			[ '([ক-হড়ঢ়ৰৱয়])i', '[^a`]', '$1ি' ],
			[ '([ক-হড়ঢ়ৰৱয়])(িi|েe)', '[^a`]', '$1ী' ],
			[ '([ক-হড়ঢ়ৰৱয়])u', '[^a`]', '$1ু' ],
			[ '([ক-হড়ঢ়ৰৱয়])ুu', '[^a`]', '$1ূ' ],
			[ '([ক-হড়ঢ়ৰৱয়])o', '[^a`]', '$1ো' ],
			[ '([ক-হড়ঢ়ৰৱয়])e', '[^a`]', '$1ে' ],
			[ '([ক-হড়ঢ়ৰৱয়])োi', '[^a`]', '$1ৈ' ],
			[ '([ক-হড়ঢ়ৰৱয়])োu', '[^a`]', '$1ৌ' ],
			[ '([কঙলষস])(k|K)', '[^a`]', '$1্ক' ],
			[ '([গঙদল])(g)', '[^a`]', '$1্গ' ],
			[ '([চশ])c', '[^a`]', '$1্চ' ],
			[ '([জঞব])j', '[^a`]', '$1্জ' ],
			[ 'নj', '[^a`]', 'ঞ্জ' ],
			[ '([কটণনপলষস])T', '[^a`]', '$1্ট' ],
			[ '([ডণনল])D', '[^a`]', '$1্ড' ],
			[ '([গষহ])N', '[^a`]', '$1্ণ' ],
			[ '([কতনপশসহ])t', '[^a`]', '$1্ত' ],
			[ '([গদনব])d', '[^a`]', '$1্দ' ],
			[ '([গঘণতধনপমশসহ])n', '[^a`]', '$1্ন' ],
			[ '([পমলষস])p', '[^a`]', '$1্প' ],
			[ '([মস])f', '[^a`]', '$1্ফ' ],
			[ '([বমল])b', '[^a`]', '$1্ব' ],
			[ '([কগঙটণতদধনমলশষসহ])m', '[^a`]', '$1্ম' ],
			[ '([ক-ঘচ-ঝট-যলশ-হড়ঢ়য়])r', '[^a`]', '$1্ৰ' ],
			[ '([কগপ-বমলশসহ])l', '[^a`]', '$1্ল' ],
			[ '([কনপ])s', '[^a`]', '$1্স' ],
			[ '([ক-হড়ঢ়য়])(w|b|v)', '[^a`]', '$1্ব' ],
			[ '([ক-হড়ঢ়য়])y', '[^a`]', '$1্য' ],
			[ 'নc', '[^a`]', 'ঞ্চ' ],
			[ 'ৰk', 'r', 'ৰ্ক' ],
			[ 'ৰg', 'r', 'ৰ্গ' ],
			[ 'ৰc', 'r', 'ৰ্চ' ],
			[ 'ৰj', 'r', 'ৰ্জ' ],
			[ 'ৰT', 'r', 'ৰ্ট' ],
			[ 'ৰD', 'r', 'ৰ্ড' ],
			[ 'ৰN', 'r', 'ৰ্ণ' ],
			[ 'ৰt', 'r', 'ৰ্ত' ],
			[ 'ৰd', 'r', 'ৰ্দ' ],
			[ 'ৰn', 'r', 'ৰ্ন' ],
			[ 'ৰp', 'r', 'ৰ্প' ],
			[ 'ৰf', 'r', 'ৰ্ফ' ],
			[ 'ৰb', 'r', 'ৰ্ব' ],
			[ 'ৰv', 'r', 'ৰ্ভ' ],
			[ 'ৰm', 'r', 'ৰ্ম' ],
			[ 'ৰz', 'r', 'ৰ্য' ],
			[ 'ৰl', 'r', 'ৰ্ল' ],
			[ 'ৰx', 'r', 'ৰ্শ' ],
			[ 'ৰS', 'r', 'ৰ্ষ' ],
			[ 'ৰs', 'r', 'ৰ্স' ],
			[ 'ৰh', 'r', 'ৰ্হ' ],
			[ 'ৰR', 'r', 'ৰ্ড়' ],
			[ 'ৰy', 'r', 'ৰ্য়' ],
			[ 'ত~', 't', 'ৎ' ],
			[ 'অa', 'a', 'আ' ],
			[ 'কh', 'k', 'খ' ],
			[ 'গh', 'g', 'ঘ' ],
			[ 'ণg', 'N', 'ঙ' ],
			[ 'চh', 'c', 'ছ' ],
			[ 'জh', 'j', 'ঝ' ],
			[ 'নG', 'n', 'ঞ' ],
			[ 'টh', 'T', 'ঠ' ],
			[ 'ডh', 'D', 'ঢ' ],
			[ 'তh', 't', 'থ' ],
			[ 'দh', 'd', 'ধ' ],
			[ 'পh', 'p', 'ফ' ],
			[ 'বh', 'b', 'ভ' ],
			[ 'সh', 's', 'শ' ],
			[ 'ড়h', 'R', 'ঢ়' ],
			[ 'নg', 'n', 'ং' ],
			[ 'ওi', 'o', 'ঐ' ],
			[ 'ওu', 'o', 'ঔ' ],
			[ 'ইi', 'i', 'ঈ' ],
			[ 'উu', 'u', 'ঊ' ],
			[ '([kK])', 'ক' ],
			[ 'g', 'গ' ],
			[ 'G', 'জ্ঞ' ],
			[ '(c|C)', 'চ' ],
			[ '(j|J)', 'জ' ],
			[ 'T', 'ট' ],
			[ 'D', 'ড' ],
			[ 'N', 'ণ' ],
			[ 't', 'ত' ],
			[ 'd', 'দ' ],
			[ 'n', 'ন' ],
			[ '(p|P)', 'প' ],
			[ 'f', 'ফ' ],
			[ '(b|B)', 'ব' ],
			[ '(v|V)', 'ৱ' ],
			[ '(m|M)', 'ম' ],
			[ 'z|Z', 'য' ],
			[ 'r', 'ৰ' ],
			[ '(l|L)', 'ল' ],
			[ 'S', 'ষ' ],
			[ 's', 'স' ],
			[ 'h', 'হ' ],
			[ 'H', 'ঃ' ],
			[ 'R', 'ড়' ],
			[ '(w|W)', 'ৱ' ],
			[ 'x', 'শ' ],
			[ 'X', 'ক্ষ' ],
			[ 'y', 'য়' ],
			[ 'a', 'অ' ],
			[ 'i', 'ই' ],
			[ 'u', 'উ' ],
			[ 'e', 'এ' ],
			[ 'o', 'ও' ],
			[ '0', '০' ],
			[ '1', '১' ],
			[ '2', '২' ],
			[ '3', '৩' ],
			[ '4', '৪' ],
			[ '5', '৫' ],
			[ '6', '৬' ],
			[ '7', '৭' ],
			[ '8', '৮' ],
			[ '9', '৯' ],
			[ '<', 'ৃ' ],
			[ '`', '্‌' ],
			[ '\\^', 'ঁ' ],
			[ '\\.', '।' ],
			[ '~', '্' ],
			[ '&', '°' ],
			[ '\\*', '৺' ]
		]
	};

	$.ime.register( asRodali );
}( jQuery ) );
