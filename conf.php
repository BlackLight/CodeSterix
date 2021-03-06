<?php

/* Database */
const DB_HOST = "localhost";
const DB_PORT = 3306;
const DB_USER = "root";
const DB_NAME = "tonlist";

/* Google API */

const TONLIST_PATH = "/srv/http/CodeSterix";
const TONLIST_URI = "/CodeSterix";
const CLIENT_ID = "984540381166-u3bv62sb6ggppljn77dsue93m9b4fl3j.apps.googleusercontent.com";
const LOGIN_URI = TONLIST_URI . "/login.php";
const REDIRECT_URI = "http://localhost/" . TONLIST_URI . "/login.php";

require_once TONLIST_PATH . "/conf_secret.php";
require_once TONLIST_PATH . "/vendor/apache/log4php/src/main/php/Logger.php";
Logger::configure(TONLIST_PATH . "/log_config.xml");

?>
