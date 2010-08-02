<?php
class Missing extends MY_Controller {
	function Missing() {
		parent::Controller();	
		$this->motif = true;
		$this->page = '404';
	}
	
	function index() {
		$this->view('404');
	}
}