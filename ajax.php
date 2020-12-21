<?php
header("Content-Type: application/json; charset=UTF-8");

$post = file_get_contents('php://input') ;

// var_export($post);
var_dump(json_decode($post)) ;
// print_r($post->{1}) ;

// var_dump($_POST);
?>