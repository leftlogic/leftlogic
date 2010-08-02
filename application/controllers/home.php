<?php
class Home extends MY_Controller {
	function Home() {
    $this->asides = 'event';
		$this->motif = true;
		$this->page = 'home';
		parent::Controller();	
	}
	
	function index() {
		$this->view('home');
	}
}