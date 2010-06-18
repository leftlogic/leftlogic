<?php
class Home extends MY_Controller {
	function Home() {
		parent::Controller();	
		$this->motif = true;
		$this->page = 'home';
	}
	
	function index() {
		$this->view('home');
	}
}