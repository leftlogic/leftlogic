<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class MY_Controller extends Controller {
  var $motif = false;
  var $green = false;
  var $page = '';
  
  function view($page = '', $data = null) {
    $this->header($data);
    $this->load->view($page);
    $this->footer($data);
  }
  
  function header($data) {
    $data['page'] = $this->page;
    $data['motif'] = $this->motif;
    $data['green'] = $this->green;
    $this->load->view('includes/header', $data);
  }
  
  function footer($data) {
    $data['motif'] = $this->motif;    
    $this->load->view('includes/aside_header');
    $this->load->view('includes/asides/asides');
    $this->load->view('includes/footer', $data);    
  }
}
?>