<?php
class Home extends MY_Controller {
	function Home() {
    $this->asides = 'jsbin';
		$this->motif = true;
		$this->page = 'home';
		parent::Controller();
	}

	function index() {

	  $data['recent'] = array(
	    array('title' => 'Radiohead animation', 'client' => 'DevStars/Radiohead', 'img' => '/images/portfolio/small/radiohead.gif', 'url' => 'http://radiohead.com'),
	    array('title' => 'Google Holiday Card', 'client' => 'Google', 'img' => '/images/portfolio/small/google-maps-xmas.png', 'url' => 'http://googleblog.blogspot.com/2010/12/send-message-of-holiday-cheer-with.html'),
      array('title' => 'iPlayer performance review', 'client' => 'BBC', 'img' => '/images/portfolio/small/iplayer.png'),
      array('title' => 'A Tale of Two Cities', 'client' => 'Nestoria', 'img' => '/images/portfolio/small/nestoria.png', 'url' => 'http://ataleoftwocities.nestoria.co.uk/'),
      array('title' => 'Lucky Voice.home', 'client' => 'Torchbox', 'img' => '/images/portfolio/small/luckyvoice.png', 'url' => 'http://home.luckyvoice.com/')
	  );

	  $data['recent'] = array_slice($data['recent'], 0, 3);

		$this->view('home', $data);
	}
}