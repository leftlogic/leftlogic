<?php

class Training extends MY_Controller {  
	function Training() {
	  $this->page = 'training';
	  $this->green = true;
    parent::Controller(); 
	}
	
	function index() {
	  $data['asides'] = 'latest-talks';
		$this->view('training', $data);
	}

	function whynode() {
		$data['asides'] = 'latest-talks';
		$this->view('training/whynode', $data);	
	}
	
	function consultancy() {
	  
	}
}