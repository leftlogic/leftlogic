<?php

class Training extends MY_Controller {  
	function Training() {
	  $this->page = 'training';
	  $this->green = true;
    parent::Controller(); 
	}
	
	function index() {
		$this->view('training');	  
	}
}