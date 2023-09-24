<?php
if (isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['PHP_AUTH_PW'])) {
    $username = $_SERVER['PHP_AUTH_USER'];
    $password = $_SERVER['PHP_AUTH_PW'];
    
    // Load .htpasswd file and validate the credentials
    $htpasswd = file('.htpasswd', FILE_IGNORE_NEW_LINES);
    foreach ($htpasswd as $line) {
        list($storedUser, $hash) = explode(':', $line, 2);
        if ($username === $storedUser && crypt($password, $hash) === $hash) {
            // Authentication successful
            header('Location: connect.html'); // Redirect to the main page
            exit;
        }
    }
}

// If authentication fails or credentials are not provided, send an authentication request
header('WWW-Authenticate: Basic realm="Restricted Area"');
header('HTTP/1.0 401 Unauthorized');
echo 'Authentication required.';
?>
