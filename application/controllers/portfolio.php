<?php

class Portfolio extends MY_Controller {  
	function Portfolio() {
	  $this->page = 'portfolio';
	  
    // $this->asides = 'portfolio';
    parent::Controller();
	}
	
	function index() {
		$this->view('portfolio');
	}
	
	function testimonials() {
	  $this->view('testimonials');
	}
	
	function clientlist() {
	  $this->view('clientlist');
	}
}