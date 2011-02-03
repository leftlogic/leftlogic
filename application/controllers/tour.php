<?php

class Tour extends MY_Controller {  
	function Tour() {
	  $this->page = 'tour';
	  
    $this->asides = array('tour', 'tour-map-help');
    $this->hideDefault = true;
    parent::Controller();
	}
	
	function index() {
	  $this->load->helper('file');
	  $markersData = array();
	  
	  $raw_json = read_file('./data/tour-2011.json');
	  $raw_json = '[' . preg_replace('/^,/', '', $raw_json) . ']';
	  
	  $json = json_decode($raw_json);
	  foreach ($json as $user) {
	    foreach (json_decode($user->locations) as $location) {
	      array_push($markersData, $location);
	    }
	  }
	  
	  $data['markersData'] = json_encode($markersData);
	  
		$this->view('tour', $data);
	}
	
	function signup() {
	  $this->load->helper('file');
	  $this->load->helper('url');
    
    $data['email'] = $this->input->post('email');
    $data['can_provide_venue']  = $this->input->post('venue') ? true : false;
    $data['workshop'] = $this->input->post('workshop');
    $data['locations'] = $this->input->post('locations');
    $data['preselected-locations'] = $this->input->post('preselected');
    
    if ($this->input->post('action') == 'send') { 
      if (write_file('./data/tour-2011.json', ",\n" . json_encode($data), 'a')) {
         $data['server_message'] = '<p class="success">Thank you, your interest has been saved and we\'ll be in touch as soon as tickets go live.</p>';
         redirect('signup', 'location');
      } else {
         // fail
         echo '<!-- unable to write file -->';
      }
    } 
    
    $this->view('tour-thanks');
	}
}