<?php

class Tour extends MY_Controller {  
	function Tour() {
	  $this->page = 'tour';
	  
    $this->asides = 'tour';
    parent::Controller();
	}
	
	function index() {
		$this->view('tour');
	}
}