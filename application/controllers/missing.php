<?php
class Missing extends MY_Controller {
  function Missing() {
    parent::Controller(); 
    $this->motif = true;
    $this->page = 'missing';
  }
  
  function index($all = false) {
    if (isset($_POST['originalURL'])) {
      $data['originalURL'] = substr($_POST['originalURL'], 1);
    } else {
      $data['originalURL'] = substr($_SERVER['REQUEST_URI'], 1);
    }    
    
    $this->load->helper('file');
    $data['files'] = get_filenames('./images/generated/approved/');
    $data['limit'] = $all ? count($data['files']) : 8;

    $this->view('missing', $data);
  }
}