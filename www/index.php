<?php

$supp_langs = array('de', 'fr'); // the first language is default
$redirect_lang = $supp_langs[0];

$languages = explode(',',$_SERVER['HTTP_ACCEPT_LANGUAGE']);

foreach($languages as $lang){
    $lang_prefix = substr($lang, 0, 2);
    if(in_array($lang_prefix, $supp_langs)) {
		$redirect_lang = $lang_prefix;
		break; 
    }
}

header("Location: " . $redirect_lang . "/index.html");
?>
