<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-GFHS2XP3G3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GFHS2XP3G3');
</script>
<!-- End of Google Analytics -->

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/main.css" hreflang="en">
  <link rel="stylesheet" href="css/pages.css" hreflang="en">
  <link href="https://fonts.googleapis.com/css?family=Barlow:300,300i,400,500,600,700" rel="stylesheet">
  <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous"> -->
  <title>Contact | Alfredos Design</title>
</head>
<body>
  <div class="page">
    <div class="container-fluid">
      <div class="navigation">
        <input type="checkbox" class="navigation_checkbox" id="navi-toggle" />
          
        <label class="navigation_button" for="navi-toggle">
          <span class="navigation_icon">&nbsp;</span>
        </label>
        <div class="logo-container">
          <a class="navbar-brand" href="index" hrefland="en" type="text/html" title=Home>Alfredo</a>
          <p class="logo-phrase">web development</p>
        </div>
        <div class="navigation_background">&nbsp;</div>
        <nav class="navigation_menuNav">
          <ul class="navigation_list">
            <li class="navigation_item"><a class="navigation_link" href="index.html" hreflang="en" type="text/html" rel="alternate" title="Home">Home</a></li>
            <li class="navigation_item"><a class="navigation_link" href="about.html" hreflang="en" type="text/html" rel="alternate" title="About">About</a></li>
            <li class="navigation_item"><a class="navigation_link" href="portfolio.html" hreflang="en" type="text/html" rel="alternate" title="Portfolio">Portfolio</a></li>
            <li class="navigation_item"><a class="navigation_link" href="contact.php" hreflang="en" type="text/html" rel="alternate" title="Contact">Contact</a></li>
            <li class="navigation_item"><a class="navigation_hiddenLinks" target="_blank" href="https://github.com/Alfredoeb9" hreflang="en" type="text/html" rel="alternate" title="GitHub">GitHub</a></li>
            <li class="navigation_item"><a class="navigation_hiddenLinks" target="_blank" href="https://www.linkedin.com/in/alfredo-barillas/" hreflang="en" type="text/html" rel="alternate" title="Linkedin">Linkedin</a></li>
          </ul>
        </nav>
        <div class="collapse navigation_navbarCollapse">
          <ul class="navigation_navBarNav">
            <li class="navigation_socialItem">
              <a class="navigation_socialLink" target="_blank" href="https://github.com/Alfredoeb9" hreflang="en">GitHub</a>
            </li>
            <li class="navigation_socialItem">
              <a class="navigation_socialLink" target="_blank" href="https://www.linkedin.com/in/alfredo-barillas/" hreflang="en">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
      <header id="contact-header">
        <div class="contact-container">
          <div id="contact-phrase">
            <h1 class="contact-main-heading">Contact</h1>
          </div>
        </div>
      </header>
      <section id="form">
        <div id="form_descriptionSection">
          <div class="form_descriptionContainer">
            <h1 id="form_descriptionHeading">Let's Talk</h1>
            <span class="form_descriptionLine"></span>
            <p class="form_description">If you have any questions, comments or concerns please do not hesitate to send me a email. You can send me a email here or email to <span id="email-spec">Alfredo.Barillas@alfredoesdesign.com</span></p>
          </div>
        </div>
        <form class="form_group" method="post" action="contactform.php">
          <?php
            if(isset($_GET{'name'})) {
              $name = $_GET['name'];
              echo ' <input class="input-group" type="text" name="name" placeholder="Full name" value="'.$name.'">';
            } else {
              echo ' <input class="input-group" type="text" name="name" placeholder="Full name">';
            }
            // if(isset($_GET{'mail'})) {
            //   $name = $_GET['mail'];
            //   echo ' <input class="input-group" type="text" name="mail" placeholder="Your e-mail" value="'.$mail.'">';
            // } else {
            //   echo ' <input class="input-group" type="text" name="mail" placeholder="Your e-mail">';
            // }
          ?>
          <!-- <input class="input-group" type="text" name="name" placeholder="Full name" value=""> -->
          <input class="input-group" type="text" name="mail" placeholder="Your e-mail" value="">
          <input class="input-group" type="text" name="subject" placeholder="Subject" value="">
          
          <textarea class="body-group" name="message" placeholder="Message"></textarea>
          <button class="form_button" type="submit" name="submit">Send Mail</button>
        </form>
      </section>
    </div>        
  </div>
  <?php
  // $fullUrl = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

  // if (strpos($fullUrl, "contact=empty") == true) {
  //   echo "<p class='error'>You did not fill in all fields!</p>";
  //   exit();
  // } else if (strpos($fullUrl, "contact=char") == true) {
  //   echo "<p class='error'>Please use valid Characters!</p>";
  //   exit();
  // } else if (strpos($fullUrl, "contact=invalidemail") == true) {
  //   echo "<p class='error'>Pleas enter a valid e-mail!</p>";
  //   exit();
  // } else if (strpos($fullUrl, "contact=mailsend") == true) {
  //   echo "<p class='success'>Your E-mail has been sent, We will contact you shortly</p>";
  //   exit();
  // }

  if(!isset($_GET['contact'])){
    exit();
  } else {
    $contactCheck = $_GET['contact'];

    if($contactCheck == "empty") {
      echo "<p class= 'error'>Please fill in all fields</p>";
      exit();
    } else if($contactCheck == "char") {
      echo "<p class= 'error'>You used invalid characters</p>";
      exit();
    } else if($contactCheck == "invalidemail") {
      echo "<p class= 'error'>You used an invalid email</p>";
      exit();
    } else if($contactCheck == "mailsend") {
      echo "<p class= 'success'>Your E-mail has been sent, We will contact you shortly</p>";
      exit();
    }
  }
  ?>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</body>
</html>