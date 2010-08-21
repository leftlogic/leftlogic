<?php
class Missing extends MY_Controller {
  function Missing() {
    parent::Controller(); 
    $this->motif = true;
    $this->page = 'missing';
  }
  
  function index() {
    $data['originalURL'] = substr($_POST['originalURL'], 1);
    
    $this->load->helper('file');
    $data['files'] = get_filenames('./images/generated/');

    $this->view('missing', $data);
  }
}