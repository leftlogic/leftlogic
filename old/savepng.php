<?php
if (get_magic_quotes_gpc()) {
    function undoMagicQuotes($array, $topLevel=true) {
        $newArray = array();
        foreach($array as $key => $value) {
            if (!$topLevel) {
                $key = stripslashes($key);
            }
            if (is_array($value)) {
                $newArray[$key] = undoMagicQuotes($value, false);
            }
            else {
                $newArray[$key] = stripslashes($value);
            }
        }
        return $newArray;
    }
    $_GET = undoMagicQuotes($_GET);
    $_POST = undoMagicQuotes($_POST);
    $_COOKIE = undoMagicQuotes($_COOKIE);
    $_REQUEST = undoMagicQuotes($_REQUEST);
}

$data = preg_replace('/ /', '+', $_POST['data']);
$data = split(',', $data, 2);
$i = imagecreatefromstring(base64_decode($data[1]));
imagesavealpha($i, true);
$url = 'images/generated/' . time() . '.png';
imagepng($i, $url);
header('Location: ' . $url)
?>