<!DOCTYPE html>
<html lang="en" id="leftlogic">
<head>
  <meta charset="utf-8" />
  <title>Left Logic - Specialist Web Development</title>
  <link rel="icon" type="image/png" href="/images/favicon.png" />
  <!--[if lte IE 8]><script>/*@cc_on'abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video'.replace(/\w+/g,function(n){document.createElement(n)})@*/</script><![endif]-->
  <link rel="stylesheet" href="/assets/css/leftlogic.css" />
  <!--[if IE 6]><link rel="stylesheet" href="/assets/css/ie6.css" /><![endif]-->
</head>
<body<?php echo $class ? ' class="' . $class . '"' : ''; ?>>
<div id="wrapper">
  <div class="main">
    <nav>
      <ul>
        <li><a href="<?=base_url()?>/"<?php echo $page == 'home' ? ' class="selected"' : ''; ?>>Home</a></li>
        <li><a href="<?=base_url()?>/training">Training</a></li>
        <li><a href="<?=base_url()?>/projects">Projects</a></li>
        <!-- <li><a href="<?=base_url()?>/tour">Workshop Tour</a></li> -->
        <!-- <li><a href="<?=base_url()?>/portfolio">Portfolio</a></li> -->
        <!-- <li><a href="<?=base_url()?>/consultancy">Consultancy</a></li> -->
        <li><a href="<?=base_url()?>/contact"<?php echo $page == 'hire' ? ' class="selected"' : ''; ?>>Contact</a></li>
      </ul>
    </nav>
    
    
