/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import Autolink from '@ckeditor/ckeditor5-link/src/autolink.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle.js';
// import MathType from '@wiris/mathtype-ckeditor5';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
// import WProofreader from '@webspellchecker/wproofreader-ckeditor5/src/wproofreader.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';

class BBSMEditor extends ClassicEditor {}
// export default class BBSMEditor extends ClassicEditor {}

// Plugins to include in the build.
BBSMEditor.builtinPlugins = [
	Alignment,
	AutoImage,
	Autoformat,
	Autolink,
	BlockQuote,
	Bold,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlEmbed,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListStyle,
	// MathType,
	MediaEmbed,
	MediaEmbedToolbar,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	// WProofreader,
	WordCount
];

// Editor configuration.
BBSMEditor.defaultConfig = {
	placeholder: "Write a message here.",
	toolbar: {
		shouldNotGroupWhenFull: true,
		items: [
		  "undo",
		  "redo",
		  "|",
		  "heading",
		  "|",
		  "fontFamily",
		  "fontSize",
		  "|",
		  "bold",
		  "italic",
		  "underline",
		  "fontColor",
		  "fontBackgroundColor",
		  "highlight",
		  "|",
		  "link",
		  "mediaEmbed",
		  //   "imageInsert",
		  "htmlEmbed",
		  "|",
		  "alignment:left",
		  "alignment:center",
		  "alignment:right",
		  "alignment:justify",
		  "|",
		  "numberedList",
		  "bulletedList",
		  "outdent",
		  "indent",
		  "|",
		  "blockQuote",
		  "horizontalLine",
		  "insertTable",
		  "specialCharacters",
		  "|",
		  "removeFormat",
		],
	},
	wordCount: {
		displayWords: true,
		displayCharacters: true
	},
	image: {
	// Configure the available styles.
	styles: ["alignLeft", "alignCenter", "alignRight"],

	// Configure the available image resize options.
	// resizeOptions: [
	//   {
	//     name: "resizeImage:original",
	//     label: "Original",
	//     value: null,
	//   },
	//   {
	//     name: "resizeImage:50",
	//     label: "50%",
	//     value: "50",
	//   },
	//   {
	//     name: "resizeImage:75",
	//     label: "75%",
	//     value: "75",
	//   },
	// ],

	// You need to configure the image toolbar, too, so it shows the new style
	// buttons as well as the resize buttons.
	toolbar: [
		"imageStyle:alignLeft",
		"imageStyle:alignCenter",
		"imageStyle:alignRight",
		"|",
		"resizeImage:50",
		"resizeImage:75",
		"resizeImage:original",
		"|",
		"imageTextAlternative",
		"|",
		"linkImage",
	],
	},
	table: {
	contentToolbar: [
		"tableColumn",
		"tableRow",
		"mergeTableCells",
		"tableCellProperties",
		"tableProperties",
	],
	},
	language: "en"
};

export default BBSMEditor;
