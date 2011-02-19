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
      if (is_array($user->locations)) {
  	    foreach ($user->locations as $location) {
  	      array_push($markersData, $location);
  	    }	      
      }
	  }
	  
	  $data['markersData'] = json_encode($markersData);
	  
		$this->view('tour', $data);
	}
	
	function signup() {
	  
	  $places = array(
	    'birmingham' => array(52.4829614, -1.893592),
	    'brighton' => array(50.819522, -0.13642),
	    'bristol' => array(51.4553129, -2.5919023),
	    'dundee' => array(56.4614282, -2.9681109),
	    'london' => array(51.5001524, -0.1262362),
	    'manchester' => array(53.4807125, -2.2343765),
	    'nottingham' => array(52.9551147, -1.1491718)
	  );
	  
	  $this->load->helper('file');
	  $this->load->helper('url');
    
    $data['email'] = $this->input->post('email');
    $data['can_provide_venue']  = $this->input->post('venue') ? true : false;
    $data['workshop'] = $this->input->post('workshop');
    $data['locations'] = json_decode($this->input->post('locations'));
    $preselectedLocations = $this->input->post('preselected');

    if (!$data['locations']) {
      $data['locations'] = array();
    }


    if (is_array($preselectedLocations)) {
      foreach ($preselectedLocations as $location) {
        array_push($data['locations'], $places[$location]);
      }
    }
    
    if ($this->input->post('action') == 'send') { 
      if (write_file('./data/tour-2011.json', ",\n" . json_encode($data), 'a')) {
         $data['server_message'] = '<p class="success">Thank you, your interest has been saved and we\'ll be in touch as soon as tickets go live.</p>';
         // redirect('signup', 'location');
      } else {
         // fail
         echo '<!-- unable to write file -->';
      }
    } 
    
    $this->view('tour-thanks');
	}
}
