<?php

class Projects extends MY_Controller {  
	function Projects() {
	  $this->page = 'projects';
	  
	  $this->asides = 'projects';
    parent::Controller();
	}
	
	function index() {
		$this->view('projects');	  
	}
	
	function entityLookup() {
	  $this->view('projects/entitylookup');
  }
	
	function microformats_bookmarklet() {
	  $this->view('projects/microformatsbookmarklet');
	}
}